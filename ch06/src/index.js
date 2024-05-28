import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CounterProvider } from "./contexts/CounterContext";
import { UserProvider } from "./contexts/UserContext";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Context provider로 감싸서 App 하위 모든 컴포넌트에 컨텍스트 제공 */}
    <CounterProvider>
      <UserProvider>
        {/* Redux Provider로 하위 컴포넌트 store 제공 */}
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </CounterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
