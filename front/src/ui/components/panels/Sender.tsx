import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import useGetBalances from "../../../hooks/useGetBalances";
import { sendEther } from "../../../store/slices/ether";
import { RootState, useAppDispatch } from "../../../store/store";

const tokenIcon = {
  ETH: "eth",
  BUSD: "busd",
  USDT: "usdt",
  USDC: "usdc",
  BTC: "btc",
};

const Sender = () => {
  const balances = useGetBalances();
  const dispatch = useAppDispatch();
  const ledger = useSelector((state: RootState) => state.ledger);

  const handleClick = () => {
    if (ledger) dispatch(sendEther(ledger));
    console.log("clicked");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box mt="4">
        <strong> Send your Funds </strong>
      </Box>

      <div>
        {balances.map((token) => {
          const { symbol, balance } = token;

          return (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              mt={6}
              p={3}
              borderWidth={1}
              borderColor={"white"}
            >
              <Box display={"flex"} p={3} borderWidth={1} borderColor={"white"}>
                <img width="24px" src={`${symbol}.svg`} alt={symbol} />
                <span style={{ margin: "auto", marginLeft: "4px" }}>
                  {balance}
                </span>
                <span style={{ margin: "auto", marginLeft: "4px" }}>
                  {symbol}
                </span>
              </Box>

              <Box mt={4}>
                <Button bg="#f1f1f1" color={"black"} onClick={handleClick}>
                  Send
                </Button>
              </Box>
            </Box>
          );
        })}
      </div>
    </Box>
  );
};

export default Sender;
