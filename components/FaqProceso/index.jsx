import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./faq.module.scss";
const FaqProceso = () => {
  const { t } = useTranslation('FaqProceso')
  return (
    <Fragment>
      <div className={styles.textContainer}>
        <p>{t('p1')}</p>
        <hr className={styles.separator} />
        <p>{t('p2')}</p>
        <hr className={styles.separator} />
        <p>{t('p3')}</p>
        <hr className={styles.separator} />
        <p>{t('p4')}</p>
        <hr className={styles.separator} />
        <p>{t('p5')}</p>
        <hr className={styles.separator} />
        <p>{t('p6')}</p>
        <hr className={styles.separator} />
        <p>{t('p7')}</p>
        <hr className={styles.separator} />
        <p>{t('p8')}</p>
        <hr className={styles.separator} />
        <p>{t('p9')}</p>
        <hr className={styles.separator} />
        <p>{t('p10')}</p>
        <hr className={styles.separator} />
        <p>{t('pn')}</p>
      </div>
    </Fragment>
  )
}

export default FaqProceso;