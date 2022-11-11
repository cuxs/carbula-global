import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./faq.module.scss";
const FaqValoraciones = () => {
  const { t } = useTranslation('FaqValoraciones')
  return (
    <Fragment>
      <div className={styles.divContainer}>
        <div className={styles.textContainer}>
          <p>{t('plataformaValorada')}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            floated='center'
            src='/images/valoraciones-cl.webp'
            width='125px'
          />
        </div>
      </div>
    </Fragment>
  )
}

export default FaqValoraciones;