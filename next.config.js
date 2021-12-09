module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['es-AR', 'es-UY', 'es-MX', 'ki', 'es-CL'],
    defaultLocale: 'es-AR',
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
      {
        domain: 'www.carbula.com.mx',
        defaultLocale: 'ki',
      },
      {
        domain: 'www.carbula.cl',
        defaultLocale: 'es-CL'
      },
      {
        domain: 'www.carbula.uy',
        defaultLocale: 'es-UY'
      },
      {
        domain: 'www.carbula.com.uy',
        defaultLocale: 'es-UY'
      }
    ],
  },
}
