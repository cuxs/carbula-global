import format from 'format-number'
import { SOURCES } from './constants'
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

export const checkZone = (location, allzones) => {
  const uncoveredZones = [
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
  const selectedLocation = allzones.find((row) => row.value === location)
  if (uncoveredZones.indexOf(selectedLocation.label) > -1) {
    throw new Error('Fuera de cobertura')
  }
}

export const getSourceType = (query, referer) => {
  if (query.hasOwnProperty('utm_campaign')) {
    if(query.utm_campaign ==='Referrals' || query.utm_campaign ==='referrals'){
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
  if (query.hasOwnProperty('utm_source') && query.utm_source === 'Whatsapp'){
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

export const getCampania = (query)=>{
  if (query.hasOwnProperty('utm_campaign')) {
    return query.utm_campaign
  }
  return undefined
}

export const checkYear = (year)=>{
  const tenYearsBack = dayjs().year() - 10;
  if (year < tenYearsBack){
    throw new Error('year not supported')
  }
}

export const isAllowedBrand = (brand) => {
  if (['Chevrolet', 'Ford', 'Renault', 'Fiat', 'Volkswagen', 'Peugeot', 'Toyota' ].some((row)=>row===brand)) {
    return true
  }
  return false
}

export const getModelExampleText = (brand)=>{
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

export const saveCotization =(encryptedCotization)=>{
  if (typeof window !== "undefined") {
    localStorage.setItem('cotization', encryptedCotization)
  }
}

export const clearLocalStorage = ()=>{
  if (typeof window !== "undefined") {
    localStorage.clear()
  }
}

export const getCotization = ()=>{
  if (typeof window !== "undefined") {
    return localStorage.getItem('cotization')
  }
}

export const getCountryCode = (locale)=>{
  return lowerCase(locale.slice(3))
}
export const saveToken = (token)=>{
  if (typeof window !== "undefined") {
    localStorage.setItem('token', token)
  }
}
export const getToken =()=>{
  if (typeof window !== "undefined") {
    return localStorage.getItem('token')
  }
}
export const getCalendlyURL = (country_code, email, name)=>{
  const urls={
      'ar': `https://calendly.com/d/zr2q-96wm/argentina-agendamientos-carbula?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}`,
      'mx': `https://calendly.com/d/cgt-qz4-49w/mexico-agendamientos-carbula?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}`,
      'uy': `https://calendly.com/d/ckh-qwz-mzm/uruguay-agendamientos-carbula?month=${dayjs().format('YYYY-MM')}&hide_gdpr_banner=1&text_color=333333&primary_color=3074f1&email=${email}&name=${name}`,

  }
  return urls[country_code]
}