import { configureStore } from "@reduxjs/toolkit";
import FirstPost from "../Reducer/reducer";

const store = configureStore({
  reducer: {
    post: FirstPost.reducer,
  }
 
});
export default store;