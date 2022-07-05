import { Box, Button } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import useGetBalances from "../../../hooks/useGetBalances";
import { sendEther } from "../../../store/slices/ether";
import { RootState, useAppDispatch } from "../../../store/store";

const Sender = () => {
  const balances = useGetBalances();
  const dispatch = useAppDispatch();
  const ledger = useSelector((state: RootState) => state.ledger);

  const handleClick = () => {
    if (ledger) dispatch(sendEther(ledger));
  };

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
      <Button onClick={handleClick}>TEST</Button>
    </Box>
  );
};

export default Sender;
