import logo from "./logo.svg";
import "./App.css";
import UseStateComponent from "./components/UseStateComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import UseCallbackComponent from "./components/UseCallbackComponent";

/*
  날짜 : 2024/05/01
  이름 : 이예나
  내용 : 4장. 리액트 훅 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch04.React Hooks</h3>
      <UseStateComponent />
      <UseRefComponent />
      <UseRefComponent />
      <UseReducerComponent />
      <UseEffectComponent />
      <UseMemoComponent />
      <UseCallbackComponent />
    </div>
  );
}

export default App;
