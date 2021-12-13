import Document, { Html, Head, Main, NextScript } from 'next/document'
import {getCountryCode, getGTMid} from '../utils/helpers'
import GoogleTagManager from '../components/tagManager';

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
        <GoogleTagManager gtmId={getGTMid(country_code)}/>
          <Main />
          <NextScript />
        </body>
        <script defer type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
        <script defer type="text/javascript" id="hs-script-loader"  src="//js.hs-scripts.com/8886399.js"></script>
        <script
          defer
          src='https://www.googletagmanager.com/gtag/js?id=UA-125037526-2'
        />
         <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-787470327'); 
          `
            }}
          />
      </Html>
    )
  }
}

export default MyDocument