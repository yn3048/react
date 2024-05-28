import React from "react";
import { useParams } from "react-router-dom";

const Result2 = () => {
  // 주소파라미터 수신 처리hook
  const { uid, name, age } = useParams();
  return (
    <div className="Result2">
      <span>Result2</span>
      <p>
        아이디 : {uid}
        <br />
        이름 : {name}
        <br />
        나이 : {age}
        <br />
      </p>
    </div>
  );
};

export default Result2;
