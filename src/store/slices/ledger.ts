import { createSlice } from "@reduxjs/toolkit";

export const ledgerSlice = createSlice({
  name: "ledger",
  initialState: null,
  reducers: {
    connect: (state, action) => action.payload,
  },
});

export const { connect } = ledgerSlice.actions;

export default ledgerSlice.reducer 
