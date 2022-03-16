import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#44EECC",
  ototo: {
    blacky: "#222222",
  },
};

const ButtonStyle = {
  variants: {
    primary: {
      bg: "primary",
      color: "ototo.blacky",
      _hover: {
        transform: {
          scale: 1.1,
        },
      },
    },
    outlined: {
      bg: "transparent",
      border: "1px solid #44EECC",
      color: "#FFF",
    },
  },
};

export const OTOTO_THEME = extendTheme({
  colors,
  components: {
    Button: ButtonStyle,
  },
});
