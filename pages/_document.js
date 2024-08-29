import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCountryCode, getGTMid } from '../utils/helpers'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {

    return (
      <Html lang="es">
        <Head>
       {/* Google tag (gtag.js) */}
       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YPVCKX90N6"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YPVCKX90N6');
          `}
        </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* script chat 
            <Script defer type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
        */}
        <Script defer type="text/javascript" id="hs-script-loader" src="//js.hs-scripts.com/8886399.js"></Script>

      </Html>
    )
  }
}

export default MyDocument