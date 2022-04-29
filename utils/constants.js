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
  ROUNDING_BOUNDS: {
    ar: 0.21,
    cl: 0.19,
    mx: 0.16,
    uy: 0.22 
  }
}