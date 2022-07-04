import { Box } from "@chakra-ui/react";
import useGetBalances from "../../../hooks/useGetBalances";

const Sender = () => {
  const balances = useGetBalances();

  return (
    <Box>
      <div>Send your Funds</div>

      <div>
        {balances.map((token) => (
          <div>
            {token.symbol}: {token.balance}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Sender;
