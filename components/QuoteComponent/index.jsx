import { ReactSVG } from 'react-svg';
import styles from './quote.module.scss';
import Button from '../Button';
import Image from 'next/image'

const QuoteComponent = ({ text }) => {
  return (<div className={styles.quote__container}>
    <div className={styles.quote__background} />
    {/*<h3>{text[0]}</h3>
    <h3>{text[1]}</h3>
    <h3>{text[2]}</h3>*/}
    <div className={styles.buttons__container}>
     <Button type="submit" primary id="btnSellFormContinuar">Catálogo de Autos</Button>
     </div>
  </div>
  )
}

export default QuoteComponent;