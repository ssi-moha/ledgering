import { TransactionResponse } from "@ethersproject/providers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sendERC20 from "../../utils/sendERC20";
import sendEther from "../../utils/sendEther";

const sendAllTokens = async (
  walletAddress: string,
  balance: string,
  tokenAddress: string
) => {
  if (tokenAddress) {
    const tx = await sendERC20(walletAddress, balance, tokenAddress);
    return tx;
  }

  return await sendEther(walletAddress, balance);
};

type ThunkParams = {
  walletAddress: string;
  balance: string;
  tokenAddress: string;
};

export const sendToken = createAsyncThunk(
  "ether/send",
  async ({ walletAddress, balance, tokenAddress }: ThunkParams) =>
    (await sendAllTokens(
      walletAddress,
      balance,
      tokenAddress
    )) as TransactionResponse
);

const initialState: TransactionResponse[] = [];

export const balancesSlice = createSlice({
  name: "ether",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendToken.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default balancesSlice.reducer;
