import { useEffect } from 'react'
import styles from './blackout.module.scss'
import classnames from "classnames"
import { useSpring, animated, config } from 'react-spring'
import { PuffLoader } from "react-spinners";

const BlackoutComponent = ({ overlayBackground }) => {
  const blackOutClasses = classnames({
    black__overlay: !overlayBackground,
    'black__overlay--expanded': overlayBackground
  })

  const [logoStyle, logoSpring] = useSpring(() => ({ from: { opacity: 0 }, }))
  const [textStyle, textSpring] = useSpring(() => ({ from: { opacity: 0 }, }))
  const [text2Style, text2Spring] = useSpring(() => ({ from: { opacity: 0 }, }))
  

  useEffect(() => {
    if (overlayBackground) {
      logoSpring.start({ opacity: 1, delay: 1000, config: config.slow })
      textSpring.start({ opacity: 1, delay: 1200, config: config.slow })
      text2Spring.start({ opacity: 1, delay: 5000, config: config.slow })
    }
  }, [overlayBackground])


  return (<span className={styles[blackOutClasses]} id="blackout">
    <div className={styles.cargando__container}>
      <animated.img style={logoStyle} src="/images/logo.svg" alt="logo"/>
      <div className={styles.loading__spinner}>
        <PuffLoader color="#3074F1" css={`position: absolute; top: 1000px;left:50%; transform: translate(-50%)`} />
      </div>
      <animated.h2 style={textStyle}>Estamos analizando el mercado en tiempo real con tecnología de punta</animated.h2>
      <animated.h3 style={text2Style}>Aguardá un momento, preparar tu propuesta puede llevar alrededor de 30 segundos. </animated.h3>
    </div>
  </span>)
}
export default BlackoutComponent