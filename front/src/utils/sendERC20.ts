import { ethers } from "ethers";
import abi from "./abi";

async function sendERC20(
  walletAddress: string,
  balance: string,
  tokenAddress: string
) {
  const provider = new ethers.providers.Web3Provider(
    // @ts-ignore
    window.ethereum,
    "kovan"
  );
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  ethers.utils.getAddress(walletAddress);
  const contract = new ethers.Contract(tokenAddress, abi, signer);

  const numberOfTokens = ethers.utils.parseUnits(balance, 18);

  const tx = await contract.transfer(walletAddress, numberOfTokens);

  return tx;
}

export default sendERC20;
