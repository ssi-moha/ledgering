import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import balancesReducer from "./slices/balance";
import ledgerReducer from "./slices/ledger";

const rootReducer = combineReducers({
  ledger: ledgerReducer,
  balances: balancesReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
