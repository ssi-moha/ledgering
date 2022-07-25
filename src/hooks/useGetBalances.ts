import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalances } from "../store/slices/balance";
import { AppDispatch, RootState } from "../store/store";

const useGetBalances = () => {
  const { account, active } = useWeb3React();
  const dispatch = useDispatch<AppDispatch>();
  const balances = useSelector((state: RootState) => state.balances);

  useEffect(() => {
    async function getBalances() {
      if (active && account) {
        dispatch(fetchBalances(account));
      }
    }

    getBalances();
  }, [account, active, dispatch]);

  return balances;
};

export default useGetBalances;