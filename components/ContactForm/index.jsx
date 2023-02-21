import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import Button from '../Button';
import styles from './contactform.module.scss';
import Select from '../SelectComponent';
import { getZonas, addContact } from "../../utils/fetches";
import { Formik } from 'formik';
import { mixed, object, number, string, isSchema } from 'yup'
import { useTransition, config } from "react-spring"
import { globalValidationData } from '../../utils/helpers'

const whereOptions = [
  { value: 'Por un conocido / amigo.', label: 'Por un conocido / amigo.' },
  { value: 'Buscando en internet.', label: 'Buscando en internet.' },
  { value: 'Redes sociales.', label: 'Redes sociales.' },
  { value: 'Prensa / TV', label: 'Prensa / TV' },
  { value: 'Otro', label: 'Otro' },
]

const ContactForm = ({ COUNTRY_CODE, zonas }) => {
  const { t } = useTranslation('SellForm')
  const step = 1
  // const zonas = getZonas(COUNTRY_CODE)
  const [visitName, setVisitName] = useState('')
  const [visitLastName, setVisitLastName] = useState('')
  const [visitEmail, setVisitEmail] = useState('')
  const [visitPhone, setVisitPhone] = useState('')
  const [visitLocation, setVisitLocation] = useState('')
  const [visitNewsletter, setVisitNewsletter] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [formData, setFormData] = useState(
    {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      newsletter: '',
    }
  )
  const handleSubmit = () => {
    try{
      history.pushState('datos_enviados_correctamente')
    } catch(e){
      console.log("Error: ", e)
    }
  }

  const handleSubmitOK = () => {
    try{
      const currentValues = {
        name: visitName,
        lastName: visitLastName,
        email: visitEmail,
        phone: visitPhone,
        location: visitLocation,
        newsletter: visitNewsletter,
      }
      setFormData(currentValues)
      addContact(currentValues)
      alert("Datos enviados correctamente.")
    }
    catch(err){
      console.log("ERROR al guardar contacto: ", err)
      alert("Se ha producido un error, por favor intente más tarde.")
    }
  }

  const handleBack = async () => {
    await setStep(step - 1);
  }

  const setLocationValue = (selectedLocation) => {
    setVisitLocation(selectedLocation)
  }

  const checkData = () => {
    if (
      visitName != '' &&
      visitLastName != '' &&
      visitEmail != '' &&
      visitPhone != '' &&
      visitLocation != ''
      ) {
        setBtnDisabled(false)
      } else{
        setBtnDisabled(true)
      }
  }

  const validationSchema = [
    0,
    object().shape({
      name: string(t('inNombreInstrucciones'))
        .ensure()
        .required(t('inNombreReq'))
        .min(2, t('inNombreMuyCorto')),
      lastName: string(t('inApellidoInstrucciones'))
        .ensure()
        .required(t('inApellidoReq'))
        .min(2, t('inApellidoMuyCorto')),
      email: mixed()
        .test('isValidEmail',
          t('inEmailInvalido'),
          value => /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(value)
        )
        .required(t('inEmailReq')),
      location: mixed()
        .required(t('inLocalidadReq')),
      phone: number(t('inNumCelInstrucciones'))
        .positive()
        .min(globalValidationData[COUNTRY_CODE].phoneMinNumber, t('inNumCelMuyCorto'))
        .max(globalValidationData[COUNTRY_CODE].phoneMaxNumber, t('inNumCelMuyLargo'))
        .required(t('inNumCelReq')),
    })
  ]
  const initialValues = [
    {},
    {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      newsletter: formData.newsletter,
    }
  ]

  const renderForm = (handleSubmit, handleChange, handleBlur, errors, values, touched) => {
    switch (step) {
      case 0:
        return (<Fragment></Fragment>)
      case 1:
        // history.pushState(TRACKING_URLS.datos_del_usuario.data, TRACKING_URLS.datos_del_usuario.data, TRACKING_URLS.datos_del_usuario.url)
        return (<form className={styles['personal-data__form']} onSubmit={handleSubmit}>
          <div className={styles.form__row} >
            <div className={styles['personal-data__form-item']}>
              <input placeholder={t('inNombre')} name="name" onChange={e => setVisitName(e.currentTarget.value)} onKeyUp={handleChange} onKeyDown={checkData()} onBlur={handleBlur} />
              {errors.name && touched.name && (
                <div className="form-error">
                  {errors.name}
                </div>
              )}
            </div>
            <div className={styles['personal-data__form-item']}>
              <input placeholder={t('inApellido')} name="lastName" onChange={e => setVisitLastName(e.currentTarget.value)} onKeyUp={handleChange} onBlur={handleBlur} />
              {errors.lastName && touched.lastName && (
                <div className="form-error">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles['personal-data__form-item']}>
              <input type="email" placeholder={t('inEmail')} name="email" onChange={e => setVisitEmail(e.currentTarget.value)} onKeyUp={handleChange} onBlur={handleBlur} />
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
                mask={globalValidationData[COUNTRY_CODE].phoneMask}
                maskChar=" "
                placeholder={t('inNunmCel')}
                name="phone"
                inputMode="numeric"
                onBlur={handleBlur}
                onChange={e => setVisitPhone(e.currentTarget.value)}
                onKeyUp={handleChange}
              />
              {errors.phone && touched.phone && (
                <div className="form-error">
                  {errors.phone}
                </div>
              )}
              <div className='form-message'>
                {t('inNumCelInstrucciones')}
              </div>
            </div>
          </div>
          <div className={styles.form__row}>
            <div className="form-item">
              <Select
                onBlur={handleBlur}
                name="location"
                options={zonas}
                large
                placeholder={t('inLocalidad')}
                onChange={(option) => setLocationValue(option.value)}
              />
              {errors.location && touched.location && (
                <div className="form-error">
                  {errors.location}
                </div>
              )}
            </div>
          </div>
          {/* <GoogleOneTapLogin/> */}
          <div className={styles.form__container}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="newsletter" name="newsletter" onChange={e => setVisitNewsletter(e.currentTarget.value)} onKeyUp={handleChange} />
            <label for="newsletter">Quiero recibir newsletters</label>
          </div>
          </div>
          <div className={styles.buttons__container}>
            <Button overlayEffect type="button" onClick={handleSubmitOK} primary disabled={btnDisabled}>Enviar</Button>
          </div>
          {/*<p className={styles.terms}>Al enviar este formulario, usted acepta los <a href="/terminos-y-condiciones" target="__blank">Términos de Servicio</a> y la <a href="/terminos-y-condiciones" target="__blank">Política de Privacidad de Cárbula</a>.</p>*/}
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
        onSubmit={handleSubmit}
        validationSchema={validationSchema[step]}>
        {({ handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue }) => (
          renderForm(handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue)
        )}
      </Formik>
    </Fragment>,
    1: <Formik
      key={1}
      initialValues={initialValues[step]}
      onSubmit={handleSubmit}
      validationSchema={validationSchema[step]}>
      {({ handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue }) => (
        renderForm(handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue)
      )}
    </Formik>
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
        <div style={style}>
          <div className={styles.sellform__card}>
            {formikForms[step]}
          </div>
        </div>
      ))
      }
    </div >
  )
}
export default ContactForm;
