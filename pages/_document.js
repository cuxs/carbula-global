import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCountryCode, getGTMid } from '../utils/helpers'
import Script from 'next/script'
import { FB_PIXEL_ID } from '../utils/constants'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {

    return (
      <Html lang="es">
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body>
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