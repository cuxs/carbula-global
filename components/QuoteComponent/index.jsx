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
    {/*<h3>{text[0]}</h3>
    <h3>{text[1]}</h3>
    <h3>{text[2]}</h3>*/}
    <div className={styles.buttons__container}>
    <Button type="submit" primary id="btnSellFormContinuar"><a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Catálogo de Autos</a></Button>
     </div>
  </div>
  )
}

export default QuoteComponent;