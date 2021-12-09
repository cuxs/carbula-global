import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";
import Button from '../Button';
import styles from './footerInfo.module.scss';

const FooterInfo = ({ blue, grey, white }) => {

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
        <p style={renderColorStyle()}>Cárbula es la nueva forma de comprar o vender vehículos. Reinventamos esta tarea engorrosa para ofrecerle un servicio sencillo y confiable, tal como necesita el mercado actual.</p>
      </div>
      <div className={styles.buttons__container}>
        <Button link><Link style={renderColorStyle()} to="vender" duration={500} offset={-100}>Vender</Link></Button>
        <Button link><a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href="https://catalogo.carbula.com" > Comprar</a></Button>
        <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href="mailto:hola@carbula.com" >Contacto</a></Button>
        <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href="https://blog.carbula.cl/blog" >Blog</a></Button>
        <Button link> <a style={renderColorStyle()} target="__blank" rel="noopener noreferrer" href='/terminos-y-condiciones' >Términos y condiciones</a></Button>
      </div>
      <div className={styles.social__container}>
        <a
          style={renderColorStyle()}
          target="__blank" rel="noopener noreferrer"
          className={styles.social__link}
          href="https://www.instagram.com/carbula.ar/"
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
          href="https://www.instagram.com/carbula.ar/"
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