import logo from "./logo.svg";
import "./App.css";
import User1Component from "./components/user1/User1Component";

/*
  날짜 : 2024/05/07
  이름 : 김철학
  내용 : 7장.React HTTP 통신 실습

  Axios 설치
  -npm install axios
*/

function App() {
  return (
    <div className="App">
      <h3>ch07.React Http 통신</h3>
      <User1Component />
    </div>
  );
}

export default App;
