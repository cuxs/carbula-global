import format from 'format-number'
import { SOURCES, ROUNDING_BOUNDS } from './constants'
import dayjs from 'dayjs'
import { lowerCase } from 'lodash'

export const formatNumber = (number, decimals, decPoint = ',', thousandsSep = '.') => {
  if (number === 0) {
    return '0,00'
  }
  return format({
    round: decimals, integerSeparator: thousandsSep, decimal: ',', padRight: decimals
  })(number)
}

export const globalValidationData= {
  ar: {
    phoneMinNumber: 4
  },
  cl: {
    phoneMinNumber: 4
  },
  mx: {
    phoneMinNumber: 4
  },
  uy: {
    phoneMinNumber: 59810000000
  }
}

export const estadosMX = [
  { value: 'Aguascalientes', label: 'Aguascalientes' },
  { value: 'Baja California', label: 'Baja California' },
  { value: 'Baja California Sur', label: 'Baja California Sur' },
  { value: 'Campeche', label: 'Campeche' },
  { value: 'Chiapas', label: 'Chiapas' },
  { value: 'Chihuahua', label: 'Chihuahua' },
  { value: 'Ciudad de México', label: 'Ciudad de México' },
  { value: 'Coahuila de Zaragoza', label: 'Coahuila de Zaragoza' },
  { value: 'Colima', label: 'Colima' },
  { value: 'Durango', label: 'Durango' },
  { value: 'Guanajuato', label: 'Guanajuato' },
  { value: 'Guerrero', label: 'Guerrero' },
  { value: 'Hidalgo', label: 'Hidalgo' },
  { value: 'Jalisco', label: 'Jalisco' },
  { value: 'Estado de México', label: 'Estado de México' },
  { value: 'Michoacán de Ocampo 	', label: 'Michoacán de Ocampo 	' },
  { value: 'Morelos', label: 'Morelos' },
  { value: 'Nayarit', label: 'Nayarit' },
  { value: 'Nuevo León', label: 'Nuevo León' },
  { value: 'Oaxaca', label: 'Oaxaca' },
  { value: 'Puebla', label: 'Puebla' },
  { value: 'Querétaro', label: 'Querétaro' },
  { value: 'Quintana Roo', label: 'Quintana Roo' },
  { value: 'San Luis Potosí', label: 'San Luis Potosí' },
  { value: 'Sinaloa', label: 'Sinaloa' },
  { value: 'Sonora', label: 'Sonora' },
  { value: 'Tabasco', label: 'Tabasco' },
  { value: 'Tamaulipas', label: 'Tamaulipas' },
  { value: 'Tlaxcala', label: 'Tlaxcala' },
  { value: 'Veracruz de Ignacio de la Llave', label: 'Veracruz de Ignacio de la Llave' },
  { value: 'Yucatán', label: 'Yucatán' },
  { value: 'Zacatecas', label: 'Zacatecas' }
]

export const checkZone = (location, allzones, country_code) => {

  const uncoveredZonesAR = [
    'General Alvear - Mendoza',
    'Junín - Mendoza',
    'La Paz - Mendoza',
    'Lavalle - Mendoza',
    'Malargüe - Mendoza',
    'Otras provincias',
    'Rivadavia - Mendoza',
    'San Carlos - Mendoza',
    'San Rafael - Mendoza',
    'Santa Rosa - Mendoza',
    'Tunuyán - Mendoza',
    'Tupungato - Mendoza',
  ]

  const uncoveredZonesCL = [
    'Algarrobo',
    'Alhué',
    'Buin',
    'Cabildo',
    'Calera de Tango',
    'Calle Larga',
    'Cartagena',
    'Casablanca',
    'Catemu',
    'Concón',
    'Curacaví',
    'El Monte',
    'El Quisco',
    'El Tabo',
    'Hijuelas',
    'Isla de Maipo',
    'Isla de Pascua',
    'Juan Fernández',
    'La Calera',
    'La Cruz',
    'La Ligua',
    'Limache',
    'Llay-Llay',
    'Los Andes',
    'Mar',
    'María Pinto',
    'Melipilla',
    'Nogales',
    'Olmué',
    'Paine',
    'Panquehue',
    'Papudo',
    'Peñaflor',
    'Petorca',
    'Pirque',
    'Puchuncaví',
    'Putaendo',
    'Quillota',
    'Quilpué',
    'Quintero',
    'Rinconada',
    'San Antonio',
    'San Esteban',
    'San Felipe',
    'San José de Maipo',
    'San Pedro',
    'Santa María',
    'Santo Domingo',
    'Talagante',
    'Til Til',
    'Valparaíso',
    'Villa Alemana',
    'Viña del Mar',
    'Zapallar'
  ]

  const uncoveredZonesMX = ['']
  const uncoveredZonesUY = ['']

  const uncoveredZones = {
      ar: uncoveredZonesAR,
      cl: uncoveredZonesCL,
      mx: uncoveredZonesMX,
      uy: uncoveredZonesUY
  };

  const selectedLocation = allzones.find((row) => row.value === location)
  if (uncoveredZones[country_code].indexOf(selectedLocation.label) > -1) {
    throw new Error('Fuera de cobertura')
  }
}

export const getSourceType = (query, referer) => {
  if (query.hasOwnProperty('utm_campaign')) {
    if (query.utm_campaign === 'Referrals' || query.utm_campaign === 'referrals') {
      return SOURCES.REFERRALS
    }
    return SOURCES.PAID_SEARCH
  }
  if (query.hasOwnProperty('utm_medium')) {
    const { utm_medium } = query;
    if (utm_medium === 'facebook' || utm_medium === 'linkedin' || utm_medium === 'instagram') {
      return SOURCES.SOCIAL_MEDIA
    }
  }
  if (query.hasOwnProperty('utm_source') && query.utm_source === 'Whatsapp') {
    return SOURCES.WHATSAPP
  }
  if (query.hasOwnProperty('utm_source') && !query.hasOwnProperty('utm_medium')) {
    return SOURCES.PAID_SOCIAL
  }
  if (referer) {
    return SOURCES.ORGANIC_SEARCH
  }
  return SOURCES.DIRECT_TRAFFIC
}

export const getCampania = (query) => {
  if (query.hasOwnProperty('utm_campaign')) {
    return query.utm_campaign
  }
  return undefined
}

export const checkYear = (year) => {
  const tenYearsBack = dayjs().year() - 10;
  if (year < tenYearsBack) {
    throw new Error('year not supported')
  }
}

export const isAllowedBrand = (brand) => {
  if (['Chevrolet', 'Ford', 'Renault', 'Fiat', 'Volkswagen', 'Peugeot', 'Toyota'].some((row) => row === brand)) {
    return true
  }
  return false
}

export const getModelExampleText = (brand) => {
  const models = {
    Chevrolet: 'Onix, Cruze o Prisma',
    Ford: 'Focus, EcoSport o Fiesta',
    Renault: 'Sandero, Duster o Clio',
    Fiat: 'Palio, Cronos o Toro',
    Volkswagen: 'Vento, Gol Trend, Fox, Amarok o Up',
    Peugeot: '208, 2008 o 308',
    Toyota: 'Hilux, Corolla o Etios',
  }
  return models[brand] || null
}

export const saveCotization = (encryptedCotization) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem('cotization', encryptedCotization)
  }
}

export const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear()
  }
}

export const getCotization = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('cotization')
  }
}

export const getCountryCode = (locale) => {
  return lowerCase(locale.slice(3))
}
export const saveToken = (token) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem('token', token)
  }
}
export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('token')
  }
}
export const getCalendlyURL = (country_code, email, name, phone) => {
  const urls = {
    'ar': `https://calendly.com/d/zr2q-96wm/argentina-agendamientos-carbula?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}&a1=${phone}`,
    'mx': `https://calendly.com/carbulamex/visita?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}`,
    'uy': `https://calendly.com/carbula-uy/agendar-visita?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}&a1=${phone}`,
    'cl': `https://calendly.com/carbula-cl/agendar-inspeccion?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}&a1=${phone}`
  }
  return urls[country_code]
}

export const getReviews = (country_code) => {
  const reviews = {
    ar: [
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
    ],
    cl: [
      {
        author_name: 'Juan Bustamante',
        text: 'Cierre de venta sumamente rapido ( 1 semana desde publicacion) .Procedimiento de venta expedito 1hora en tu misma casa todo efectuado con transferencias electronicas y todo a un buen precio me atrevo a recomendarlo.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Ghb4D2t2PIEDHTZ8dGcpoQc5Xn2MZ8M1COZD849=w36-h36-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Carola L',
        text: 'No tenía experiencia en ventas de vehículos y me ayudaron demasiado, además poseen una gran agilidad y rapidez en esto, siempre estuvieron en contacto y con una gran transparencia. Totalmente recomendado para los que quieran vender sus vehículos o comprarlos',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gg6K5mtfV53TMlMqbB8wtzvkqdxzoBxZzczBwZ6e1I=w36-h36-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Pablo Ceballos',
        text: 'Compre hace muy poco mi vehículo junto a Cárbula, y nada que decir, excelente servicio, muy buena y rápida gestión de nuestro ejecutivo, en 24 hrs concretamos compra. Todo fue bastante claro y transparente. Muy recomendable el servicio. ¡Muchas gracias!',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjWCnGhbeqsXedfgJKrAPP9O5O5XouW9Nuf2570OA=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Gabriela Peñaloza',
        text: 'Excelente Servicio muy rápido y sencillo el proceso para vender el auto. Todo digitalizado. La atención de primera nos apoyaron en cualquier duda. El auto lo vendieron en solo 2 días una maravilla. 100% recomendado.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjcwZUS2myjtBUIyRMELcRHpus6NWJDphjLAgK2=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Karina Alejandra Quinteros',
        text: 'Excelente servicio! Le sacaron fotografías a mi Subaru New XV el día martes, lo publicaron el miércoles y el día viernes ya estaba vendido!. Todo fue en mi domicilio, sin tener que ir a la notaria para hacer el trámite de transferencia ya que se realizó on-line. Recomiendo de todas maneras.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjJ-2BH5-qq1F67n7M1dA1Nl9P_sJBhvY43SqrIAQ=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Carlos Vilches',
        text: 'Excelente servicio y atención. Un sistema personalizado y que por lejos supera la compra de otros sitios. Muy agradecido de la gestión. Demoró un poco más de una semana vender mi auto.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GhYGERvwGQ5UNVLX5wknqJWC7KeVA4o4ZTHD5h6=w60-h60-p-rp-mo-ba3-br100',
        "rating": 5,
      },
    ],
    uy: [
      {
        author_name: 'Juan Bustamante',
        text: 'Cierre de venta sumamente rapido ( 1 semana desde publicacion) .Procedimiento de venta expedito 1hora en tu misma casa todo efectuado con transferencias electronicas y todo a un buen precio me atrevo a recomendarlo.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Ghb4D2t2PIEDHTZ8dGcpoQc5Xn2MZ8M1COZD849=w36-h36-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Carola L',
        text: 'No tenía experiencia en ventas de vehículos y me ayudaron demasiado, además poseen una gran agilidad y rapidez en esto, siempre estuvieron en contacto y con una gran transparencia. Totalmente recomendado para los que quieran vender sus vehículos o comprarlos',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gg6K5mtfV53TMlMqbB8wtzvkqdxzoBxZzczBwZ6e1I=w36-h36-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Pablo Ceballos',
        text: 'Compre hace muy poco mi vehículo junto a Cárbula, y nada que decir, excelente servicio, muy buena y rápida gestión de nuestro ejecutivo, en 24 hrs concretamos compra. Todo fue bastante claro y transparente. Muy recomendable el servicio. ¡Muchas gracias!',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjWCnGhbeqsXedfgJKrAPP9O5O5XouW9Nuf2570OA=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Gabriela Peñaloza',
        text: 'Excelente Servicio muy rápido y sencillo el proceso para vender el auto. Todo digitalizado. La atención de primera nos apoyaron en cualquier duda. El auto lo vendieron en solo 2 días una maravilla. 100% recomendado.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjcwZUS2myjtBUIyRMELcRHpus6NWJDphjLAgK2=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Karina Alejandra Quinteros',
        text: 'Excelente servicio! Le sacaron fotografías a mi Subaru New XV el día martes, lo publicaron el miércoles y el día viernes ya estaba vendido!. Todo fue en mi domicilio, sin tener que ir a la notaria para hacer el trámite de transferencia ya que se realizó on-line. Recomiendo de todas maneras.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjJ-2BH5-qq1F67n7M1dA1Nl9P_sJBhvY43SqrIAQ=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Carlos Vilches',
        text: 'Excelente servicio y atención. Un sistema personalizado y que por lejos supera la compra de otros sitios. Muy agradecido de la gestión. Demoró un poco más de una semana vender mi auto.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GhYGERvwGQ5UNVLX5wknqJWC7KeVA4o4ZTHD5h6=w60-h60-p-rp-mo-ba3-br100',
        "rating": 5,
      },
    ],
    mx: [
      {
        author_name: 'Juan Bustamante',
        text: 'Cierre de venta sumamente rapido ( 1 semana desde publicacion) .Procedimiento de venta expedito 1hora en tu misma casa todo efectuado con transferencias electronicas y todo a un buen precio me atrevo a recomendarlo.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Ghb4D2t2PIEDHTZ8dGcpoQc5Xn2MZ8M1COZD849=w36-h36-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Carola L',
        text: 'No tenía experiencia en ventas de vehículos y me ayudaron demasiado, además poseen una gran agilidad y rapidez en esto, siempre estuvieron en contacto y con una gran transparencia. Totalmente recomendado para los que quieran vender sus vehículos o comprarlos',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gg6K5mtfV53TMlMqbB8wtzvkqdxzoBxZzczBwZ6e1I=w36-h36-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Pablo Ceballos',
        text: 'Compre hace muy poco mi vehículo junto a Cárbula, y nada que decir, excelente servicio, muy buena y rápida gestión de nuestro ejecutivo, en 24 hrs concretamos compra. Todo fue bastante claro y transparente. Muy recomendable el servicio. ¡Muchas gracias!',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjWCnGhbeqsXedfgJKrAPP9O5O5XouW9Nuf2570OA=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Gabriela Peñaloza',
        text: 'Excelente Servicio muy rápido y sencillo el proceso para vender el auto. Todo digitalizado. La atención de primera nos apoyaron en cualquier duda. El auto lo vendieron en solo 2 días una maravilla. 100% recomendado.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjcwZUS2myjtBUIyRMELcRHpus6NWJDphjLAgK2=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Karina Alejandra Quinteros',
        text: 'Excelente servicio! Le sacaron fotografías a mi Subaru New XV el día martes, lo publicaron el miércoles y el día viernes ya estaba vendido!. Todo fue en mi domicilio, sin tener que ir a la notaria para hacer el trámite de transferencia ya que se realizó on-line. Recomiendo de todas maneras.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjJ-2BH5-qq1F67n7M1dA1Nl9P_sJBhvY43SqrIAQ=w60-h60-p-rp-mo-br100',
        "rating": 5,
      },
      {
        author_name: 'Carlos Vilches',
        text: 'Excelente servicio y atención. Un sistema personalizado y que por lejos supera la compra de otros sitios. Muy agradecido de la gestión. Demoró un poco más de una semana vender mi auto.',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GhYGERvwGQ5UNVLX5wknqJWC7KeVA4o4ZTHD5h6=w60-h60-p-rp-mo-ba3-br100',
        "rating": 5,
      },
    ],
  }
  return reviews[country_code]
}

export const getCatalogoURL = (country_code) => {
  const catalogoUrl = {
    ar: 'https://catalogo.carbula.ar',
    mx: 'https://catalogo.carbula.mx',
    uy: 'https://catalogo.carbula.uy',
    cl: 'https://catalogo.carbula.cl'
  }
  return catalogoUrl[country_code]
}

export const getTerminosCondiciones = () => {
  return '/terminos-y-condiciones'
}

export const getComoVender = () => {
  return '/como-vender'
}

export const getComoComprar = () => {
  return '/como-comprar'
}

export const getWhatsappNumber = (country_code) => {
  const phoneNumbers = {
    ar: '+5492614864083',
    mx: '+525541622979',
    uy: '+59899220055',
    cl: '+56971417008',
  }
  return phoneNumbers[country_code]
}

export const getPhoneNumber = (country_code) => {
  const phoneNumbers = {
    ar: '+5492613013473',
    mx: '+525541622979',
    uy: '+59899220055',
    cl: '+56228977930',
  }
  return phoneNumbers[country_code]
}

export const getTitleByCountry = (country_code) => {
  const ids = {
    ar: 'Compra y Venta Segura de Autos Usados en Argentina | Cárbula Autos',
    cl: 'Compra y Venta Segura de Autos Usados en Chile | Cárbula Autos',
    mx: 'Compra y Venta Segura de Autos Usados en México | Cárbula Autos',
    uy: 'Compra y Venta Segura de Autos Usados en Uruguay | Cárbula Autos',
  }
  return ids[country_code]
}

export const getKeywordsByCountry = (country_code) => {
  const ids = {
    ar: 'cárbula argentina, marketplace de autos, compra y venta de autos seminuevos, comprar y vender tu vehículo, venta de autos, vender carro usado, compra y venta de autos',
    cl: 'cárbula chile, marketplace de autos, compra y venta de autos seminuevos, comprar y vender tu vehículo, venta de autos, vender carro usado, compra y venta de autos',
    mx: 'cárbula méxico, marketplace de autos, compra y venta de autos seminuevos, comprar y vender tu vehículo, venta de autos, vender carro usado, compra y venta de autos',
    uy: 'cárbula uruguay, marketplace de autos, compra y venta de autos seminuevos, comprar y vender tu vehículo, venta de autos, vender carro usado, compra y venta de autos',
  }
  return ids[country_code]
}

export const getFacebookDomainVerification = (country_code) => {
  const ids = {
    ar: 'brd5b5y4sra61yxq5iecd6omyq4sis',
    cl: 'xttlstugadcn3syxvsdpcr2kpm0ajs',
    mx: 'xbbkq67yvogzf0656jxyzlwamjm4tp',
    uy: 'u9xibrmbxi98j13w4lv7b1baytrgvy',
  }
  return ids[country_code]
}

export const getHotjarId =country_code=>{
  const ids={
    ar: '2558732',
    cl: '2558126',
    mx: '2745597',
    uy: '2745589'
  }
  return ids[country_code]
}

export const getGTMid= country_code=>{
  const ids={
    ar: 'GTM-WZS7KD7',
    cl: 'GTM-TCKHB87',
    mx: 'GTM-PDWPP7J',
    uy: 'GTM-T4DFD26'
  }
  return ids[country_code]
}

export const getInstagramLink = country_code=>{
  const urls={
    ar: 'https://www.instagram.com/carbula.ar/',
    cl: 'https://www.instagram.com/carbula.cl/',
    mx: 'https://www.instagram.com/carbula.mx/',
    uy: 'https://www.instagram.com/carbula.uy/'
  }
  return urls[country_code]
}

export const getFacebookLink = country_code=>{
  const urls={
    ar: 'https://www.facebook.com/carbulaok',
    cl: 'https://www.facebook.com/carbula.cl/',
    mx: 'https://www.facebook.com/carbulamexico/',
    uy: 'https://www.facebook.com/C%C3%A1rbula-Uruguay-108353218349585/'
  }
  return urls[country_code]
}

export const thousands = (number, decimals, decPoint = ',', thousandsSep = '.') => {
  if (number === 0) {
    return '0,00';
  }
  return format({
    round: decimals, integerSeparator: thousandsSep, decimal: ',', padRight: decimals,
  })(number);
}

export const redondeo = (amount, country_code) => {
  return Math.round(amount/ROUNDING_BOUNDS[country_code])*ROUNDING_BOUNDS[country_code];
}