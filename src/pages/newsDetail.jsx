import TabsPlus from "./components/common/TabsPlus";

export default function newsDetailPage() {
  const tabs = [
    {
      label: "新闻动态",
      content: <div>sdfsadf</div>,
    },
    {
      label: "行业资讯",
      content: <div>sdfsadf</div>,
    },
   
  ];

  return (
    <>
      <div className="container mx-auto mt-10">
        <TabsPlus tabs={tabs}></TabsPlus>
      </div>
    </>
  );
}
