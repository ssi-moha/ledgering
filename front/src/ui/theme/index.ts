import { extendTheme } from "@chakra-ui/react";
import Input from "./Input";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1c1d20",
        color: "white",
        fontFamily: "HMAlphaMono,Open sans,arial,sans-serif",
        fontWeight: 500,
        lineHeight: 1.2,
        textTransform: "uppercase"
      },
    },
  },
  components: {
    Input,
  },
});

export default theme;
