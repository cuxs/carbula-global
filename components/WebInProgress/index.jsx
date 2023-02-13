import React, { useState, Fragment } from 'react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next';
import { getCatalogoURL, getTerminosCondiciones, getComoVender, getComoComprar, getFacebookLink, getInstagramLink } from '../../utils/helpers';
import Button from '../Button';
import styles from './webinprogress.module.scss'
import Head from '../head'
import { getTitleByCountry } from '../../utils/helpers';

const WebInProgress = (country_code) => {
  const { t } = useTranslation('WebInProgress')
  const Nav = dynamic(import('../nav'))
  return (
    <Fragment>
      <Head title={getTitleByCountry(country_code)} />
      {/* <Nav /> */}
      <div className={styles.webinprogress__container}>
        <img src="/icons/logo.svg" alt="Cárbula Autos"/>
        <p className={styles.p1}><b>Estamos preparando<br/>algo genial para #MDZ</b></p>
        <p className={styles.p2}>Pronto volveremos con más propuestas para mejorar la venta y compra de usados entre particulares</p>
      </div>
    </Fragment>
  )
}

export default WebInProgress