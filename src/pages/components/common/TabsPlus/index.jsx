import { useState } from "react";
import classNames from "classnames";

export default function TabsPlus({ tabs, activeTab = 0 }) {
  const [activeIndex, setActiveIndex] = useState(activeTab); 
  return (
    <>
      <div className="w-full">
        <div className=" mx-auto">
          <div className="flex items-center -mb-px flex-grow border-b border-gray-200 ml-4">
           
            {
              tabs?.map((tab,index)=>{
                return (
                  <div onClick={()=>setActiveIndex(index)} className={classNames("py-4 font-bold text-xl mr-20 cursor-pointer  ",{"text-black border-b-4 border-blue":activeIndex===index},{"text-gray-400":activeIndex!==index})}>{tab.label}</div>
                )
              })
            }
          </div>
        </div>
        {/* content */}
        <div className="mt-4 pb-2 px-4">
          {tabs && tabs[activeIndex]?.content}
        </div>
      </div>
    </>
  );
}
