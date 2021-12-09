import '../sass/carousel.scss';
import '../sass/odometer.scss';
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import es from 'dayjs/locale/es'
import { appWithTranslation } from 'next-i18next';

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
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)