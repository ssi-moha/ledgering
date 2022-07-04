import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTokenBalances } from "../../api/ethplorer";
import { Balance } from "../../types";

export const fetchBalances = createAsyncThunk(
  "balances/fetch",
  async (walletAddress: string) => getAllTokenBalances(walletAddress)
);

export const balancesSlice = createSlice<Balance[], {}>({
  name: "balances",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBalances.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = balancesSlice.actions;

export default balancesSlice.reducer;
