import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { OTOTO_THEME } from "../themes/ototo-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={OTOTO_THEME}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
