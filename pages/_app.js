import { useEffect } from "react";
import TagManager from 'react-gtm-module';
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import es from 'dayjs/locale/es'
import { appWithTranslation } from 'next-i18next';
import { getGTMid } from '../utils/helpers';
import '../sass/carousel.scss';
import '../sass/odometer.scss';
import { FB_PIXEL_ID } from "../utils/constants";


dayjs.extend(calendar)
dayjs.extend(updateLocale)
dayjs.extend(localizedFormat)

dayjs.locale({
  ...es,
  calendar: {
    sameDay: '[Hoy a las] HH:mm', // The same day ( Today at 2:30 AM )
    nextDay: '[Mañana]', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Ayer a las] HH:mm', // The day before ( Yesterday at 2:30 AM )
    lastWeek: 'dddd [pasado a las] HH:mm', // Last week ( Last Monday at 2:30 AM )
    sameElse: 'DD/MM/YYYY' // Everything else ( 7/10/2011 )
  }
})
dayjs.updateLocale('es', {
  weekdays: [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ]
})


// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Tag Manager
    TagManager.initialize({ gtmId: getGTMid(pageProps.COUNTRY_CODE) });

    // Initialize Facebook Pixel
    if (typeof window !== 'undefined') {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID); // Reemplaza 'YOUR_PIXEL_ID' con tu ID de píxel
      fbq('track', 'PageView');

      // Create a global fbq function to track events
      window.fbq = window.fbq || function() { (window.fbq.q = window.fbq.q || []).push(arguments) };
    }
  }, [pageProps.COUNTRY_CODE]);

  const handleEvent = (eventName) => {
    if (window.fbq) {
      window.fbq('track', eventName);
    }
  };

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Component {...pageProps} handleEvent={handleEvent} />
    </>
  );
}

export default appWithTranslation(MyApp);