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
      const oldVoteStatus = state.threadData[action.payload].voteStatus;

      if (oldVoteStatus === VoteUtils.voteStatus.UP) {
        return;
      }

      const oldVoteScore = state.threadData[action.payload].voteScore;
      const newVoteScore = VoteUtils.getNewVoteScore(
        oldVoteScore,
        oldVoteStatus,
        VoteUtils.voteStatus.UP
      );

      state.threadData[action.payload].voteScore = newVoteScore;
      state.threadData[action.payload].voteStatus = VoteUtils.voteStatus.UP;
    },

    downvoteThread: (state, action) => {
      const oldVoteStatus = state.threadData[action.payload].voteStatus;

      if (oldVoteStatus === VoteUtils.voteStatus.DOWN) {
        return;
      }

      const oldVoteScore = state.threadData[action.payload].voteScore;
      const newVoteScore = VoteUtils.getNewVoteScore(
        oldVoteScore,
        oldVoteStatus,
        VoteUtils.voteStatus.DOWN
      );

      state.threadData[action.payload].voteScore = newVoteScore;
      state.threadData[action.payload].voteStatus = VoteUtils.voteStatus.DOWN;
    },

    neutralvoteThread: (state, action) => {
      const oldVoteStatus = state.threadData[action.payload].voteStatus;

      if (oldVoteStatus === VoteUtils.voteStatus.NEUTRAL) {
        return;
      }

      const oldVoteScore = state.threadData[action.payload].voteScore;
      const newVoteScore = VoteUtils.getNewVoteScore(
        oldVoteScore,
        oldVoteStatus,
        VoteUtils.voteStatus.NEUTRAL
      );

      state.threadData[action.payload].voteScore = newVoteScore;
      state.threadData[action.payload].voteStatus =
        VoteUtils.voteStatus.NEUTRAL;
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
