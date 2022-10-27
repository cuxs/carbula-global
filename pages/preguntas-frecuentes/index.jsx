import styles from './PreguntasFrecuentes.module.scss'
import Head from '../../components/CustomHeads/headPreguntasFrecuentes';
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

const PreguntasFrecuentes = () => {
  const router = useRouter()
  const FaqPreguntasFrecuentes = dynamic(import('../../components/FaqPreguntasFrecuentes'))
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="Preguntas frecuentes | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
        <a href="https://catalogo.carbula.ar/"><h1>Vender y comprar de forma segura un auto seminuevo</h1></a>
        </div>
        
        <div className={styles.container}>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentes/>
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
        <a href="https://catalogo.carbula.cl/"><h1>Compra un auto de forma segura</h1></a>
        </div>
        
        <div className={styles.container}>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentes/>
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
        <a href="https://catalogo.carbula.mx/"><h1>Compra un auto de forma segura</h1></a>
        </div>
        <div className={styles.container}>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentes/>
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
      <div className={styles.container}>
      <div className={styles.faq}>
        <FaqPreguntasFrecuentes/>
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
