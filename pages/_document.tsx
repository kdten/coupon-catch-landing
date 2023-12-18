import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="next-light-theme">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
  <iframe 
    src="https://www.googletagmanager.com/ns.html?id=GTM-MMVPJ4DH"
    height="0" 
    width="0" 
    style={{ display: 'none', visibility: 'hidden' }}
    title="Google Tag Manager"
  ></iframe>
</noscript>

{/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
