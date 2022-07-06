import { Box, Button, VStack } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const NO_ETHEREUM_OBJECT = /No Ethereum provider was found on window.ethereum/;
const isNoEthereumObject = (err: any) => {
  return NO_ETHEREUM_OBJECT.test(err);
};

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const Wallet = () => {
  const { active, activate, deactivate } = useWeb3React();

  const handleConnect = async () => {
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      if (isNoEthereumObject(error))
        window.open("https://metamask.io/download.html");
    });
  };

  return (
    <VStack h="full" flex="column" justifyContent="space-around">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="metamask.png" alt="metamask" width={150} />

        <Button
          sx={{ mt: 8, border: "1px solid white" }}
          variant="contained"
          onClick={handleConnect}
          color={active ? "error" : "success"}
        >
          {active ? "Disconnect" : "Connect your MetaMask"}
        </Button>
      </Box>
    </VStack>
  );
};

export default Wallet;
