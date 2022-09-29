import { createSlice } from '@reduxjs/toolkit';
import VoteUtils from '../../misc/vote/VoteUtils';

export const threadSlice = createSlice({
  name: 'thread',
  initialState: { threadData: [] },
  reducers: {
    setThreadData: (state, action) => {
      state.threadData = action.payload;
    },

    addThread: (state, action) => {
      state.threadData.unshift(action.payload);
    },

    upvoteThread: (state, action) => {
      state.threadData[action.payload].voteStatus = VoteUtils.voteStatus.UP;
    },

    downvoteThread: (state, action) => {
      state.threadData[action.payload].voteStatus = VoteUtils.voteStatus.DOWN;
    },

    neutralvoteThread: (state, action) => {
      state.threadData[action.payload].voteStatus = VoteUtils.voteStatus.NEUTRAL;
    },
  },
});

export const { setThreadData, addThread, upvoteThread, downvoteThread, neutralvoteThread } =
  threadSlice.actions;

export const selectThreadData = (state) => state.thread.threadData;

export default threadSlice.reducer;
