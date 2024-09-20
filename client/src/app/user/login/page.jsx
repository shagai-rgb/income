"use client";
import { UserHead } from "@/components/user.components/UserHead";
import { Loader } from "@/components/user.components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { userUser } from "@/provider/UserProvider";

const Login = () => {
  const { loginHandler, isLoggedIn, loginLoading } = userUser();

  const { push } = useRouter();
  if (isLoggedIn) {
    push("/user");
  }

  const [error, setError] = useState("");
  const [userinput, setUserinput] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (e) => {
    e.preventDefault();
    setUserinput((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setUserinput((prev) => ({ ...prev, password: e.target.value }));
  };

  const register = async () => {
    const { email, password } = userinput;
    if (email && password !== "") {
      try {
        await loginHandler(email, password);
        setError("");
        push("/user");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("invalid inputs");
    }
  };

  if (loginLoading) {
    return <Loader />;
  }

  return (
    <div className="flex relative">
      <div className="w-[50%] flex justify-center items-center h-screen">
        <div className="w-[384px] flex flex-col  items-center gap-10 ">
          <img className="w-[92px] h-[34px]" src="/user/image.png" alt="" />
          <UserHead
            text={{
              head: "Welcome Back",
              title: "Welcome back, Please enter your details",
            }}
          />
          <div className="flex flex-col items-center w-full gap-4">
            <input
              onChange={(e) => {
                emailHandler(e);
              }}
              type="email"
              placeholder="Email"
              className="input input-bordered bg-[#F3F4F6] w-full h-[48px]"
            />
            <input
              onChange={(e) => {
                passwordHandler(e);
              }}
              type="password"
              placeholder="Password"
              className="input input-bordered bg-[#F3F4F6] w-full h-[48px]"
            />

            {error && <div className="text-red-500">{error}</div>}

            <button
              onClick={register}
              className="btn btn-primary w-full bg-[#0166FF] text-xl font-normal hover:bg-[#0166FF] text-white rounded-[20px]"
            >
              Log in
            </button>
          </div>
          <div>
            Don’t have account?
            <Link className="text-[#0166FF] ml-3" href="/user/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] right-0 fixed h-screen w-1/2"></div>
    </div>
  );
};

export default Login;
