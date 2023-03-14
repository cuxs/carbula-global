import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from "./faq.module.scss";
import { getCountryName } from '../../utils/helpers';
const FaqPreguntasFrecuentes = (country_code) => {
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Qué servicio ofrecen a la hora de la venta de autos?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Seguridad: garantizamos el cobro del dinero por la venta de tu vehículo y evitamos que negocies y te reúnas con desconocidos.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Comodidad: gestionamos todo el papeleo para que no tengas que moverte de tu hogar ni encargarte de nada.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Mayor ganancia: vendemos por hasta por hasta un 25% más de dinero que en medios tradicionales (por ej. automotoras, Kavak y OLX).</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Qué hacen exactamente para vender mi auto?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Publicamos tu auto en los portales más importantes (Mercado Libre y nuestro catálogo).</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Pagamos anuncios premium en todas las plataformas de compraventa de vehículos seminuevos.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Atendemos a las personas interesadas en tu auto y respondemos a todas sus consultas.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Lideramos todo el proceso de venta para que no tengas que encargarte de absolutamente nada.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>5.Gestionamos todo el papeleo para garantizar el cobro seguro por la venta del automóvil.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>6.Concretamos la venta de tu seminuevo y garantizamos una operación 100% segura sin fricciones.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>7.Inspeccionamos los autos para garantizar que el comprador tenga información veraz acerca del estado real del vehículo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>8.Ofrecemos variedad de métodos de pago (transferencia bancaria, depósitos y tarjetas de crédito) para mayor comodidad del comprador.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>9.Ofrecemos financiamiento a través de las instituciones más importantes y aceptamos retomas mediante automotoras para atraer a un mayor caudal de interesados.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Puedo vender mi vehículo de inmediato?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>En caso de que necesites vender tu auto de manera inmediata, podemos hacerte una oferta a través de una automotora que forma parte de nuestra red de aliados.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Usualmente, esta opción te dejará menos dinero de bolsillo (aproximadamente entre un 20% y un 30% menos) pero soluciona de manera inmediata el problema de venta del automóvil.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Asimismo, en caso de que necesites vender para comprar otro seminuevo, podemos ofrecerte una solución a medida ya que también vendemos autos usados.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>
      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Es seguro vender un seminuevo así?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>Lo es, ya que te garantizamos:</p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Investigar el background del comprador antes de concretar la operación.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Velar por la seguridad de tus fondos a la hora de la venta de tu vehículo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Recibir el dinero antes de firmar y entregar tu auto.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Realizar operaciones digitales, con cifrado de extremo a extremo, para la protección de tus datos personales. </ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>5.Darte el 100% de la información sobre cómo se encuentra el mercado para recomendarte el precio más competitivo. </ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>6.Vender tu auto en una de las plataformas mejor valoradas en Google.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Qué tipo de autos aceptan?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <p>Aceptamos todas las marcas y modelos de auto siempre y cuando cumplan con las siguientes características: </p>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>1.Que tengan menos de 10 años de antigüedad.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>2.Que tengan menos de 150.000 kilómetros.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>3.Que tengan menos de 20.000 kilómetros por año.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>4.Que tengan menos de 5 dueños. </ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>5.Que sean de uso particular.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Cuál es el primer paso para vender mi usado?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Para vender tu vehículo con Cárbula, lo primero que tienes que hacer es ingresar los datos del auto en nuesta web. El segundo paso es coordinar una inspección mecánica virtual 100% gratuita para que podamos corroborar el estado del vehículo.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Una vez aprobado el protocolo de inspección, tu auto pasará a formar parte de nuestro stock y comenzaremos a publicarlo en los portales más importantes de {getCountryName(country_code)} y a pagar anuncios premium para atraer al comprador ideal.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Luego, podrás relajarte mientras vendemos tu auto por ti de manera segura, cómoda y con un mayor margen de ganancia.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>

      <AccordionItem className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <span itemspanrop="name">¿Quiénes son?</span>
          </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Somos una plataforma de compra y venta de vehículos usados que lleva más de 1000 operaciones concretadas y contamos con el apoyo de los inversionistas más activos de la región (CORFO, Start-Up Chile, Grupo Kauffman, Güil Ventures, Seedstars International, ANII, Embarca, Start-Up Perú, ProInnóvarte y UTEC Ventures).</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Nuestro comienzo data de octubre del 2019 por dos emprendedores argentinos, Martín Salassa y Nicolás Ochoa, y actualmente somos una de las plataformas mejor valoradas del país.</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>En Cárbula vemos la posibilidad de impactar positivamente en la vida de millones de personas que hoy venden su auto de manera ineficiente (perdiendo tiempo, ganando menos dinero del que deberían, y desarrollando patrones de estrés y ansiedad durante las transacciones).</ol></ul>
            </div>
          </div>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <ul><ol>Buscamos dejar atrás el marco de informalidad que conlleva la compraventa de seminuevos y mejorar la experiencia gracias al potencial que creemos que tiene la tecnología para solventar problemas cotidianos como es la venta o compra de un auto.</ol></ul>
            </div>
          </div>
        </AccordionItemPanel>
        
      </AccordionItem>
      
    </Accordion>
  )
}

export default FaqPreguntasFrecuentes;