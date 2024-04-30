import React from "react";

const ChildrenComponent = ({ children }) => {
  return (
    <div className="ChildrenComponent">
      <h4>ChildrenComponent</h4>
      {children}
    </div>
  );
};

export default ChildrenComponent;
