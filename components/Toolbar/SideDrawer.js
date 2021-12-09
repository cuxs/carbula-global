import React from "react";
import Link from 'next/link'
import styles from './toolbar.module.scss'
import classNames from 'classnames/bind';


const SideDrawer = ({ show, click, }) => {
  const classNameContext = classNames.bind(styles)

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
            <a href="https://catalogo.carbula.com" target="__blank">Comprar</a>
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