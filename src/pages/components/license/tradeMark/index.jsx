import Card from "./card";
import PaginationPlus from "../../common/Pagination";
import Options from "../../common/ItemDivider";
import Label from "../../common/ItemDivider/label";
export default function TradeMark() {
  const arr = [
    {
      label: "商标大类：",
      options: [
        { id: 1, title: "01类 化学原料" },
        { id: 2, title: "02类 颜料油漆" },
        { id: 3, title: "03类 日化用品" },
        { id: 4, title: "04类 燃料油脂" },
        { id: 5, title: "05类 医药用品" },
        { id: 6, title: "06类 金属材料" },
        { id: 6, title: "07类 机械设备" },
        { id: 6, title: "09类 科学仪器" },
        { id: 6, title: "10类 医疗器械" },
        { id: 6, title: "11类 灯具空调" },
        { id: 6, title: "12类 运输工具" },
        { id: 6, title: "13类 烟花爆竹" },
        { id: 6, title: "14类 珠宝钟表" },
        { id: 6, title: "15类 乐器" },
        { id: 6, title: "16类 办公用品" },
        { id: 6, title: "17类 橡胶制品" },
        { id: 6, title: "18类 皮革皮具" },
        { id: 6, title: "19类 建筑材料" },
        { id: 6, title: "20类 家具用品" },
        { id: 6, title: "21类 厨房洁具" },
        { id: 6, title: "22类 绳网袋蓬" },
        { id: 6, title: "23类 纱线丝" },
        { id: 6, title: "24类 布料床单" },
        { id: 6, title: "25类 服装鞋帽" },
        { id: 6, title: "26类 纽扣拉链" },
        { id: 6, title: "27类 地毯床席" },
        { id: 6, title: "28类 健身器材" },
        { id: 6, title: "29类 食品" },
        { id: 6, title: "30类 方便食品" },
        { id: 6, title: "31类 农林生鲜" },
        { id: 6, title: "32类 啤酒饮料" },
        { id: 6, title: "33类 酒精饮品" },
        { id: 6, title: "34类 烟草烟具" },
        { id: 6, title: "35类 广告销售" },
        { id: 6, title: "36类 金融物管" },
        { id: 6, title: "37类 建筑修理" },
        { id: 6, title: "38类 通讯服务" },
        { id: 6, title: "39类 运输贮藏" },
        { id: 6, title: "40类 材料加工" },
        { id: 6, title: "41类 教育娱乐" },
        { id: 6, title: "42类 网站服务" },
        { id: 6, title: "43类 餐饮住宿" },
        { id: 6, title: "44类 医疗园艺" },
        { id: 6, title: "45类 社会服务" },
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
    <>
      <div>
        {arr.map((item) => {
          return (
            <div className="mb-6">
              <Options labelText={item.label} items={item.options}></Options>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {new Array(10).fill("").map((item) => {
          return <Card></Card>;
        })}
      </div>
      <div className="mt-70px mb-95px">
        <PaginationPlus></PaginationPlus>
      </div>
    </>
  );
}
