import { createSlice } from "@reduxjs/toolkit";

export const threadSlice = createSlice({
  name: "thread",
  initialState: { threadData: [] },
  reducers: {
    addThread: (state, action) => {
      state.threadData.unshift(action.payload);
    },

    setThreadData: (state, action) => {
      state.threadData = action.payload;
    },
  },
});

export const { addThread, setThreadData } = threadSlice.actions;

export const selectThreadData = (state) => state.thread.threadData;

export default threadSlice.reducer;
