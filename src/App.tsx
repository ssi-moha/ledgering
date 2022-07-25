import { Box, VStack } from "@chakra-ui/react";

import Header from "./ui/components/Header";
import Stepper from "./ui/components/Stepper";

function App() {
  return (
    <VStack py="2">
      <Header type="h1" title="Ledgering your crypto" />

      <Box w="95%" px="6" py="4">
        Pourquoi l'utiliser? On sait depuis longtemps que travailler avec du
        texte lisible et contenant du sens est source de distractions, et
        empêche de se concentrer sur la mise en page elle-même. L'avantage du
        Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.'
      </Box>

      <Box w="full" margin="auto" mt={4}>
        <Stepper />
      </Box>
    </VStack>
  );
}

export default App;
