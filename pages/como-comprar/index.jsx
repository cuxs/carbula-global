import styles from './comprar.module.scss'
import Head from '../../components/CustomHeads/headComoComprar';
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
        <Head title="Compra un auto de forma segura | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.ar/"><h1>Compra un auto de forma segura</h1></a>
        </div>
        <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
              <p>Sí, todos los autos de catálogo pasaron por un protocolo de inspección. Solo trabajamos con autos que aprueben el proceso de inspección.</p>
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
              <p>Primero, dentro de la publicación hacé click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado). Si te interesa, <a href="https://blog.carbula.com/informes-y-transferencias-autofact-conoce-estos-servicios" target="__blank" rel="noopener noreferrer">podés leer más aquí</a>.</p>
                  <p>El segundo paso es generar un link de inspección.</p>
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
              <p>No hay ningún problema. Queremos que tengas la mejor experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
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
              <p>Sí. Financiamos hasta el 95% del valor de tu vehículo y <a href="/creditos-para-autos">trabajamos con Banco Santander,</a> líder en préstamos prendarios, para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
              <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Se le realizará una inspección para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">9. ¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
              <p>Simple y transparente. Durante la venta, nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la experiencia Cárbula. <a href="https://catalogo.carbula.ar/" target="__blank">Hacé click en nuestro catálogo</a> para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
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
        <Head title="Compra un auto de forma segura | Carbula Autos Chile" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.cl/"><h1>Compra un auto de forma segura</h1></a>
        </div>
        <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, todos los autos de catálogo pasaron por un protocolo de inspección. Solo trabajamos con autos que aprueben el proceso de inspección.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Qué tipo de autos tienen?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
              <p>Contamos con una amplia variedad de modelos y marcas. Todos nuestros vehículos tienen menos de 10 años de antigüedad, poseen menos de 150.000 kilómetros, aprobaron la inspección y <b>están listos para que sean tuyos.</b></p>
              </div>
            </div>
            <h4 itemprop="name">3. Me interesa un vehículo en particular, ¿qué hago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Primero, dentro de la publicación haz click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado). Si te interesa, <a href="https://blog.carbula.com/informes-y-transferencias-autofact-conoce-estos-servicios" target="__blank" rel="noopener noreferrer">podés leer más aquí</a>.</p>
                <p>El segundo paso es generar un link de inspección.</p>
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
                <p>No hay ningún problema. Queremos que tengas la mejor experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
              </div>
            </div>
            <h4 itemprop="name">6. ¿Qué métodos de pago aceptan?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Aceptamos efectivo, tarjeta de crédito, Vale Vista o transferencia bancaria. Asimismo, siempre buscamos acordar el método de pago en base a lo que le resulte más conveniente tanto a la parte compradora como vendedora.</p>
              </div>
            </div>
            <h4 itemprop="name">7. ¿Brindan financiación?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí. Financiamos hasta el <b>70% del valor de tu vehículo</b> y trabajamos con los líderes nacionales en prendarios para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Se le realizará una inspección para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">9. ¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta, nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante toda la gestión para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
              <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la experiencia Cárbula. <a href="https://catalogo.carbula.cl/" target="__blank">Hacé click en nuestro catálogo</a> para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
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
        <Head title="Compra un auto de forma segura | Carbula Autos Mexico" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.mx/"><h1>Compra un auto de forma segura</h1></a>
        </div>
        <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, todos los autos de catálogo pasaron por un protocolo de inspección. Solo trabajamos con autos que aprueben el proceso de inspección.</p>
              </div>
            </div>
            <h4 itemprop="name">2. ¿Qué tipo de autos tienen?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Contamos con una amplia variedad de modelos y marcas. Todos nuestros vehículos tienen menos de 10 años de antigüedad, poseen menos de 150.000 kilómetros, aprobaron la inspección y <b>están listos para que sean tuyos.</b></p>
              </div>
            </div>
            <h4 itemprop="name">3. Me interesa un vehículo en particular, ¿qué hago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
              <p>Primero, dentro de la publicación hacé click en "ME INTERESA”. Luego, uno de nuestros asesores se contactará y te brindará toda la información necesaria (contamos con los informes mecánicos más completos del mercado). Si te interesa, <a href="https://blog.carbula.com/informes-y-transferencias-autofact-conoce-estos-servicios" target="__blank" rel="noopener noreferrer">podés leer más aquí</a>.</p>
                  <p>El segundo paso es generar un link de inspección.</p>
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
                <p>No hay ningún problema. Queremos que tengas la mejor experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
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
                <p>Sí. Financiamos hasta el <b>50% del valor de tu vehículo</b> y trabajamos con los líderes nacionales en prendarios para que puedas acceder a tu nuevo auto de la mejor manera.</p>
              </div>
            </div>
            <h4 itemprop="name">8. ¿Aceptan mi auto cómo método de pago?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Se le realizará una inspección para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta, nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la experiencia Cárbula. <a href="https://catalogo.carbula.cl/" target="__blank">Hacé click en nuestro catálogo</a> para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
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
        <Head title="Compra un auto de forma segura | Carbula Autos Uruguay" />
      <Nav />
      <div className={styles.header}>
      <a href="https://catalogo.carbula.uy/"><h1>Compra un auto de forma segura</h1></a>
      </div>
      <div className={styles.comprar}>
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h4 itemprop="name">1. ¿Revisan los autos?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Sí, todos los autos de catálogo pasaron por un protocolo de inspección. Solo trabajamos con autos que aprueben el proceso de inspección.</p>
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
                  <p>El segundo paso es generar un link de inspección.</p>
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
                <p>No hay ningún problema. Queremos que tengas la mejor experiencia posible, por eso nuestros asesores te brindarán asesoramiento personalizado para ayudarte a elegir tu vehículo ideal.</p>
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
                <p>Sí, siempre que tu auto cumpla con los requisitos necesarios para formar parte de nuestro catálogo. Se le realizará una inspección para conocer su estado y definir su valor real.</p>
              </div>
            </div>
            <h4 itemprop="name">9. ¿Cómo es el proceso de compra?</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Simple y transparente. Durante la venta, nuestro asesor coordinará el intercambio con el vendedor. Nosotros te acompañaremos durante todo el trámite para que luego de la visita, el auto sea tuyo en los próximos días.</p>
              </div>
            </div>
            <h4 itemprop="name">10. Listo, quiero comprar con ustedes.</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                <p>Perfecto. Muchas gracias por confiar en nosotros y te damos oficialmente la bienvenida a la experiencia Cárbula. Hacé click en nuestro catálogo para conocer todos los vehículos disponibles y nuestros asesores se encargarán del resto.</p>
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