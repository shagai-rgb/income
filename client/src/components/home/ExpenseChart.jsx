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
  const medal = [10000, 20000, 3000, 40000, 40000];
  const contryname = [`Bills`, "Food ", "Shopping", "Insurance", "Clothing"];
  const calculatePercentages = (medal) => {
    const total = medal.reduce((acc, number) => acc + number, 0);

    if (total === 0) {
      return medal.map(() => 0); // To handle edge case when the total is 0
    }

    return medal.map((number) => (number / total) * 100);
  };
  const percentages = calculatePercentages(medal);
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl flex flex-col">
      <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <div className="font-medium text-base">Income - Expense</div>
      </div>
      <div className="flex gap-4 px-6 py-5 h-[226px] w-[588px] relative">
        <Chart
          className="flex justify-start z-10 items-start"
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
                vertical: 4,
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
        <div className="flex justify-between absolute top-[46px] z-0 left-[380px]">
          <div className="flex flex-col w-[100px] tems-end">
            {medal.map((el) => {
              return <div className="font-normal h-6 text-sm">{el}₮</div>;
            })}
          </div>
          <div className="flex flex-col items-end">
            {percentages.map((el) => {
              return (
                <div className="font-normal h-6 text-sm">{Math.floor(el)}%</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
