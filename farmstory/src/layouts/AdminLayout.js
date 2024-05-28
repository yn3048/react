import React from "react";
import Aside from "../components/admin/common/Aside";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div id="admin-container">
      <header>
        <Link to="/admin/" class="logo">
          <img src="/images/admin_logo.jpg" alt="로고" />
        </Link>
        <p>
          <a href="/">HOME |</a>
          <a href="#">로그아웃 |</a>
          <a href="#">고객센터</a>
        </p>
      </header>
      <main>
        <Aside />
        {children}
      </main>
      <footer>
        <p>
          Copyright(C)Farmstory All rights reserved. FARMSTORY ADMINISTRATOR
          Version 1.0.1
        </p>
      </footer>
    </div>
  );
};

export default AdminLayout;
