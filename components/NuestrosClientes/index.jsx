import { Fragment, useState, useEffect } from "react";
import styles from './nuestrosClientes.module.scss';
import dynamic from 'next/dynamic';

const Carousel = dynamic(import('@brainhubeu/react-carousel'), {ssr: false})

const NuestrosClientes = (props) => {
  const [reviews, setReviews] = useState([
    {
      author_name: 'Roberto Marcelo',
      text: 'Excelente atención. Vendieron mi vehículo y me contactaron con el dueño de mi nuevo auto. Todo muy ágil y coordinado. Los recomiendo. Diez puntos',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GgrZSAJNZM-CSkveM0nwJf_NBEiS_Kqxio8DWGYjcI=w120-h120-p-rp-mo-br100',
      "rating": 5,
    },
    {
      author_name: 'Luli García',
      text: 'Ni una queja. Todo impecable, súper rápido. prácticamente no tuve que hacer nada. Se encargan de todo! Estoy muy conforme! Muchísimas gracias a todos los que trabajan en Cárbula :)',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjePaHDf84p6qxcXb1mHs9CgMdI2qYukcoghQ7HYiY=w120-h120-p-rp-mo-br100',
      "rating": 5,
    },
    {
      author_name: 'Gerardo Tisera',
      text: 'IMPECABLE!!! verdaderamente un lujo en todos los aspectos, paciencia, transparencia y muy eficaz el servicio, para los que no sabemos de estas cosas es una tranquilidad poder contar con semejante nivel de profesionalismo!!!',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GhZBiBxLEA6zqbzq4rvoLdoBxFH9O6RBroRFxJ1kg=w120-h120-p-rp-mo-br100',
      "rating": 5,
    },
    {
      author_name: 'Maribel Plaza',
      text: 'Excelente atención, estuvieron siempre dispuestos a resolver mis inquietudes y me acompañaron en todo el proceso de venta de mi auto. Quedé muy conforme con la negociación ya que recibí más dinero del mínimo acordado.',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gg9Vh_6ENYIdlyVRGvU2JGqoacL2z2Vdk-GuthdBQ=w120-h120-p-rp-mo-br100',
      "rating": 5,
    },
    {
      author_name: 'Daniel Mangione',
      text: 'Muy buena experiencia, una alternativa segura y confiable. Es para desentenderse de trámites y búsquedas. Excelente atención el personal de Carbula. 💯 % recomendable.',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJwR5OODZqSf7ORcGrvxoUt5xjA_d61sgT079BTx=w120-h120-p-rp-mo-br100',
      "rating": 5,
    },
    {
      author_name: 'Karen Daffra',
      text: 'Excelente servicio!! Vendí mi auto en dos días, se encargaron de hacer absolutamente todo  y cada vez que tuve alguna duda me contestaron con información útil y súper rápido!  100 % recomendable!!',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJxV2uEHDLYCnvpF-MNqzZAJlwcis5TEClPGgRtE=w120-h120-p-rp-mo-br100',
      "rating": 5,
    },

  ]);
  const [width, setWidth] = useState();
  const renderStars = (rating) => {
    switch (rating) {
      case 3:
        return <img src="/icons/3stars.svg" className={styles.reference__stars} alt='3 estrellas' />
      case 4:
        return <img src="/icons/4stars.svg" className={styles.reference__stars} alt='4 estrellas' />
      case 5:
        return <img src="/icons/5stars.svg" className={styles.reference__stars} alt='5 estrellas' />
      default: return <div />
    }
  }

  useEffect(() => { setWidth(window.innerWidth) }, [])

  useEffect(() => {
    if (reviews.length > 6) {
      const maxIndex = reviews.length - 1;
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const reviewsArray = Array.from(reviews);
      reviewsArray.splice(randomIndex, 1)
      setReviews(reviewsArray)
    }
  }, [reviews])

  const renderReviews = () => (
    reviews.map((row) => (
      <span key={row.author_name}>
        <div className={styles.reference__card}>
          <div className={styles.reference__heading}>
            <img src={row.profile_photo_url} alt="avatar" />
            <b>{row.author_name}</b>
          </div>
          <p>{row.text}</p>
          {renderStars(row.rating)}
        </div>
      </span>))
  )
  return (<div className={styles.nuestrosClientes__container}>
    <div className={styles.reviews__container}>
      <Carousel
        swipeable
        transitionTime={200}
        emulateTouch
        showArrows={false}
        showIndicators
        centered
        infinite
        showStatus={false}
        slidesPerPage={width < 769 ? 1 : 3}
        autoplay={width < 769}
        dots
        showThumbs={false}>
        {renderReviews()}
      </Carousel>
    </div>
    <div style={{ textAlign: 'right', color: 'grey', fontSize: '60%' }}>
      <small >Powered by Google Maps Places ®</small>
    </div>
  </div >
  )
}
export default NuestrosClientes;