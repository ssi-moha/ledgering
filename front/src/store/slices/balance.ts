import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTokenBalances } from "../../api/ethplorer";
import { Balance } from "../../types";

export const fetchBalances = createAsyncThunk(
  "balances/fetch",
  async (walletAddress: string) =>
    (await getAllTokenBalances(walletAddress)) as Balance[]
);

const initialState: Balance[] = [];

export const balancesSlice = createSlice({
  name: "balances",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBalances.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default balancesSlice.reducer;
