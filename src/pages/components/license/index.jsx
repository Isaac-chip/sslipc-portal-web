import TabsPlus from "../common/TabsPlus";
import PatentContent from "./patentContent";
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
        <div className="relative">
          <div className="grid grid-cols-4 gap-4"></div>
        </div>
      ),
    },
    {
      label: "版权",
      content: (
        <div className="relative">
          <div className="grid grid-cols-4 gap-4"></div>
        </div>
      ),
    },
  ];


  return (
    <div className="container mx-auto">
      <div className="flex relative ">
        <TabsPlus className="flex-shrink-0" tabs={tabs}></TabsPlus>
        <div className="absolute right-0 top-1 w-106px h-48px rounded-full bg-blue flex justify-center items-center text-white text-xl font-bold">
          发布
        </div>
      </div>
  
    </div>
  );
}
