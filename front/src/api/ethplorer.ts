import axios from "axios";
import { Balance } from "../types";
import getRealBalance from "../utils/getRealBalance";

const ethplorer = (address: string) =>
  axios.get<{
    ETH: { balance: number };
    tokens: {
      tokenInfo: { decimals: string; symbol: string };
      balance: string;
    }[];
  }>(
    `https://kovan-api.ethplorer.io/getAddressInfo/${address}?apiKey=EK-t1m4J-wPMKQNu-mG5Sd`,
    {
      params: {
        apiKey: process.env.REACT_APP_ETHPLORER_API_KEY,
      },
    }
  );

export async function getAllTokenBalances(
  walletAddress: string
): Promise<Balance[]> {
  const tokens = await ethplorer(walletAddress);

  const realBalances = tokens.data.tokens.map((token) => {
    return {
      symbol: token.tokenInfo.symbol,
      balance: getRealBalance(token.tokenInfo.decimals, token.balance),
    };
  });

  const ethBalance = {
    symbol: "ETH",
    balance: tokens.data.ETH.balance.toString(),
  };

  return [...realBalances, ethBalance];
}

export default ethplorer;
