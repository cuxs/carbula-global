import { Fragment, useState, useEffect } from "react";
import styles from './nuestrosClientes.module.scss';
import dynamic from 'next/dynamic';
import { getReviews } from "../../utils/helpers";

const Carousel = dynamic(import('@brainhubeu/react-carousel'), {ssr: false})

const NuestrosClientes = ({country_code}) => {
  const [reviews, setReviews] = useState(getReviews(country_code));
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