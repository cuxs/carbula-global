import styles from './vender.module.scss'
import Head from '../../components/head';
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

const ComoVender = () => {
  const router = useRouter()
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="¿Cómo vender un auto? | Cárbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender un auto en Cárbula?</h1>
        </div>
        <div className={styles.vender}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Qué hacen ustedes exactamente?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Unimos vendedores con compradores y facilitamos las operaciones.</b> Te acompañamos durante todo el proceso de venta para que no tengas que perder tiempo negociando, preocupándote por el cobro, mostrando el vehículo ni realizando la transferencia.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Por qué lo debería vender a través de Cárbula?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Porque nos encargamos de la venta por vos. <b>Nos ocupamos de toda la gestión y de todos los trámites. Además, ofrecemos hasta un 25% más de dinero que en otros portales.</b> Brindamos una alternativa de venta eficiente, simple y transparente.</p>
              </div>
            </div>
            <h4 itemprop="name">3. ¿Cómo hago para vender mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El primer paso es ingresar los datos de tu vehículo en nuestro cotizador. Allí, el algoritmo que recopila datos de autos según marca, modelo y kilometraje, te indicará cuál es el valor estimado de tu auto. Luego, hace falta coordinar una inspección mecánica gratuita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿Qué pasa si no estoy de acuerdo con el precio del cotizador?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>No hay ningún problema.</b> Podés indicarnos el valor que quisieras recibir por tu auto. Tené en cuenta que la inspección nos dará información concreta para conocer el estado real de tu auto, lo cuál ayudará a definir el precio final de venta.</p>
              </div>
            </div>
            <h4 itemprop="name">5. ¿Cuál es el próximo paso luego de cotizar?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El segundo paso es agendar una inspección mecánica gratuita. La misma no tomará más de 40 minutos, y es en el día y horario que te resulte más conveniente. El encuentro nos ayudará a conocer el estado del vehículo para terminar de definir el precio.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué hacen con mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Lo inspeccionamos, le tomamos fotografías, lo publicamos en los portales con más alcance, promocionamos las publicaciones, se lo mostramos a los interesados, respondemos a todas las consultas, nos ocupamos de gestionar los trámites y de conseguir al comprador.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Y qué hago mientras venden mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Lo que quieras.</b> El auto es tuyo durante todo el proceso. Aprovechá ese tiempo para ir pensando cuál será tu próximo vehículo y disfrutá de no tener que ocuparte de nada. Vamos a vender tu auto desde la comodidad de tu casa en 20 días o menos.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿El auto lo venden ustedes o yo?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Nosotros. Nos ocupamos 100% del proceso de venta, incluso de conseguir al comprador ideal.</b> Brindamos financiación y los mejores métodos de pago lo cuál es un gran atractivo para los potenciales interesados.</p>
              </div>
            </div>
            <h4 itemprop="name">9. Listo. Quiero vender con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Perfecto.</b> Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro cotizador para comenzar el proceso de venta y ¡listo!, nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr></hr>
        <section>
          <FooterInfo grey country_code={'ar'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-CL') {
    return (
      <div>
        <Head title="¿Cómo vender un auto? | Cárbula Autos Chile" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender un auto en Cárbula?</h1>
        </div>
        <div className={styles.vender}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Qué hacen ustedes exactamente?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Unimos vendedores con compradores y facilitamos las operaciones.</b> Te acompañamos durante todo el proceso de venta para que no tengas que perder tiempo negociando,  preocupándote por el cobro, mostrándoselo a los interesados ni realizando la transferencia del auto.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Por qué lo debería vender a través de Cárbula?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Porque nos encargamos de la venta por vos.<b> Nos ocupamos de toda la gestión y de todos los trámites. Además, ofrecemos hasta un 25% más de dinero que en otros portales.</b> Brindamos una alternativa de venta eficiente, simple y transparente.</p>
              </div>
            </div>
            <h4 itemprop="name">3. ¿Cómo hago para vender mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El primer paso es ingresar los datos de tu vehículo en nuestro cotizador. Allí, el algoritmo que recopila datos de autos según marca, modelo y kilometraje, te indicará cuál es el valor estimado de tu auto. Luego, hace falta coordinar una inspección mecánica gratuita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿Qué pasa si no estoy de acuerdo con el precio del cotizador?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>No hay ningún problema.</b> Podés indicarnos el valor que quisieras recibir por tu auto. Tené en cuenta que la inspección nos dará información concreta para conocer el estado real de tu auto, lo cuál ayudará a definir el precio final de venta.</p>
              </div>
            </div>
            <h4 itemprop="name">5. ¿Cuál es el próximo paso luego de cotizar?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El segundo paso es agendar una inspección mecánica gratuita. La misma no tomará más de 40 minutos, y es en el día y horario que te resulte más conveniente. El encuentro nos ayudará a conocer el estado del vehículo para terminar de definir el precio.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué hacen con mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Lo inspeccionamos, le tomamos fotografías, lo publicamos en los portales con más alcance, promocionamos las publicaciones, se lo mostramos a los interesados, respondemos a todas las consultas, nos ocupamos de gestionar los trámites y de conseguir al comprador.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Y qué hago mientras venden mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Lo que quieras.</b> El auto es tuyo durante todo el proceso. Aprovechá ese tiempo para ir pensando cuál será tu próximo vehículo y disfrutá de no tener que ocuparte de nada. Vamos a vender tu auto desde la comodidad de tu casa en 20 días o menos.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿El auto lo venden ustedes o yo?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Nosotros. Nos ocupamos 100% del proceso de venta, incluso de conseguir al comprador ideal.</b>Brindamos financiación y los mejores métodos de pago lo cuál es un gran atractivo para los potenciales interesados.</p>
              </div>
            </div>
            <h4 itemprop="name">9. Listo. Quiero vender con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Perfecto.</b> Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro cotizador para comenzar el proceso de venta y ¡listo!, nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
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
        <Head title="¿Cómo vender un auto? | Cárbula Autos México" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender un auto en Cárbula?</h1>
        </div>
        <div className={styles.vender}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Qué hacen ustedes exactamente?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Unimos vendedores con compradores y facilitamos las operaciones.</b> Te acompañamos durante todo el proceso de venta para que no tengas que perder tiempo negociando, preocupándote por el cobro, mostrando el vehículo ni realizando la transferencia.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Por qué lo debería vender a través de Cárbula?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Porque nos encargamos de la venta por vos. <b>Nos ocupamos de toda la gestión y de todos los trámites. Además, ofrecemos hasta un 25% más de dinero que en otros portales.</b> Brindamos una alternativa de venta eficiente, simple y transparente.</p>
              </div>
            </div>
            <h4 itemprop="name">3. ¿Cómo hago para vender mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El primer paso es ingresar los datos de tu vehículo en nuestro cotizador. Allí, el algoritmo que recopila datos de autos según marca, modelo y kilometraje, te indicará cuál es el valor estimado de tu auto. Luego, hace falta coordinar una inspección mecánica gratuita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿Qué pasa si no estoy de acuerdo con el precio del cotizador?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>No hay ningún problema.</b> Podés indicarnos el valor que quisieras recibir por tu auto. Tené en cuenta que la inspección nos dará información concreta para conocer el estado real de tu auto, lo cuál ayudará a definir el precio final de venta.</p>
              </div>
            </div>
            <h4 itemprop="name">5. ¿Cuál es el próximo paso luego de cotizar?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El segundo paso es agendar una inspección mecánica gratuita. La misma no tomará más de 40 minutos, y es en el día y horario que te resulte más conveniente. El encuentro nos ayudará a conocer el estado del vehículo para terminar de definir el precio.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué hacen con mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Lo inspeccionamos, le tomamos fotografías, lo publicamos en los portales con más alcance, promocionamos las publicaciones, se lo mostramos a los interesados, respondemos a todas las consultas, nos ocupamos de gestionar los trámites y de conseguir al comprador.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Y qué hago mientras venden mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Lo que quieras.</b> El auto es tuyo durante todo el proceso. Aprovechá ese tiempo para ir pensando cuál será tu próximo vehículo y disfrutá de no tener que ocuparte de nada. Vamos a vender tu auto desde la comodidad de tu casa en 20 días o menos.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿El auto lo venden ustedes o yo?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Nosotros. Nos ocupamos 100% del proceso de venta, incluso de conseguir al comprador ideal.</b> Brindamos financiación y los mejores métodos de pago lo cuál es un gran atractivo para los potenciales interesados.</p>
              </div>
            </div>
            <h4 itemprop="name">9. Listo. Quiero vender con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Perfecto.</b> Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro cotizador para comenzar el proceso de venta y ¡listo!, nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr></hr>
      <section>
          <FooterInfo grey country_code={'mx'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-UY') {
    return <div>
        <Head title="¿Cómo vender un auto? | Cárbula Autos Uruguay" />
      <Nav />
      <div className={styles.header}>
      <h1>¿Cómo vender un auto en Cárbula?</h1>
      </div>
      <div className={styles.vender}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Qué hacen ustedes exactamente?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Unimos vendedores con compradores y facilitamos las operaciones.</b> Te acompañamos durante todo el proceso de venta para que no tengas que perder tiempo negociando, preocupándote por el cobro, mostrando el vehículo ni realizando la transferencia.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Por qué lo debería vender a través de Cárbula?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Porque nos encargamos de la venta por vos. <b>Nos ocupamos de toda la gestión y de todos los trámites. Además, ofrecemos hasta un 25% más de dinero que en otros portales.</b> Brindamos una alternativa de venta eficiente, simple y transparente.</p>
              </div>
            </div>
            <h4 itemprop="name">3. ¿Cómo hago para vender mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El primer paso es ingresar los datos de tu vehículo en nuestro cotizador. Allí, el algoritmo que recopila datos de autos según marca, modelo y kilometraje, te indicará cuál es el valor estimado de tu auto. Luego, hace falta coordinar una inspección mecánica gratuita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿Qué pasa si no estoy de acuerdo con el precio del cotizador?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>No hay ningún problema.</b> Podés indicarnos el valor que quisieras recibir por tu auto. Tené en cuenta que la inspección nos dará información concreta para conocer el estado real de tu auto, lo cuál ayudará a definir el precio final de venta.</p>
              </div>
            </div>
            <h4 itemprop="name">5. ¿Cuál es el próximo paso luego de cotizar?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>El segundo paso es agendar una inspección mecánica gratuita. La misma no tomará más de 40 minutos, y es en el día y horario que te resulte más conveniente. El encuentro nos ayudará a conocer el estado del vehículo para terminar de definir el precio.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué hacen con mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Lo inspeccionamos, le tomamos fotografías, lo publicamos en los portales con más alcance, promocionamos las publicaciones, se lo mostramos a los interesados, respondemos a todas las consultas, nos ocupamos de gestionar los trámites y de conseguir al comprador.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Y qué hago mientras venden mi auto?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Lo que quieras. El auto es tuyo durante todo el proceso.</b> Aprovechá ese tiempo para ir pensando cuál será tu próximo vehículo y disfrutá de no tener que ocuparte de nada. Vamos a vender tu auto desde la comodidad de tu casa en 20 días o menos.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿El auto lo venden ustedes o yo?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Nosotros. Nos ocupamos 100% del proceso de venta, incluso de conseguir al comprador ideal.</b> Brindamos financiación y los mejores métodos de pago lo cuál es un gran atractivo para los potenciales interesados.</p>
              </div>
            </div>
            <h4 itemprop="name">9. Listo. Quiero vender con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p><b>Perfecto.</b> Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro cotizador para comenzar el proceso de venta y ¡listo!, nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr></hr>
      <section>
          <FooterInfo grey country_code={'uy'} />
        </section>
    </div>
  }
}

export default ComoVender