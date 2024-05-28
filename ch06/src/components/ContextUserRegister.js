import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

const ContextUserRegister = () => {
  const { users, setUsers } = useContext(UserContext);
  const [user, setUser] = useState({ uid: "", name: "", age: 0 });
  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // Context users 상태 업데이트
    setUsers([...users, user]);
  };
  return (
    <div className="ContextUserRegister">
      <p>ContextUserRegister 실습</p>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="uid"
          value={user.uid}
          onChange={inputChangeHandler}
        />
        <br />
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={inputChangeHandler}
        />
        <br />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={inputChangeHandler}
        />
        <br />
        <input type="submit" value="저장" />
      </form>
    </div>
  );
};
export default ContextUserRegister;
