import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCountryCode, getGTMid } from '../utils/helpers'
import GoogleTagManager from '../components/tagManager';
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {
    const country_code = getCountryCode(this.props.locale)
    return (
      <Html lang="es">
        <Head />
        <body>
          <GoogleTagManager gtmId={getGTMid(country_code)} />
          <Main />
          <NextScript />
        </body>
        <Script defer type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
        <Script defer type="text/javascript" id="hs-script-loader" src="//js.hs-scripts.com/8886399.js"></Script>

      </Html>
    )
  }
}

export default MyDocument