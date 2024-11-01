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
        "https://income-zkgv.onrender.com/user/login",
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
    const token = window.localStorage.getItem("token");
    if (token) {
      const checkToken = async () => {
        const result = await axios(
          `https://income-zkgv.onrender.com/user/checktoken/${token}`
        );
        if (result.data) {
          setIsLoggedIn(true);
          setToken(token);
          setLoginLoading(false);
          const wallet = await axios.get(
            "https://income-zkgv.onrender.com/user/checkwallet",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

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
    } else {
      window.localStorage.removeItem("token");
      setToken("");
      setIsLoggedIn(false);
      setLoginLoading(false);
      router.push("/user/login");
    }
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
