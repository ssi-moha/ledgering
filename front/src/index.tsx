import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./ui/theme";
import { Provider } from "react-redux";
import store from "./store/store";
import { Web3Provider,  } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const getLibrary = (provider: any) => {
  const library = new Web3Provider(provider, "any");
  return library;
}

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
