import Document, {
  Head,
  Main,
  NextScript,
  // eslint-disable-next-line no-unused-vars
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'


const appName: string = 'BaseApp';


export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (<>{initialProps.styles}{sheet.getStyleElement()}</>)
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html
        className="no-js"
        lang="en"
        dir="ltr"
        prefix="og: http://ogp.me/ns#"
      >
        <Head>
          <meta charSet="UTF-8" key="charset" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          

          <meta name="apple-mobile-web-app-title" content={appName} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="assets_next/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="assets_next/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="assets_next/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="assets_next/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="assets_next/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="assets_next/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="assets_next/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="assets_next/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="assets_next/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="assets_next/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets_next/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="assets_next/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="assets_next/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="assets_next/manifest.json" />
          <link rel="stylesheet" href="assets_next/css/bootstrap.min.css"  />
          <link rel="stylesheet" type="text/css" href="assets_next/css/style.css" />
   
          <meta
            name="msapplication-TileImage"
            content="assets_next/icons/ms-icon-144x144.png"
          />
          <meta name="msapplication-navbutton-color" content="#007f95" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="theme-color" content="#007f95" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content={appName} />
          <meta name="msapplication-tooltip" content={appName} />
          <meta name="msapplication-starturl" content="/" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <meta name="nightmode" content="enable" />
          <meta name="layoutmode" content="standard" />
          <meta name="imagemode" content="force" />
          <meta name="screen-orientation" content="portrait" />
          

          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="" />
          <meta property="twitter:title" content="" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="" />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
