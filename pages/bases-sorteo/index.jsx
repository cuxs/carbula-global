import styles from './sorteo.module.scss'
import Head from '../../components/CustomHeads/headTermCond';
import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['FooterInfo'])),
    }
  }
}

const BasesSorteo = () => {
  const router = useRouter()
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  return (
    <div>
      <Head title="Bases y condiciones | Carbula Autos Chile" />
      <Nav />
      <div className={styles.header}>
      <h1>BASES Y CONDICIONES<br/><br/>SORTEO “LAVAMEAPP y CARBULA te regalan el auto de tus sueños”</h1>
      </div>
      <div className={styles.terminos}>
        <p><b>1. </b>CARBULA Spa Rut 77.058.168-0 y LAVAMEAPP Spa RUT 77.568.722-3, llevarán a cabo una promoción de tipo concurso (en adelante, LA PROMOCIÓN y/o CONCURSO), con la finalidad de entregar beneficios materiales y concretos relacionados con la entrega de un vehículo usado sin costo, dentro del territorio de la República de Chile.</p>
        <p><b>2. </b>La participación en la presente promoción denominada <b>“LAVAMEAPP y CARBULA te regalan el auto de tus sueños”</b>, y organizada por LAVAMEAPP SPA y CARBULA SPA, titulares de la iniciativa y con la capacidad suficiente de brindar los precios, implica el total conocimiento y aceptación de las siguientes bases y condiciones (en adelante, las “Bases”), como así también los procedimientos o sistemas establecidos por los organizadores.</p>
        <p><b>3. </b>La vigencia de la promoción será desde el día 15 de Febrero del 2023 a las 00:00 hs y la finalización será cuando se logre el objetivo de los organizadores o el 15 de Agosto del 2023 a las 23:59 hs, el que ocurra primero. La fecha de finalización puede ser extendida hasta 30 días más en caso que la recaudación esperada así lo requiera. Asimismo, si se llega antes al objetivo, cada participante recibirá un correo con la noticia del cierre y la fecha del sorteo final. La promoción será válida en todo el territorio de la República de Chile.</p>
        <p><b>4. </b>Podrá participar de la promoción cualquier persona capaz y que sea mayor de edad al inicio de la promoción. Queda aclarado que el no cumplimiento de alguno de los requisitos a la fecha de inicio de la promoción implica la pérdida del premio siendo adjudicado en su caso a quien continúe en orden de mérito.</p>
        <p><b>5. </b>Los interesados que deseen participar de la Promoción deberán obtener un cupón de pago debidamente comunicado, el cual tendrá como soporte una plataforma de cobro con cobertura nacional. Realizando el pago del cupón para participar, formará parte de las personas con chances de obtener el premio o premios que el concurso pone a disposición de los participantes. Las personas pueden obtener cuantos cupones deseen adquirir. Las chances son por cupones, no por persona.</p>
        <p><b>6. </b>Al momento del cierre del sorteo debidamente notificada, los adquirentes de los cupones, que cumplan las condiciones exigidas en las presentes bases y condiciones, serán seleccionados en un sorteo público, con notaría pública dándole validez legal al sorteo.</p>
        <p><b>7. </b>No podrán participar de la promoción quienes tengan su domicilio en lugares donde la legislación local no autorice la realización de este tipo de concursos, ni los que vivan fuera de los límites expuestos anteriormente. No podrán participar los empleados, personal contratado, ni personal directivo de los organizadores, así como tampoco sus cónyuges y/o parientes hasta el segundo grado de parentesco.</p>
        <p><b>8. </b>El PREMIO consiste en 1 (un) automóvil, obtenido del Marketplace www.carbula.cl, con un valor de hasta CL10.000.000, con los costos de traspaso incluidos + 3 meses de seguro pagos + 1 (Un) año de garantía mecánica + 1 (Un) año de lavado gratis a cargo de www.lavameapp.cl. En el caso que el vehículo seleccionado esté valuado por un monto menor a CL 10.000.000, la diferencia se le entregará al ganador mediante transferencia electrónica, a la cuenta que el ganador comunique expresamente. Se deja constancia que el PREMIO no incluye ningún gasto de flete, ni seguros adicionales, ni impuestos posteriores, los cuales deberán ser asumidos por el ganador del vehículo. Es obligación del ganador tener al día y dar cumplimiento con la totalidad de los requisitos necesarios para el traspaso del vehículo y continuar con el pago de las obligaciones pertenecientes al vehículo obtenido en el concurso, luego del vencimiento de los beneficios obtenidos del concurso.</p>
        <p><b>9. </b>Los organizadores no se harán responsables por los gastos en que incurriera el beneficiario para hacer uso del PREMIO, ni otorgarán garantía sobre fallas que pueda presentar el mismo que excedan la garantía mecánica establecida. El PREMIO no es endosable, reembolsable ni transferible a terceros. El PREMIO no es canjeable por ningún otro bien o servicio, bajo ninguna circunstancia. El PREMIO no podrá ser reemplazado en su totalidad por dinero, solo el excedente hasta cumplimentar los CL 10.000.000. Los productos y servicios extras que el beneficiario quiera agregar a los comprendidos por el premio, corren a su exclusivo cargo.</p>
        <p><b>10. </b>El ganador del premio deberá acreditar en el plazo y modo que establecerán los organizadores, el cumplimiento de la totalidad de los requisitos exigidos. El Participante que no cumpliere con dicha acreditación al momento de retirar el premio perderá de pleno derecho y sin necesidad de notificación alguna su condición de ganador sin posibilidad de reclamo.</p>
        <p><b>11. </b>El PREMIO será entregado al ganador definitivo previa coordinación del día y hora entre el participante y los Organizadores. Una vez cruzada la documentación y pagados los gastos, la entrega será en fecha a confirmar según la disponibilidad de entrega de la plataforma www.carbula.cl y el receptor del premio.</p>
        <p><b>12. </b>La participación en esta Promoción se realiza con la compra de un cupón cuyo monto será comunicado por los organizadores en tiempo y forma, a través de los involucrados en la exposición del concurso. En caso de que por algún motivo, la recaudación no llegue a cubrir la totalidad del premio establecido, los organizadores están facultados a reintegrar el dinero a los participantes. El reintegro, en cualquiera de los casos, será del 100% del monto del cupón.</p>
        <p><b>13. </b>Los Participantes autorizan expresamente a los Organizadores a difundir su nombre, datos personales, voz e imágenes y los de su familia, por los medios y en la forma que los Organizadores consideren apropiados, con fines publicitarios y/o promocionales de la Promoción y/o de los Organizadores., sin derecho a compensación alguna, y sin límite de tiempo ni de pasadas.</p>
        <p><b>14. </b>Al completar el formulario de registro, en caso de ser solicitado, los participantes prestan su consentimiento para que los organizadores: (i) almacenen los datos contenidos en los formularios en una base de datos registrada a nombre de los organizadores (iii) utilicen esos datos como información de contacto ya se vía e-mail y/o telefónicamente y/o por mensaje de texto y/o por mensaje multimedia- informándose acerca de nuestras novedades en general; recabando opiniones y/o comentarios y/o realizando estadísticas que nos posibiliten conocer más sus intereses y necesidades y para enviarles contenido que puedan resultar de interés, siempre y cuando hayan manifestado expresamente su voluntad de recibirlos. Dicha manifestación podrá ser revocada en cualquier momento. Asimismo garantiza a los organizadores que son los únicos y exclusivos responsables de la información que suministran y de su veracidad y exactitud; y que lo mantendrán indemne de las consecuencias de cualquier reclamo de terceros con relación o con motivo del suministro de información personal. Los participantes podrán solicitar a los organizadores el acceso, actualización, rectificación o supresión de su respectiva información personal en la base de datos. A tales fines, podrán comunicarse con los organizadores a través de la siguiente dirección de correo electrónico hola@carbula.cl. La provisión de la información personal en los formularios por parte de los participantes es voluntaria, sin perjuicio de ser un requisito necesario para la participación en el concurso y para la asignación de los premios. En caso de que un potencial ganador solicitara la supresión de su información personal antes de serle asignado el premio, perderá derecho a la asignación del mismo.</p>
        <p><b>15. </b>La probabilidad de resultar ganador dependerá de la cantidad de cupones obtenidos por los participantes, y la cantidad de estos que posea cada uno. El PREMIO no adjudicado por cualquier causa quedará en poder de los organizadores, para que este vuelva a efectuar un nuevo concurso. En ningún caso el PREMIO no adjudicado puede ser transferido a la propiedad de los organizadores.</p>
        <p><b>16. </b>Los organizadores no serán responsables por los daños y/o perjuicios de cualquier tipo que pudieran sufrir los participantes o terceros en sus personas o bienes, ni por errores o fallas de terceros que pudieran interrumpir o alterar el desarrollo de la promoción o entrega de los premios. Queda expresamente establecido que los organizadores, no tendrán ninguna responsabilidad por problemas que se pudieran suscitar entre el beneficiario del concurso y los bienes o servicios que conforman el premio; sean éstos generados por acontecimientos fortuitos en relación al producto final, el servicio y eventualidades similares. El participante no reclamará a los organizadores suma o indemnización alguna en relación a los conceptos enunciados en la presente.</p>
        <p><b>17. </b>Los organizadores podrán suspender, interrumpir, o alterar la promoción o entrega de premios por causas que no le fueran imputables, o por caso fortuito o fuerza mayor, comprometiéndose a notificarlo al organismo que corresponda, y realizando su difusión a través de los mismos medios en que se difunde la promoción. En caso de ser necesaria la devolución del dinero, este se reintegrará a los participantes del concurso de manera íntegra, sin ningún tipo de descuento.</p>
        <p><b>18. </b>La utilización del SITIO elegido por los organizadores y de Internet en general implica la asunción de riesgos de potenciales daños al software y al hardware del Usuario. Por tal motivo, el equipo terminal desde el cual acceda al SITIO, el Usuario estaría en condiciones de resultar atacado y dañado por la acción de hackers quienes podrían incluso acceder a la información contenida en el equipo terminal del Usuario, extraerla, sustraerla y/o dañarla. Los Usuarios renuncian a efectuar reclamos por estos motivos. El intercambio de información a través de Internet tiene el riesgo de que tal información pueda ser captada por un tercero. El SITIO no se hace responsable de las consecuencias que pudiera acarrear al usuario tal hipótesis. El SITIO no guarda obligación alguna de conservar información que haya hecho disponible a los Usuarios, ni que le haya sido enviada por éstos últimos.</p>
        <p><b>19. </b>Ante toda divergencia que pudiera surgir con relación a esta promoción y a todos sus efectos, los participantes y los organizadores se someten a la jurisdicción y competencia de los Tribunales Ordinarios del Fuero Comercial de la Ciudad de Santiago, de la República de Chile, renunciando a cualquier otro que les pudiera corresponder, sometiéndose asimismo a las leyes de la República de Chile.-</p>
      </div>
      <hr></hr>
      <section>
        <FooterInfo grey country_code={'cl'} />
      </section>
    </div>
  )
}

export default BasesSorteo