import React, { useState, Fragment, useCallback, useEffect } from 'react';
import { formatNumber, getCalendlyURL, getCatalogoURL, estadosMX, redondeo, getCotization } from '../../utils/helpers';
import Button from '../Button';
import styles from './cotization-form.module.scss';
import Select from '../SelectComponent';
import ProgressBar from '../ProgressBar';
import { CURRENCY, LAST_STEP_DESKTOP, LAST_STEP_MOBILE, COUNTRY, SCALES, IVA, CARBULA_FEE, CARBULA_FEE_MINIMUM } from '../../utils/constants';
import { Formik, Field } from 'formik';
import { object, mixed, number } from 'yup';
import RadioInput from '../RadioInput';
import FaqCotization from '../FaqCotization';
import { updateLeadPrices, rejectSellTime, updateHubspotProperty, generateInspectionHS } from '../../utils/fetches';
import Modal from '../Modal';
import NumberFormat from 'react-number-format';
import { InlineWidget } from "react-calendly";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import cotizationJSONcl from '../../public/autopress-cl.json'
import cotizationJSONar from '../../public/autopress-ar.json'
import cotizationJSONuy from '../../public/autopress-uy.json'
import cotizationJSONmx from '../../public/autopress-mx.json'
import CryptoJS from 'crypto-js'
import QRCode from "react-qr-code"

const CotizationForm = ({
  selectedPrice,
  setSelectedPrice,
  step,
  setStep,
  name,
  email,
  phone,
  width,
  grantedPrice,
  variablePrices: { _publicationPrice,
    _marginPrice,
    _carbulaFee, 
    _isMinimum},
  external_id,
  brand,
  year,
  model,
  version,
  kms,
  meetData,
  locationName,
  COUNTRY_CODE }) => {

  const [inspectionURL, setInspectionURL] = useState("")

  const cotizationsJSON = useCallback(() => {
    const cotizationsJSONs = {
      'ar': cotizationJSONar,
      'cl': cotizationJSONcl,
      'uy': cotizationJSONuy,
      'mx': cotizationJSONmx,
    }
    return cotizationsJSONs[COUNTRY_CODE]
  },[])
  const [publicationPrice, setPublicationPrice] = useState(_publicationPrice)
  const [marginPrice, setMarginPrice] = useState(_marginPrice);
  const [carbulaFee, setCarbulaFee] = useState(_carbulaFee);
  const [isMinimum, setIsMinimum] = useState(_isMinimum);
  const [formValues, setFormValues] = useState({});
  const { t } = useTranslation('CotizationForm')
  const router = useRouter()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  const handlePriceChange = useCallback((value) => {
    setSelectedPrice(value);  
    const regularFee = value * (1 / (1 - (CARBULA_FEE[COUNTRY_CODE] * (1 + IVA[COUNTRY_CODE]) / 100)) -1);
      let roundedFee = redondeo(regularFee, COUNTRY_CODE);
      if(roundedFee <= CARBULA_FEE_MINIMUM[COUNTRY_CODE]) {
        roundedFee = CARBULA_FEE_MINIMUM[COUNTRY_CODE];
        setIsMinimum(true);
      } else {
        setIsMinimum(false);
      }

      setSelectedPrice(value);
      setCarbulaFee(roundedFee);
      setPublicationPrice(value + roundedFee);
  },[cotizationsJSON, setSelectedPrice])

  const getCotizationEdgePrices = ()=>{
    const min = cotizationsJSON()[0].AUTOPRESSMIN
    const max = cotizationsJSON().slice(-1)[0].AUTOPRESSMAX
    return [min, max]

  }
  const handleCondicionSubmit = (values, actions) => {
    try {
      setInspectionData()
      updateHubspotProperty(values)
    } catch (e) {
      console.log(e)
    }
    if (values.owners && values.owners === '5 o más') {
      return setStep('end-categoria')
    }
    if(COUNTRY_CODE !== 'mx'){
      if (values.prendado && values.prendado === 'Sí') {
        return setStep('end-prendado')
      }
      if (values.rematado && values.rematado === 'Sí') {
        return setStep('end-rematado')
      }
      if (values.prendado && values.prendado === 'Sí') {
        return setStep('end-prendado')
      }
    }
    setFormValues({ ...formValues, ...values })
    setStep(step + 1)
  }
  const handleIframeURLload = (e) => {
    const key = e.target.src.split('=').pop;
    if (key === 'success') {
      setStep('success')
    }
  }
  const handlePriceStep = async () => {
    const prices = {
      publicationPrice: _publicationPrice,
      marginPrice: _marginPrice,
      carbulaFee: _carbulaFee,
      isMinimum: _isMinimum,
      grantedPrice,
      montoCliente: selectedPrice,
      marginPrice_client: marginPrice,
      carbulaFee_client: carbulaFee,
      publicationPrice_client: publicationPrice,
      external_id: external_id,
    }
    try {
      updateLeadPrices(prices)
      setStep(step + 1)
    } catch (e) {
      console.log(e)
    }
  }
  const handleRejectSellTime = async () => {
    try {
      rejectSellTime({ external_id, country_code: COUNTRY_CODE })
      setStep('end-venta')
    } catch (e) {
      console.log(e)
    }
  }

  const getCotizationData = () => {
    const cotizationCrypted = getCotization()
    const bytes = CryptoJS.AES.decrypt(cotizationCrypted, 'cotizacion')
    const cotizationDataJSON = bytes.toString(CryptoJS.enc.Utf8);
    const cotizationObject = JSON.parse(cotizationDataJSON)
    return cotizationObject
  }

  const setInspectionData = async () => {
    const carAndContactData = getCotizationData()
    try{
      const inspectionData = {
        "email": carAndContactData.email,
        "locale": `es_${COUNTRY_CODE.toUpperCase()}`,
        "firstName": carAndContactData.name,
        "lastName": typeof(carAndContactData.lastName) !== "undefined" ? carAndContactData.lastName : carAndContactData.name,
        "phone": carAndContactData.phone,
        "identification": typeof(carAndContactData.inspectionDataIdentification) !== "undefined" ? carAndContactData.inspectionDataIdentification : "Sin especificar",
        "internalId": carAndContactData.uuid,
        "plate": typeof(carAndContactData.inspectionDataPlate) !== "undefined" ? carAndContactData.inspectionDataPlate : "Sin especificar",
        "make": carAndContactData.brand,
        "model": carAndContactData.model,
        "version": carAndContactData.version,
        "color": typeof(carAndContactData.inspectionDataColor) !== "undefined" ? carAndContactData.inspectionDataColor : "white",
        "external_id": carAndContactData.external_id
      }
      await generateInspectionHS(inspectionData)
      .then(res => {setInspectionURL(res)})
      .catch(err => {console.log("ERROR: ", err)})
    }
    catch(err){
      console.log("ERROR: ", err)
      setInspectionId("No se pudo especificar")
      setInspectionURL("No se pudo especificar")
    }
  }

  const handleUpdateDealProperty = async (values, actions) => {
    try {
      updateHubspotProperty(values)
    } catch (e) {
      console.log(e)
    }
    if (values.owners && values.owners === '5 o más') {
      return setStep('end-categoria')
    }
    if (values.prendado && values.prendado === 'Sí') {
      return setStep('end-prendado')
    }
    // if (values.carStatus && values.carStatus[0] === 'Con harto uso') {
    //   return setStep('end-categoria')
    // }
    if (values.rematado && values.rematado === 'Sí') {
      return setStep('end-categoria')
    }
    setStep(step + 1)
  }

  const Step1Desktop = () => (
    COUNTRY_CODE === 'mx' ?
    <Fragment>
      <div className={styles['secondary-steps__container']}>
        <h3 className={styles.text__primary}>¡Gracias {name}!</h3>
        <h4 className={styles.text__primary}>{t('step1.h4')} </h4>
        <hr />
        <p>{t('loQueHacemos')}<br /><br /><b>Ahora cuéntanos un poco más acerca de tu auto.</b></p>
        <Formik
          onSubmit={handleCondicionSubmit}
          validationSchema={object().shape({
            prendado: mixed().required(t('errorPrendado')),
            rematado: mixed().required('Seleccione una opción.'),
          })}
          initialValues={{
            prendado: 'No',
            rematado: 'No',
            external_id,
            country_code: COUNTRY_CODE,
            mxTipoDeFactura: '',
            mxEstadoMatricula: '',
          }}
        >
          {({ handleChange, errors, values, touched, handleSubmit, }) => (
            <form onSubmit={handleSubmit}>
              <div className='form-item'>
                <label>¿Qué tipo de factura tiene el auto?</label>
                <RadioInput
                  touched={touched.mxTipoDeFactura}
                  value={values.mxTipoDeFactura}
                  name="mxTipoDeFactura"
                  options={['Factura original', 'Refactura', 'Carta factura', 'Factura de aseguradora', 'Otro/No lo sé']}
                />
                {errors.mxTipoDeFactura && touched.mxTipoDeFactura && (
                  <div className="form-error">
                    {errors.mxTipoDeFactura}
                  </div>
                )}
              </div>
              <div className='form-item'>
                <label>¿A qué estado pertenece tu placa?</label>
                <Select
                  // onBlur={handleBlur}
                  name="mxEstadoMatricula"
                  touched={touched.mxEstadoMatricula}
                  value={values.mxEstadoMatricula}
                  options={estadosMX}
                  large
                  placeholder={'Estado'}
                  // onChange={(option) => setFieldValue('location', option.value)}
                />
              </div>
              <div className={styles['buttons__container--horizontal']}>
                <Button primary type='submit'>Continuar</Button>
                <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
              </div>
              {errors.mxEstadoMatricula && touched.mxEstadoMatricula && (
                <div className="form-error">
                  {errors.remmxEstadoMatriculaatado}
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
    </Fragment>
    :
    <Fragment>
      <div className={styles['secondary-steps__container']}>
        <h3 className={styles.text__primary}>¡Gracias {name}!</h3>
        <h4 className={styles.text__primary}>{t('step1.h4')} </h4>
        <hr />
        <p>No lo {t('olvides')}, en Cárbula <b>no compramos {t('tu')} auto</b>. {t('loQueHacemos')}
          <br /><br /><b>Te haremos unas preguntas del vehículo:</b></p>
        <Formik
          onSubmit={handleCondicionSubmit}
          validationSchema={object().shape({
            prendado: mixed().required('¿Se encuenta prendado el vehículo?'),
            rematado: mixed().required('Seleccione una opción.'),
          })}
          initialValues={{
            prendado: '',
            rematado: '',
            external_id,
            country_code: COUNTRY_CODE
          }}
        >
          {({ handleChange, errors, values, touched, handleSubmit, }) => (
            <form onSubmit={handleSubmit}>
              <div className='form-item'>
                <label>1. Tu vehículo ¿actualmente está con prenda?</label>
                <RadioInput
                  touched={touched.prendado}
                  value={values.prendado}
                  name="prendado"
                  options={['Sí', 'No']}
                />
                {errors.prendado && touched.prendado && (
                  <div className="form-error">
                    {errors.prendado}
                  </div>
                )}
              </div>
              <div className='form-item'>
                <label>2. Tu vehículo ¿ha sido rematado por algún motivo? </label>
                <RadioInput
                  touched={touched.rematado}
                  value={values.rematado}
                  name="rematado"
                  options={['Sí', 'No']}
                />
                {errors.rematado && touched.rematado && (
                  <div className="form-error">
                    {errors.rematado}
                  </div>
                )}
              </div>
              <div className='form-item'>
                <label>3. ¿Cuántos dueños ha tenido tu vehículo? </label>
                <RadioInput
                  touched={touched.rematado}
                  value={values.rematado}
                  name="rematado"
                  options={['1', '2', '3', '4', '5+']}
                />
                {errors.rematado && touched.rematado && (
                  <div className="form-error">
                    {errors.rematado}
                  </div>
                )}
              </div>
              <div className='form-item'>
                <label>4. ¿Cuál ha sido el uso dado a tu vehículo? </label>
                <RadioInput
                  touched={touched.rematado}
                  value={values.rematado}
                  name="rematado"
                  options={['Particular', 'Comercial']}
                />
                {errors.rematado && touched.rematado && (
                  <div className="form-error">
                    {errors.rematado}
                  </div>
                )}
              </div>
              <div className={styles['buttons__container--horizontal']}>
                <Button primary type='submit'>{t('stepTwoTitle')}</Button>
                <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
              </div>
            </form>
          )}
        </Formik>
        {/* <div className={styles.buttons__container}>
              <Button outlined onClick={() => setStep(step + 1)}><b>Sí</b>, me parece genial.</Button>
              <Button outlined onClick={handleRejectSellTime}><b>No</b>, necesito venderlo al tiro.</Button>
              <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
            </div> */}
      </div>
    </Fragment>
  )

  const renderOwnerOptions = () => {
    const options = {
      'es-AR': ['1', '2', '3', '4 o más'],
      'es-UY': ['1', '2', '3', '4 o más'],
      'es-CL': ['1', '2', '3', '4', '5 o más'],
      'es-MX': ['1', '2', '3', '4', '5 o más'],
    }
    return options[router.locale]
  }

  const Step1Mobile = () => (
    <div className={styles['secondary-steps__container']}>
      <h2 className={`${styles.text__primary} ${styles.main__title}`}>¡Gracias {name}!</h2>
      <h4 className={styles.text__primary}>Ahora cuéntanos un poco más acerca de tu auto.</h4>
      <hr />
      <p>No lo olvides, <b>en Cárbula no compramos tu auto.</b>
      Lo que hacemos es venderlo por ti, encargarnos de absolutamente todo y garantizar hasta un 25% más de dinero que una automotora tradicional.
        <br /><br /><b>Te haremos unas preguntas del vehículo:</b></p>
      <Formik
        onSubmit={handleCondicionSubmit}
        validationSchema={object().shape({
          prendado: mixed().required('¿Se encuenta prendado el vehículo?'),
        })}
        initialValues={{
          prendado: '',
          external_id,
          country_code: COUNTRY_CODE
        }}
      >
        {({ handleChange, errors, values, touched, handleSubmit, }) => (
          <form onSubmit={handleSubmit}>
            <div className='form-item'>
              <label>¿Actualmente está con prenda?</label>
              <RadioInput
                touched={touched.prendado}
                value={values.prendado}
                name="prendado"
                options={['Sí', 'No', 'No lo sé']}
              />
              {errors.prendado && touched.prendado && (
                <div className="form-error">
                  {errors.prendado}
                </div>
              )}
            </div>
            <div className={styles['buttons__container--horizontal']}>
              <Button primary type='submit'>Siguiente</Button>
              <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )

  const Step2Mobile = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleCondicionSubmit}
      validationSchema={object().shape({
        rematado: mixed().required('Seleccione una opción.'),
      })}
      initialValues={{
        rematado: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>¿Ha sido rematado por algún motivo? </label>
            <RadioInput
              touched={touched.rematado}
              value={values.rematado}
              name="rematado"
              options={['Sí', 'No']}
            />
            {errors.rematado && touched.rematado && (
              <div className="form-error">
                {errors.rematado}
              </div>
            )}
          </div>
          <div className={styles['buttons__container--horizontal']}>
            <Button primary type='submit'>{t('stepTwoTitle')}</Button>
            <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
          </div>
        </form>
      )}
    </Formik>
  </div>
  const Step2Desktop = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleCondicionSubmit}
      validationSchema={object().shape({
        saleTime: mixed().required('Seleccione el tiempo de venta que desea.'),
        owners: mixed().required('Seleccione una opción.'),
        prendado: mixed().required('¿Se encuenta prendado el vehículo?'),
      })}
      initialValues={{
        saleTime: '',
        owners: '',
        prendado: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>{t('labelVender')}</label>
            <RadioInput
              touched={touched.saleTime}
              value={values.saleTime}
              name="saleTime"
              options={[t('vender.opcion1'), t('vender.opcion2'), t('vender.opcion3')]}
            />
            {errors.saleTime && touched.saleTime && (
              <div className="form-error">
                {errors.saleTime}
              </div>
            )}
          </div>
          <hr />
          <div className='form-item'>
            <label>¿Cuántos dueños ha tenido el auto?</label>
            <RadioInput
              touched={touched.owners}
              value={values.owners}
              name="owners"
              options={renderOwnerOptions()}
            />
            {errors.owners && touched.owners && (
              <div className="form-error">
                {errors.owners}
              </div>
            )}
          </div>
          <hr />
          <div className='form-item'>
            <label>{t('prendaLabel')}</label>
            <RadioInput
              touched={touched.prendado}
              value={values.prendado}
              name="prendado"
              options={['Sí', 'No', 'No lo sé']}
            />
            {errors.prendado && touched.prendado && (
              <div className="form-error">
                {errors.prendado}
              </div>
            )}
          </div>
          <div className={styles['buttons__container--horizontal']}>
            <Button primary type='submit'>Siguiente</Button>
            <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
          </div>
        </form>
      )}
    </Formik>
  </div>

  const Step3Mobile = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleUpdateDealProperty}
      validationSchema={object().shape({
        owners: mixed().required('Seleccione una opción.'),
      })}
      initialValues={{
        owners: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>¿Cuántos dueños ha tenido el auto?</label>
            <RadioInput
              submitOnClick
              touched={touched.owners}
              value={values.owners}
              name="owners"
              options={renderOwnerOptions()}
            />
            {errors.owners && touched.owners && (
              <div className="form-error">
                {errors.owners}
              </div>
            )}
          </div>
          <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
        </form>
      )}
    </Formik>
  </div>
  const Step3Desktop = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleCondicionSubmit}
      validationSchema={object().shape({
        carStatus: mixed().required('Seleccione una opción.'),
        rematado: mixed().required('Seleccione una opción.'),
        saleDeal: mixed().required('Seleccione una opción.'),
      })}
      initialValues={{
        carStatus: '',
        rematado: '',
        saleDeal: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>{t('statusLabel')}</label>
            <RadioInput
              touched={touched.carStatus}
              vertical
              boldOption
              value={values.carStatus}
              name="carStatus"
              options={[
                ['Excelente', 'está como nuevo y en excelentes condiciones mecánicas.'],
                ['Muy bueno', 'tiene pequeños daños externos y no tiene problemas mecánicos.'],
                ['Bueno', t('carStatus.option3.detail')],
                ['Razonable', t('carStatus.option4.detail')],
              ]}
            />
            {errors.carStatus && touched.carStatus && (
              <div className="form-error">
                {errors.carStatus}
              </div>
            )}
          </div>
          <hr />
          <div className='form-item'>
            <label>¿Ha sido rematado por algún motivo? </label>
            <RadioInput
              touched={touched.rematado}
              value={values.rematado}
              name="rematado"
              options={['Sí', 'No']}
            />
            {errors.rematado && touched.rematado && (
              <div className="form-error">
                {errors.rematado}
              </div>
            )}
          </div>
          <hr />
          <div className='form-item'>
            <label>{t('planLabel')}</label>
            <RadioInput
              touched={touched.saleDeal}
              value={values.saleDeal}
              name="saleDeal"
              boldOption
              options={[['Solo vender', ''], ['Vender y comprar', 'uno más económico'], ['Vender y comprar', 'uno más caro']]}
            />
            {errors.saleDeal && touched.saleDeal && (
              <div className="form-error">
                {errors.saleDeal}
              </div>
            )}
          </div>
          <div className={styles['buttons__container--horizontal']}>
            <Button primary type='submit'>Siguiente</Button>
            <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
          </div>

        </form>
      )}
    </Formik>
  </div>

  const Step4Mobile = () => <div className={styles['secondary-steps__container']}>

    <Formik
      onSubmit={handleUpdateDealProperty}
      validationSchema={object().shape({
        prendado: mixed().required('¿Se encuenta prendado el vehículo?'),
      })}
      initialValues={{
        prendado: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>{t('prendadoLabel')}</label>
            <RadioInput
              submitOnClick
              touched={touched.prendado}
              value={values.prendado}
              name="prendado"
              options={['Sí', 'No', 'No lo sé']}
            />
            {errors.prendado && touched.prendado && (
              <div className="form-error">
                {errors.prendado}
              </div>
            )}
          </div>
          <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
        </form>
      )}
    </Formik>
  </div>
  // const Step4 = () => <InlineWidget url={getCalendlyURL(COUNTRY_CODE, email, name, phone)} />

  const Step4 = () => <div className={styles['meeting-info']}>
    <p>Estimado {name},</p>
    <br/>
    <p>Muchas gracias por utilizar nostros servicios. Para proceder, le solicitamos que realice una <b>inspección virtual</b> desde un dispositivo móvil. </p>
    {width < 769 ? (<Setp4Mobile/>) : (<Setp4Desktop/>)}
    <br /><br />
    <Button><a href={`https://catalogo.carbula.${COUNTRY_CODE}`} target="__blank">Ver catálogo</a></Button>
  </div>

  const Setp4Desktop = () => <div>
    <p>Puede hacerlo escaneando el código QR de abajo. También le enviaremos el enlace por <b>correo electrónico a {email}</b></p>
    <QRCode value={inspectionURL} size="128"/>
  </div>

  const Setp4Mobile = () => <div>
    <p>Puede hacerlo presionando el botón de abajo. También le enviaremos el enlace por <b>correo electrónico a {email}</b></p>
    <br /><br />
    <Button><a href={inspectionURL}>Inspección virtual</a></Button>
  </div>

  const Step5Mobile = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleUpdateDealProperty}
      validationSchema={object().shape({
        carStatus: mixed().required('Seleccione una opción.'),
      })}
      initialValues={{
        carStatus: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>{t('statusLabel')}</label>
            <RadioInput
              touched={touched.carStatus}
              vertical
              boldOption
              submitOnClick
              value={values.carStatus}
              name="carStatus"
              options={[
                ['Excelente', 'está como nuevo y en excelentes condiciones mecánicas.'],
                ['Muy bueno', 'tiene pequeños daños externos y no tiene problemas mecánicos.'],
                ['Bueno', t('carStatus.option3.detail')],
                ['Razonable', t('carStatus.option4.detail')],
              ]}
            />
            {errors.carStatus && touched.carStatus && (
              <div className="form-error">
                {errors.carStatus}
              </div>
            )}
          </div>
          <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
        </form>
      )}
    </Formik>
  </div>
  const Step5 = () => <div className={styles['meeting-info']}>
    <h2>{year} {brand} {model}</h2>
    <h3>{version} - {formatNumber(kms, 0)} kms</h3>
    <hr />
    <div className={styles.meeting__row}>
      <img src="/icons/calendar.svg" alt="calendario" />
      <p>{meetData.date}</p>
    </div>
    <hr />
    <p className={styles['meeting-info__footer']}>Ahora que ya agendaste su inspección, aprovechá para ver los autos que tenemos disponibles en nuestro catálogo.</p>
    <a href={getCatalogoURL(COUNTRY_CODE)}><Button primary>Ver catálogo</Button></a>
  </div>

  const Step6Mobile = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleUpdateDealProperty}
      validationSchema={object().shape({
        rematado: mixed().required('Selecciona una opción.'),
      })}
      initialValues={{
        rematado: '',
        external_id,
        country_code: COUNTRY_CODE
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>¿Ha sido rematado por algún motivo? </label>
            <RadioInput
              touched={touched.rematado}
              value={values.rematado}
              name="rematado"
              submitOnClick
              options={['Sí', 'No']}
            />
            {errors.rematado && touched.rematado && (
              <div className="form-error">
                {errors.rematado}
              </div>
            )}
          </div>
          <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
        </form>
      )}
    </Formik>
  </div>

  const Step7Mobile = () => <div className={styles['secondary-steps__container']}>
    <Formik
      onSubmit={handleUpdateDealProperty}
      validationSchema={object().shape({
        saleDeal: mixed().required('Seleccione una opción.'),
      })}
      initialValues={{
        saleDeal: '',
        external_id
      }}
    >
      {({ handleChange, errors, values, touched, handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>{t('planLabel')}</label>
            <RadioInput
              touched={touched.saleDeal}
              value={values.saleDeal}
              submitOnClick
              name="saleDeal"
              boldOption
              options={[['Solo vender', ''], ['Vender y comprar', 'uno más económico'], ['Vender y comprar', 'uno más caro']]}
            />
            {errors.saleDeal && touched.saleDeal && (
              <div className="form-error">
                {errors.saleDeal}
              </div>
            )}
          </div>
          <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
        </form>
      )}
    </Formik>
  </div>

  const renderCardBody = () => {
    const scaleAmount = SCALES[COUNTRY_CODE]["SCALE"]
    switch (step) {
      case 0: return (
        <Fragment>
          <h2 className={`${styles.text__primary} ${styles.main__title}`}>{t('cuantoDineroDesea')}</h2>
          <div className={styles.price__dropdown}>
            <input
              readOnly
              type="string"
              value={formatNumber(selectedPrice, 0)}
              step={scaleAmount}
              min={selectedPrice? selectedPrice - 4000000 : 0}
              max={selectedPrice? selectedPrice + 4000000 : 10}
              onChange={handlePriceChange}
              name='selectedPrice'
            >
            </input>
            <div className={styles.odometer__buttons}>
              <button><img src='/icons/plus.svg' alt="mas" onClick={() => handlePriceChange(selectedPrice + scaleAmount)} alt='up' /></button>
              <button><img src='/icons/minus.svg' alt="menos" onClick={() => handlePriceChange(selectedPrice - scaleAmount)} alt='down' /></button>
            </div>
            {/* <Select
              big
              name='selectedPrice'
              options={preciosOptions()}
              large
              onChange={handlePriceChange}
              defaultValue={{ label: `$ ${formatNumber(selectedPrice, 0)}`, value: selectedPrice }}
              renderNoOptionMessage={() => 'Elije'}
            /> */}
            <small className={styles.price__currency}>
              {COUNTRY_CODE === 'mx' ? '$' : CURRENCY[COUNTRY_CODE]}
            </small>
          </div>
          <div className={styles.card__text}>
            <p>{t('autosVendidosEnDias')} <span>{t('autosVendidosPreciosCompetitivos')} </span></p>
          </div>
          <div className={styles.card__prices}>
            <div className={styles.price__row}>
              <p>{t('precioDineroEnMano')}</p><p>{COUNTRY_CODE === 'mx' ? '' : CURRENCY[COUNTRY_CODE]}$ {formatNumber(selectedPrice, 0)}</p>
            </div>
            <div className={styles['price__row--grey']}>
              { isMinimum
                ? <Fragment><p>{t('precioComisiónCarbula')}</p><p>{COUNTRY_CODE === 'mx' ? '' : CURRENCY[COUNTRY_CODE]}$ {formatNumber(carbulaFee, 0)}</p></Fragment>
                : <Fragment><p>{t('precioComisiónCarbula')}</p><p>{CARBULA_FEE[COUNTRY_CODE]}% +IVA</p></Fragment>}
            </div>
            <div className={styles['price__row--grey']}>
              <p>{t('precioValorDePublicacion')}</p> <p>{COUNTRY_CODE === 'mx' ? '' : CURRENCY[COUNTRY_CODE]}$ {formatNumber(publicationPrice, 0)}</p>
            </div>
          </div>
          <Button primary onClick={handlePriceStep}> Continuar</Button>
        </Fragment>
      )
      case 1: if (width < 769) {
        return <Step1Mobile />
      }
        return <Step1Desktop />

      case 2:
        if (width < 769) {
          return <Step2Mobile />
        }
        return <Step4 />
      case 3:
        // if (width < 769) {
        //   return <Step4 />
        // }
        // return <Step5 />
        return <Step4 />
      case 4:
        // if (width < 769) {
        //   return <Step5 />
        // }
        return <div />
      case 'end-venta': return (
        <div>
          <div className={styles['error-card__container']}>
            <img src="/icons/cancel.svg" alt='error' />
            <hr />
            <h3>No se preocupe.</h3>
            <h4>{t('ventaInmediataText')}</h4>
          </div>
        </div>
      )
      case 'end-categoria': return (
        <div>
          <div className={styles['error-card__container']}>
            <img src="/icons/cancel.svg" alt='error' />
            <hr />
            <h3>Desafortunadamente, no vendemos vehículos de su categoría por el momento. </h3>
            <h4>Agradecemos su tiempo y esperamos vuelva pronto!</h4>
          </div>
        </div>
      )
      case 'end-rematado': return (
        <div>
          <div className={styles['error-card__container']}>
            <img src="/icons/cancel.svg" alt='error' />
            <hr />
            <h4>En este momento no estamos vendiendo vehículos rematados. Agradecemos su tiempo y esperamos vender su próximo auto!</h4>
          </div>
        </div>
      )
      case 'end-prendado': return (
        <div>
          <div className={styles['error-card__container']}>
            <img src="/icons/cancel.svg" alt='error' />
            <hr />
            <h4>En este momento no estamos vendiendo vehículos prendados. Agradecemos su tiempo y esperamos vender su próximo auto!</h4>
          </div>
        </div>
      )
      default:
        break;
    }
  }
  const [min, max] = getCotizationEdgePrices()
  return (
    <div className={styles['cotization-form__container']}>
      <div
        className={styles.card__container}
      >
        <ProgressBar step={step} total={width < 769 ? LAST_STEP_MOBILE : LAST_STEP_DESKTOP} />
        {renderCardBody()}
      </div>
      {width < 769 && <FaqCotization />}
      <Modal isOpen={!selectedPrice}>
        <div className={styles.form__container}>
          {
            COUNTRY_CODE === 'mx' ? 
            <Fragment><h3>¿Cuánto dinero deseas ganar por la venta de tu auto?</h3></Fragment>
            :
            <Fragment>
              <h3>¡Hola {name}!</h3>
              <p>Muchas gracias por utilizar los servicios de <b>Cárbula</b>.</p>
              <p>Por el momento no tenemos un valor de referencia para brindarte.</p>
              <p>Por favor ingresá el valor que querés ganar por tu vehículo 🚗</p>
            </Fragment>
          }
          <Formik
            onSubmit={(values) => {
              const parsedValue = values.amount.replace(/\./g, '')
              handlePriceChange(parseInt(parsedValue))
            }}
            initialValues={{
              amount: ''
            }}
            validationSchema={
              object().shape({
                amount: number()
                  .transform((value, originalValue) => {
                    const parsedValue = originalValue.replace(/\./g, '')
                    return parseInt(parsedValue)
                  })
                  .min(min, `Ingresá un valor mayor a ${CURRENCY[COUNTRY_CODE]} $${formatNumber(min, 0)}.`)
                  .max(max, `Como máximo ${CURRENCY[COUNTRY_CODE]} $${formatNumber(max, 0)}.`)
                  .required('Ingresá el monto que deseas ganar')
              })
            }
          >
            {({ setFieldValue, values, handleSubmit, handleBlur, handleChange, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className={styles.price__dropdown}>
                  <NumberFormat
                    thousandSeparator={true}
                    name="amount"
                    thousandSeparator="."
                    decimalSeparator=","
                    value={values.amount}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="Sólo números"
                    onBlur={handleBlur}
                  />
                  {/* <input
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Sólo números"
                  /> */}
                  <small className={styles.price__currency}>
                    {COUNTRY_CODE === 'mx' ? '$' : CURRENCY[COUNTRY_CODE]}
                  </small>
                  {errors.amount && touched.amount && (
                    <div className={styles.form__error}>
                      {errors.amount}
                    </div>
                  )}
                </div>
                <div className={styles.form__buttons}>
                  <Button primary type="submit">Continuar</Button>
                </div>
              </form>)}
          </Formik>
        </div>

      </Modal>
    </div >
  )
}

export default React.memo(CotizationForm)