import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000",
    white: "#fff",
    gray: {
      50: "#717171",
      100: "#222222",
    },
  },
});

export default theme;