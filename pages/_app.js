import { useEffect } from "react";
import TagManager from 'react-gtm-module';
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import es from 'dayjs/locale/es'
import { appWithTranslation } from 'next-i18next';
import { getGTMid } from '../utils/helpers';
import { FB_PIXEL_ID } from "../utils/constants";
import { pixelPageview, pixelEvent } from "../utils/fetches";
import '../sass/carousel.scss';
import '../sass/odometer.scss';
import { useRouter } from "next/router";
import Script from "next/script";

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
    TagManager.initialize({ gtmId: getGTMid(pageProps.COUNTRY_CODE) });
    pixelPageview();

    const handleRouteChange = () => {
      pixelPageview();
    }

  }, [pageProps.COUNTRY_CODE]);

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FB_PIXEL_ID});
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp)