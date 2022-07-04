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
          <Button size="large" colorScheme="gray" color={"black"} p={2}>
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
          <Button  size="large" colorScheme="gray" color={"black"} p={2} ml={2}>
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
      <Divider w="90%" />
    </>
  );
};

export default Header;
