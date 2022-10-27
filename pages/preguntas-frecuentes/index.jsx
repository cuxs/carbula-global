import styles from './PreguntasFrecuentes.module.scss'
import Head from '../../components/CustomHeads/headPreguntasFrecuentes';
import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['FooterInfo'])),
    }
  }
}

const PreguntasFrecuentes = () => {
  const router = useRouter()
  const FaqPreguntasFrecuentesVender = dynamic(import('../../components/FaqPreguntasFrecuentesVender'))
  const FaqPreguntasFrecuentesComprar = dynamic(import('../../components/FaqPreguntasFrecuentesComprar'))
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="Preguntas frecuentes | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.ar/"><h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1></a>
        </div>
        <div className={styles.container}>
        <h4>Preguntas frecuentes sobre vender</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVender/>
        </div>
        <h4>Preguntas frecuentes sobre comprar</h4>

        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesComprar/>
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
        <Head title="Preguntas frecuentes | Carbula Autos Chile" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.cl/"><h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1></a>
        </div>
        
        <div className={styles.container}>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVender/>
        <FaqPreguntasFrecuentesComprar/>
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
        <Head title="Preguntas frecuentes | Carbula Autos México" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.mx/"><h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1></a>
        </div>
        <div className={styles.container}>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVender/>
        <FaqPreguntasFrecuentesComprar/>
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
      <a href="https://catalogo.carbula.uy/"><h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1></a>
      </div>
      <div className={styles.container}>
      <div className={styles.faq}>
        <FaqPreguntasFrecuentesVender/>
        <FaqPreguntasFrecuentesComprar/>
        </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'uy'} />
        </section>
    </div>
  }
}

export default PreguntasFrecuentes
