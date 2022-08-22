const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/datos_del_vehiculo",
        destination: '/',
        permanent: true,
      },
      {
        source: "/datos_del_usuario",
        destination: '/',
        permanent: true,
      },
    ]
  },
  env: {
    SANTANDER_URL_TESTING: {
      ar: "https://sanrio.viverebrasil.com.br/portalsanriopublicopro/#/home?",
      cl: "CL",
      mx: "MX",
      uy: "UY" 
    },
    SANTANDER_SPID_TESTING: {
      ar: "352454",
      cl: "CL",
      mx: "MX",
      uy: "UY" 
    },
    SANTANDER_URL_PRODUCTION: {
      ar: "https://sanrio.viverebrasil.com.br/portalsanriopublicohml/#/home",
      cl: "CL",
      mx: "MX",
      uy: "UY"  
    },
    SANTANDER_SPID_PRODUCTION: {
      ar: "350735",
      cl: "CL",
      mx: "MX",
      uy: "UY" 
    },
    SANTANDER_OHASH: {
      ar: "li3l6r7xzo",
      cl: "CL",
      mx: "MX",
      uy: "UY" 
    },
    GOOGLE_ONETAP_LOGIN_CLIENT_ID: "1036649065648-b720t3ik7500nro7k187gr7sjh5htvu3.apps.googleusercontent.com",
    GOOGLE_ONETAP_LOGIN_CLIENT_SECRET_KEY: "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",
    GOOGLE_ONETAP_LOGIN_DATA_URI: "/google-onetap-login",
  },
}
