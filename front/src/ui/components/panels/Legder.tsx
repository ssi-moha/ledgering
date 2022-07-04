import { Button, Divider, Input, VStack } from "@chakra-ui/react";

const Ledger = () => {
  return (
    <VStack h="full" flex="column" justifyContent="space-around">
      <Button>Connect your Ledger</Button>
      <Divider />
      <Input />
    </VStack>
  );
};

export default Ledger;
