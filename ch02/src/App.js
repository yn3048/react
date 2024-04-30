import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

/*
  날짜 : 2024/04/29
  이름 : 이예나
  내용 : ch02.리액트 JSX

  JSX
  - javascript XML
  - 브라우저에 출력할 HTML 태그를 동적생성하기 위한 Javascript XML 문법
  - HTML과 비슷하지만 몇가지 규칙이 다름
  - Class => ClassName
  - 반드시 종료 태그 선언해야함

*/

function App() {
  let num1 = 1;
  let num2 = 2;
  const title = "Hello React!";
  const name = null;
  const isLogined = true;

  const cities = ["서울", "대전", "대구", "부산", "광주"];
  const users = [
    { uid: "a101", name: "김유신", age: 23, addr: "김해" },
    { uid: "a102", name: "김춘추", age: 21, addr: "경주" },
    { uid: "a103", name: "장보고", age: 33, addr: "완도" },
    { uid: "a104", name: "강감찬", age: 43, addr: "서울" },
    { uid: "a105", name: "이순신", age: 53, addr: "부산" },
  ];

  const onClickHandler = () => {
    alert("클릭2!✨✨");
  };

  let count = 0;

  const btnIncrease = () => {
    const countSpan = document.getElementsByClassName("count")[0];
    countSpan.innerText = ++count;
  };
  const btnDecrease = () => {
    const countSpan = document.getElementsByClassName("count")[0];
    countSpan.innerText = --count;
  };

  const onSelectHandler = (e) => {
    console.log("name : ${e.target.name}, value : ${e.target.value}");
  };

  const onTextHandler = (e) => {
    const textResult = document.getElementsByClassName("textResult")[0];
    textResult.innerText = e.target.value;
  };

  const onSubmitHadler = (e) => {
    e.preventDefault();

    const formData = {
      uid: e.target.uid.value,
      name: e.target.name.value,
      age: e.target.age.value,
    };

    console.log(formData);
  };

  // 🎈 return JSX 🎈
  return (
    <div className="App">
      <h3>ch02.JSX 실습</h3>

      <h4>기본출력</h4>
      <p>num1 : {num1}</p>
      <p>num2 : {num2}</p>
      <p>title : {title}</p>
      <p>name : {name}</p>
      <p>isLogined : {isLogined}</p>

      <h4>조건 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다.</span>
        ) : (
          <span>num1은 num2보다 작다.</span>
        )}
      </p>
      <p>{name === null && <span>name이 없습니다.</span>}</p>
      <p>{name || <span>name이 없습니다.</span>}</p>

      {isLogined ? <p>로그인 되었습니다.</p> : <p>로그아웃 되었습니다.</p>}

      <h4>반복 연산자</h4>
      {/* 
        - 반복 연산시 key 속성으로 유일값 설정
        - JSX는 class속성 대신 className 속성 사용 
      */}
      <ul>
        {cities.map((city, index) => (
          <li className="city" key={index}>
            {city}
          </li>
        ))}
      </ul>

      {users.map((user) => (
        <p className="user" key={user.uid}>
          {user.uid}, {user.name}, {user.age}, {user.addr}
        </p>
      ))}

      <h4>Fragment</h4>
      {/*
        - JSX 태그 요소를 감싸는 가상 태그, 랜더링 x
        - 상단 Fragment import 선언
        - 간단하게 <></> 사용
      */}
      <Fragment>
        <p>Hello World</p>
        <p>Hello React</p>
      </Fragment>

      <h4>이벤트</h4>
      {/* prettier-ignore */}
      <button onClick={() => {alert("클릭!✨");}}>버튼1</button>
      <button onClick={onClickHandler}>버튼2</button>

      <p>
        count : <span className="count">0</span>
        {/* JSX는 반드시 종료태그 선언🔔 */}
        <br />
        <button onClick={btnIncrease}>증가</button>
        <button onClick={btnDecrease}>감소</button>
      </p>

      <select onChange={onSelectHandler} name="city">
        <option>서울</option>
        <option>대전</option>
        <option>대구</option>
        <option>부산</option>
        <option>광주</option>
      </select>

      <p className="textResult"></p>
      <textarea onChange={onTextHandler}></textarea>

      <form onSubmit={onSubmitHadler}>
        <input type="text" name="uid" />
        <br />
        <input type="text" name="name" />
        <br />
        <input type="number" name="age" />
        <br />
        <input type="submit" name="submit" />
        <br />
      </form>
    </div>
  );
}

export default App;
