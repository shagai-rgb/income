"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Step1 } from "@/components/user.components/Step1";
import { Step2 } from "@/components/user.components/Step2";
import { Step3 } from "@/components/user.components/Step3";
import React, { useEffect, useState } from "react";
import { Loader } from "@/components/user.components/Loader";

const Confirm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState(1);
  const stepper = () => {
    setStep((prev) => prev + 1);
  };

  const [dataCurrency, setDataCurrency] = useState("");
  const [dataBalance, setDataBalance] = useState("");

  const currencyHandler = (e) => {
    setDataCurrency(e);
  };
  const balanceHandler = (e) => {
    setDataBalance(e);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const refresh = async () => {
      try {
        const result = await axios.get(
          "https://income-zkgv.onrender.com/user/checkwallet",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (result.data) {
          
          router.push("/");
          return;
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        
        setLoading(false);
        console.log(err);
        
        if (err.message.includes("jwt")) {
          window.localStorage.removeItem("token");
        }
      }
    };

    refresh();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col items-center relative top-10">
      <img className="w-[107px] h-10" src="/user/image.png" alt="" />
      {step == 1 ? (
        <Step1 stepper={stepper} currencyHandler={currencyHandler} />
      ) : (
        ""
      )}
      {step == 2 ? (
        <Step2 stepper={stepper} balanceHandler={balanceHandler} />
      ) : (
        ""
      )}
      {step == 3 ? (
        <Step3 dataCurrency={dataCurrency} dataBalance={dataBalance} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Confirm;
