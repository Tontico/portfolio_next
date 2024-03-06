import '../styles/globals.css';
import { NextFontLoader } from 'next-fonts';

function MyApp({ Component, pageProps }) {
  return (
    <NextFontLoader
      fonts={[
        { family: 'Play', file: '/fonts/Play/Play-bold.ttf' },
        { family: 'Changa', file: '/fonts/Changa/static/Changa-regular.ttf' },
        { family: 'Pridi', file: '/fonts/Pridi/Pridi-Regular.ttf' },
      ]}
    >
      <Component {...pageProps} />
    </NextFontLoader>
  );
}

export default MyApp;