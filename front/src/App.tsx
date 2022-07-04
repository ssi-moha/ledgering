import { Box, VStack } from "@chakra-ui/react";
import { uniqBy } from "lodash";
import { useEffect } from "react";
import etherscan from "./api/etherscan";
import Header from "./ui/components/Header";
import Stepper from "./ui/components/Stepper";

function App() {
  async function getAllTokensBalances() {
    const txList = await etherscan.get<{
      result: { contractAddress: string }[];
    }>("", {
      params: {
        module: "account",
        action: "tokentx",
        address: "0x1a1710F0238b516c2fad1dd0F1EAD108656Fdc32",
        startblock: "0",
        endblock: "27025780",
        sort: "asc",
        apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
      },
    });

    const addressList = uniqBy(txList.data.result, "contractAddress").map(
      (tx) => tx.contractAddress
    );

    return addressList;
  }

  useEffect(() => {
    getAllTokensBalances();
  }, []);

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
