"use client";
import Chart from "react-apexcharts";

import { useEffect, useState } from "react";

export const ExpenseChart = () => {
  // const [contryname, setCountryname] = useState([]);
  // const [medal, setMedal] = useState([]);

  // useEffect(() => {
  //   const getdata = async () => {
  //     const countryname = [];
  //     const getmedal = [];

  //     const resData = [10, 20, 30, 40, 50, 60];
  //     for (let i = 0; i < resData.length; i++) {
  //       countryname.push(resData[i].country);
  //       getmedal.push(parseInt(resData[i].medals));
  //     }
  //     setCountryname(countryname);
  //     setMedal(getmedal);
  //   };
  //   getdata();
  // }, []);
  const medal = [10, 20, 30, 40, 50];
  const contryname = [`Bills`, "Food ", "Shopping", "Insurance"];
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl flex flex-col">
      <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <div className="font-medium text-base">Income - Expense</div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-5 h-[226px] w-[588px]">
        <Chart
          className="flex justify-start items-start"
          type="donut"
          width={540}
          height={170}
          series={medal}
          options={{
            fill: {},
            legend: {
              show: true,
              position: "right",
              height: 170,
              width: 300,
              horizontalAlign: "left",
              offsetX: 10,
              fontSize: 14,
              onItemHover: false,
              onItemClick: {
                toggleDataSeries: true,
              },
              markers: {
                size: 6,
              },
              itemMargin: {
                horizontal: 10,
                vertical: 10,
              },
            },

            labels: contryname,

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    value: {
                      fontSize: 18,
                    },
                    total: {
                      show: true,
                      showAlways: true,
                      //formatter: () => '343',
                      fontSize: 18,
                      color: "#f90000",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  );
};
