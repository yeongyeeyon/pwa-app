// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#FFFFFF" />
          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />
          {/* Favicon and Apple Icons */}
          <link rel="icon" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
