
import { createSlice } from '@reduxjs/toolkit'

export const threadSlice = createSlice({
  name: 'thread',
  initialState: { threadData: {} },
  reducers: {
    addThread: (state, action) => {
      state.threadData[action.payload['id']] = action.payload
    },

    setThreadData: (state, action) => {
        action.payload.forEach((threadDataItem) => {
          state.threadData[threadDataItem['id']] = threadDataItem
        })
    }
  },
})

export const { addThread, setThreadData } = threadSlice.actions

export default threadSlice.reducer
