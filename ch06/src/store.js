import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import userReducer from "./slices/UserSlice";

// Redux Store 설정
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
