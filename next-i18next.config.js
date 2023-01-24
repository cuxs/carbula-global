const path = require('path');

module.exports = {
  i18n: {
    localeDetection:false,
    locales: ['es-AR', 'es-CL', 'es-MX', 'es-PE', 'es-UY' ],
    defaultLocale: 'es-AR',
    localePath: path.resolve('./public/locales'),
    domains: [
      {
        domain: "www.carbula.ar",
        defaultLocale: 'es-AR',
      },
      {
        domain: 'www.carbula.cl',
        defaultLocale: 'es-CL'
      },
      {
        domain: 'www.carbula.mx',
        defaultLocale: 'es-MX',
      },
      {
        domain: 'www.carbula.pe',
        defaultLocale: 'es-PE',
      },
      {
        domain: 'www.carbula.uy',
        defaultLocale: 'es-UY'
      },
    ],
  },
}