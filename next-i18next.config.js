const path = require('path');

module.exports = {
  i18n: {
    locales: ['es-AR', 'es-UY', 'es-MX', 'es-CL'],
    defaultLocale: 'es-AR',
    localePath: path.resolve('./public/locales'),
    domains: [
      {
        domain: "test.carbula.com",
        defaultLocale: 'es-AR',
        locales: ['es-UY']
      },
      {
        domain: 'www.carbula.mx',
        defaultLocale: 'es-MX',
      },
      // {
      //   domain: 'www.carbula.com.mx',
      //   defaultLocale: 'redirect',
      // },
      {
        domain: 'www.carbula.cl',
        defaultLocale: 'es-CL'
      },
      {
        domain: 'www.carbula.uy',
        defaultLocale: 'es-UY'
      },
      // {
      //   domain: 'www.carbula.com.uy',
      //   defaultLocale: 'redirect2'
      // }
    ],
  },
}