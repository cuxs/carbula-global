
//import 'semantic-ui-css/semantic.min.css'
import styles from './creditos.module.scss'
import Head from '../../components/CustomHeads/headCreditosAutos';
import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Button,
  Container,
  Divider,
  Card,
  Grid,
  Header,
  Image,
  List,
  Icon,
  Menu,
  Sidebar,
  Visibility,
  Segment,
} from 'semantic-ui-react'
import { SANTANDER_URL_PRODUCTION, SANTANDER_SPID_PRODUCTION, SANTANDER_OHASH } from '../../utils/constants';
import { getCountryCode, getWhatsappNumber } from '../../utils/helpers';

export async function getServerSideProps(context) {
  return {
    props: {
      COUNTRY_CODE: getCountryCode(context.locale),
      ...(await serverSideTranslations(context.locale, ['FooterInfo'])),
    }
  }
}

const CreditosAutos = ({COUNTRY_CODE}) => {
  const router = useRouter()
  const FaqCreditosAutos = dynamic(import('../../components/FaqCreditosAutos'))
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="Comprá tu auto con financiamiento Santander | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
          <Container>
            <h1>Comprá tu auto con financiamiento</h1>
            <div className={styles.buttons__container}>
              <Button primary>Simulá tu préstamo</Button>
            </div>
          </Container>
        </div>
        
        <div className={styles.financiamiento}>
          <h2><b>Banco Santander</b> se une a Cárbula para que puedas financiar la compra de tu próximo usado. ¿Cómo podés hacerlo? En 3 simples pasos.</h2>
        </div>

        <div className={styles.card}>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated='center'
                  size='small'
                  src='/images/carbula-santander.webp'
                  alt='Preclasificá para tu crédito Santander'
                  title='Preclasificá para tu crédito Santander'
                />
                <Card.Header><b>PASO 1:</b> Pre-clasificá</Card.Header>
                <Card.Description>
                  <p>Ingresá tu correo electrónico, teléfono, y CUIT o CUIL,
                    y pre-calificá para un préstamo Santander en tan solo 2 minutos.</p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra >
                <List>
                  <List.Item as='a'><p><a target="__blank" href={`https://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola%2C+necesito+financiar+la+compra+de+un+auto`}>Más información</a></p></List.Item>
                </List>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='center'
                  size='small'
                  src='/images/carbula-autos-usados.webp'
                  alt='Elegí tu auto en el catálogo Cárbula Argentina'
                  title='Elegí tu auto en el catálogo Cárbula Argentina'
                />
                <Card.Header><b>PASO 2:</b> Elegí tu auto</Card.Header>
                <Card.Description>
                  <p>Encontrá tu próximo auto en nuestro catálogo. Si no sabés cuál elegir, te ofrecemos asesoramiento para descubrir el auto que mejor se adapta a tus necesidades.</p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <List>
                  <List.Item as='a'><p><a target="__blank" href={`https://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola%2C+necesito+financiar+la+compra+de+un+auto`}>Más información</a></p></List.Item>
                </List>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='center'
                  size='small'
                  src='/images/auto-carbula.webp'
                  alt='Financiá tu vehículo Cárbula, simulá tu préstamo Santander'
                  title='Financiá tu vehículo Cárbula, simulá tu préstamo Santander'
                />
                <Card.Header><b>PASO 3:</b> Financiá tu vehículo</Card.Header>
                <Card.Description>
                  <p>Accedé a un crédito Santander para financiar hasta el 95% del valor del auto de manera inmediata.</p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className={styles.buttons__container}>
                  <a target="__blank" href={`${SANTANDER_URL_PRODUCTION[COUNTRY_CODE]}ohash=${SANTANDER_OHASH[COUNTRY_CODE]}&spid=${SANTANDER_SPID_PRODUCTION[COUNTRY_CODE]}`}><Button fluid>Simulá tu préstamo</Button></a>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>

        <div className={styles.creditos}>
          <h3>¿Por qué comprar en nuestra plataforma?</h3>
          <Container>
          <div class="ui cards"><div class="ui card">
          <div class="content">
          <div class="header">
          <Image src='/images/avatar.png'></Image>
          </div><div class="header"><h4>Confianza</h4></div>
          <div class="description">Brindamos operaciones de compra y venta 100% seguras.</div>
          </div>
          </div>
        </div>
        <div class="ui cards"><div class="ui card">
          <div class="content">
          <div class="header">
          <Image src='/images/avatar.png'></Image>
          </div><div class="header"><h4>Simpleza</h4></div>
          <div class="description">Comprar es conveniente gracias a los préstamos Santander.</div>
          </div>
          </div>
        </div>
        <div class="ui cards"><div class="ui card">
          <div class="content">
          <div class="header">
          <Image src='/images/avatar.png'></Image>
          </div><div class="header"><h4>Garantía</h4></div>
          <div class="description">Todos nuestros autos aprobaron una instancia de inspección mecánica.</div>
          </div>
          </div>
        </div>
        </Container>
        </div>

        <div className={styles.faq}>
        <FaqCreditosAutos/>
        </div>
        <section>
          <FooterInfo grey country_code={'ar'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-CL') {
    return (
      <div>
        <Head title="Credito automotriz | Carbula Autos Chile" />
        <Nav />
        <div className={styles.header}>
          <h1>Comprá tu auto Cárbula con financiamiento</h1>
        </div>
        <div className={styles.creditos}>
          <h4>Aceptación de los términos, condiciones y políticas de privacidad</h4>
          <p>Al usar nuestra plataforma y los servicios que proponemos, usted acepta los términos y condiciones establecidos en el presente apartado. Estos Términos de uso ("Términos") rigen su acceso y uso de los servicios y propuestas (colectivamente, "Servicios") por www.carbula.com o www.carbula.cl, incluidas nuestras filiales y subsidiarias (colectivamente, “CÁRBULA”, "Cárbula", "nosotros”, "Nosotros" o "nuestro"). Estos Términos se aplican a todos los Servicios de CÁRBULA, incluido cualquier sitio web o aplicación móvil que ponemos a su disposición.Por favor, lea atentamente los términos de servicios detallados en este apartado: Al utilizar los servicios, acepta estar obligado por estos términos. Si no está de acuerdo con éstos términos, no puede acceder o utilizar los servicios que propone Cárbula S.P.A., RUT Nº 77058168-0, con domicilio fiscal en La Capitanía 80, Oficina 108, Las Condes, Santiago de Chile y comercial en Monjitas 565, Santiago Centro, Santiago de Chile (en adelante “CÁRBULA”).</p>
          <p>Todas las referencias a "usted", "su", “vendedor”, “dueño directo” o “consignante”, según corresponda, se refieren a la persona que accede, participa y/o utiliza los servicios de CÁRBULA, de cualquier modo y/o manera. Si utiliza los Servicios en nombre de una entidad u otra persona, declara y garantiza que tiene la autoridad suficiente para obligar a esa entidad o persona que invoca. Su aceptación de los términos de servicios detallados en este apartado, se considerará una aceptación por parte de esa entidad o persona, y "usted" invoca a esa entidad, sus directores, funcionarios, empleados y/o a cualquier apoderado.</p>
          <h4>Elegibilidad y Foco</h4>
          <p>Al suscribirse para utilizar los servicios de CÁRBULA, usted declara que tiene 18 años de edad o más y comprende las obligaciones y acepta los términos establecidos en el presente apartado. Además, declara que la información proporcionada es de su propiedad y no está utilizando datos ajenos sin la debida autorización.</p>
          <h4>Venta de vehículos en consignación</h4>
          <p>CÁRBULA, a pedido del dueño directo o vendedor, se compromete a prestar servicios para la venta un vehículo de propiedad de este último a través de la modalidad “venta por consignación”. El vendedor otorga expresa autorización a CÁRBULA, para realizar todas las acciones vinculadas necesariamente con el fin de la venta del vehículo vinculado a la aceptación del servicio.</p>
          <h4>Estimación del valor del vehículo</h4>
          <p>Al ingresar la información del vehículo que pretende vender o comprar en nuestro sistema, ya sea en el sitio web, webapp o app, los USUARIOS obtendrán una estimación previa del precio al que se podrá vender o comprar el vehículo (el "Estimado"), calculado según parámetros generados por CÁRBULA.</p>
          <p>CÁRBULA no se hace responsable de las discrepancias o diferencias en los precios generadas a partir de información inexacta, falsa o errónea proporcionada por los USUARIOS, influyendo en la estimación brindada por CÁRBULA.</p>
          <p>Los usuarios entienden y aceptan que el valor estimado proporcionado en el Sitio no es vinculante, brindando solo un parámetro de referencia a los USUARIOS, ya que el precio de la operación dependerá de la aceptación de los USUARIOS y las las condiciones generales del vehículo, técnicas o documentales.</p>
          <p>Una vez establecido el precio por el USUARIO, con fines de comercialización y logro del objetivo, Cárbula revisará periódicamente las publicaciones, sugiriendo nuevos ajustes que permitan la venta en el tiempo estipulado por ambas partes.</p>
          <h4>Situación del vehículo involucrado en la comercialización</h4>
          <p>Con la aceptación de los presentes términos de servicio, el dueño directo o vendedor manifiesta estar en conocimiento de que al momento de concretar la venta efectiva del vehículo, será “su” responsabilidad poner a disposición de CÁRBULA los siguientes documentos: a).Título que acredita la propiedad del vehículo, en original. b).Estado de infracciones vehiculares al día. c).Verificación técnica policial. d). Libre deuda de impuestos Nacionales y Provinciales.</p>
          <h4>Posesión física del vehículo</h4>
          <p>El dueño directo o vendedor no se compromete a otorgar la posesión física del vehículo a CÁRBULA, sin perjuicio de que autoriza a exhibirlo cuando CÁRBULA así lo disponga, prestando la colaboración necesaria para tal fin.</p>
          <h4>Autorización</h4>
          <p>El dueño directo o vendedor autoriza a CÁRBULA a realizar todas las acciones vinculadas a la gestión de venta del vehículo.</p>
          <h4>Información personal</h4>
          <p>CÁRBULA se compromete a no divulgar información personal del dueño directo o vendedor, sin autorización expresa del mismo.</p>
          <h4>Cesión de imágenes</h4>
          <p>CÁRBULA está autorizado a distribuir y utilizar las imágenes relacionadas con la venta, promoción y cierre de operaciones de los vehículos comercializados en la plataforma.</p>
          <h4>Duración del vínculo con CÁRBULA</h4>
          <p>El acuerdo entre CÁRBULA y el USUARIO que decide contratar los servicios, se mantendrá vigente hasta lograr la venta efectiva del vehículo o bien, hasta que el usuario decida de forma unilateral dar por concluida la utilización de los servicios de CÁRBULA, lo que ocurra primero.</p>
          <p>A su vez, CÁRBULA podrá dar por finalizada la relación si así lo dispone, salvo en caso de haber recibido el monto de la venta del vehículo por parte de algún potencial comprador, en cuyo caso el acuerdo sólo podrá terminarse mediante la venta efectiva y completa del vehículo, incluyendo la transferencia de los fondos al vendedor.</p>
          <p>Al adherirse a estos términos de uso, y mientras desee estar vinculado a CÁRBULA, el usuario vendedor le otorga a CÁRBULA la autorización para realizar publicidad, comercialización y gestión de venta de su vehículo, hasta que expresamente comunique su desvinculación. </p>
          <h4>Monto estimado</h4>
          <p>CÁRBULA estima y propone un dinero en mano para el usuario vendedor, libre de cualquier costo adicional, al momento de la venta. Este monto estimado será consensuado con el dueño directo o vendedor y aceptado de manera expresa, ya sea con la aprobación mediante el agendamiento de inspección, firma del acuerdo de servicio, aceptación de los presentes Términos & Condiciones, mensajería (WhatsApp o similar) o correo electrónico, según corresponda y con la misma validez de las vías de confirmación elegidas. Cualquier ofrecimiento de interesados, diferente al monto autorizado por el vendedor, será consultado y analizado como caso puntual, para proceder con la venta.</p>
          <h4>Reserva del vehículo</h4>
          <p>Al aceptar los presentes términos de uso, el vendedor le permite a CÁRBULA aceptar y firmar en su nombre, la reserva de venta del vehículo. Si la oferta, por algún motivo, es diferente al monto acordado, se necesitará una aprobación de forma expresa por parte del consignante -via Mail, SMS o WhatsApp-, para la aceptación de la reserva realizada por el potencial comprador.</p>
          <h4>Venta del vendedor</h4>
          <p>Si el vendedor logra vender el vehículo durante el período de validez del presente acuerdo, está obligado a avisar a CÁRBULA de manera inmediata. Si no comunica la efectiva venta y CÁRBULA reserva el vehículo con otro comprador, se debe pagar el 100% de la comisión estipulada con CÁRBULA.</p>
          <h4>Violación al trabajo realizado por CÁRBULA</h4>
          <p>Si el vendedor logra vender el vehículo a un comprador que fue gestionado, curado y puesto en contacto a través de la gestión de CÁRBULA, cualquiera sea el momento en que la venta se materialice, deberá abonar el 100% de la comisión pactada, atendiendo a que la venta se realizó sobre la base del trabajo realizado por CÁRBULA.</p>
          <h4>Responsabilidad de las partes</h4>
          <p>Tanto VENDEDOR como COMPRADOR reconocen que el vehículo objeto de la transacción está siendo vendido por el usuario VENDEDOR, y no por CÁRBULA, que solo actúa como mero intermediario y facilitador de la operación de compra-venta, y no se hace responsable de ningún tipo de garantía sobre el vehículo. Si el COMPRADOR elige comprar un producto de garantía ADICIONAL ofrecido por CÁRBULA, el COMPRADOR reconoce que Cárbula es exclusivamente un intermediario en la venta de un producto de TERCEROS y que el uso de este por parte del COMPRADOR debe realizarse directamente con el TERCERO y no con CÁRBULA. El COMPRADOR también reconoce haber leído todas las especificaciones técnicas de dicho producto de garantía, que tiene un alcance limitado y que solo se aplica a determinados componentes del vehículo así como a determinadas situaciones de desperfecto o mal funcionamiento.</p>
          <h4>General. Ley que rige</h4>
          <p>Usted acepta que: (i) los Servicios se considerarán únicamente basados ​​en la República Argentina; y (ii) los Servicios no darán lugar a la jurisdicción personal sobre la empresa Cárbula, ya sea específica o general, en jurisdicciones distintas de la República Argentina. Estos Términos se regirán en todos los aspectos por las leyes de la República Argentina, sin tener en cuenta sus principios de conflicto de leyes. Se excluye expresamente la aplicación de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías. Cualquier reclamo o disputa que surja en relación con los Servicios se decidirá exclusivamente por un tribunal de jurisdicción competente ubicado en la República Argentina, y usted acepta la jurisdicción personal y lugar en dichos tribunales y renuncia a todas y cada una de las defensas u objeciones jurisdiccionales y de lugar disponibles de otra manera.</p>
          <h4>Renuncia</h4>
          <p>Ninguna renuncia a ningún término de estos Términos se considerará una renuncia adicional o continua de dicho término o de cualquier otro término, y el hecho de que CÁRBULA no haga valer ningún derecho o disposición en virtud de estos Términos no constituirá una renuncia a dicho derecho o disposición.</p>
          <h4>Fuerza mayor</h4>
          <p>Ni CÁRBULA ni el usuario serán responsables ante el otro por cualquier retraso o falla en el cumplimiento de los Términos que surjan de una causa que esté fuera de su control y sin su culpa o negligencia. Dichas causas pueden incluir, entre otras, incendios, inundaciones, terremotos, huelgas, falta de disponibilidad de servicios públicos necesarios, apagones, actos de guerra declarada o no declarada, actos de agencias reguladoras o desastres nacionales.</p>
          <h4>No hay terceros beneficiarios</h4>
          <p>Usted acepta que, salvo que se indique expresamente lo contrario en estos Términos, no habrá terceros beneficiarios de estos Términos.</p>
          <h4>Transferibilidad y asignabilidad</h4>
          <p>Usted no puede transferir ni asignar estos Términos, ni los derechos y licencias otorgados en virtud del presente, pero CÁRBULA puede asignarlos sin restricciones. Cualquier intento de transferencia o asignación en violación del presente será nulo y sin efecto. Estos Términos obligan y redundan en beneficio de cada parte y los sucesores y cesionarios permitidos de la parte.</p>
          <h4>Contactanos</h4>
          <i>Si tiene alguna pregunta sobre estos Términos o los Servicios, comuníquese con nosotros por correo electrónico a <a href="mailto:hola@carbula.cl"><strong>hola@carbula.cl</strong></a></i>
        </div>
        <FaqCreditosAutos/>
        <hr></hr>
        <section>
          <FooterInfo grey country_code={'cl'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-MX') {
    return (
      <div>
        <Head title="Credito automotriz | Carbula Autos Mexico" />
        <Nav />
        <div className={styles.header}>
          <h1>Comprá tu auto Cárbula con financiamiento</h1>
        </div>
        <div className={styles.creditos}>
          <h4>Aceptación de los términos, condiciones y políticas de privacidad</h4>
          <p>Al usar nuestra plataforma y los servicios que proponemos, usted acepta los términos y condiciones establecidos en el presente apartado. Estos Términos de uso ("Términos") rigen su acceso y uso de los servicios y propuestas (colectivamente, "Servicios") por www.carbula.com o www.carbula.cl, incluidas nuestras filiales y subsidiarias (colectivamente, “CÁRBULA”, "Cárbula", "nosotros”, "Nosotros" o "nuestro"). Estos Términos se aplican a todos los Servicios de CÁRBULA, incluido cualquier sitio web o aplicación móvil que ponemos a su disposición.Por favor, lea atentamente los términos de servicios detallados en este apartado: Al utilizar los servicios, acepta estar obligado por estos términos. Si no está de acuerdo con éstos términos, no puede acceder o utilizar los servicios que propone Cárbula S.A.P.I. de C.V., RFC Nº CAR220110RY7, con domicilio fiscal Bosques de reforma 1477, Cuajimalpa de Morelos, Ciudad de México (en adelante “CÁRBULA”).</p>
          <p>Todas las referencias a "usted", "su", “vendedor”, “dueño directo” o “consignante”, según corresponda, se refieren a la persona que accede, participa y/o utiliza los servicios de CÁRBULA, de cualquier modo y/o manera. Si utiliza los Servicios en nombre de una entidad u otra persona, declara y garantiza que tiene la autoridad suficiente para obligar a esa entidad o persona que invoca. Su aceptación de los términos de servicios detallados en este apartado, se considerará una aceptación por parte de esa entidad o persona, y "usted" invoca a esa entidad, sus directores, funcionarios, empleados y/o a cualquier apoderado.</p>
          <h4>Elegibilidad y Foco</h4>
          <p>Al suscribirse para utilizar los servicios de CÁRBULA, usted declara que tiene 18 años de edad o más y comprende las obligaciones y acepta los términos establecidos en el presente apartado. Además, declara que la información proporcionada es de su propiedad y no está utilizando datos ajenos sin la debida autorización.</p>
          <h4>Venta de vehículos en consignación</h4>
          <p>CÁRBULA, a pedido del dueño directo o vendedor, se compromete a prestar servicios para la venta un vehículo de propiedad de este último a través de la modalidad “venta por consignación”. El vendedor otorga expresa autorización a CÁRBULA, para realizar todas las acciones vinculadas necesariamente con el fin de la venta del vehículo vinculado a la aceptación del servicio.</p>
          <h4>Estimación del valor del vehículo</h4>
          <p>Al ingresar la información del vehículo que pretende vender o comprar en nuestro sistema, ya sea en el sitio web, webapp o app, los USUARIOS obtendrán una estimación previa del precio al que se podrá vender o comprar el vehículo (el "Estimado"), calculado según parámetros generados por CÁRBULA.</p>
          <p>CÁRBULA no se hace responsable de las discrepancias o diferencias en los precios generadas a partir de información inexacta, falsa o errónea proporcionada por los USUARIOS, influyendo en la estimación brindada por CÁRBULA.</p>
          <p>Los usuarios entienden y aceptan que el valor estimado proporcionado en el Sitio no es vinculante, brindando solo un parámetro de referencia a los USUARIOS, ya que el precio de la operación dependerá de la aceptación de los USUARIOS y las las condiciones generales del vehículo, técnicas o documentales.</p>
          <p>Una vez establecido el precio por el USUARIO, con fines de comercialización y logro del objetivo, Cárbula revisará periódicamente las publicaciones, sugiriendo nuevos ajustes que permitan la venta en el tiempo estipulado por ambas partes.</p>
          <h4>Situación del vehículo involucrado en la comercialización</h4>
          <p>Con la aceptación de los presentes términos de servicio, el dueño directo o vendedor manifiesta estar en conocimiento de que al momento de concretar la venta efectiva del vehículo, será “su” responsabilidad poner a disposición de CÁRBULA los siguientes documentos: a).Título que acredita la propiedad del vehículo. b).Estado de multas vehiculares al día. c).Permiso de circulación vigente. d).Revisión técnica vigente. e).Alzamiento de prenda u otra documentación necesaria para corroborar aptitud del vehículo para ser susceptible de traspaso.</p>
          <h4>Posesión física del vehículo</h4>
          <p>El dueño directo o vendedor no se compromete a otorgar la posesión física del vehículo a CÁRBULA, sin perjuicio de que autoriza a exhibirlo cuando CÁRBULA así lo disponga, prestando la colaboración necesaria para tal fin.</p>
          <h4>Autorización</h4>
          <p>El dueño directo o vendedor autoriza a CÁRBULA a realizar todas las acciones vinculadas a la gestión de venta del vehículo.</p>
          <h4>Información personal</h4>
          <p>CÁRBULA se compromete a no divulgar información personal del dueño directo o vendedor, sin autorización expresa del mismo.</p>
          <h4>Cesión de imágenes</h4>
          <p>CÁRBULA está autorizado a distribuir y utilizar las imágenes relacionadas con la venta, promoción y cierre de operaciones de los vehículos comercializados en la plataforma.</p>
          <h4>Duración del vínculo con CÁRBULA</h4>
          <p>El acuerdo entre CÁRBULA y el USUARIO que decide contratar los servicios, se mantendrá vigente hasta lograr la venta efectiva del vehículo o bien, hasta que el usuario decida de forma unilateral dar por concluida la utilización de los servicios de CÁRBULA, lo que ocurra primero.</p>
          <p>A su vez, CÁRBULA podrá dar por finalizada la relación si así lo dispone, salvo en caso de haber recibido el monto de la venta del vehículo por parte de algún potencial comprador, en cuyo caso el acuerdo sólo podrá terminarse mediante la venta efectiva y completa del vehículo, incluyendo la transferencia de los fondos al vendedor.</p>
          <p>Al adherirse a estos términos de uso, y mientras desee estar vinculado a CÁRBULA, el usuario vendedor le otorga a CÁRBULA la autorización para realizar publicidad, comercialización y gestión de venta de su vehículo, hasta que expresamente comunique su desvinculación. </p>
          <h4>Monto estimado</h4>
          <p>CÁRBULA estima y propone un dinero en mano para el usuario vendedor, libre de cualquier costo adicional, al momento de la venta. Este monto estimado será consensuado con el dueño directo o vendedor y aceptado de manera expresa, ya sea con la aprobación mediante el agendamiento de inspección, firma del acuerdo de servicio, aceptación de los presentes Términos & Condiciones, mensajería (WhatsApp o similar) o correo electrónico, según corresponda y con la misma validez de las vías de confirmación elegidas. Cualquier ofrecimiento de interesados, diferente al monto autorizado por el vendedor, será consultado y analizado como caso puntual, para proceder con la venta.</p>
          <h4>Reserva del vehículo</h4>
          <p>Al aceptar los presentes términos de uso, el vendedor le permite a CÁRBULA aceptar y firmar en su nombre, la reserva de venta del vehículo. Si la oferta, por algún motivo, es diferente al monto acordado, se necesitará una aprobación de forma expresa por parte del usuario vendedor -via Mail, SMS o WhatsApp-, para la aceptación de la reserva realizada por el potencial comprador.</p>
          <h4>Venta del vendedor</h4>
          <p>Si el vendedor logra vender el vehículo durante el período de validez del presente acuerdo, está obligado a avisar a CÁRBULA de manera inmediata. Si no comunica la efectiva venta y CÁRBULA reserva el vehículo con otro comprador, se debe pagar el 100% de la comisión estipulada con CÁRBULA.</p>
          <h4>Valorización del trabajo realizado por CÁRBULA</h4>
          <p>Si el vendedor logra vender el vehículo a un comprador que fue gestionado, curado y puesto en contacto a través de la gestión de CÁRBULA, cualquiera sea el momento en que la venta se materialice, deberá abonar el 100% de la comisión pactada.</p>
          <h4>Responsabilidad de las partes</h4>
          <p>Tanto VENDEDOR como COMPRADOR reconocen que el vehículo objeto de la transacción está siendo vendido por el usuario VENDEDOR, y no por CÁRBULA, que solo actúa como mero intermediario y facilitador de la operación de compra-venta, y no se hace responsable de ningún tipo de garantía sobre el vehículo. Si el COMPRADOR elige comprar un producto de garantía ADICIONAL ofrecido por CÁRBULA, el COMPRADOR reconoce que Cárbula es exclusivamente un intermediario en la venta de un producto de TERCEROS y que el uso de este por parte del COMPRADOR debe realizarse directamente con el TERCERO y no con CÁRBULA. El COMPRADOR también reconoce haber leído todas las especificaciones técnicas de dicho producto de garantía, que tiene un alcance limitado y que solo se aplica a determinados componentes del vehículo así como a determinadas situaciones de desperfecto o mal funcionamiento.</p>
          <h4>General. Ley que rige</h4>
          <p>Usted acepta que: (i) los Servicios se considerarán únicamente basados ​​en los Estados Unidos Mexicanos; y (ii) los Servicios no darán lugar a la jurisdicción personal sobre la empresa Cárbula, ya sea específica o general, en jurisdicciones distintas de los Estados Unidos Mexicanos. Estos Términos se regirán en todos los aspectos por las leyes de los Estados Unidos Mexicanos, sin tener en cuenta sus principios de conflicto de leyes. Se excluye expresamente la aplicación de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías. Cualquier reclamo o disputa que surja en relación con los Servicios se decidirá exclusivamente por un tribunal de jurisdicción competente ubicado en Ciudad de México, y usted acepta la jurisdicción personal y lugar en dichos tribunales y renuncia a todas y cada una de las defensas u objeciones jurisdiccionales y de lugar disponibles de otra manera.</p>
          <h4>Renuncia</h4>
          <p>Ninguna renuncia a ningún término de estos Términos se considerará una renuncia adicional o continua de dicho término o de cualquier otro término, y el hecho de que CÁRBULA no haga valer ningún derecho o disposición en virtud de estos Términos no constituirá una renuncia a dicho derecho o disposición.</p>
          <h4>Fuerza mayor</h4>
          <p>Ni CÁRBULA ni usted serán responsables ante el otro por cualquier retraso o falla en el cumplimiento de los Términos que surjan de una causa que esté fuera de su control y sin su culpa o negligencia. Dichas causas pueden incluir, entre otras, incendios, inundaciones, terremotos, huelgas, falta de disponibilidad de servicios públicos necesarios, apagones, actos de guerra declarada o no declarada, actos de agencias reguladoras o desastres nacionales.</p>
          <h4>No hay terceros beneficiarios</h4>
          <p>Usted acepta que, salvo que se indique expresamente lo contrario en estos Términos, no habrá terceros beneficiarios de estos Términos.</p>
          <h4>Transferibilidad y asignabilidad</h4>
          <p>Usted no puede transferir ni asignar estos Términos, ni los derechos y licencias otorgados en virtud del presente, pero CÁRBULA puede asignarlos sin restricciones. Cualquier intento de transferencia o asignación en violación del presente será nulo y sin efecto. Estos Términos obligan y redundan en beneficio de cada parte y los sucesores y cesionarios permitidos de la parte.</p>
          <h4>Contactanos</h4>
          <i>Si tiene alguna pregunta sobre estos Términos o los Servicios, comuníquese con nosotros por correo electrónico a <a href="mailto:hola@carbula.mx"><strong>hola@carbula.mx</strong></a></i>
        </div>
        <FaqCreditosAutos/>
        <hr></hr>
        <section>
          <FooterInfo grey country_code={'mx'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-UY') {
    return <div>
      <Head title="Credito automotriz | Carbula Autos Uruguay" />
      <Nav />
      <div className={styles.header}>
        <h1>Comprá tu auto Cárbula con financiamiento</h1>
      </div>
      <div className={styles.creditos}>
        <h4>Aceptación de los términos, condiciones y políticas de privacidad</h4>
        <p>Al usar nuestra plataforma y los servicios que proponemos, usted acepta los términos y condiciones establecidos en el presente apartado. Estos Términos de uso ("Términos") rigen su acceso y uso de los servicios y propuestas (colectivamente, "Servicios") por www.carbula.com o www.carbula.com.ar, incluidas nuestras filiales y subsidiarias (colectivamente, “CÁRBULA”, "Cárbula", "nosotros”, "Nosotros" o "nuestro"). Estos Términos se aplican a todos los Servicios de CÁRBULA, incluido cualquier sitio web o aplicación móvil que ponemos a su disposición.Por favor, lea atentamente los términos de servicios detallados en este apartado: Al utilizar los servicios, acepta estar obligado por estos términos. Si no está de acuerdo con éstos términos, no puede acceder o utilizar los servicios que propone CÁRBULA S.A.S, RUT Nº 219033680012 con domicilio fiscal en 18 de julio 1296, Montevideo, Uruguay (en adelante “CÁRBULA”).</p>
        <p>Todas las referencias a "usted", "su", “vendedor”, “dueño directo” o “consignante”, según corresponda, se refieren a la persona que accede, participa y/o utiliza los servicios de CÁRBULA, de cualquier modo y/o manera. Si utiliza los Servicios en nombre de una entidad u otra persona, declara y garantiza que tiene la autoridad suficiente para obligar a esa entidad o persona que invoca. Su aceptación de los términos de servicios detallados en este apartado, se considerará una aceptación por parte de esa entidad o persona, y "usted" invoca a esa entidad, sus directores, funcionarios, empleados y/o a cualquier apoderado.</p>
        <h4>Elegibilidad y Foco</h4>
        <p>Al suscribirse para utilizar los servicios de CÁRBULA, usted declara que tiene 18 años de edad o más y comprende las obligaciones y acepta los términos establecidos en el presente apartado. Además, declara que la información proporcionada es de su propiedad y no está utilizando datos ajenos sin la debida autorización.</p>
        <h4>Venta de vehículos en consignación</h4>
        <p>CÁRBULA, a pedido del dueño directo o vendedor, se compromete a prestar servicios para la venta un vehículo de propiedad de este último a través de la modalidad “venta por consignación”. El vendedor otorga expresa autorización a CÁRBULA, para realizar todas las acciones vinculadas necesariamente con el fin de la venta del vehículo vinculado a la aceptación del servicio.</p>
        <h4>Estimación del valor del vehículo</h4>
        <p>Al ingresar la información del vehículo que pretende vender o comprar en nuestro sistema, ya sea en el sitio web, webapp o app, los USUARIOS obtendrán una estimación previa del precio al que se podrá vender o comprar el vehículo (el "Estimado"), calculado según parámetros generados por CÁRBULA.</p>
        <p>CÁRBULA no se hace responsable de las discrepancias o diferencias en los precios generadas a partir de información inexacta, falsa o errónea proporcionada por los USUARIOS, influyendo en la estimación brindada por CÁRBULA.</p>
        <p>Los usuarios entienden y aceptan que el valor estimado proporcionado en el Sitio no es vinculante, brindando solo un parámetro de referencia a los USUARIOS, ya que el precio de la operación dependerá de la aceptación de los USUARIOS y las las condiciones generales del vehículo, técnicas o documentales.</p>
        <p>Una vez establecido el precio por el USUARIO, con fines de comercialización y logro del objetivo, Cárbula revisará periódicamente las publicaciones, sugiriendo nuevos ajustes que permitan la venta en el tiempo estipulado por ambas partes.</p>
        <h4>Situación del vehículo involucrado en la comercialización</h4>
        <p>Con la aceptación de los presentes términos de servicio, el dueño directo o vendedor manifiesta estar en conocimiento de que al momento de concretar la venta efectiva del vehículo, será “su” responsabilidad poner a disposición de CÁRBULA los siguientes documentos: a).Título que acredita la propiedad del vehículo, en original. b).Estado de infracciones vehiculares al día. c).Verificación técnica policial. d). Libre deuda de impuestos Nacionales y Provinciales.</p>
        <h4>Posesión física del vehículo</h4>
        <p>El dueño directo o vendedor no se compromete a otorgar la posesión física del vehículo a CÁRBULA, sin perjuicio de que autoriza a exhibirlo cuando CÁRBULA así lo disponga, prestando la colaboración necesaria para tal fin.</p>
        <h4>Autorización</h4>
        <p>El dueño directo o vendedor autoriza a CÁRBULA a realizar todas las acciones vinculadas a la gestión de venta del vehículo.</p>
        <h4>Información personal</h4>
        <p>CÁRBULA se compromete a no divulgar información personal del dueño directo o vendedor, sin autorización expresa del mismo.</p>
        <h4>Cesión de imágenes</h4>
        <p>CÁRBULA está autorizado a distribuir y utilizar las imágenes relacionadas con la venta, promoción y cierre de operaciones de los vehículos comercializados en la plataforma.</p>
        <h4>Duración del vínculo con CÁRBULA</h4>
        <p>El acuerdo entre CÁRBULA y el USUARIO que decide contratar los servicios, se mantendrá vigente hasta lograr la venta efectiva del vehículo o bien, hasta que el usuario decida de forma unilateral dar por concluida la utilización de los servicios de CÁRBULA, lo que ocurra primero.</p>
        <p>A su vez, CÁRBULA podrá dar por finalizada la relación si así lo dispone, salvo en caso de haber recibido el monto de la venta del vehículo por parte de algún potencial comprador, en cuyo caso el acuerdo sólo podrá terminarse mediante la venta efectiva y completa del vehículo, incluyendo la transferencia de los fondos al vendedor.</p>
        <p>Al adherirse a estos términos de uso, y mientras desee estar vinculado a CÁRBULA, el usuario vendedor le otorga a CÁRBULA la autorización para realizar publicidad, comercialización y gestión de venta de su vehículo, hasta que expresamente comunique su desvinculación. </p>
        <h4>Monto estimado</h4>
        <p>CÁRBULA estima y propone un dinero en mano para el usuario vendedor, libre de cualquier costo adicional, al momento de la venta. Este monto estimado será consensuado con el dueño directo o vendedor y aceptado de manera expresa, ya sea con la aprobación mediante el agendamiento de inspección, firma del acuerdo de servicio, aceptación de los presentes Términos & Condiciones, mensajería (WhatsApp o similar) o correo electrónico, según corresponda y con la misma validez de las vías de confirmación elegidas. Cualquier ofrecimiento de interesados, diferente al monto autorizado por el vendedor, será consultado y analizado como caso puntual, para proceder con la venta.</p>
        <h4>Reserva del vehículo</h4>
        <p>Al aceptar los presentes términos de uso, el vendedor le permite a CÁRBULA aceptar y firmar en su nombre, la reserva de venta del vehículo. Si la oferta, por algún motivo, es diferente al monto acordado, se necesitará una aprobación de forma expresa por parte del consignante -via Mail, SMS o WhatsApp-, para la aceptación de la reserva realizada por el potencial comprador.</p>
        <h4>Venta del vendedor</h4>
        <p>Si el vendedor logra vender el vehículo durante el período de validez del presente acuerdo, está obligado a avisar a CÁRBULA de manera inmediata. Si no comunica la efectiva venta y CÁRBULA reserva el vehículo con otro comprador, se debe pagar el 100% de la comisión estipulada con CÁRBULA.</p>
        <h4>Valorización del trabajo realizado por CÁRBULA.</h4>
        <p>Si el vendedor logra vender el vehículo a un comprador que fue gestionado, curado y puesto en contacto a través de la gestión de CÁRBULA, cualquiera sea el momento en que la venta se materialice, deberá abonar el 100% de la comisión pactada.</p>
        <h4>Responsabilidad de las partes</h4>
        <p>Tanto VENDEDOR como COMPRADOR reconocen que el vehículo objeto de la transacción está siendo vendido por el usuario VENDEDOR, y no por CÁRBULA, que solo actúa como mero intermediario y facilitador de la operación de compra-venta, y no se hace responsable de ningún tipo de garantía sobre el vehículo. Si el COMPRADOR elige comprar un producto de garantía ADICIONAL ofrecido por CÁRBULA, el COMPRADOR reconoce que Cárbula es exclusivamente un intermediario en la venta de un producto de TERCEROS y que el uso de este por parte del COMPRADOR debe realizarse directamente con el TERCERO y no con CÁRBULA. El COMPRADOR también reconoce haber leído todas las especificaciones técnicas de dicho producto de garantía, que tiene un alcance limitado y que solo se aplica a determinados componentes del vehículo así como a determinadas situaciones de desperfecto o mal funcionamiento.</p>
        <h4>General. Ley que rige</h4>
        <p>Usted acepta que: (i) los Servicios se considerarán únicamente basados ​​en la República Oriental del Uruguay; y (ii) los Servicios no darán lugar a la jurisdicción personal sobre la empresa Cárbula, ya sea específica o general, en jurisdicciones distintas de la República Oriental del Uruguay. Estos Términos se regirán en todos los aspectos por las leyes de la República Oriental del Uruguay, sin tener en cuenta sus principios de conflicto de leyes. Se excluye expresamente la aplicación de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías. Cualquier reclamo o disputa que surja en relación con los Servicios se decidirá exclusivamente por un tribunal de jurisdicción competente ubicado en La ciudad de Montevideo, Uruguay, y usted acepta la jurisdicción personal y lugar en dichos tribunales y renuncia a todas y cada una de las defensas u objeciones jurisdiccionales y de lugar disponibles de otra manera.</p>
        <h4>Renuncia</h4>
        <p>Ninguna renuncia a ningún término de estos Términos se considerará una renuncia adicional o continua de dicho término o de cualquier otro término, y el hecho de que CÁRBULA no haga valer ningún derecho o disposición en virtud de estos Términos no constituirá una renuncia a dicho derecho o disposición.</p>
        <h4>Fuerza mayor</h4>
        <p>Ni CÁRBULA ni usted serán responsables ante el otro por cualquier retraso o falla en el cumplimiento de los Términos que surjan de una causa que esté fuera de su control y sin su culpa o negligencia. Dichas causas pueden incluir, entre otras, incendios, inundaciones, terremotos, huelgas, falta de disponibilidad de servicios públicos necesarios, apagones, actos de guerra declarada o no declarada, actos de agencias reguladoras o desastres nacionales.</p>
        <h4>No hay terceros beneficiarios</h4>
        <p>Usted acepta que, salvo que se indique expresamente lo contrario en estos Términos, no habrá terceros beneficiarios de estos Términos.</p>
        <h4>Transferibilidad y asignabilidad</h4>
        <p>Usted no puede transferir ni asignar estos Términos, ni los derechos y licencias otorgados en virtud del presente, pero CÁRBULA puede asignarlos sin restricciones. Cualquier intento de transferencia o asignación en violación del presente será nulo y sin efecto. Estos Términos obligan y redundan en beneficio de cada parte y los sucesores y cesionarios permitidos de la parte.</p>
        <h4>Contactanos</h4>
        <i>Si tiene alguna pregunta sobre estos Términos o los Servicios, comuníquese con nosotros por correo electrónico a <a href="mailto:hola@carbula.uy"><strong>hola@carbula.uy</strong></a></i>
      </div>
      <FaqCreditosAutos/>
      <hr></hr>      
      <section>
        <FooterInfo grey country_code={'uy'} />
      </section>
    </div>
  }
}

export default CreditosAutos