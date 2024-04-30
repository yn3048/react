import logo from './logo.svg';
import './App.css';

/*
  날짜 : 2024/04/29
  이름 : 이예나
  내용 : ch01. 리액트 개요와 개발환경 구축

  개발환경 구축
  1) Node.js 설치
    - npm install -g create-react-app

  2) 프로젝트 생성
    - npx create-react-app 앱이름

  3) 프로젝트 실행
    - npm start(npm run start)  
    - npm run build
  
  주요 구성파일
  index.html
   - 리액트 애플리케이션 시작 페이지
   - id root 태그에 App.js 내용 출력(렌더링)

   index.js
   - 리액트 애플리케이션 진입 파일
   - ReactDOM.render() 함수를 사용해 React 요소를 root에 렌더링

   App.js
   - 리액트 애플리케이션 시작 컴포넌트 파일
   - JSX로 출력되는 요소를 index.html root에 렌더링
   
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!🖐
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
