import { VStack } from "@chakra-ui/react";

import Header from "./ui/components/Header";
import Main from "./ui/components/Main";

function App() {
  return (
    <VStack py="2">
      <Header type="h1" title="Ledgering your crypto" />

      <Main />
    </VStack>
  );
}

export default App;
