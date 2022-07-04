import { Box, VStack } from "@chakra-ui/react";
import Header from "./ui/components/Header";
import Stepper from "./ui/components/Stepper";

function App() {
  return (
    <VStack py="2">
      <Header type="h1" title="Ledgering your crypto"/>

      <Box w="full" px={24} py={12}>
        <Stepper />
      </Box>
    </VStack>
  );
}

export default App;
