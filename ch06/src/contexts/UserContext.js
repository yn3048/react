import { createContext, useState } from "react";

// context 생성
const UserContext = createContext();

// Provider 정의
export const UserProvider = ({ children }) => {
  // 전역 공통 데이터
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

// 내보내기
export default UserContext;
