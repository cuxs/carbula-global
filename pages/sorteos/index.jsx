import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import styles from './sorteos.module.scss';
import { getCountryCode } from '../../utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';

const Head = dynamic(import('../../components/CustomHeads/headComoComprar'))
const Nav = dynamic(import('../../components/nav'))
// const Button = dynamic(import('../../components/Button'))
// const FooterInfo = dynamic(import('../../components/FooterInfo'))

export async function getServerSideProps(context) {
  return{
    props:{
      COUNTRY_CODE: getCountryCode(context.locale),
      ...(await serverSideTranslations(context.locale, ['FooterInfo'])),

    }
  }
}

const Sorteos = ({COUNTRY_CODE}) => {
  const [width, setWidth] = useState();
  // const {t} = useTranslation('cotizacion')

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Head title="Compra un auto de forma segura | Carbula Autos Chile" />
      <Nav />
      {/* <div className={styles.canvaDiv}>
        <div>
          <iframe loading="lazy" className={styles.canvaIframe}
            src="https://www.canva.com/design/DAFThkCEzDE/view?embed">
          </iframe>
        </div>
        <a href="https://www.canva.com&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">[CHI] - Landing page sorteos</a> de Martín Salassa
      </div>
      <div  align="center">
        <a target="__blank" rel="noopener noreferrer" href="/bases-sorteo">Bases y condiciones del sorteo</a>
      </div>
      <div className={styles.footer__container}>
        <FooterInfo grey country_code={COUNTRY_CODE}/>
      </div> */}

      <div className={styles.prueba1}>
        <object className={styles.prueba2} data="https://www.canva.com/design/DAFUpt_3p80/view?embed" type="text/html"/>
      </div>

      {/* <div className={styles.canvaDiv}>
        <iframe src="https://www.canva.com/design/DAFUpt_3p80/watch"
          className={styles.canvaIframe}
          frameborder="0"
          allowfullscreen></iframe>
      </div> */}
    </div>
  )
}
export default Sorteos;
