import { configureStore } from "@reduxjs/toolkit";
import tickerReducer from "../features/tickerSlice";

export default configureStore({
  reducer: {
    ticker: tickerReducer,
  },
});
