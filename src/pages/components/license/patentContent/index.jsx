import { useRouter } from "next/router";
import Options from "../../common/ItemDivider";
import Label from "../../common/ItemDivider/label";
import DateRangePicker from "../../common/RangePicker";
import SortButton from "../../common/SortButton";
import Card from "./card";
import PaginationPlus from "../../common/Pagination";
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
  const router = useRouter();
  const data = [
    {
      url:"/license/patent/bg1.png",
      title:"7-(2,4-二氟苯基)-1,3-二羟基氧杂蒽酮在制备抗肿瘤药物方面的应用。",
      desc:"本发明提供了7‑(2,4‑二氟苯基)‑1,3‑二羟基氧杂蒽酮具有新的抗肿瘤活性，因此在制备抗肿瘤药物方面有新的应用，特别是肝癌、肺癌(紫杉醇耐药)和乳腺癌以及广谱抗癌药物方面的应用。本发明提供了7‑(2,4‑二氟苯基)‑1,3‑二羟基氧杂蒽酮具有新的抗肿瘤活性，因此在制备抗肿瘤药物方面有新的应用，特别是肝癌、肺癌(紫杉醇耐药)和乳腺癌以及广谱抗癌药物方面的应用。"
    }, {
      url:"/license/patent/bg2.png",
      title:"大型船舶高精度导航与靠泊方法",
      desc:"本发明公开的大型船舶高精度导航与靠泊方法，包括步骤：一、建立坐标系；二、根据船舶左舷点A、右舷点B以及船首点B1的坐标数据以及极坐标原点O分别计算船舶所在矩形四个顶点的坐标；三、船首和船尾到码头的距离及横移速度计算；四、船首向计算。本发明实..."
    },
    {
      url:"/license/patent/bg3.png",
      title:"PRRSV ORF5融合基因DNA疫苗及制备方法",
      desc:"本发明公开了一种PRRSV ORF5融合基因DNA疫苗及制备方法。属于生物技术领域。本发明利用DNA shuffling技术，对4个谱系的PRRSV ORF5基因进行体外突变重组，筛选到两个重组质粒PCA‑ΔORF5‑8和PCA‑ΔORF5‑46，能够更有效的产生中和抗体，为..."
    },
    {
      url:"/license/patent/bg4.png",
      title:"多能源多电机液压挖掘机电液混合驱动系统及控制方法",
      desc:"本发明公开一种多能源多电机液压挖掘机电液混合驱动系统及控制方法。该系统包括动力电池、超级电容、能量管理单元、动力电机、电机控制器、先导操作手柄、液压蓄能器、油箱、液压泵/马达、多个电磁换向阀、多个压力传感器、溢流阀、开中心六通比例方向..."
    },
    {
      url:"/license/patent/bg5.png",
      title:"对甲苯均三唑噻二嗪苯甲酮及合成方法与应用、单晶培养",
      desc:"本发明公开了对甲苯均三唑噻二嗪苯甲酮及合成方法与应用、以及其单晶培养，第一步由3‑对甲苯基‑4‑氨基‑5‑巯基‑4H‑1,2,4‑三唑与苯甲醛反应制得其席夫碱，第二步由该席夫碱与α‑溴代苯乙酮反应，TLC跟踪，直至反应结束，得到对甲苯均三唑噻二嗪苯甲酮化合物..."
    },
    {
      url:"/license/patent/bg6.png",
      title:"仿生苍耳型抗菌抗病毒植物纤维的制备方法和应用",
      desc:"本发明属于抗菌抗病毒纤维材料制备技术领域，公开了一种仿生苍耳型抗菌抗病毒植物纤维的制备方法，通过机械打浆方法使植物纤维表面细纤维化，制备苍耳型植物纤维，增加了植物纤维的比表面积和孔隙率，从而增加了聚苯胺在植物纤维表面原位氧化生成量；再..."
    },
  ]
  return (
    <div className="flex">
      <div className="flex-grow">
        {arr?.map((item) => {
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
        <div className="flex w-300px justify-between mt-6 ml-20">
          <SortButton text={"发布时间排序"}></SortButton>
          <SortButton text={"价格排序"}></SortButton>
        </div>
        <div className="mt-10">
          {data?.map((item) => {
            return (
              <Card
                data={item}
                onClick={() => router.push("/patentDetail?id=123")}
                className={"mb-6"}
              ></Card>
            );
          })}
        </div>
        <div className="mb-4">
          {/* <PaginationPlus></PaginationPlus> */}
        </div>
      </div>
    </div>
  );
}
