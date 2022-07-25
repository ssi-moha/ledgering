import { ethers } from "ethers";
import abi from "./abi";

async function sendERC20(
  walletAddress: string,
  balance: string,
  tokenAddress: string,
  decimals: string
) {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "kovan");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  ethers.utils.getAddress(walletAddress);
  const contract = new ethers.Contract(tokenAddress, abi, signer);

  const numberOfTokens = ethers.utils.parseUnits(balance, Number(decimals));

  const tx = await contract.transfer(walletAddress, numberOfTokens);

  return tx;
}

export default sendERC20;
