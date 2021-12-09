import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'Vende tu vehículo por hasta un 25% más de dinero. De forma segura y sin salir de casa.'
const defaultOGURL = '/images/carbula-preview.jpg'
const defaultOGImage = '/images/carbula-preview.jpg'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="facebook-domain-verification" content="o1cpz3juti6u4og457vtz73phm8v4m" />
    <link rel="icon" sizes="192x192" href="/icons/favicon_196.ico" />
    <link rel="alternate" hrefLang="es-MX" href="https://carbula.mx"/>
    <link rel="alternate" hrefLang="es-CL" href="https://carbula.cl"/>
    <link rel="alternate" hrefLang="es-UY" href="https://carbula.com/es-UY" />
    <link rel="alternate" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/reset.css" />

  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
