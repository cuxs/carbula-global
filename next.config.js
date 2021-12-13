const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  i18n,
  async redirects(){
    return[
      {
        source: 'www.carbula.com.mx',
        destination: 'www.carbula.mx',
        permanent: true,
      },
      {
        source: 'www.carbula.com.uy',
        destination: 'www.carbula.uy',
        permanent: true,
      }
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
