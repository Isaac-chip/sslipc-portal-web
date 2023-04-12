import TabsPlus from "../common/TabsPlus";
import Options from "../common/ItemDivider";
export default function License() {
  const tabs = [
    {
      label: "专利",
      content: (
        <div className="relative">
          <div className="grid grid-cols-4 gap-4"></div>
        </div>
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
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
  ];
  const arr = [
    {
      label: "技术领域：",
      options: [
        { id: 1, title: "电子信息" },
        { id: 2, title: "软件通讯" },
        { id: 3, title: "化学" },
        { id: 4, title: "材料" },
        { id: 5, title: "生物" },
        { id: 6, title: "医药" },
        { id: 6, title: "机械" },
        { id: 6, title: "光学" },
      ],
    },
    {
      label: "专利类型：",
      options: [
        { id: 1, title: "发明专利" },
        { id: 2, title: "实用新型" },
        { id: 3, title: "外观设计" },
      ],
    },
    {
      label: "成熟度：",
      options: [
        { id: 1, title: "概念方案" },
        { id: 2, title: "试制阶段" },
        { id: 3, title: "成熟应用" },
      ],
    },
    {
      label: "交易价格：",
      options: [
        { id: 1, title: "免费" },
        { id: 2, title: "1万以下" },
        { id: 3, title: "1-20万" },
        { id: 4, title: "20万以上" },
      ],
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
      <div className="flex">
        <div>
          {arr.map((item) => {
            return (
                <div className="mt-4">
                    <Options labelText={item.label} items={item.options} />
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
