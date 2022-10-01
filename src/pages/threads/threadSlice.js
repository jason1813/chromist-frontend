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

    increaseCommentCountOnThread: (state, action) => {
      state.threadData[action.payload].numberOfComments += 1;
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

export const {
  setThreadData,
  addThread,
  upvoteThread,
  downvoteThread,
  neutralvoteThread,
  increaseCommentCountOnThread,
} = threadSlice.actions;

export const selectThreadData = (state) => state.thread.threadData;

export default threadSlice.reducer;
