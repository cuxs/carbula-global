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
    <div className={styles.buttons__container}>
    <h2>Test</h2>
    <p>Test</p>
    <Button><a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Ver catálogo de autos</a></Button>
     </div>
  </div>
  )
}

export default BlogComponent;