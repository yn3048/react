import React from "react";
import { useSearchParams } from "react-router-dom";

const Result1 = () => {
  // 쿼리스트링을 수신 처리하기 위한 hook
  const [searchParams] = useSearchParams();

  const uid = searchParams.get("uid");
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div className="Result1">
      <span>Result1</span>
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

export default Result1;
