import { Fragment } from 'react';
import styles from './jumbotron.module.scss';

const Jumbotron = ({title, subtitle}) => {
  return (
    <div className={styles.jumbotron__container}>
      <div className={styles.text__container}>
        <h1 className={styles.title}>{title[0]}&nbsp;{title[1]}</h1>
        <button className={styles.secondary}>Comprar un auto</button>
        <button className={styles.primary}>Vender un auto</button>
      </div>
    </div>
  )
}
export default Jumbotron;