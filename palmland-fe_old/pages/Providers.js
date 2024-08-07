import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";

import store from "@/stores/store";
import customTheme from "@/theme";

const Providers = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </ReduxProvider>
  );
};

export default Providers;
