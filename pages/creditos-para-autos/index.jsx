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
        <Head title="Compra tu auto con financiamiento Santander | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
          <Container>
            <h1>Comprá tu auto con financiamiento</h1>
            <div className={styles.buttons__container}>
            <a target="__blank" rel="noopener noreferrer" href={`${SANTANDER_URL_PRODUCTION[COUNTRY_CODE]}ohash=${SANTANDER_OHASH[COUNTRY_CODE]}&spid=${SANTANDER_SPID_PRODUCTION[COUNTRY_CODE]}`}><Button fluid>Simulá tu préstamo <img src={"/images/banco-santander-logo.png"}/></Button></a>
            </div>
          </Container>
        </div>

        <div className={styles.financiamiento}>
          <h2>Trabajamos con <b>Santander</b> para que puedas financiar con un préstamo prendario la compra de tu próximo usado. Hacelo en 3 simples pasos.</h2>
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
                <Card.Header><b>PASO 1:</b> Calificá</Card.Header>
                <Card.Description>
                  <p>Simulá el préstamo para el vehículo que querés, en minutos y 100% online.</p>
                </Card.Description>
              </Card.Content>
              {/*<Card.Content extra >
                <List>
                  <List.Item as='a'><p><a target="__blank" href={`https://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola%2C+necesito+información+sobre+el+préstamo+de+un+auto`}><b>Más información</b></a></p></List.Item>
                </List>
              </Card.Content>*/}
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
                  <p>Encontrá tu próximo auto en nuestro catálogo. Si no sabés cuál elegir, te ofrecemos asesoramiento.</p>
                </Card.Description>
              </Card.Content>
              {/*<Card.Content extra>
                <List>
                  <List.Item as='a'><p><a target="__blank" href={`https://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola%2C+necesito+financiar+la+compra+de+un+auto`}><b>Más información</b></a></p></List.Item>
                </List>
            </Card.Content>*/}
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
                  <p>Accedé a un préstamo prendario Santander, para financiar hasta el 95% del valor del auto.</p>
                </Card.Description>
              </Card.Content>
              {/*<Card.Content extra>
                <div className={styles.buttons__container}>
                  <a target="__blank" rel="noopener noreferrer" href={`${SANTANDER_URL_PRODUCTION[COUNTRY_CODE]}ohash=${SANTANDER_OHASH[COUNTRY_CODE]}&spid=${SANTANDER_SPID_PRODUCTION[COUNTRY_CODE]}`}><Button fluid>Simulá tu préstamo <img src={"/images/banco-santander-iso.svg"}/></Button></a>
                </div>
          </Card.Content>*/}
            </Card>
          </Card.Group>
        </div>

        <div className={styles.buttons__container}>
          <a target="__blank" rel="noopener noreferrer" href={`${SANTANDER_URL_PRODUCTION[COUNTRY_CODE]}ohash=${SANTANDER_OHASH[COUNTRY_CODE]}&spid=${SANTANDER_SPID_PRODUCTION[COUNTRY_CODE]}`}><Button fluid>Simulá tu préstamo <img src={"/images/banco-santander-logo.png"} /></Button></a>
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
}

export default CreditosAutos
