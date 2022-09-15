import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { useRouter } from 'next/router'
import { getCountryCode, getTitleByCountry, getKeywordsByCountry, getFacebookDomainVerification, getGoogleSiteVerification } from '../utils/helpers'

const defaultDescription = 'Vende tu auto de forma segura y gana hasta 25% más de dinero ✓ Solicita tu inspeccion virtual en cualquier momento del dia'

const defaultOGURL = 'https://www.carbula.${COUNTRY_CODE}/'
const defaultOGImage = '/images/carbula-autos.webp'

const Head = props => {
  const router = useRouter()
  const COUNTRY_CODE = getCountryCode(router.locale)
  return (
    <NextHead>
      <title>{props.title || getTitleByCountry(COUNTRY_CODE)}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Cache-Control" content="public, max-age=604800, immutable" />
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="keywords" content={getKeywordsByCountry(COUNTRY_CODE)} />
      <meta name="robots" content="index,follow" /> 
      <meta name="x-robots-tag" content="index,follow" /> 
      <meta name="googlebot" content="index,follow" />
      <meta name="google-site-verification" content={getGoogleSiteVerification(COUNTRY_CODE)} />
      <meta name="facebook-domain-verification" content={getFacebookDomainVerification(COUNTRY_CODE)} />
      <link rel="canonical" href={`https://www.carbula.${COUNTRY_CODE}/`} />
      <link rel="alternate" hrefLang="x-default" href="https://www.carbula.mx" />
      <link rel="alternate" hrefLang="x-default" href="https://www.carbula.cl" />
      <link rel="alternate" hrefLang="x-default" href="https://www.carbula.ar" />
      <link rel="icon" sizes="192x192" href="/icons/favicon_196.ico" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="stylesheet" href="/reset.min.css" />
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
