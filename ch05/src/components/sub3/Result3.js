import React from "react";
import { useLocation } from "react-router-dom";

const Result3 = () => {
  // 현재 경로 정보를 갖는 useLocation hook
  const location = useLocation();

  const data = location.state.formData;

  return (
    <div className="Result3">
      <span>result3</span>
      <p>
        아이디 : {data.uid} <br />
        이름 : {data.name}
        <br />
        나이 : {data.age} <br />
      </p>
    </div>
  );
};

export default Result3;
