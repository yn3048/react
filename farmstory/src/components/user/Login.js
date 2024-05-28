import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    uid: "",
    pass: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/user/login", user)
      .then((resp) => {
        console.log(resp.data);

        // 리덕스 액션 실행
        dispatch(login(resp.data));

        // 메인 전환
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section class="login">
      <form onSubmit={submitHandler}>
        <table border="0">
          <tr>
            <td>
              <img src="../images/login_ico_id.png" alt="아이디" />
            </td>
            <td>
              <input
                type="text"
                name="uid"
                placeholder="아이디 입력"
                value={user.uid}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img src="../images/login_ico_pw.png" alt="비밀번호" />
            </td>
            <td>
              <input
                type="password"
                name="pass"
                placeholder="비밀번호 입력"
                value={user.pass}
                onChange={changeHandler}
              />
            </td>
          </tr>
        </table>
        <input type="submit" value="로그인" class="btnLogin" />
      </form>
      <div>
        <h3>회원 로그인 안내</h3>
        <p>아직 회원이 아니시면 회원으로 가입하세요.</p>
        <a href="#">회원가입</a>
      </div>
    </section>
  );
};

export default Login;
