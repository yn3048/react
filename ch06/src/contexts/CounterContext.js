import { createContext, useState } from "react";

// context 생성
const CounterContext = createContext();

// Provider 정의
export const CounterProvider = ({ children }) => {
  // 전역 공통 데이터
  const [count, setCount] = useState(0);

  // 액션
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = (value) => {
    setCount(value);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

// 내보내기
export default CounterContext;
