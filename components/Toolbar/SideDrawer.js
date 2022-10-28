import React from "react";
import Link from 'next/link'
import styles from './toolbar.module.scss'
import classNames from 'classnames/bind';
import { getCatalogoURL, getCountryCode, getWhatsappNumber } from "../../utils/helpers";
import {useRouter} from 'next/router';


const SideDrawer = ({ show, click, }) => {
  const classNameContext = classNames.bind(styles)
  const router = useRouter()
  const COUNTRY_CODE= getCountryCode(router.locale)

  const sideDrawerClassname = classNameContext({
    'side-drawer': true,
    open: show
  })
  return (
    <nav className={sideDrawerClassname}>
      <img className={styles['side-drawer__logo']} src="/icons/carbula.svg" alt="Cárbula Autos"/>
      <div style={{ textAlign: 'center' }}>
        <ul>
          <li>
            <a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Catálogo</a>
          </li>
          {/*<li><a href="/">Vender</a></li>*/}
          <li><a href={ COUNTRY_CODE==='ar' ? '/creditos-para-autos' : `http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20necesito%20financiar%20la%20compra%20de%20un%20auto`}>Financiamiento</a></li>
          <li>
            <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank">Contacto</a>
          </li>
          <li><a href="https://blog.carbula.com" target="__blank" rel="noopener noreferrer">Blog</a></li>
          <li><a href="/preguntas-frecuentes">FAQs</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer