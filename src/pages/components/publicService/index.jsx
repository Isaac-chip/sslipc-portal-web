import { Tabs, Pagination } from "flowbite-react";
import TabsPlus from "../common/TabsPlus";
import { useState } from "react";
import Card from "./card";
import PaginationPlus from "../common/Pagination";
export default function PublicService() {
  const [pageSize, setPageSize] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { label: "新闻动态", content: <div>
      {
        new Array(10).fill("")?.map((item)=>{
          return <Card></Card> 
        })
      }
    </div> },
    { label: "行业资讯", content: <div>Content for Tab 2</div> },
    
  ];
  const onPageChange = (e) => {
    console.log(e);
    setPageSize(e);
  };
  return (
    <div>
      <img src="/publicService/banner2.png" />
      <div className="container mx-auto mt-10px">
        <TabsPlus
          activeTab={activeTab}
          onTabChange={handleTabChange}
          tabs={tabs}
        ></TabsPlus>
        <div className="mb-20px">
          <PaginationPlus></PaginationPlus>
        </div>
      </div>
    </div>
  );
}
