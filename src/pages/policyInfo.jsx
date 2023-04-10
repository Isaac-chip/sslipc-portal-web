import { useState } from "react";
import TabsPlus from "./components/common/TabsPlus";
import PaginationPlus from "./components/common/Pagination";
import Card from "./components/policyInfo/card";
export default function PolicyInfoPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: "政策法规",
      content: (
        <div className="relative">
          <div>
            {new Array(10).fill("").map((item) => {
              return <Card></Card>;
            })}
          </div>
          <div className="h-full w-2px bg-gray-400 absolute top-0" style={{left:"-19px;"}}></div>  
         
        </div>
      ),
    },
    { label: "指导性文件", content: <div>Content for Tab 2</div> },
  ];
  return (
    <div className="container mx-auto">
      <TabsPlus
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabs={tabs}
      ></TabsPlus>
      <div className="mb-20px">
        <PaginationPlus></PaginationPlus>
      </div>
    </div>
  );
}
