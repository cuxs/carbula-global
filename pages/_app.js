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
import Script from 'next/script';


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
  const tiktokpixelID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  useEffect(() => {
    // Initialize Google Tag Manager
    //TagManager.initialize({ gtmId: getGTMid(pageProps.COUNTRY_CODE) });
    {/* Google tag (gtag.js) */ }
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-YPVCKX90N6');

    // Initialize Facebook Pixel
    if (typeof window !== 'undefined') {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
          n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID); // Reemplaza 'YOUR_PIXEL_ID' con tu ID de píxel
      fbq('track', 'PageView');

      // Create a global fbq function to track events
      window.fbq = window.fbq || function () { (window.fbq.q = window.fbq.q || []).push(arguments) };
    }
  }, [pageProps.COUNTRY_CODE]);

  const handleEvent = (eventName) => {
    if (window.fbq) {
      window.fbq('track', eventName);
    }
  };

  return (
    <>
      {/* google adds*/}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YPVCKX90N6" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YPVCKX90N6');
        `}
      </Script>
      {/* tik-tok Pixel */}
      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],
              ttq.setAndDefer=function(t,e){
                t[e]=function(){
                  t.push([e].concat(Array.prototype.slice.call(arguments,0)))
                }
              };
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){
                for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
                return e
              },
              ttq.load=function(e,n){
                var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
                ttq._i=ttq._i||{},
                ttq._i[e]=[],
                ttq._i[e]._u=r,
                ttq._t=ttq._t||{},
                ttq._t[e]=+new Date,
                ttq._o=ttq._o||{},
                ttq._o[e]=n||{};
                n=document.createElement("script"),
                n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
                e=document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n,e)
              };

              ttq.load('${tiktokpixelID}');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />
      {/*<!-- TikTok Pixel Code End -->*/}
      <Component {...pageProps} handleEvent={handleEvent} />
    </>
  );
}

export default appWithTranslation(MyApp);