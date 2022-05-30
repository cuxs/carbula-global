import styles from './comprar.module.scss'
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

const ComoComprar = () => {
  const router = useRouter()
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="¿Cómo comprar un auto? | Cárbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
        <a href="#"><h1>¿Cómo comprar un auto en Cárbula?</h1></a>
        </div>
        <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, nuestros inspectores realizan una rigurosa inspección mecánica de más de 150 puntos para asegurarse de que todos los autos estén en excelentes condiciones. Solo trabajamos con autos que aprueben el protocolo de inspección.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Qué tipo de autos tienen?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Contamos con una amplia variedad de modelos y marcas. Todos nuestros vehículos tienen menos de 10 años de antigüedad, poseen menos de 150.000 kilómetros, aprobaron la inspección técnica y <b>están listos para que sean tuyos.</b></p>
              </div>
            </div>
            <h4 itemprop="name">3. Me interesa un vehículo en particular, ¿qué hago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                  <p>Primero, dentro de la publicación hace click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado).</p>
                  <p>El segundo paso es agendar una visita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿En qué consiste la visita vehicular?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Es una cita en el día y horario que te quede más conveniente para que conozcas tu futuro auto. Uno de nuestros asesores estará allí para despejar todas tus dudas y acompañarte durante el encuentro.</p>
              </div>
            </div>
            <h4 itemprop="name">5. Todavía no sé qué auto quiero</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>No hay ningún problema. Queremos que tengas la mejor Experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué métodos de pago aceptan?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Aceptamos efectivo o transferencia bancaria. Asimismo, siempre buscamos acordar el método de pago en base a lo que le resulte más conveniente tanto a la parte compradora como vendedora.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Brindan financiación?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí. Financiamos desde el <b>50% del valor de tu vehículo</b> y trabajamos con los líderes nacionales en prendarios para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Le realizaremos una rigurosa inspección mecánica para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">9. ¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro catálogo para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'ar'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-CL') {
    return (
      <div>
        <Head title="¿Cómo comprar un auto? | Cárbula Autos Chile" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo comprar un auto?</h1>
        </div>
        <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, nuestros inspectores realizan una rigurosa inspección mecánica de más de 150 puntos para asegurarse de que todos los autos estén en excelentes condiciones. Solo trabajamos con autos que aprueben el protocolo de inspección. </p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Qué tipo de autos tienen?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Contamos con una amplia variedad de modelos y marcas. Todos nuestros vehículos tienen menos de 10 años de antigüedad, poseen menos de 150.000 kilómetros, aprobaron la inspección técnica y <b>están listos para que sean tuyos.</b></p>
              </div>
            </div>
            <h4 itemprop="name">3. Me interesa un vehículo en particular, ¿qué hago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                  <p>Primero, dentro de la publicación hace click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado).</p>
                  <p>El segundo paso es agendar una visita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿En qué consiste la visita vehicular?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Es una cita en el día y horario que te quede más conveniente para que conozcas tu futuro auto. Uno de nuestros asesores estará allí para despejar todas tus dudas y acompañarte durante el encuentro.</p>
              </div>
            </div>
            <h4 itemprop="name">5. Todavía no sé qué auto quiero</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>No hay ningún problema. Queremos que tengas la mejor Experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué métodos de pago aceptan?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Aceptamos efectivo o transferencia bancaria. Asimismo, siempre buscamos acordar el método de pago en base a lo que le resulte más conveniente tanto a la parte compradora como vendedora.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Brindan financiación?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí. Financiamos desde el <b>50% del valor de tu vehículo</b> y trabajamos con los líderes nacionales en prendarios para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Le realizaremos una rigurosa inspección mecánica para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">9. ¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro catálogo para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'cl'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-MX') {
    return (
      <div>
        <Head title="¿Cómo comprar un auto? | Cárbula Autos México" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo comprar un auto?</h1>
        </div>
        <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, nuestros inspectores realizan una rigurosa inspección mecánica de más de 150 puntos para asegurarse de que todos los autos estén en excelentes condiciones. Solo trabajamos con autos que aprueben el protocolo de inspección. </p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Qué tipo de autos tienen?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Contamos con una amplia variedad de modelos y marcas. Todos nuestros vehículos tienen menos de 10 años de antigüedad, poseen menos de 150.000 kilómetros, aprobaron la inspección técnica y <b>están listos para que sean tuyos.</b></p>
              </div>
            </div>
            <h4 itemprop="name">3. Me interesa un vehículo en particular, ¿qué hago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                  <p>Primero, dentro de la publicación hace click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado).</p>
                  <p>El segundo paso es agendar una visita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿En qué consiste la visita vehicular?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Es una cita en el día y horario que te quede más conveniente para que conozcas tu futuro auto. Uno de nuestros asesores estará allí para despejar todas tus dudas y acompañarte durante el encuentro.</p>
              </div>
            </div>
            <h4 itemprop="name">5. Todavía no sé qué auto quiero</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>No hay ningún problema. Queremos que tengas la mejor Experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué métodos de pago aceptan?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Aceptamos efectivo o transferencia bancaria. Asimismo, siempre buscamos acordar el método de pago en base a lo que le resulte más conveniente tanto a la parte compradora como vendedora.</p>
              </div>
            </div>
            <h4 itemprop="name">¿Brindan financiación?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí. Financiamos desde el <b>50% del valor de tu vehículo</b> y trabajamos con los líderes nacionales en prendarios para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Le realizaremos una rigurosa inspección mecánica para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro catálogo para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'mx'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-UY') {
    return <div>
        <Head title="¿Cómo comprar un auto? | Cárbula Autos Uruguay" />
      <Nav />
      <div className={styles.header}>
      <h1>¿Cómo comprar un auto?</h1>
      </div>
      <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, nuestros inspectores realizan una rigurosa inspección mecánica de más de 150 puntos para asegurarse de que todos los autos estén en excelentes condiciones. Solo trabajamos con autos que aprueben el protocolo de inspección. </p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Qué tipo de autos tienen?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Contamos con una amplia variedad de modelos y marcas. Todos nuestros vehículos tienen menos de 10 años de antigüedad, poseen menos de 150.000 kilómetros, aprobaron la inspección técnica y <b>están listos para que sean tuyos.</b></p>
              </div>
            </div>
            <h4 itemprop="name">3. Me interesa un vehículo en particular, ¿qué hago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                  <p>Primero, dentro de la publicación hace click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado).</p>
                  <p>El segundo paso es agendar una visita.</p>
              </div>
            </div>
            <h4 itemprop="name">4. ¿En qué consiste la visita vehicular?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Es una cita en el día y horario que te quede más conveniente para que conozcas tu futuro auto. Uno de nuestros asesores estará allí para despejar todas tus dudas y acompañarte durante el encuentro.</p>
              </div>
            </div>
            <h4 itemprop="name">5. Todavía no sé qué auto quiero</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>No hay ningún problema. Queremos que tengas la mejor Experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué métodos de pago aceptan?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Aceptamos efectivo o transferencia bancaria. Asimismo, siempre buscamos acordar el método de pago en base a lo que le resulte más conveniente tanto a la parte compradora como vendedora.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Brindan financiación?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí. Financiamos desde el <b>50% del valor de tu vehículo</b> y trabajamos con los líderes nacionales en prendarios para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Le realizaremos una rigurosa inspección mecánica para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">9. ¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la Experiencia Cárbula. Hacé click en nuestro catálogo para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
              </div>
            </div>
          </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'uy'} />
        </section>
    </div>
  }
}

export default ComoComprar