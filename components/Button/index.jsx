import classnames from 'classnames';
import styles from './button.module.scss';
import { ReactSVG } from 'react-svg'
import LoadingSpinner from '../LoadingSpinner';
import { useEffect, useState } from 'react';

const Button = ({ primary, outlined, icon, small, long, secondary, secondaryOutlined, link, light, noBorder, noBorderSecondary, overlayEffect, children, disabled, loading, type, onClick }) => {
  const buttonClass = classnames({
    primary,
    outlined,
    icon,
    small,
    long,
    secondary,
    'secondary--outlined': secondaryOutlined,
    link,
    light,
    noBorder,
    noBorderSecondary
  })

  if (icon) {
    if (loading) return <button disabled className={styles.icon}><LoadingSpinner /> Cargando...</button>
    return <button onClick={onClick} type={type} className={styles.icon}><ReactSVG className={styles.button__icon} src={icon}></ReactSVG>{children}</button>
  }
  if (loading) return <button disabled className={styles[buttonClass]} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><LoadingSpinner color='white' />Cargando...</button>
  return (<button onClick={onClick} type={type} disabled={disabled} className={styles[buttonClass]}>{children}</button>)
}

export default Button;