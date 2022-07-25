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
          Get started
        </Tab>

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
        <TabPanel
          h="full"
          w="full"
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <p>
            Let’s imagine your crypto stored in a hot wallet are like sheep
            confined in a field, they are not safe. That’s why you bought a
            Ledger wallet. As you want your sheep safe in a fold you want to
            secure your crypto by bringing them into you cryptofold, your
            Ledger.
          </p>

          <br />

          <p>
            Could you imagine a shepherd moving the sheep one by one into the
            fold? What a waste of time…
            <br />
            Unfortunately, today it’s what people face when they want to get
            their crypto into the cryptofold, your Ledger.
          </p>

          <br />

          <p>
            This is where the crypto shepherd is needed by moving your crypto as
            a herd.
          </p>
        </TabPanel>

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
