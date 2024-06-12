import React from "react";
import Chart from "./Chart";

const Card = ({ title, data }) => {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-2 pt-2">
        <header className="flex flex-row items-start mb-6">
          {/* Icon */}
          <img
            src={`/images/${
              title.includes("TEMP") ? "temparature" : "ph-meter"
            }.png`}
            width="32"
            height="32"
            alt="Icon 01"
            className="fill-white"
          />

          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 ml-2">
            {title}
          </h2>
        </header>
      </div>
      {/* Chart built with Chart.js or another chart library */}
      <div className="grow">
        <div className="w-full h-56">
          <Chart title={title} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Card;
