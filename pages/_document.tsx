import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* <!-- Google tag (gtag.js) --> */}</Head>
      <Script defer data-domain="jassbawa-portfolio.vercel.app" src="https://plausible.io/js/script.js"></Script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
