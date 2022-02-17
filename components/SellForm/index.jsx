import React, { Fragment, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import Button from '../Button';
import styles from './sellform.module.scss';
import Select from '../SelectComponent';
import { getMarcaModelo, getYears, getVersions, submitFormAndGetCotization, addContact } from "../../utils/fetches";
import { MIN_TEXT_SEARCH_LENGTH } from '../../utils/constants';
import { Formik } from 'formik';
import { orderBy, set } from 'lodash';
import { mixed, object, number, string } from 'yup';
import CryptoJS from 'crypto-js'
import { useRouter } from "next/router"
import { useSpring, animated, useTransition, config } from "react-spring";
import { checkYear, checkZone, getCampania, getSourceType, saveCotization, pushCustomState } from '../../utils/helpers';



const whereOptions = [
  { value: 'Por un conocido / amigo.', label: 'Por un conocido / amigo.' },
  { value: 'Buscando en internet.', label: 'Buscando en internet.' },
  { value: 'Redes sociales.', label: 'Redes sociales.' },
  { value: 'Prensa / TV', label: 'Prensa / TV' },
  { value: 'Otro', label: 'Otro' },
]

const SellForm = ({ step, setStep, setOverlayBackground, zonas, referer, COUNTRY_CODE }) => {
  const [marcaModeloOptions, setMarcaModeloOption] = useState([])
  const [isMarcaModeloLoading, setMarcaModeloLoading] = useState(false)
  const [marcaModeloText, setMarcaModeloText] = useState('')
  const [isYearLoading, setYearLoading] = useState(false)
  const [yearOptions, setYearOptions] = useState([])
  const [yearDisabled, setYearDisabled] = useState(true);
  const [kmsDisabled, setKmsDisabled] = useState(true)
  const [versionDisabled, setVersionDisabled] = useState(true);
  const [versionOptions, setVersionOptions] = useState([])
  const [versionLoading, setVersionLoading] = useState(false);
  const [userName, setUserName] = useState()
  const [formData, setFormData] = useState(
    {
      brand: '',
      model: '',
      marcaModelo: '',
      idMarca: '',
      idModelo: '',
      idVersion: '',
      year: '',
      kms: '',
      version: '',
      name: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
    }
  )
  const router = useRouter()

  function parseMarcaModeloResponse(data) {
    if (!data) return []
    return data.map((row) => ({
      value: row.idMarca,
      label: `${row.nombreMarca} ${row.nombreModelo}`,
      nombreModelo: row.nombreModelo,
      nombreMarca: row.nombreMarca
    }))
  }
  function parseYearResponse(data) {
    if (!data) return [];
    const dataOrder = orderBy(data, ['anio'], ['desc'])
    return dataOrder.map(row => ({
      value: row.anio,
      label: row.anio,
      idMarca: row.idMarca,
      idModelo: row.idModelo
    }))
  }
  function parseVersionsResponse(data) {
    if (!data) return [];
    return data.map(row => ({
      label: row.nombre,
      value: row.id,
    }))
  }

  useEffect(() => {
    async function searchWithText() {
      try {
        setMarcaModeloLoading(true)
        const { data } = await getMarcaModelo(marcaModeloText, COUNTRY_CODE);
        setMarcaModeloOption(parseMarcaModeloResponse(data))
        setMarcaModeloLoading(false)
        setYearDisabled(false)
      } catch (e) {
        setMarcaModeloLoading(false)
        console.log(e)
      }
    }

    if (marcaModeloText.length < MIN_TEXT_SEARCH_LENGTH) { return; } else {
      searchWithText()
    }
  }, [marcaModeloText])

  const handleMarcaModeloInputChange = (text,) => setMarcaModeloText(text)
  const handleMarcaModeloOnChange = async (option) => {
    try {
      setYearLoading(true);
      const { data } = await getYears(option.value, option.nombreModelo)
      setYearOptions(parseYearResponse(data))
      setYearLoading(false);
    } catch (e) {
      setYearLoading(false);
      console.log(e)
    }
  }
  const handleYearChange = async (option) => {
    if (option) {
      setKmsDisabled(false)
      setVersionDisabled(false)
      setVersionLoading(true)
      const { data } = await getVersions(option.idModelo, option.value)
      setVersionOptions(parseVersionsResponse(data))
      setVersionLoading(false)
    }
  }

  const getCurrentYear = () => {
    let currentDate = new Date()
    return currentDate.getFullYear()
  }

  const getValidYeanInput = (typedYear) => {
    let currentYear = getCurrentYear()
    return typedYear > currentYear ? currentYear : typedYear
  }

  const handleSubmitFirstStep = (values, actions) => {
    setFormData(values);
    setStep(step + 1)
  }
  const handleSubmitPersonalDataStep = async (values, actions) => {
    const carAndContactData = {
      ...formData,
      ...values,
      name: `${values.name} ${values.lastName}`,
      country_code: COUNTRY_CODE,
    }
    try {
      checkZone(values.location, zonas)
      checkYear(carAndContactData.year)
      const dealSource = getSourceType(router.query, referer)
      carAndContactData.hs_analytics_source = dealSource
      carAndContactData.campania = getCampania(router.query)
      setOverlayBackground(true)
      const { data } = await submitFormAndGetCotization(carAndContactData)
      const query = CryptoJS.AES.encrypt(JSON.stringify(data.data), 'cotizacion').toString()
      saveCotization(query)
      router.push({
        pathname: '/cotizacion',
        query: { paso: 'paso-1' }
      }, undefined, {shallow: true})
    } catch (error) {
      setOverlayBackground(false)
      if (error.message.indexOf('cobertura') > -1) {
        router.replace({ pathname: '/', query: { cotizacion: 'fueradecobertura' } })
        setStep('error-cobertura')
        carAndContactData.noGeneroNegocio = 'fuera_de_zona' // para propiedad de hubspot
        addContact(carAndContactData)
        return setUserName(values.name)
      }
      if (error.message.indexOf('year') > -1) {
        router.replace({ pathname: '/', query: { cotizacion: 'aniofueradecobertura' } })
        setStep('error-year')
        carAndContactData.noGeneroNegocio = 'auto_antiguo' // para propiedad de hubspot
        addContact(carAndContactData)
        return setUserName(values.name)
      }
      console.log('Ocurrió un error en la cotización')
      console.log(error)
    }
  }
  const handleBack = async () => {
    await setStep(step - 1);
  }
  const validationSchema = [
    object().shape({
      marcaModelo: mixed().required('Selecciona una marca y modelo.'),
      year: mixed().required('Selecciona un año.'),
      kms: number().max(150000, 'Solo recibimos vehículos con menos de 150.000kms').required('Completa este dato.'),
      version: mixed().required('Selecciona una versión.')
    }),
    object().shape({
      name: string("Solo letras.")
        .ensure()
        .required("Necesitamos tu nombre.")
        .min(2, "Muy corto."),
      lastName: string("Solo letras.")
        .ensure()
        .required("Necesitamos tu apellido.")
        .min(2, "Muy corto."),
      email: mixed()
        .test('isValidEmail',
          "Ingrese un email válido.",
          value => /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(value)
        )
        .required("Ingresa tu email."),
      location: mixed()
        .required("¿De dónde eres?"),
      phone: number("Ingresa solo números")
        .positive()
        .min(4, "Tu número debe ser más largo")
        .required("Ingresa tu teléfono."),
    })
  ]
  const initialValues = [
    {
      brand: formData.brand,
      model: formData.model,
      marcaModelo: formData.marcaModelo,
      idMarca: formData.idMarca,
      idModelo: formData.idModelo,
      idVersion: formData.idVersion,
      year: formData.year,
      kms: formData.kms,
      version: formData.version
    },
    {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
    }
  ]

  const renderMask = ()=>{
    const masks = {
      'ar': '+54 9 nnn nnnn nnnn',
      'uy': '+598 nnnn nnnn',
      'mx': '+52 nnn nnn nnnn',
      'cl': '+56 9 nnnn nnnn'
    }
    return masks[COUNTRY_CODE]
  }

  const renderForm = (handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue) => {
    switch (step) {
      case 0:
        history.pushState(null, document.title, window.location.origin)
        return (
          <Fragment>
            <form className={styles['fields--desktop']} onSubmit={handleSubmit}>
              <div className={styles.form__row}>
                <div className='form-item'>
                  <Select
                    onBlur={handleBlur}
                    name='marcaModelo'
                    options={marcaModeloOptions}
                    large
                    placeholder={formData.marcaModelo ? formData.marcaModelo : 'Marca y modelo'}
                    onInputChange={handleMarcaModeloInputChange}
                    onChange={(option) => {
                      handleMarcaModeloOnChange(option)
                      setFieldValue('marcaModelo', `${option.nombreMarca} ${option.nombreModelo}`)
                      setFieldValue('brand', option.nombreMarca)
                      setFieldValue('model', option.nombreModelo)
                      setFieldValue('idMarca', option.value)
                      }
                    }
                    isLoading={isMarcaModeloLoading}
                    renderNoOptionMessage={({ inputValue }) => inputValue.length > MIN_TEXT_SEARCH_LENGTH ? 'No se encontraron autos' : 'Escribe...'}
                  />
                  {errors.marcaModelo && touched.marcaModelo && (
                    <div className="form-error">
                      {errors.marcaModelo}
                    </div>
                  )}
                </div>
                <div className='form-item'>
                  <Select
                    onBlur={handleBlur}
                    name="year"
                    pattern="^-?[0-9]\d*\.?\d*$"
                    options={yearOptions}
                    placeholder={formData.year ? formData.year : 'Año'}
                    isLoading={isYearLoading}
                    onChange={(option) => {
                      handleYearChange(option)
                      setFieldValue('year', getValidYeanInput(option.value))
                      setFieldValue('idModelo', option.idModelo)
                    }}
                    disabled={yearDisabled}
                    renderNoOptionMessage={() => 'Solamente recibimos vehículos que no superen los 10 años de antigüedad'}

                  />
                  {errors.year && touched.year && (
                    <div className="form-error">
                      {errors.year}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.form__row}>
                <div className='form-item'>
                  <input
                    onBlur={handleBlur}
                    name="kms"
                    type="text"
                    placeholder="Kms"
                    inputMode="numeric"
                    className={styles.kms__input}
                    onChange={handleChange}
                    disabled={kmsDisabled} />
                  {errors.kms && touched.kms && (
                    <div className="form-error">
                      {errors.kms}
                    </div>
                  )}
                </div>
                <div className='form-item'>
                  <Select
                    onBlur={handleBlur}
                    name="version"
                    onChange={(option) => {
                      setFieldValue('version', option.label)
                      setFieldValue('idVersion', option.value)
                    }}
                    options={versionOptions}
                    isLoading={versionLoading}
                    disabled={versionDisabled}
                    large
                    placeholder="Versión" />
                  {errors.version && touched.version && (
                    <div className="form-error">
                      {errors.version}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.submit__button}>
                <Button type="submit" primary>Continuar</Button>
              </div>
            </form>
            <form className={styles['fields--mobile']} onSubmit={handleSubmit}>
              <div className={styles.form__row}>
                <div className='form-item'>
                  <Select
                    onBlur={handleBlur}
                    options={marcaModeloOptions}
                    name='marcaModelo'
                    large
                    placeholder={formData.marcaModelo ? formData.marcaModelo : 'Marca y modelo'}
                    onInputChange={handleMarcaModeloInputChange}
                    onChange={(option) => {
                      handleMarcaModeloOnChange(option)
                      setFieldValue('marcaModelo', `${option.nombreMarca} ${option.nombreModelo}`)
                      setFieldValue('brand', option.nombreMarca)
                      setFieldValue('model', option.nombreModelo)
                      setFieldValue('idMarca', option.value)

                    }}
                    isLoading={isMarcaModeloLoading}
                    renderNoOptionMessage={({ inputValue }) => inputValue.length > MIN_TEXT_SEARCH_LENGTH ? 'No se encontraron autos' : 'Escribe...'} />
                  {errors.marcaModelo && touched.marcaModelo && (
                    <div className="form-error">
                      {errors.marcaModelo}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.form__row}>
                <div className='form-item'>
                  <Select
                    onBlur={handleBlur}
                    options={yearOptions}
                    placeholder={formData.year ? formData.year : 'Año'}
                    isLoading={isYearLoading}
                    onChange={(option) => {
                      handleYearChange(option)
                      setFieldValue('year', getValidYeanInput(option.value))
                      setFieldValue('idModelo', option.idModelo)
                    }}
                    disabled={yearDisabled}
                    renderNoOptionMessage={() => 'No se encontraron años para este vehículo'} />
                  {errors.year && touched.year && (
                    <div className="form-error">
                      {errors.year}
                    </div>
                  )}
                </div>
                <div className='form-item'>
                  <input
                    onBlur={handleBlur}
                    name="kms"
                    className={styles.kms__input}
                    type="text"
                    placeholder="Kms"
                    inputMode="numeric"
                    onChange={handleChange}
                    disabled={kmsDisabled} />
                  {errors.kms && touched.kms && (
                    <div className="form-error">
                      {errors.kms}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.form__row}>
                <div className='form-item'>
                  <Select
                    name="version"
                    onChange={(option) => {
                      setFieldValue('version', option.label)
                      setFieldValue('idVersion', option.value)
                    }}
                    onBlur={handleBlur}
                    options={versionOptions}
                    isLoading={versionLoading}
                    disabled={versionDisabled}
                    large
                    placeholder="Versión" />
                  {errors.version && touched.version && (
                    <div className="form-error">
                      {errors.version}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.submit__button}>
                <Button type="submit" primary>Continuar</Button>
              </div>
            </form>
          </Fragment>
        )
      case 1:
        // pushCustomState(window.location.origin + '/vender')
        return (<form className={styles['personal-data__form']} onSubmit={handleSubmit}>
          <div className={styles.form__row} >
            <div className={styles['personal-data__form-item']}>
              <input placeholder="Nombre" name="name" onChange={handleChange} onBlur={handleBlur} />
              {errors.name && touched.name && (
                <div className="form-error">
                  {errors.name}
                </div>
              )}
            </div>
            <div className={styles['personal-data__form-item']}>
              <input placeholder="Apellido" name="lastName" onChange={handleChange} onBlur={handleBlur} />
              {errors.lastName && touched.lastName && (
                <div className="form-error">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles['personal-data__form-item']}>
              <input type="email" placeholder="Email" name="email" onChange={handleChange} onBlur={handleBlur} />
              {errors.email && touched.email && (
                <div className="form-error">
                  {errors.email}
                </div>
              )}
            </div>
            <div className={styles['personal-data__form-item']}>
              <InputMask
                formatChars={{
                  'n': '[0-9]',
                  'a': '[A-Za-z]',
                  '*': '[A-Za-z0-9]'
                }}
                mask={renderMask()}
                maskChar=" "
                placeholder="Número WhatsApp"
                name="phone"
                inputMode="numeric"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.phone && touched.phone && (
                <div className="form-error">
                  {errors.phone}
                </div>
              )}
            </div>
          </div>
          <div className={styles.form__row}>
            <div className="form-item">
              <Select
                onBlur={handleBlur}
                name="location"
                options={zonas}
                large
                placeholder="Seleccione su localidad"
                onChange={(option) => setFieldValue('location', option.value)}
              />
              {errors.location && touched.location && (
                <div className="form-error">
                  {errors.location}
                </div>
              )}
            </div>

          </div>
          <p className={styles.terms}>Al enviar este formulario, usted acepta los <a href="/terminos-y-condiciones" target="__blank">Términos de Servicio</a> y la <a href="/terminos-y-condiciones" target="__blank">Política de Privacidad de Cárbula</a>.</p>
          <div className={styles.buttons__container}>
            <Button type="button" link onClick={handleBack}>Volver</Button>
            <Button overlayEffect type="submit" primary>Cotizar</Button>
          </div>
        </form>)
      default:
        break;
    }
  }

  const formikForms = {
    0: <Fragment key={0}>
      <Formik
        enableReinitialize
        initialValues={initialValues[step]}
        onSubmit={handleSubmitFirstStep}
        validationSchema={validationSchema[step]}>
        {({ handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue }) => (
          renderForm(handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue)
        )}
      </Formik>
    </Fragment>,
    1: <Formik
      key={1}
      initialValues={initialValues[step]}
      onSubmit={handleSubmitPersonalDataStep}
      validationSchema={validationSchema[step]}>
      {({ handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue }) => (
        renderForm(handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue)
      )}
    </Formik>,
    'error-cobertura': <div>
      <p>Hola {userName},</p>
      <br />
      <p>Gracias por utilizar nuestra plataforma.</p><br />
      <p>Lamentablemente, por el momento no estamos operando en su zona; esperamos poder hacerlo en el corto plazo.</p><br />
      <p>Si lo podemos ayudar en alguna otra cosa, no deje de avisarnos a <a href="mailto:hola@carbula.cl">hola@carbula.cl</a> </p><br />
      <p>¡Que esté muy bien!</p><br />
      <p>El equipo de <b>Cárbula</b>.</p><br />
      <Button primary onClick={() => setStep(0)}>Entendido</Button>
    </div>,
    'error-year': <div>
      <p>Estimado {userName},</p>
      <br />
      <p>Por el momento <b>no</b> estamos trabajando con vehículos que tengan más de 10 años de antigüedad. </p>
      <p>Gracias por la visita :)</p>
    </div>
  }
  const sellformTransition = useTransition(step, {
    key: item => item,
    initial: { opacity: 0, transform: `rotateY(29deg) rotateX(29deg)` },
    from: { opacity: 0, transform: `translateX(0px) rotateY(0deg) rotateX(0deg)` },
    enter: { opacity: 1, transform: 'translateX(0px) rotateY(0deg) rotateX(0deg)' },
    leave: { opacity: 0, transform: 'translateX(-500px) rotateY(0deg) rotateX(0deg)' },
    delay: 0,
    config: config.molasses
  })

  return (
    <div className={styles.sellform__container}>
      {sellformTransition((style, item, t, i) => (
        <animated.div style={style}>
          <div className={styles.sellform__card}>
            {formikForms[step]}
          </div>
        </animated.div>
      ))
      }
    </div >
  )
}
export default SellForm;