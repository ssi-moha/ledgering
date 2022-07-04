import { configureStore } from "@reduxjs/toolkit";
import balancesReducer from "./slices/balance";
import ledgerReducer from "./slices/ledger";

export default configureStore({
  reducer: {
    ledger: ledgerReducer,
    balances: balancesReducer,
  },
});
