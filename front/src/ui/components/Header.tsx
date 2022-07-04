import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Heading } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useSelector } from "react-redux";

type HeaderProps = {
  title: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
};

const Header = ({ title, type }: HeaderProps) => {
  const { account, active } = useWeb3React();
  const ledgerAddress = useSelector((state: any) => state.ledger);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-around"
        alignItems="center"
        flexDir="row"
        w="full"
        my={2}
      >
        <Heading justifySelf={"center"} as={type} noOfLines={1}>
          {title}
        </Heading>

        <Box>
          <Button size="large" bg={"#ff5300"} p={4} border="1px">
            {active ? (
              <>
                <CheckIcon mr={2} /> {account?.slice(0, 7)}...
              </>
            ) : (
              <>
                <CloseIcon mr={2} /> Not Connected
              </>
            )}
          </Button>

          <Button size="large" bg="#f1f1f1" color={"black"} p={4} ml={6}>
            {ledgerAddress ? (
              <>
                <CheckIcon mr={2} /> {ledgerAddress.slice(0, 7)}...
              </>
            ) : (
              <>
                <CloseIcon mr={2} /> {ledgerAddress || "Not Connected"}
              </>
            )}
          </Button>
        </Box>
      </Box>

      <Divider w="95%" borderBottomWidth={2} borderColor="white" />
    </>
  );
};

export default Header;
