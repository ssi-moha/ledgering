import { extendTheme } from "@chakra-ui/react";
import Input from "./Input";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
  components: {
    Input,
  },
});

export default theme;
