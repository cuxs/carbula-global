import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import styles from './sorteos.module.scss';
import { getCountryCode } from '../../utils/helpers';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';

const Head = dynamic(import('../../components/CustomHeads/headComoComprar'))
const Nav = dynamic(import('../../components/nav'))
const Button = dynamic(import('../../components/Button'))
const FooterInfo = dynamic(import('../../components/FooterInfo'))

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
  const router = useRouter()
  // const {t} = useTranslation('cotizacion')

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Head title="Compra un auto de forma segura | Carbula Autos Chile" />
      <Nav />
      <div className={styles.canvaDiv}>
        <div>
          <iframe loading="lazy" className={styles.canvaIframe}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFThkCEzDE&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFThkCEzDE&#x2F;view?utm_content=DAFThkCEzDE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">[CHI] - Landing page sorteos</a> de Martín Salassa
      </div>
      <div  align="center">
        <a target="__blank" rel="noopener noreferrer" href="/bases-sorteo">Bases y condiciones del sorteo</a>
      </div>
      <div className={styles.footer__container}>
        <FooterInfo grey country_code={COUNTRY_CODE}/>
      </div>
    </div>
  )
}
export default Sorteos;
