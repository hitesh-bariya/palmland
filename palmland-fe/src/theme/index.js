import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// Foundational style overrides
// Global style overrides
import styles from "./styles";

// Component style overrides
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Menu from "./components/menu";
import Table from "./components/table";
import Text from "./components/text";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme(
  {
    config,
    styles,
    breakpoints,
    colors,
    fonts: {
      heading: "Lato",
      body: "Lato",
    },
  },
  {
    components: {
      Button,
      Text,
      Table,
      Menu,
      Checkbox,
      Form,
    },
  },
  withDefaultColorScheme({
    colorScheme: "black",
    components: ["Progress"],
  })
);

export default customTheme;
