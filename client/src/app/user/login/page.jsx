import { UserHead } from "@/components/user.components/UserHead";
import React from "react";

const Login = () => {
  return (
    <div className="flex w-screen h-screen pr-[708px] justify-center items-center">
      <div className="w-[384px] h-[426px] flex flex-row gap-10 ">
        <img src="/src/app/images/user/image.png" alt="" />
        <UserHead
          text={{
            head: "Welcome Back",
            title: "Welcome back, Please enter your details",
          }}
        />
      </div>
    </div>
  );
};

export default Login;
