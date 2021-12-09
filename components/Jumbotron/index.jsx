import styles from './jumbotron.module.scss';

const Jumbotron = ({title, subtitle}) => {
  return (
    <div className={styles.jumbotron__container}>
      <div className={styles.text__container}>
        <h1 className={styles.title}>{title[0]}<br/>{title[1]}</h1>
        <p className={styles.subtitle}>{subtitle[0]}<br/>{subtitle[1]}</p>
      </div>

    </div>
  )

}

export default Jumbotron;