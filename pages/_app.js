import { ImageContextProvider } from '@/store/image-context'
import MainHeader from '@/components/layout/main-header';
import MainFooter from '@/components/layout/main-footer';

import '@/styles/globals.css'
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <ImageContextProvider>
      <Fragment>
        <MainHeader></MainHeader>
        <Component {...pageProps} />
        <MainFooter></MainFooter>
      </Fragment>
    </ImageContextProvider>
  );
}
