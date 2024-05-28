import React from "react";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const authSlice = useSelector((state) => state.authSlice);

  const logoutHandler = () => {
    // 리덕스 로그아웃 액션 실행
    dispatch(logout());
  };

  return (
    <>
      <header>
        <Link to="/" class="logo">
          <img src="/images/logo.png" alt="로고" />
        </Link>
        <p>
          <Link to="/">HOME |</Link>

          {!authSlice.username ? (
            <>
              <Link to="/user/login">로그인 |</Link>
              <Link to="/user/register">회원가입 |</Link>
            </>
          ) : (
            <>
              <Link to="/admin/">관리자 |</Link>
              <Link to="/user/logout" onClick={logoutHandler}>
                로그아웃 |
              </Link>
            </>
          )}

          <Link to="/">고객센터</Link>
        </p>
        <img src="/images/head_txt_img.png" alt="3만원 이상 무료배송" />
        <Navigation />
      </header>
    </>
  );
};

export default Header;
