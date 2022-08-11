import { ReactSVG } from 'react-svg';
import styles from './blog.module.scss';
import Link from 'next/link';
import Button from '../Button';
import Image from 'next/image';
import { getCatalogoURL, getCountryCode, getWhatsappNumber } from "../../utils/helpers";
import {useRouter} from 'next/router';

const BlogComponent = ({ text }) => {
  const router = useRouter()
  const COUNTRY_CODE= getCountryCode(router.locale)

  return (<div className={styles.blog__container}>
    <div className={styles.blog__background} />
    <h3>Todas las novedades y guías del mercado automotor en nuestro Blog</h3>
    <div className={styles.buttons__container}>
    <Button><a href="https://blog.carbula.com/" target="__blank">Visitar blog</a></Button>
     </div>
  </div>
  )
}

export default BlogComponent;