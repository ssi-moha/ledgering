import { Box, VStack } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBalances } from "./store/slices/balance";

import Header from "./ui/components/Header";
import Stepper from "./ui/components/Stepper";

function App() {
  const { account, active } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBalances() {
      if (active && account) {
        // @ts-ignore
        dispatch(fetchBalances(account));
      }
    }

    getBalances();
  }, [account, active, dispatch]);

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
