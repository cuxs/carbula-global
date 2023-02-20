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
import ContactForm from '../ContactForm'

const WebInProgress = (country_code, zonas) => {
  const { t } = useTranslation('WebInProgress')
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!isOpen)
  const Nav = dynamic(import('../nav'))

  return (
    <Fragment>
      <Head title={getTitleByCountry(country_code)} />
      {/* <Nav /> */}
      <div className={styles.webinprogress__container}>
        <img src="/icons/logo.svg" alt="Cárbula Autos"/>
        <p className={styles.p1}><b>Estamos preparando<br/>algo genial para #MDZ</b></p>
        <p className={styles.p2}>Pronto volveremos con más propuestas para mejorar la venta y compra de usados entre particulares</p>
        <p><br/><br/><br/></p>
        <Button type="button" long onClick={toggleMenu}><b>Mantenete al tanto de todo lo que se viene en Cárbula</b></Button>
        {isOpen && (
          <div className={styles.contactinfo__container}>
            <p><br/></p>
            <form className={styles['personal-data__form']}>
              <ContactForm COUNTRY_CODE={country_code} zonas={zonas}/>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default WebInProgress