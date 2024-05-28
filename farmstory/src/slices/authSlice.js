import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie, removeCookie } from "../util/cookieUtil";

const loadStateFromCookie = () => {
  const auth = getCookie("auth");

  const username = auth?.username; // 옵셔널 체이닝 연산자를 이용해 안전하게 username 참조
  const accessToken = auth?.accessToken;

  return { username, accessToken };
};

const initState = {
  username: "",
  accessToken: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: loadStateFromCookie() || initState, // 쿠키 확인 후 초기화
  reducers: {
    login: (state, action) => {
      const data = action.payload;

      // 리덕스 저장소 상태 업데이트
      state.username = data.username;
      state.accessToken = data.accessToken;

      // 영구보관을 위해 쿠키저장
      setCookie("auth", data, 1);
    },
    logout: (state) => {
      removeCookie("auth");
      return { ...initState };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
