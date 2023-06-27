import { Html, Main, NextScript } from 'next/document';
import HeadComponet from './Head';

export default function Document() {
  return (
    <Html lang='en'>
      <HeadComponet />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}