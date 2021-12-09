import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from "./faq.module.scss";
const FaqComponent = () => {
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
            ¿Por qué Cárbula?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>Porque vendemos tu vehículo maximizando tu ganancia hasta un 25%. Además nuestros servicios te permiten incrementar sustancialmente las chances de vender tu vehículo, sin negociar con extraños, sin correr el riesgo de reunirte con compradores a solas y sin preocuparte por los trámites y el pago.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Cómo se define el valor de mi vehículo?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>Nuestro cotizador analiza en tiempo real miles de datos para calcular su valor promedio en el mercado. La estimación, libre de especulación, se basa en los detalles del vehículo, la demanda en su región y el estado estimado. Luego de su inspección a domicilio, donde evaluamos la condición estética y mecánica en que se encuentra, componemos juntos el precio final de forma justa y transparente.</p>
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
          <p>Si, al tasar tu vehículo definimos el precio de venta al que será publicado. Este monto está compuesto por: costos del Servicio Cárbula, tu ganancia en mano (libre de gastos al momento de la venta), y un monto disponible como margen de negociación para negociar con los compradores (Si no lo utilizamos, lo repartimos en partes iguales entre vos y nosotros).</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Ustedes compran mi vehículo?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>No, en Cárbula nos encargamos de venderlo por vos sin que tengas que ocuparte de nada. Luego de realizar su tasación online y agendar el encuentro para llevar a cabo la inspección técnica y toma de fotografías a domicilio, tu vehículo pasa a formar parte de nuestro stock y un Asesor Cárbula, designado especialmente a su caso, será el encargado de todo el proceso de venta.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Qué hace un Asesor Cárbula designado?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>Él se encargará de la venta de tu vehículo de principio a fin. Además de mantenerte actualizado acerca de las mejores ofertas, de atender a los interesados y de coordinar la muestra de tu vehículo; llevará a cabo los trámites de transferencia y te garantiza el cobro de forma 100% segura al concretar la venta.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Qué sucede si vendo a una consesionaria?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>Es una buena opción si conocés a revendedores serios y no te importa recibir entre un 20% y un 30% menos que el precio promedio (es natural, ya que el revendedor necesita un margen para pagar sus costos fijos). Si necesitás vender rápidamente, esta es sin duda la mejor manera, y podés contar con nosotros para ayudarte en el proceso, ya que estamos conectados con una sólida red de concesionarias acreditadas.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          ¿Cuándo recibo mi pago?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel  className={styles.accordion__panel}>
          <p>En el mismo momento en que se transfiera tu vehículo al nuevo propietario. Trabajamos con formas de pago confiables que nos permitan garantizar el cobro y la responsabilidad por el vehículo vendido.</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqComponent;