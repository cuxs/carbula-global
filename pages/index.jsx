import React, { useState, Fragment, useEffect, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Head from '../components/head'
import Jumbotron from '../components/Jumbotron'
import styles from './index/home.module.scss'
import Image from 'next/image'
import { getZonas } from '../utils/fetches';
import { useSpring, animated } from "react-spring";
import { hotjar } from 'react-hotjar'
import { clearCotization, getCountryCode, clearLocalStorage, getHotjarId, getPhoneNumber, getWhatsappNumber } from '../utils/helpers';
import { upperFirst } from 'lodash'
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';



const BlackoutComponent = dynamic(import('../components/BlackoutComponent'))
const Carousel = dynamic(import('@brainhubeu/react-carousel'), { ssr: false })
const NuestrosClientes = dynamic(import('../components/NuestrosClientes'))
const FaqComponent = dynamic(import('../components/FaqComponent'))
const QuoteComponent = dynamic(import('../components/QuoteComponent'))
const FooterInfo = dynamic(import('../components/FooterInfo'))
const Button = dynamic(import('../components/Button'))
const Nav = dynamic(import('../components/nav'))


export async function getServerSideProps(context) {
  const { referer } = context.req.headers
  try {
    const { data } = await getZonas(getCountryCode(context.locale));
    const parsedZonas = data.map((row) => ({
      value: row.id,
      label: row.nombre,
      referer: referer ? referer : null
    }))
    return {
      props: {
        zonas: parsedZonas,
        referer: referer ? referer : null,
        COUNTRY_CODE: getCountryCode(context.locale),
        ...(await serverSideTranslations(context.locale, ['common', 'BlackoutComponent', 'FaqComponent', 'FooterInfo'])),
      }
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        referer: referer ? referer : null,
        COUNTRY_CODE: getCountryCode(context.locale),
        ...(await serverSideTranslations(context.locale, ['common', 'BlackoutComponent', 'FaqComponent'])),
      }
    }
  }
}

const Home = ({ zonas, referer, COUNTRY_CODE }) => {
  const { t } = useTranslation('common')
  const SellForm = useCallback(dynamic(() => {
    const SellForms = {
      'ar': import('../components/SellForm'),
      'cl': import('../components/SellFormChile'),
      'uy': import('../components/SellForm'),
      'mx': import('../components/SellForm'),
    }
    return SellForms[COUNTRY_CODE]
  }),[])
  const router = useRouter();
  const [title, setTitle] = useState([`Vendemos ${t('tu')} vehículo`, 'por hasta 25% más de dinero.'])
  const [subtitle, setSubtitle] = useState(['Publicamos en todos lados. Atendemos a los interesados.', 'Manejamos el papeleo. Garantizamos el cobro seguro.']);
  const [step, setStep] = useState(0)
  const [overlayBackground, setOverlayBackground] = useState(false);

  const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 })

  useEffect(() => {
    hotjar.initialize(getHotjarId(COUNTRY_CODE), 6)
    clearLocalStorage()
  }, [])

  useEffect(() => {
    switch (step) {
      case 0:
        setTitle([`Vendemos ${t('tu')} vehículo`, 'por hasta 25% más de dinero.'])
        setSubtitle(['Publicamos en todos lados. Atendemos a los interesados.', 'Manejamos el papeleo. Garantizamos el cobro seguro.'])
        break;
      case 1:
        setTitle([`Gracias por completar los datos de ${t('tu')} vehículo`])
        setSubtitle([t('contanos')])
        window.scrollTo(0, 0)
        break;
      default:
        break;
    }
  }, [step])

  useEffect(() => {
    if (overlayBackground) {
      window.scrollTo(0, 0)
      const targetElement = document.querySelector('#blackout')
      disableBodyScroll(targetElement)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [overlayBackground])

  const getSomosText = () => {
    const texts = {
      ar: <Fragment>SOMOS UNA STARTUP POTENCIADA POR <a target="__blank" href="https://embarca.tech">EMBARCA</a>,<a target="__blank" href="https://www.corfo.cl/sites/cpp/homecorfo">CORFO</a>, <a target="__blank" href="https://www.startupchile.org">STARTUP CHILE</a> y <a target="__blank" href="https://www.seedstars.com/funds/international/">SEEDSTARS</a> COMPROMETIDA <br /> EN REINVENTAR LA ANTIGUA Y ENGORROSA EXPERIENCIA A LA HORA DE VENDER O COMPRAR VEHÍCULOS.</Fragment>,
      cl: <Fragment>SOMOS UNA STARTUP POTENCIADA POR <a target="__blank" href="https://www.startupchile.org/">STARTUP CHILE</a> COMPROMETIDA EN REINVENTAR LA ANTIGUA Y ENGORROSA EXPERIENCIA A LA HORA DE VENDER O COMPRAR VEHÍCULOS.</Fragment>,
      uy: <Fragment>SOMOS UNA STARTUP POTENCIADA POR <a target="__blank" href="https://www.anii.org.uy/">ANII</a>, <a target="__blank" href="https://www.startupchile.org">STARTUP CHILE</a> y <a target="__blank" href="https://www.seedstars.com/funds/international/">SEEDSTARS</a> COMPROMETIDA EN REINVENTAR LA ANTIGUA Y ENGORROSA EXPERIENCIA A LA HORA DE VENDER O COMPRAR VEHÍCULOS.</Fragment>,
      mx: <Fragment>SOMOS UNA STARTUP POTENCIADA POR <a target="__blank" href="https://www.startupchile.org/">STARTUP CHILE</a> COMPROMETIDA EN REINVENTAR LA ANTIGUA Y ENGORROSA EXPERIENCIA A LA HORA DE VENDER O COMPRAR VEHÍCULOS.</Fragment>
    }
    return texts[COUNTRY_CODE]
  }
  return (
    <Fragment>
      <Head title="Cárbula" />
      <BlackoutComponent overlayBackground={overlayBackground} />
      <Nav />
      <animated.div style={titleProps}>
        <Jumbotron title={title} subtitle={subtitle} />
      </animated.div>
      <SellForm step={step} setStep={setStep} setOverlayBackground={setOverlayBackground} zonas={zonas} referer={referer} COUNTRY_CODE={COUNTRY_CODE} />
      <section className={styles.section1__container}>
        <div className={styles.text__container}>
          <h2 className={styles.section1__title}>Nosotros nos ocupamos de todo.</h2>
          <div className={styles['benefits--desktop']}>
            <h3>{upperFirst(t('tu'))} tiempo es valioso.</h3>
            <p>{t('dedicate')}</p>
            <h3>{upperFirst(t('tu'))} vehículo vale más.</h3>
            <p>Sin especular y al mejor valor del mercado, vendiendo con nosotros usted gana hasta un 25% más de dinero.</p>
            <h3>{upperFirst(t('tu'))} tranquilidad es lo principal.</h3>
            <p>{upperFirst(t('te'))}  garantizamos la cobranza de los fondos, atendemos a los interesados y nos ocupamos de todos los trámites.</p>
          </div>
          <div className={styles['benefits--mobile']}>
            <Carousel dots infinite autoplay>
              <div className={styles.carousel__step}>
                <div className={styles.step__title}>
                  <h3>{upperFirst(t('tu'))} tiempo es valioso.</h3>
                </div>
                <p>{t('dedicate')}</p>
              </div>
              <div className={styles.carousel__step}>
                <div className={styles.step__title}>
                  <h3>{upperFirst(t('tu'))} auto vale más.</h3>
                </div>
                <p>Sin especular y al mejor valor del mercado, vendiendo con nosotros usted gana hasta un 25% más de dinero.</p>
              </div>
              <div className={styles.carousel__step}>
                <div className={styles.step__title}>

                  <h3>{upperFirst(t('tu'))} tranquilidad es lo principal.</h3>
                </div>
                <p>{upperFirst(t('te'))}  garantizamos la cobranza de los fondos, atendemos a los interesados y nos ocupamos de todos los trámites.</p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className={styles.couple__image}>
          <Image src="/images/carbula_couple.png" width="690" height="640" alt="Pareja" />
        </div>
      </section>
      <section>
        <QuoteComponent text={['El mundo está cambiando.', 'La forma de vender y comprar', 'vehículos, también.']} />
      </section>
      <section>
        <div className={styles.section2__container}>
          <div>
            <h2 className={styles.text__secondary}>{t('contactanos')}</h2>
            <div className={styles.image} >
              <Image src="/images/carbula_contacto.png" width="465" height="448" alt="Contacto" />
            </div>
            <p>Si tenés alguna pregunta o {t('necesitas')} ayuda,</p>
            <p> no dudes en contactarnos. ¡Con gusto te ayudaremos!</p>
            <div className={styles.buttons__container}>
              <a href={`tel:${getPhoneNumber(COUNTRY_CODE)}`}><Button secondaryOutlined>Llamar</Button></a>
              <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><Button secondary>Whatsapp</Button></a>
            </div>
          </div>
          <div>
            <h2 className={styles.text__primary}>Dudas frecuentes</h2>
            <FaqComponent />
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.section3__container}>
          <h2 className={styles.text__primary}>¿Qué opinan nuestros clientes?</h2>
          <NuestrosClientes country_code={COUNTRY_CODE} />
        </div>
        <div className={styles.somos__text}>{getSomosText()}</div>
        <hr />
      </section>
      <section>
        <FooterInfo grey country_code={COUNTRY_CODE} />
      </section>
    </Fragment>
  )
}


export default React.memo(Home)
