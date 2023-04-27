import { Tabs, Pagination } from "flowbite-react";
import TabsPlus from "../common/TabsPlus";
import { useState } from "react";
import Card from "./card";
import PaginationPlus from "../common/Pagination";
import { useRouter } from "next/router";
export default function PublicService() {
  const [pageSize, setPageSize] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter()

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { label: "最新公告", content: <div>
      {
        new Array(10).fill("")?.map((item)=>{
          return (
            <div className="mt-24px mb-24px">
              <Card onClick={()=>router.push('/newsDetail?id=111')}></Card> 
            </div>
          )
        })
      }
    </div> },
    { label: "行业资讯", content: <div>
    {
      new Array(10).fill("")?.map((item)=>{
        return (
          <div className="mt-24px mb-24px">
            <Card onClick={()=>router.push('/newsDetail?id=111')}></Card> 
          </div>
        )
      })
    }
  </div>  },
    
  ];
  const onPageChange = (e) => {
    console.log(e);
    setPageSize(e);
  };
  return (
    <div>
      <img className="w-full" src="/publicService/banner2.png" />
      <div className="container mx-auto mt-10px">
        <TabsPlus
          activeTab={activeTab}
          onTabChange={handleTabChange}
          tabs={tabs}
        ></TabsPlus>
        <div className="mb-20px">
          {/* <PaginationPlus></PaginationPlus> */}
        </div>
      </div>
    </div>
  );
}
