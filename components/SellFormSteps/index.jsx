import React, { useState, Fragment, useCallback, useEffect } from 'react';
import { formatNumber, getCalendlyURL, getCatalogoURL } from '../../utils/helpers';
import Button from '../Button';
import styles from './cotization-form.module.scss';
import { Formik, Field } from 'formik';
import { object, mixed, number } from 'yup';
import RadioInput from '../RadioInput';
import { InlineWidget } from "react-calendly";

const { t } = useTranslation('CotizationForm')

/********************************** DESKTOP ***********************************************/

export const Step2Desktop = () => <div className={styles['secondary-steps__container']}>
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

export const Step4 = () => <InlineWidget url={getCalendlyURL(COUNTRY_CODE, email, name, phone)} />


/********************************** MOBILE ************************************************/

export const Step2Mobile = () => <div className={styles['secondary-steps__container']}>
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
        <Button primary type='submit'>Agendar inspección</Button>
        <Button link type='button' onClick={() => setStep(step - 1)}>Atrás</Button>
      </div>
    </form>
  )}
</Formik>
</div>