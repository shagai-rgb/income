"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(true);
  const router = useRouter();

  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );

      const token = data.token;
      window.localStorage.setItem("token", token);
      setIsLoggedIn(true);

      setLoginLoading(false);
    } catch (err) {
      setLoginLoading(false);
      console.log(err);

      throw new Error(err.response.data);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setLoginLoading(false);
    } else {
      setIsLoggedIn(false);
      setLoginLoading(false);
      // router.push("/user/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ loginHandler, isLoggedIn, loginLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const userUser = () => {
  const user = useContext(UserContext);
  return user;
};
