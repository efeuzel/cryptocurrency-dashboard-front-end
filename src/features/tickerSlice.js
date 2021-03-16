import { createSlice } from "@reduxjs/toolkit";

export const tickerSlice = createSlice({
  name: "ticker",
  initialState: {
    tickerData: { tickerVal: 0 },
  },
  reducers: {
    updateOnMessage: (state, action) => {
      //TODO: update logic will come here
      console.log(action);
      state.tickerData = { tickerVal: state.tickerData.tickerVal + 1 };
    },
  },
});

export const selectTickerData = (state) => state.ticker.tickerData;

export const { updateOnMessage } = tickerSlice.actions;

export default tickerSlice.reducer;
