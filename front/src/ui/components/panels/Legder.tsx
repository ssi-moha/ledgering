import {
  Box,
  Button,
  Divider,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "../../../store/slices/ledger";

const Ledger = () => {
  const dispatch = useDispatch();
  const [ledgerAddress, setLedgerAddress] = useState("");

  function handleClick() {
    dispatch(connect(ledgerAddress));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLedgerAddress(e.target.value);
  }

  return (
    <VStack h="full" flex="column" justifyContent="space-around">
      <Button size="large" colorScheme="gray" color={"black"} p={2} ml={2}>
        Connect your Ledger
      </Button>
      <Divider />
      <Box>
        <FormLabel>Enter your Ledger address</FormLabel>
        <HStack>
          <Input value={ledgerAddress} onChange={handleChange} />
          <Button
            size="large"
            colorScheme="gray"
            color={"black"}
            p={2}
            ml={2}
            onClick={handleClick}
          >
            OK
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Ledger;
