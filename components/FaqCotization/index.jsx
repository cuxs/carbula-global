import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from "./faq.module.scss";
const FaqCotization = () => {
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          Tu auto se queda con vos
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>Mientras tanto, un asesor dedicado exclusivamente a tu caso, se encargará de encontrar a los mejores compradores. El será quien muestre tu auto e interactúe con los interesados para conseguir el mejor negocio posible sin que tengas que ocuparte de nada.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          Precio justo y honesto
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>Gracias al innovador uso de la tecnología, nuestra plataforma analiza millones de datos en tiempo real. Esto, sumado a la estructura liviana de nuestra empresa, nos permite vender tu auto muy rápido, a un precio muy conveniente, competitivo, y libre de especulación.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          No compramos tu auto
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>Nos encargamos de todo el proceso de venta, de principio a fin, para que puedas desentenderte por completo. Cuando vendamos tu auto, también coordinaremos todo el papeleo y te garantizamos el pago seguro en tiempo y forma.</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqCotization;