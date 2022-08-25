import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "../pages/threads/threadSlice";

export default configureStore({
  reducer: {
    thread: threadReducer,
  },
});
