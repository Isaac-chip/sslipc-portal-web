

import TabsPlus from "../common/TabsPlus";
import PatentContent from "./patentContent";
import TradeMark from "./tradeMark";
import Copyright from "./copyright";

export default function License() {
  const tabs = [
    {
      label: "专利",
      content: (
        <PatentContent></PatentContent>
      ),
    },
    {
      label: "商标",
      content: (
        <TradeMark></TradeMark>
      ),
    },
    {
      label: "版权",
      content: (
        <Copyright></Copyright>
      ),
    },
  ];


  return (
    <div className="container mx-auto">
      <div className="flex relative ">
        <TabsPlus activeTab={0} className="flex-shrink-0" tabs={tabs}></TabsPlus>
        <div className="absolute right-0 top-1 w-106px h-48px rounded-full bg-blue flex justify-center items-center text-white text-xl font-bold">
          发布
        </div>
      </div>
  
    </div>
  );
}
