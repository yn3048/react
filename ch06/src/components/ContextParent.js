import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";
import ContextChild from "./ContextChild";

const ContextParent = () => {
  // CounterContext 사용
  const { count, increment, decrement, reset } = useContext(CounterContext);
  return (
    <div className="ContextParent">
      <p>ContextChild count : {count} </p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      {/*✨reset은 핸들러()=>로 감싸줘야 실행됨✨ */}
      <button onClick={() => reset(0)}>리셋</button>

      <ContextChild />
    </div>
  );
};

export default ContextParent;
