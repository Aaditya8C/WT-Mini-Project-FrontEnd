import LoginComponent from "@/components/auth/Login";
import React from "react";
import { isLoggedIn } from "../../lib/isLoggedIn";

const Login = () => {
  isLoggedIn();
  return (
    <div className="w-screen bg-gray-900 h-screen flex justify-center items-center">
      <LoginComponent />
    </div>
  );
};

export default Login;