import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useTranslation } from 'react-i18next';
import styles from "./faq.module.scss";
const FaqCotization = () => {
  const { t } = useTranslation('FaqCotization')
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          {t('label1')}
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>{t('p1')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          {t('label2')}
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('p2')}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          {t('label3')}
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>{t('p3')}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqCotization;