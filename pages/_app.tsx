import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { OTOTO_THEME } from '../themes/ototo-theme';
import { Fonts } from '../themes/font';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={OTOTO_THEME}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
