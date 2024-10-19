import React from "react";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import dynamic from "next/dynamic";


const DynamicChart1 = dynamic(
  () => import("../Charts/ChartTwo"),
  {
    ssr: false
  },
)

const DynamicChart2 = dynamic(
  () => import("../Charts/ChartOne"),
  {
    ssr: false 
  },
)

const DynamicChart3 = dynamic(
  () => import("../Charts/ChartThree"),
  {
    ssr: false 
  },
)




const ECommerce: React.FC = () => {
  return (
    <>
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <DynamicChart1 />
        <DynamicChart2 />
        <DynamicChart3 />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
