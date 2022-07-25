import { ethers } from "ethers";

async function sendEther(walletAddress: string, balance: string) {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "kovan");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  ethers.utils.getAddress(walletAddress);
  const gasPrice = await provider.getGasPrice();
  const tx = await signer.sendTransaction({
    to: walletAddress,
    value: ethers.utils.parseEther(balance).sub(gasPrice),
  });
  return tx;
}

export default sendEther;
