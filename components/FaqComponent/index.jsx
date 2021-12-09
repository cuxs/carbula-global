import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useTranslation } from 'react-i18next';
import styles from "./faq.module.scss";
const FaqComponent = () => {
  const { t } = useTranslation('FaqComponent')
  const router = useRouter()
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
            ¿Por qué Cárbula?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>{t('porqueCarbula')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Cómo se define el valor de mi vehículo?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('valorVehiculo')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <span className={styles['desktop-only']}>¿La tasación incluye costos por su servicio?</span>
          <span className={styles['mobile-only']}>¿La tasación incluye su servicio?</span>
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('tasacion')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Ustedes compran mi vehículo?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('ustedesCompran')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Qué hace un Asesor Cárbula designado?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('queHaceAsesor')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Qué sucede si vendo a una {t('consesionaria')}?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('siVendoConsesionaria')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Cuándo recibo mi pago?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('cuandoMePagan')}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqComponent;