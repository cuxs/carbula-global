import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from "./faq.module.scss";
const FaqPreguntasFrecuentes = () => {
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Cómo comprar un auto usado en Cárbula?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Ingresa a nuestro <a href="https://catalogo.carbula.ar/" target="__blank">catálogo de autos.</a></ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Haz click en el botón "Me interesa" del auto de tu interés.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Completa el formulario con tus datos y…listo. Uno de nuestros asesores se comunicará contigo para compartirte más información.
              Para más detalles acerca del proceso de compra, <a href="/como-comprar" target="__blank">haz click aquí.</a></ol></ul>
            </div>
          </div>

        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Qué opciones de financiamiento hay para comprar un auto usado en Cárbula?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Pagar con tarjeta de crédito de los bancos más importantes de Chile.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Financiamiento entre el 30% y el 70% del valor del auto.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Cuáles son los requisitos para acceder al financiamiento en Cárbula?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Renta mínima mensual y líquida de 550.000 CLP</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Un año (1) y medio de antigüedad laboral con el mismo empleador.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Veinte y ocho (28) cotizaciones en AFP sin interrupciones.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Contar con el 30% del valor del vehículo.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Cuáles son los métodos de pago para comprar un seminuevo?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>Lo es, ya que te garantizamos:</p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Transferencia bancaria.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Vale vista.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Efectivo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Tarjetas de crédito (trabajamos con los bancos más importantes de Chile).</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>5.También aceptamos autos como parte de pago.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Aceptan mi auto como parte de pago?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>Así es. Solo necesitamos que tu auto:</p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Tenga menos de 10 años de antigüedad.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Tenga menos 150.000 kilómetros.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Tenga todos los papeles al día.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Realizar operaciones digitales, con cifrado de extremo a extremo, para la protección de tus datos personales. </ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>5.Tenga menos de 5 dueños. </ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>6.No esté prendado ni rematado.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Inspeccionan los autos antes de venderlos?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Sí, todos los autos del catálogo aprueban un protocolo de inspección realizado por un mecánico profesional que cuenta con más de 150 puntos de revisión.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Siempre te brindaremos toda la información para que puedas tomar una decisión 100% informada.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">Todavía no sé qué auto comprar, ¿me pueden asesorar?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
        <p>Podemos brindarte asesoramiento para ayudarte a elegir el auto que mejor se adapte a ti. Lo más importante es que definas:</p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Presupuesto.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Qué tipo de uso le darás.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Si quieres automático o manual.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Si quieres alguna marca/modelo específico.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Los autos Cárbula tienen todos los papeles al día?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
        <p>Todos nuestros autos tienen la documentación al día. Esto incluye:</p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Mantención.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Revisión técnica.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Permiso de circulación.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Certificado de emisiones.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Qué hacen exactamente si quiero comprar un auto?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Proporcionamos variedad de métodos de pago a la hora de la compra de un seminuevo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Realizamos inspecciones profesionales aplicando un riguroso protocolo de inspección mecánico y técnico para conocer el estado de cada vehículo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Brindamos opciones de financiamiento de hasta el 70% del valor del vehículo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Proporcionamos asesoramiento para ayudarte a elegir el auto que mejor se adapte a ti.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Es seguro comprar un auto de manera online?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
        <p>Lo es, ya que garantizamos:</p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Darte el 100% de la información a la hora de la compra.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Operaciones con autos que tengan todos los papeles al día.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Inspecciones mecánicas profesionales para conocer el estado real del vehículo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Transacciones confiables <a href="https://bit.ly/3SFPe0R" target="__blank">(mirá las reseñas positivas de nuestros clientes).</a></ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      
    </Accordion>
  )
}

export default FaqPreguntasFrecuentes;