import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Ledger from "./panels/Legder";

const Stepper = () => {
  return (
    <Tabs w="100%" borderWidth={1} borderColor="white" display="flex" flexDir="row">
      <TabList width={200} display="flex" flexDir="column">
        <Tab flex={1}>Connect your Ledger</Tab>
        <Tab flex={1}>Connect your Wallet</Tab>
        <Tab flex={1}>Send your funds</Tab>
      </TabList>
      <TabPanels minH={400} flex={1} borderColor="white" borderWidth={1}>
        <TabPanel h="full" w="full">
            <Ledger />
        </TabPanel>
        <TabPanel>Metamask</TabPanel>
        <TabPanel>Send your funds</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Stepper;
