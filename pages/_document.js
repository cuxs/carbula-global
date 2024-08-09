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
          {/* Código de Facebook Pixel */}
          {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                    fbq('track', 'PageView');
                  `,
                }}
              />
              <noscript>
                <img
                  height="1"
                  width="1"
                  src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
                />
              </noscript>
            </>
          )}
          {/* Fin del código de Facebook Pixel */}
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