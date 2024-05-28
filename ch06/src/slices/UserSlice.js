import { createSlice } from "@reduxjs/toolkit";

// Redux 상태 생성
const initState = {
  users: [],
};

// Redux Slice 생성
const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

// Redux Actions 내보내기
export const { addUser } = userSlice.actions;

// Redux Reducer 내보내기
export default userSlice.reducer;
