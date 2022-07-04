import { Box, Center, Divider, Heading } from "@chakra-ui/react";

type HeaderProps = {
  title: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
};

const Header = ({ title, type }: HeaderProps) => {
  return (
    <>
      <Box w="full" my={2}>
        <Center>
          <Heading as={type} noOfLines={1}>
            {title}
          </Heading>
        </Center>
      </Box>
      <Divider w="90%" />
    </>
  );
};

export default Header;
