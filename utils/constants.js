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
    'cl': 'Chile',

  }
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
  }
}