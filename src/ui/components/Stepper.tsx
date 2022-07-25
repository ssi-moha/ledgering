import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Ledger from "./panels/Legder";
import Sender from "./panels/Sender";
import Wallet from "./panels/Wallet";

const Stepper = () => {
  return (
    <Tabs
      w="95%"
      borderWidth={1}
      borderColor="white"
      display="flex"
      flexDir="row"
      variant="unstyled"
      margin={"auto"}
    >
      <TabList width={200} display="flex" flexDir="column">

        <Tab flex={1} _selected={{ bg: "blue.500" }}>
          Connect your Ledger
        </Tab>
        <Tab flex={1} _selected={{ bg: "blue.500" }}>
          Connect your Wallet
        </Tab>
        <Tab flex={1} _selected={{ bg: "blue.500" }}>
          Send your funds
        </Tab>
      </TabList>

      <TabPanels
        minH={400}
        flex={1}
        borderColor="white"
        borderWidth={1}
        border="0"
        borderLeft="1px"
      >
        <TabPanel h="full" w="full">
          <Ledger />
        </TabPanel>

        <TabPanel h="full" w="full">
          <Wallet />
        </TabPanel>

        <TabPanel>
          <Sender />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Stepper;
