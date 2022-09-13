import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Head from '../../components/head'
import styles from './cotizacion.module.scss';
import { PuffLoader } from "react-spinners";
import CryptoJS from 'crypto-js'
import { capitalize, startsWith, isEmpty } from 'lodash';
import classnames from 'classnames';
import { formatNumber, getCotization, getCountryCode, getPhoneNumber, getWhatsappNumber, pushCustomState } from '../../utils/helpers';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useSpring, useTransition, animated, config } from "react-spring";
import { COUNTRY, LAST_STEP_DESKTOP, LAST_STEP_MOBILE, CURRENCY } from '../../utils/constants';
import { checkScheduleMeeting, getLocationName } from '../../utils/fetches';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Nav = dynamic(import('../../components/nav'))
const Button = dynamic(import('../../components/Button'))
const FooterInfo = dynamic(import('../../components/FooterInfo'))
const CotizationForm = dynamic(import('../../components/CotizationForm'))
const FaqCotization = dynamic(import('../../components/FaqCotization'))

export async function getServerSideProps(context) {
  return{
    props:{
      COUNTRY_CODE: getCountryCode(context.locale),
      ...(await serverSideTranslations(context.locale, ['cotizacion', 'CotizationForm', 'FaqCotization', 'FooterInfo'])),

    }
  }
}

const Cotizacion = ({COUNTRY_CODE}) => {
  const [step, setStep] = useState(0)
  const [selectedPrice, setPrice] = useState()
  const [width, setWidth] = useState();
  const [shouldFetchMeetingData, setShouldFetchMeetingData] = useState(false);
  const [meetFetched, setMeetFetched] = useState(false)
  const [meetData, setMeetData] = useState()
  const [locationName, setLocationName] = useState('')
  const [cotizationData, setCotizationData] = useState()
  const router = useRouter()
  const {t} = useTranslation('cotizacion')

  const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200, config: config.slow })
  const priceProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400, config: config.slow })
  const faqProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600, config: config.slow })
  const blueFooterProps = useSpring({ transform: 'translateY(0px', from: { transform: 'translateY(200px)' }, delay: 1000, config: config.molasses })
  const redFooterProps = useSpring({ transform: 'translateY(0px', from: { transform: 'translateY(200px)' }, delay: 1000, config: config.molasses })
  const cardProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800, config: config.slow })

  const containerClass = classnames({
    cotization__container: !((step === LAST_STEP_DESKTOP && width > 769) || (step === LAST_STEP_MOBILE && width < 769)),
    'cotization__container--success': (step === LAST_STEP_DESKTOP && width > 769) || (step === LAST_STEP_MOBILE && width < 769)
  })
  useEffect(() => {
    setWidth(window.innerWidth)
    const cotizationCrypted = getCotization();
    if (!cotizationCrypted) {
      return router.push('/')
    }
    const bytes = CryptoJS.AES.decrypt(cotizationCrypted, 'cotizacion')
    const cotizationDataJSON = bytes.toString(CryptoJS.enc.Utf8);
    const cotizationObject = JSON.parse(cotizationDataJSON)
    setCotizationData(cotizationObject)
    setPrice(cotizationObject.granted_price)
  }, [])

  useEffect(() => {
    clearAllBodyScrollLocks()
  }, [])

  useEffect(() => {
    const urlStep = {
      0: 'paso-1',
      1: 'paso-2',
      2: 'paso-3',
      3: 'paso-4',
      4: 'paso-5',
      5: 'paso-6',
      6: 'paso-7',
      7: 'paso-8',
      8: 'paso-9',
      9: 'paso-10',
    }
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, paso: urlStep[step] }
      },
      undefined, { shallow: true })
      
  }, [step])



  useEffect(() => {
    async function fetchLocationName() {
      try {
        if (cotizationData) {
          const { data } = await getLocationName(cotizationData.location)
          setLocationName(data.mensaje)
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchLocationName()
  }, [cotizationData])


  useEffect(() => {
    if (width > 769 && step === LAST_STEP_DESKTOP - 1) {
      return setShouldFetchMeetingData(true)
    }
    if (width < 769 && step === LAST_STEP_MOBILE - 1) {
      return setShouldFetchMeetingData(true)
    }
    setShouldFetchMeetingData(false)
  }, [step])

  useEffect(() => {
    
    let timeout;
    async function checkMeeting() {
      try {
        const { data } = await checkScheduleMeeting(cotizationData.external_id, cotizationData.email, COUNTRY_CODE) //BSAS - revisar la API
        if (!data.data || isEmpty(data.data) && shouldFetchMeetingData) {
          timeout = setTimeout(() => {
            checkMeeting()
          }, 1000);
        }
        if (data.data && !isEmpty(data.data)) {
          setMeetFetched(true)
          setMeetData({
            date: dayjs(data.data.start_time).format('LLLL'),
            address: data.data.body
          })
          setStep(step + 1)
        }
      } catch (e) {
        console.log(e.message)
      }
    }
    if (shouldFetchMeetingData) {
      checkMeeting()
    }
    return () => clearTimeout(timeout)
  }, [shouldFetchMeetingData])

  useEffect(() => {
    if (meetFetched) {
      router.push({ query: { ...router.query, agendado: true}}, undefined, {shallow: true})
    }
  }, [meetFetched])
  const renderHeight = () => {
    const heights = {
      0: { height: '120vh' },
      1: { height: '130vh' },
      2: { height: '130vh' },
      3: { height: '175vh' },
      4: { height: '120vh' },
      5: { height: '110vh' },
      6: { height: '110vh' },
      7: { height: '110vh' },
      8: { height: '110vh' },
    }
    return heights[step]
  }

  const renderStep = () => {
    if (cotizationData) {
      switch (step) {
        case 0: return (
          <Fragment>
            <animated.div style={titleProps}>
              <h2>Valor promedio</h2>
              <h3>para {COUNTRY_CODE === 'mx' ? 'tu' : 'su'} {capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            </animated.div>
            <animated.div style={priceProps} className={styles.price__comparison}>
              {cotizationData.retake_price && cotizationData.retake_price < cotizationData.granted_price && <div className={styles.automotora__price}><h4 className={styles.red}>{t('priceComparison.unaConsesionaria')}</h4><h3>{COUNTRY_CODE === 'mx' ? '' : CURRENCY[COUNTRY_CODE]}$ {formatNumber(cotizationData.retake_price, 0)}</h3></div>}
              <div className={styles.carbula__price}><h4>{t('priceComparison.withCarbula')}</h4><h3>{COUNTRY_CODE === 'mx' ? '' : CURRENCY[COUNTRY_CODE]}$ {formatNumber(selectedPrice, 0)}</h3></div>
            </animated.div>
            <animated.div style={faqProps}>
              {width > 769 && <FaqCotization />}
            </animated.div>
          </Fragment>
        )
        case 1: return (
          <Fragment>
            <div className={styles['price-model__container']}>
              <h2>${formatNumber(selectedPrice, 0)}</h2>
              <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            </div>
            <div className={styles.steps__container}>
              <div className={styles['step__row--active']}>
                <span>1º</span><p>{t('stepOneTitle')}</p>
              </div>
              <div className={styles.step__row}>
                <span>2º</span><p><span className={styles.agendar}>Agendar</span> Inspección Virtual</p>
              </div>
            </div>
          </Fragment>
        )
        case 2: return (
          <Fragment>
            <div className={styles['price-model__container']}>
              <h2>${formatNumber(selectedPrice, 0)}</h2>
              <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            </div>
            <div className={styles.steps__container}>
              <div className={styles.step__row} onClick={() => setStep(1)}>
                <span>1º</span><p>{t('stepOneTitle')}</p>
              </div>
              <div className={styles['step__row--active']}>
                <span>2º</span><p><span className={styles.agendar}>Agendar</span> Inspección Virtual</p>
              </div>
            </div>
          </Fragment>
        )
        case 3: if (width < 769) {
          return <div className={styles['price-model__container']}>
            <h2>${formatNumber(selectedPrice, 0)}</h2>
            <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            <div className={styles.steps__container}>
              <div className={styles.step__row} onClick={() => setStep(1)}>
                <span>1º</span><p>{t('stepOneTitle')}</p>
              </div>
              <div className={styles['step__row--active']}>
                <span>2º</span><p><span className={styles.agendar}>Agendar</span> Inspección Virtual</p>
              </div>
            </div>
          </div>
        }
          return (
            <div className={styles['price-model__container']}>
              <h2>¡Felicitaciones! <br /> {t('congratulations')}</h2>
              <div className={styles.steps__container}>
                <p>{COUNTRY_CODE === 'mx' ? t('importante') : <Fragment><b>Es muy importante</b> que su vehículo se encuentre aparcado al aire libre y limpio; despejado de objetos personales y en su mejor estado posible para poder sacar el mayor provecho de las fotografías.</Fragment>}
                  <br /><br />
                  {t('nosVemos')}
                </p>
                <hr />
                <p>Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos. <br /> ¡Con gusto le ayudaremos!</p>
                <div className={styles['end-buttons']}>
                  <a href={`tel:${getPhoneNumber(COUNTRY_CODE)}`}><Button noBorder>Llamar</Button></a>
                  <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><Button noBorder><img src="/icons/whatsapp-green.svg" alt="whatsapp" />Whatsapp</Button></a>
                </div>
              </div>
            </div >

          )
        case 4: {
          if (width < 769) {
            return <div className={styles['meeting-info']}>
              <h3>Felicitaciones</h3>
              <h2>Agendó su inspección</h2>
              <hr />
              <div className={styles.meeting__row}>
                <img src="/icons/calendar-white.svg" alt="calendario" />
                <p>{meetData.date}</p>
              </div>
              <hr />
              <h2>{cotizationData.year} {cotizationData.brand} {cotizationData.model}</h2>
              <h3>{cotizationData.version} - {formatNumber(cotizationData.kms, 0)} kms</h3>
              <br /><br /><br />
              <p>
                Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.<br />¡Con gusto le ayudaremos!
              </p>
              <div className={styles['end-buttons']}>
                <a href={`tel:${getPhoneNumber(COUNTRY_CODE)}`}><Button noBorder>Llamar</Button></a>
                <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><Button noBorder><img src="/icons/whatsapp-green.svg" alt="whatsapp" />Whatsapp</Button></a>
              </div>
            </div >
          }
        }
        case 5: {
          if (width < 769) {
            return <div className={styles['price-model__container']}>
              <h2>${formatNumber(selectedPrice, 0)}</h2>
              <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
              <div className={styles.steps__container}>
                <div className={styles.step__row} onClick={() => setStep(1)}>
                  <span>1º</span><p>Características</p>
                </div>
                <div className={styles['step__row--active']} onClick={() => setStep(2)}>
                  <span>2º</span><p>{t('stepOneTitle')}</p>
                </div>
                <div className={styles.step__row}>
                  <span>3º</span><p><span className={styles.agendar}>Agendar</span> Inspección</p>
                </div>
              </div>
            </div>
          }
          return (
            <div className={styles['price-model__container']}>
              <h2>¡Felicitaciones! <br /> {t('congratulations')}</h2>
              <div className={styles.steps__container}>
                <p>{COUNTRY_CODE === 'mx' ? t('importante') : <Fragment><b>Es muy importante</b> que su vehículo se encuentre aparcado al aire libre y limpio; despejado de objetos personales y en su mejor estado posible para poder sacar el mayor provecho de las fotografías.</Fragment>}
                  <br /><br />
                  {t('nosVemos')}
                </p>
                <hr />
                <p>Si {t('tenes')} alguna pregunta o necesita ayuda, no dudes en contactarnos. <br /> ¡Con gusto {t('te')} ayudaremos!</p>
                <div className={styles['end-buttons']}>
                  <a href={`tel:${getPhoneNumber(COUNTRY_CODE)}`}><Button noBorder>Llamar</Button></a>
                  <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><Button noBorder><img src="/icons/whatsapp-green.svg" alt="whatsapp" />Whatsapp</Button></a>
                </div>
              </div>
            </div >

          )
        }
        case 6: if (width < 769) {
          return <div className={styles['price-model__container']}>
            <h2>${formatNumber(selectedPrice, 0)}</h2>
            <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            <div className={styles.steps__container}>
              <div className={styles.step__row} onClick={() => setStep(1)}>
                <span>1º</span><p>Características</p>
              </div>
              <div className={styles['step__row--active']} onClick={() => setStep(2)}>
                <span>2º</span><p>{t('stepOneTitle')}</p>
              </div>
              <div className={styles.step__row}>
                <span>3º</span><p><span className={styles.agendar}>Agendar</span> Inspección</p>
              </div>
            </div>
          </div>
        }
        case 7: if (width < 769) {
          return <div className={styles['price-model__container']}>
            <h2>${formatNumber(selectedPrice, 0)}</h2>
            <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            <div className={styles.steps__container}>
              <div className={styles.step__row} onClick={() => setStep(1)}>
                <span>1º</span><p>Características</p>
              </div>
              <div className={styles['step__row--active']} onClick={() => setStep(2)}>
                <span>2º</span><p>{t('stepOneTitle')}</p>
              </div>
              <div className={styles.step__row}>
                <span>3º</span><p><span className={styles.agendar}>Agendar</span> Inspección</p>
              </div>
            </div>
          </div>
        }
        case 8: if (width < 769) {
          return <div className={styles['price-model__container']}>
            <h2>${formatNumber(selectedPrice, 0)}</h2>
            <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
            <div className={styles.steps__container}>
              <div className={styles.step__row} onClick={() => setStep(1)}>
                <span>1º</span><p>Características</p>
              </div>
              <div className={styles.step__row} onClick={() => setStep(2)}>
                <span>2º</span><p>{t('stepOneTitle')}</p>
              </div>
              <div className={styles['step__row--active']}>
                <span>3º</span><p><span className={styles.agendar}>Agendar</span> Inspección</p>
              </div>
            </div>
          </div>
        }
        case 9: if (width < 769) {
          return <div className={styles['meeting-info']}>
            <h3>Felicitaciones</h3>
            <h2>Agendó su inspección</h2>
            <hr />
            <div className={styles.meeting__row}>
              <img src="/icons/calendar-white.svg" alt="calendario" />
              <p>{meetData.date}</p>
            </div>
            <div className={styles.meeting__row}>
              <img src="/icons/location-white.svg" alt="ubicación" />
              <p>{meetData.address}, {locationName}, {COUNTRY[COUNTRY_CODE]}</p>
            </div>
            <hr />
            <h2>{cotizationData.year} {cotizationData.brand} {cotizationData.model}</h2>
            <h3>{cotizationData.version} - {formatNumber(cotizationData.kms, 0)} kms</h3>
            <br /><br /><br />
            <p>
              Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.<br />¡Con gusto le ayudaremos!
            </p>
            <div className={styles['end-buttons']}>
              <a href={`tel:${getPhoneNumber(COUNTRY_CODE)}`}><Button noBorder>Llamar</Button></a>
              <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><Button noBorder><img src="/icons/whatsapp-green.svg" alt="whatsapp" />Whatsapp</Button></a>
            </div>
          </div >
        }
        default: return <Fragment>
          <h2>${formatNumber(selectedPrice, 0)}</h2>
          <h3>{capitalize(cotizationData.brand)} {capitalize(cotizationData.model)} {capitalize(cotizationData.year)}</h3>
          <div className={styles.steps__container}>
            <div className={styles['step__row--active']}>
              <span>1º</span><p>Características</p>
            </div>
            <div className={styles.step__row}>
              <span>2º</span><p>{t('stepOneTitle')}</p>
            </div>
            <div className={styles.step__row}>
              <span>3º</span><p><span className={styles.agendar}>Agendar</span> Inspección</p>
            </div>
          </div>
        </Fragment>
      }
    }
  }
  if(!cotizationData){
    return  <PuffLoader color="#3074F1" css={`position: absolute; top: 1000px;left:50%; transform: translate(-50%)`} />
  }
  return (
    <div className={styles[containerClass]} style={renderHeight()}>
      <Head title={`Cotización para ${cotizationData?.name}`} />
      <Nav />
      <div className={styles['car-detail__section']}>
        {renderStep()}
      </div>
      <animated.div
        style={cardProps}
      >
        {(step !== LAST_STEP_MOBILE) && <CotizationForm //debo ocultarlo en el ultimo paso mobile
          grantedPrice={cotizationData.granted_price}
          external_id={cotizationData.external_id}
          selectedPrice={selectedPrice ? parseInt(selectedPrice, 10) : undefined}
          setSelectedPrice={setPrice}
          setStep={setStep}
          step={step}
          name={cotizationData.name}
          email={cotizationData.email}
          phone={cotizationData.phone}
          width={width}
          variablePrices={{
            _publicationPrice: cotizationData.precioPublicacion,
            _marginPrice: cotizationData.margen,
            _carbulaFee: cotizationData.comisionCarbula,
            _isMinimum: cotizationData.isMinimum
          }}
          brand={cotizationData.brand}
          year={cotizationData.year}
          model={cotizationData.model}
          version={cotizationData.version}
          kms={cotizationData.kms}
          meetData={meetData}
          locationName={locationName}
          COUNTRY_CODE={COUNTRY_CODE}
        />}
      </animated.div>
      <div className={styles.footer__container}>
        <FooterInfo blue={step !== LAST_STEP_MOBILE} white={step === LAST_STEP_MOBILE} country_code={COUNTRY_CODE}/>
      </div>
      {!startsWith(step, 'end') && <animated.div style={blueFooterProps} className={styles.footer__blue} />}
      {startsWith(step, 'end') && <animated.div style={redFooterProps} className={styles.footer__red} />}
    </div>
  )
}
export default Cotizacion;
