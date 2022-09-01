import { createSlice } from '@reduxjs/toolkit';
import Constants from '../../misc/js/Constants';

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
      const oldVoteStatus = state.threadData[action.payload].voteStatus;

      if (oldVoteStatus === Constants.voteStatus.UP) {
        return;
      }

      const oldVoteScore = state.threadData[action.payload].voteScore;
      const newVoteScore = Constants.getNewVoteScore(
        oldVoteScore,
        oldVoteStatus,
        Constants.voteStatus.UP
      );

      state.threadData[action.payload].voteScore = newVoteScore;
      state.threadData[action.payload].voteStatus = Constants.voteStatus.UP;
    },

    downvoteThread: (state, action) => {
      const oldVoteStatus = state.threadData[action.payload].voteStatus;

      if (oldVoteStatus === Constants.voteStatus.DOWN) {
        return;
      }

      const oldVoteScore = state.threadData[action.payload].voteScore;
      const newVoteScore = Constants.getNewVoteScore(
        oldVoteScore,
        oldVoteStatus,
        Constants.voteStatus.DOWN
      );

      state.threadData[action.payload].voteScore = newVoteScore;
      state.threadData[action.payload].voteStatus = Constants.voteStatus.DOWN;
    },

    neutralvoteThread: (state, action) => {
      const oldVoteStatus = state.threadData[action.payload].voteStatus;

      if (oldVoteStatus === Constants.voteStatus.NEUTRAL) {
        return;
      }

      const oldVoteScore = state.threadData[action.payload].voteScore;
      const newVoteScore = Constants.getNewVoteScore(
        oldVoteScore,
        oldVoteStatus,
        Constants.voteStatus.NEUTRAL
      );

      state.threadData[action.payload].voteScore = newVoteScore;
      state.threadData[action.payload].voteStatus =
        Constants.voteStatus.NEUTRAL;
    },
  },
});

export const {
  setThreadData,
  addThread,
  upvoteThread,
  downvoteThread,
  neutralvoteThread,
} = threadSlice.actions;

export const selectThreadData = (state) => state.thread.threadData;

export default threadSlice.reducer;
