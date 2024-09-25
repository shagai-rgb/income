"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(true);
  const [token, setToken] = useState("");
  const router = useRouter();
  const [isWallet, setIsWallet] = useState(false);

  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );
      const dataToken = data.token;
      window.localStorage.setItem("token", dataToken);
      setToken(dataToken);
      setIsLoggedIn(true);
      setLoginLoading(false);
    } catch (err) {
      setToken("");
      setLoginLoading(false);

      throw new Error(err.response.data);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const checkToken = async () => {
      const result = await axios(
        `http://localhost:8000/api/user/checktoken/${token}`
      );
      if (result.data) {
        setIsLoggedIn(true);
        setToken(token);
        setLoginLoading(false);
        const wallet = await axios.get(
          "http://localhost:8000/api/user/checkwallet",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(wallet);

        if (!wallet.data) {
          router.push("/user");
        }
      } else {
        window.localStorage.removeItem("token");
        setToken("");
        setIsLoggedIn(false);
        setLoginLoading(false);
        router.push("/user/login");
      }
    };
    checkToken();
  }, []);

  return (
    <UserContext.Provider
      value={{ loginHandler, isLoggedIn, loginLoading, token }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userUser = () => {
  const user = useContext(UserContext);
  return user;
};
