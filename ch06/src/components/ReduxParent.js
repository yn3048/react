import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/CounterSlice";
import ReduxChild from "./ReduxChild";

const ReduxParent = () => {
  // 리덕스 스토어 상태조회
  const count = useSelector((state) => state.counter.count); // store에 설정한 reducer명

  // 리덕스 dispath 함수 생성
  const dispatch = useDispatch();

  return (
    // prettier-ignore
    <div className="ReduxParent">
      <p>ReduxParent count : {count}</p>
      <button onClick={() => {dispatch(increment());}}>증가</button>
      <button onClick={() => {dispatch(decrement());}}>감소</button>
      <button onClick={() => {dispatch(reset(0));}}>리셋</button>
      <ReduxChild/>
    </div>
  );
};

export default ReduxParent;
