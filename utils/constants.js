let API_URL;

switch (process.env.NODE_ENV) {
  case 'development':  API_URL='http://localhost:4000'; break;
  case 'test':  API_URL='https://api-test.carbula.com'; break;
  case 'stage':  API_URL='https://api-test.carbula.com'; break;
  default:  API_URL='https://api.carbula.com'; break;
}

module.exports = {
  COUNTRY: {
    'ar': 'Argentina',
    'uy': 'Uruguay',
    'mx': 'México',
    'cl': 'Chile'
  },
  MIN_TEXT_SEARCH_LENGTH: 2,
  API_URL,
  CURRENCY:{
    'cl': 'CLP',
    'ar': 'ARS',
    'uy': 'USD',
    'mx': 'MXN',
  },
  LAST_STEP_MOBILE: 4,
  LAST_STEP_DESKTOP: 3,
  SOURCES:{
    PAID_SEARCH: 'Paid Search',
    SOCIAL_MEDIA: 'Social Media',
    PAID_SOCIAL: 'Paid Social',
    DIRECT_TRAFFIC: 'Direct Traffic',
    ORGANIC_SEARCH: 'Organic Search',
    REFERRALS: 'Referrals',
    WHATSAPP: 'Whatsapp'
  },
  SCALES:{
    ar:
    {
        "SCALE": 50000,
        "BOUND": 4000000
    },
    cl:
    {
    "SCALE": 50000,
    "BOUND": 4000000
    },
    mx:
    {
        "SCALE": 1000,
        "BOUND": 80000
    },
    uy:
    {
        "SCALE": 100,
        "BOUND": 8000
    }
  },
  IVA: {
    ar: 0.21,
    cl: 0.19,
    mx: 0.16,
    uy: 0.22 
  },
  CARBULA_FEE: {
    ar: 4.8,
    cl: 4,
    mx: 4.8,
    uy: 4.8 
  },
  CARBULA_FEE_MINIMUM: {
    ar: 100000,
    cl: 500000,
    mx: 10000,
    uy: 600
  },
  ROUNDING_BOUNDS: {
    ar: 1000,
    cl: 10000,
    mx: 100,
    uy: 10
  },
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
    ar: "https://autoloans.santanderautos.com.ar/portalsanriopublico/#/?",
    cl: "CL",
    mx: "MX",
    uy: "UY"
  },
  SANTANDER_SPID_PRODUCTION: {
    ar: "351149",
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
  TRACKING_URLS: {
    datos_del_vehiculo: {url:'/datos_del_vehiculo', data:'datos_del_vehiculo'},
    datos_del_usuario: {url: '/datos_del_usuario', data: 'datos_del_usuario'},
  }
}