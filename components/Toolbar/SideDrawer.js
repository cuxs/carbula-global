import React from "react";
import Link from 'next/link'
import styles from './toolbar.module.scss'
import classNames from 'classnames/bind';
import { getCatalogoURL, getCountryCode } from "../../utils/helpers";
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
      <img className={styles['side-drawer__logo']} src="/icons/carbula.svg" alt="logo"/>
      <div style={{ textAlign: 'center' }}>
        <ul>
          <li><a href="/"><b>Vender</b></a></li>
          <li>
            <a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Comprar</a>
          </li>
          <li>
            <a href="https://blog.carbula.cl/blog" target="__blank">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer