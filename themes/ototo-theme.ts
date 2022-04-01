import { extendTheme } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import '@fontsource/karla';
import '@fontsource/jomolhari';

const colors = {
  primary: '#44EECC',
  ototo: {
    blacky: '#222222',
  },
};

const ButtonStyle = {
  variants: {
    primary: {
      bg: 'primary',
      color: 'ototo.blacky',
      transition: 'all 0.2s ease',
      _hover: {
        bg: whiten('primary', 25),
        boxShadow: 'md',
        transform: 'scale(1.02)',
      },
      fontFamily: 'Karla',
    },
    outlined: {
      bg: 'transparent',
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: '0.7em',
      color: '#FFF',
      transition: 'all 0.2s ease',
      _hover: {
        boxShadow: 'md',
        transform: 'scale(1.02)',
      },
    },
  },
};

export const FONT = {
  body: 'Karla, sans-serif',
  jomo: 'Jomolhari, sans-serif',
  heading: 'Sofia Pro, sans-serif',
};

export const OTOTO_THEME = extendTheme({
  colors,
  fonts: FONT,
  components: {
    Button: ButtonStyle,
  },
});
