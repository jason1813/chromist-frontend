import { createSlice } from '@reduxjs/toolkit';
import VoteUtils from '../../misc/vote/VoteUtils';

export const threadSlice = createSlice({
  name: 'thread',
  initialState: { threadData: [], moreThreadsExist: true },
  reducers: {
    addThreads: (state, action) => {
      state.threadData.push(...action.payload);
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

    setMoreThreadsExist: (state, action) => {
      state.moreThreadsExist = action.payload;
    },
  },
});

export const {
  addThreads,
  addThread,
  upvoteThread,
  downvoteThread,
  neutralvoteThread,
  increaseCommentCountOnThread,
  setMoreThreadsExist,
} = threadSlice.actions;

export const selectThreadData = (state) => state.thread.threadData;
export const selectMoreThreadsExist = (state) => state.thread.moreThreadsExist;

export default threadSlice.reducer;
