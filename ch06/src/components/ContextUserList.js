import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const ContextUserList = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div className="ContextUserList">
      <p>ContextUserList</p>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.uid}, {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextUserList;
