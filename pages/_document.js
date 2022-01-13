import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" href="favicon.png" type="image/x-icon" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="freeSS" />
          <meta name="apple-mobile-web-app-title" content="freeSS" />
          <meta name="theme-color" content="teal" />
          <meta name="msapplication-navbutton-color" content="teal" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/favicon.png" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8140175087839604" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
