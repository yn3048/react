import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/CounterSlice";

const ReduxChild = () => {
  // 리덕스 스토어 상태조회
  const count = useSelector((state) => state.counter.count);

  // 리덕스 dispath 함수 생성
  const dispatch = useDispatch();

  return (
    // prettier-ignore
    <div className="ReduxChild">
      <p>ReduxChild count : {count}</p>
      <button onClick={() => {dispatch(increment());}}>증가</button>
      <button onClick={() => {dispatch(decrement());}}>감소</button>
      <button onClick={() => {dispatch(reset(0));}}>리셋</button>
      
    </div>
  );
};

export default ReduxChild;
