import RegisterComponent from "@/components/auth/Register";
// import { isLoggedIn } from "@/lib/isLoggedIn";
import React from "react";

const Register = () => {
  //   isLoggedIn();
  return (
    <div className="w-screen bg-violet-200 h-screen flex justify-center items-center">
      <RegisterComponent />
    </div>
  );
};

export default Register;
