import React from "react";
import { Outlet } from "react-router-dom";

const Parent = () => {
  return (
    <div>
      <p>Parent 컴포넌트 입니다.</p>
      {/*자식 라우터 랜더링 */}
      <Outlet />
    </div>
  );
};

export default Parent;
