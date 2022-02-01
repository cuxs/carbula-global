const path = require('path');

module.exports = {
  i18n: {
    localeDetection:false,
    locales: ['es-AR', 'es-UY', 'es-MX', 'es-CL'],
    defaultLocale: 'es-AR',
    localePath: path.resolve('./public/locales'),
    domains: [
      {
        domain: "www.carbula.ar",
        defaultLocale: 'es-AR',
      },
      {
        domain: 'www.carbula.mx',
        defaultLocale: 'es-MX',
      },
      {
        domain: 'www.carbula.cl',
        defaultLocale: 'es-CL'
      },
      {
        domain: 'www.carbula.uy',
        defaultLocale: 'es-UY'
      },
    ],
  },
}