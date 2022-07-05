import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";

export const sendEther = createAsyncThunk(
  "ether/send",
  async function sendEther(walletAddress: string) {
    console.log(walletAddress);
    
    try {
      const provider = new ethers.providers.Web3Provider(
        // @ts-ignore
        window.ethereum,
        "kovan"
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      ethers.utils.getAddress(walletAddress);
      const tx = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.utils.parseEther("0.0001"),
      });
      return tx;
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState: any[] = [];

export const balancesSlice = createSlice({
  name: "ether",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendEther.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default balancesSlice.reducer;
