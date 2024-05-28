import logo from "./logo.svg";
import "./App.css";
import ContextParent from "./components/ContextParent";
import ContextUserRegister from "./components/ContextUserRegister";
import ContextUserList from "./components/ContextUserList";
import ReduxUserRegister from "./components/ReduxUserRegister";
import ReduxParent from "./components/ReduxParent";
import ReduxUserList from "./components/ReduxUserList";

/*ㄴ
  날짜 : 2024/05/03
  이름 : 이예나
  내용 : 6장 리액트 상태관리 실습

  Context API
  - 리액트에서 전역적으로 상태 데이터를 관리하는 컴포넌트
  - Context Provider 설정하고 index.js 에서 <~Provider> 컴포넌트로 감쌈

  Redux Toolkit(RTK)
  - 라이브러리 설치 : npm install @reduxjs/toolkit react-redux
  - 리액트에서 가장 많이 사용하는 외부 상태 라이브러리
  - slice 파일 생성/정의 및 store 설정 후 index.js에서 <Provider store=스토어> 감쌈
 

  npm install @reduxjs/toolkit react-redux


*/

function App() {
  return (
    <div className="App">
      <h3>ch06.React 상태관리</h3>

      <h4>Context API 실습</h4>
      <ContextParent />
      <ContextUserRegister />
      <ContextUserList />

      <h4>Redux(Redux Toolkit) 실습</h4>
      <ReduxParent />
      <ReduxUserRegister />
      <ReduxUserList />
    </div>
  );
}

export default App;
