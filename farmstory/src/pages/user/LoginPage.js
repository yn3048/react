import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Login from "../../components/user/Login";

const LoginPage = () => {
  return (
    <DefaultLayout>
      <div id="user">
        <Login />
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;
