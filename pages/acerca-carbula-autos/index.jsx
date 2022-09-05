import styles from './acerca.module.scss'
import Head from '../../components/CustomHeads/headAcercaCarbula';
import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Button,
  Container,
  Divider,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Grid,
  Header,
  Image,
  List,
  Icon,
  Menu,
  Sidebar,
  Visibility,
  Segment,
  Items,
  Footer,
} from 'semantic-ui-react';

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['FooterInfo'])),
    }
  }
}

const AcercaCarbula = () => {
  const router = useRouter()
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="Sumate a la experiencia Cárbula | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
          <Container>
            <h2>Sumate a la experiencia Cárbula</h2>
          </Container>
        </div>

        <div className={styles.acerca}>

        <Container>
        <div className={styles.nosotros}>
            <div class="ui vertical stripe segment">
              <div class="ui middle aligned stackable grid container">
                <div class="row">
                  <div class="eight wide column">
                    <h3>¿Qué es Cárbula?</h3>
                    <p>Somos un marketplace de compra y venta de autos usados para vender de manera más eficiente y transparente. Generamos un entorno de intermediación, uniendo gente que quiere vender con gente que busca comprar autos usados.</p>
                    <p>Le permitimos a los dueños vender su auto por hasta un 25% más de dinero sin salir de su casa, brindando operaciones seguras, simples y cómodas.              </p>
                  </div>
                  <div class="eight wide right floated column">
                  <Image
                      floated='right'
                      size='medium'
                      src='/images/mision-carbula.png'
                      alt='Preclasificá para tu crédito Santander'
                      title='Preclasificá para tu crédito Santander'
                    />
                  </div>
                </div>
              </div>
            </div>
         </div>
            </Container>

            <Divider hidden />
            <Divider />
            <Divider hidden />
            <Divider hidden />
            
            <Container>
            <div className={styles.mision}>
            <div class="ui vertical stripe segment">
              <div class="ui middle aligned stackable grid container">
                <div class="row">
                <div class="eight wide left floated column">
                  <Image
                      floated='left'
                      size='medium'
                      src='/images/acerca-carbula.png'
                      alt='Preclasificá para tu crédito Santander'
                      title='Preclasificá para tu crédito Santander'
                    />
                  </div>
                  <div class="eight wide column">
                    <h3>Misión</h3>
                    <p>Transformar la compra y venta de autos en algo placentero. Buscamos impactar positivamente en la vida de millones de personas que compran y venden su auto de manera diaria perdiendo tiempo, gastando más dinero del que debieran, y desarrollando patrones de estrés y ansiedad durante la transacción.</p>
                    <h3>Visión</h3>
                    <p>Convertirnos en los máximos exponentes en el rubro de compra y venta de vehículos usados y tener presencia en al menos 30 ciudades latinoamericanas en los próximos 5 años.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </Container>
            
            <Divider hidden />
            <Divider />
            <Divider hidden />

            <div className={styles.valores}>
              <Grid centered>
              <h3>Valores Cárbula</h3>
              </Grid>
              <Grid>
              <Grid.Column mobile={16} tablet={16} computer={4}>
              <Card>
                  <Card.Content>
                    <Card.Header>Seguridad</Card.Header>
                    <Card.Description>
                      <p>Proporcionamos operaciones online 100% seguras tanto para compradores como para vendedores de vehículos.</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                <Card>
                  <Card.Content>
                    <Card.Header>Transparencia</Card.Header>
                    <Card.Description>
                      <p>Brindamos información veraz en cuánto al valor real de los vehículos en venta. Cuando los clientes utilizan nuestra plataforma no hay sorpresas ni costos extras a último momento.</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                <Card>
                  <Card.Content>
                    <Card.Header>Innovación</Card.Header>
                    <Card.Description>
                      <p>Aplicamos la tecnología al servicio de la compra y venta de vehículos para generar la mejor experiencia posible.</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                <Card>
                  <Card.Content>
                    <Card.Header>Simpleza</Card.Header>
                    <Card.Description>
                      <p>Somos una empresa de base tecnológica con el único propósito de ayudar al cliente a vender su auto de manera fácil y sin estrés.</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
              </Grid>
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

export default AcercaCarbula