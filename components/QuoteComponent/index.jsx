import { ReactSVG } from 'react-svg';
import styles from './quote.module.scss';
import Link from 'next/link';
import Button from '../Button';
import Image from 'next/image';
import { getCatalogoURL, getCountryCode, getWhatsappNumber } from "../../utils/helpers";
import {useRouter} from 'next/router';

const QuoteComponent = ({ text }) => {
  const router = useRouter()
  const COUNTRY_CODE= getCountryCode(router.locale)

  return (<div className={styles.quote__container}>
    <div className={styles.quote__background} />
    <div className={styles.buttons__container}>
    <Button><a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Ver catálogo de autos</a></Button>
     </div>
  </div>
  )
}

export default QuoteComponent;