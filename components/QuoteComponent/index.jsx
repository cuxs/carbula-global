import { ReactSVG } from 'react-svg';
import styles from './quote.module.scss';

const QuoteComponent = ({ text }) => {
  return (<div className={styles.quote__container}>
    <div className={styles.quote__background} />
    <h3>{text[0]}</h3>
    <h3>{text[1]}</h3>
    <h3>{text[2]}</h3>
  </div>
  )
}

export default QuoteComponent;