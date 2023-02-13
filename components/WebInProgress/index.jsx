import React, { useState, Fragment } from 'react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
import InputMask from 'react-input-mask'
import styles from './webinprogress.module.scss'
import Head from '../head'
import Button from '../Button'
import Select from '../SelectComponent'
import { mixed, object, number, string } from 'yup'
import { getTitleByCountry, globalValidationData } from '../../utils/helpers'
import { getZonas } from '../../utils/fetches'

const WebInProgress = (country_code) => {
  const { t } = useTranslation('WebInProgress')
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!isOpen)
  const Nav = dynamic(import('../nav'))

  
  const zonas = async () => {
    const { data } = await getZonas(country_code)
    const zonas = data.map((row) => ({
      value: row.id,
      label: row.nombre,
      referer: referer ? referer : null,
    }))

    return zonas
  }

  const handleSubmit = async (values, actions) => {
    const carAndContactData = {
      ...formData,
      ...values,
      name: `${values.name} ${values.lastName}`,
      country_code: country_code,
    }
    try {
      // checkZone(values.location, zonas, country_code)
      // checkYear(carAndContactData.year)
      // const dealSource = getSourceType(router.query, referer)
      // carAndContactData.hs_analytics_source = dealSource
      // carAndContactData.campania = getCampania(router.query)
      // const { data } = await submitFormAndGetCotization(carAndContactData)
      // const query = CryptoJS.AES.encrypt(JSON.stringify(data.data), 'cotizacion').toString()
      // saveCotization(query)
      alert("Todo OK")
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }

  return (
    <Fragment>
      <Head title={getTitleByCountry(country_code)} />
      {/* <Nav /> */}
      <div className={styles.webinprogress__container}>
        <img src="/icons/logo.svg" alt="Cárbula Autos"/>
        <p className={styles.p1}><b>Estamos preparando<br/>algo genial para #MDZ</b></p>
        <p className={styles.p2}>Pronto volveremos con más propuestas para mejorar la venta y compra de usados entre particulares</p>
        <p><br/><br/><br/></p>
        {/* <Button type="button" long onClick={toggleMenu}><b>Mantenete al tanto de todo lo que se viene en Cárbula</b></Button> */}
        {isOpen && (
          <div>
            <p><br/></p>
            <form className={styles['personal-data__form']} onSubmit={handleSubmit}>
              <div className={styles.form__row} >
                <div className={styles['personal-data__form-item']}>
                  <input placeholder={t('inNombre')} name="name" />
                </div>
                <div className={styles['personal-data__form-item']}>
                  <input placeholder={t('inApellido')} name="lastName" />
                </div>
              </div>
              <div className={styles.form__row}>
                <div className={styles['personal-data__form-item']}>
                  <input type="email" placeholder={t('inEmail')} name="email" />
                </div>
                <div className={styles['personal-data__form-item']}>
                  <InputMask
                    formatChars={{
                      'n': '[0-9]',
                      'a': '[A-Za-z]',
                      '*': '[A-Za-z0-9]'
                    }}
                    mask={globalValidationData[country_code].phoneMask}
                    maskChar=" "
                    placeholder={t('inNunmCel')}
                    name="phone"
                    inputMode="numeric"
                  />
                  <div className='form-message'>
                    {t('inNumCelInstrucciones')}
                  </div>
                </div>
              </div>
              <div className={styles.form__row}>
                <div className="form-item">
                  <Select
                    name="location"
                    options={zonas()}
                    large
                    placeholder={t('inLocalidad')}
                    onChange={(option) => setFieldValue('location', option.value)}
                  />
                </div>
              </div>
              {/* <GoogleOneTapLogin/> */}
              <div className={styles.sellform__container}>
              <div className={styles.checkbox}>
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label for="newsletter">Quiero recibir newsletters</label>
              </div>
              </div>
              <div className={styles.buttons__container}>
                <Button type="submit" secondary>Enviar</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default WebInProgress