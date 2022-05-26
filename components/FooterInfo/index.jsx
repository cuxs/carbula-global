import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";
import { getCatalogoURL, getFacebookLink, getInstagramLink } from '../../utils/helpers';
import Button from '../Button';
import styles from './footerInfo.module.scss';

const FooterInfo = ({ blue, grey, white, country_code }) => {

  const { t } = useTranslation('FooterInfo')

  const renderColorStyle = () => {
    if (blue) return { color: '#ACC7F9' };
    if (white) return { color: 'white' }
    return { color: '#AAAAAA' };
  }
  const renderImagSrc = (file)=>{
    if(blue) return `/icons/${file}-lb.svg`;
    if(white) return `/icons/${file}-lightgreen.svg`;
    return `/icons/${file}.svg`;
  }
  return (<div className={styles.footerInfo__container} id='contacto'>
    <img src={renderImagSrc('carbula')} alt="logo" className={styles.footerInfo__logo} />
    <div className={styles.legal__texts}>
      <p style={renderColorStyle()} className={styles.razon__text}>{t('razonSocial')}</p>
      <p style={renderColorStyle()} className={styles.rut__text}>{t('cuit')}</p>
    </div>
    <div className={styles.elements__container}>
      <div className={styles.text__area}>
        <p style={renderColorStyle()}>{t('nuestroProposito')}</p>
      </div>
      <div className={styles.link__container}>
        <Button link><a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href={getCatalogoURL(country_code)} >Catálogo de autos</a></Button>
        {/*<Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href="mailto:hola@carbula.com" >Contacto</a></Button> */}
        {/* <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href="https://blog.carbula.cl/blog" >Blog</a></Button> */}
        <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href='/terminos-y-condiciones'>Términos y condiciones</a></Button>
        <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href='/como-vender' >¿Cómo vender mi auto?</a></Button>
        <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href='/como-comprar' >¿Cómo comprar un auto?</a></Button>
      </div>
      <div className={styles.social__container}>
      <a
          style={renderColorStyle()}
          target="__blank" rel="noopener noreferrer"
          className={styles.social__link}
          href={getFacebookLink(country_code)}
        >
          <img src={renderImagSrc('facebook')} alt="Facebook"/> Facebook
        </a>
        <a
            style={renderColorStyle()}
            target="__blank" rel="noopener noreferrer"
            className={styles.social__link}
            href={getInstagramLink(country_code)}
        >
          <img src={renderImagSrc('instagram')} alt="Instagram"/> Instagram
        </a>
        <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" className={styles.social__link} href="mailto:hola@carbula.com">
          <img src={renderImagSrc('icon-mail')} alt="Email"/> hola@carbula.com
        </a>
        <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" className={styles.social__link} href="https://ar.linkedin.com/company/carbula">
          <img src={renderImagSrc('linkedin')} alt="linkedin" /> Linkedin
        </a>
      </div>
      <div className={styles['social__container--mobile']}>
      <a
          target="__blank" rel="noopener noreferrer"
          className={styles.social__link}
          href={getFacebookLink(country_code)}
          style={renderColorStyle()}
        >
          <img src={renderImagSrc('facebook')} alt="Facebook" />
        </a>
        <a
          target="__blank" rel="noopener noreferrer"
          className={styles.social__link}
          href={getInstagramLink(country_code)}
          style={renderColorStyle()}
        >
          <img src={renderImagSrc('instagram')} alt="Instagram" />
        </a>
        <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" className={styles.social__link} href="mailto:hola@carbula.com">
          <img src={renderImagSrc('icon-mail')} alt="Email" />
        </a>
        <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" className={styles.social__link} href="https://ar.linkedin.com/company/carbula">
          <img src={renderImagSrc('linkedin')} alt="linkedin" />
        </a>
      </div>
    </div>
  </div>)
}
export default FooterInfo;