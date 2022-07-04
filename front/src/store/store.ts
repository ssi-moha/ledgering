import { configureStore } from "@reduxjs/toolkit";
import ledgerReducer from "./slices/ledger";

export default configureStore({
  reducer: {
    ledger: ledgerReducer
  },
});
