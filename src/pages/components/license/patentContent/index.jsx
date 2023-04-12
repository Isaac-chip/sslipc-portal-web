
import Options from "../../common/ItemDivider";
import Label from "../../common/ItemDivider/label";
import DateRangePicker from "../../common/RangePicker";
export default function PatentContent() {
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
    <div className="flex">
      <div>
        {arr.map((item) => {
          return (
            <div className="mt-4">
              <Options labelText={item.label} items={item.options} />
            </div>
          );
        })}
        <div className="mt-4 flex items-center">
          <Options
            labelText={"发布时间: "}
            items={[
              { id: 1, title: "近一个月" },
              { id: 2, title: "近三个月" },
              { id: 3, title: "近一年" },
            ]}
          ></Options>
          <div className="ml-40 flex items-center">
            <Label labelText={"自定义："}></Label>
            <DateRangePicker></DateRangePicker>

          </div>
        </div>
      </div>
    </div>
  );
}