import TabsPlus from "../../common/TabsPlus";
import Card from "../card";
export default function Bottom() {
  const tabs = [
    {
      label: "相似推荐",
      content: (
        <div style={{ display: "flex", overflowX: "auto" }}>
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {
                [
                  {
                    url: "/license/patent/bg1.png",
                    title:
                      "7-(2,4-二氟苯基)-1,3-二羟基氧杂蒽酮在制备抗肿瘤药物方面的应用。",
                    desc: "本发明提供了7‑(2,4‑二氟苯基)‑1,3‑二羟基氧杂蒽酮具有新的抗肿瘤活性，因此在制备抗肿瘤药物方面有新的应用，特别是肝癌、肺癌(紫杉醇耐药)和乳腺癌以及广谱抗癌药物方面的应用。本发明提供了7‑(2,4‑二氟苯基)‑1,3‑二羟基氧杂蒽酮具有新的抗肿瘤活性，因此在制备抗肿瘤药物方面有新的应用，特别是肝癌、肺癌(紫杉醇耐药)和乳腺癌以及广谱抗癌药物方面的应用。",
                  },
                  {
                    url: "/license/patent/bg2.png",
                    title: "大型船舶高精度导航与靠泊方法",
                    desc: "本发明公开的大型船舶高精度导航与靠泊方法，包括步骤：一、建立坐标系；二、根据船舶左舷点A、右舷点B以及船首点B1的坐标数据以及极坐标原点O分别计算船舶所在矩形四个顶点的坐标；三、船首和船尾到码头的距离及横移速度计算；四、船首向计算。本发明实...",
                  },
                  {
                    url: "/license/patent/bg3.png",
                    title: "PRRSV ORF5融合基因DNA疫苗及制备方法",
                    desc: "本发明公开了一种PRRSV ORF5融合基因DNA疫苗及制备方法。属于生物技术领域。本发明利用DNA shuffling技术，对4个谱系的PRRSV ORF5基因进行体外突变重组，筛选到两个重组质粒PCA‑ΔORF5‑8和PCA‑ΔORF5‑46，能够更有效的产生中和抗体，为...",
                  },
                  {
                    url: "/license/patent/bg4.png",
                    title: "多能源多电机液压挖掘机电液混合驱动系统及控制方法",
                    desc: "本发明公开一种多能源多电机液压挖掘机电液混合驱动系统及控制方法。该系统包括动力电池、超级电容、能量管理单元、动力电机、电机控制器、先导操作手柄、液压蓄能器、油箱、液压泵/马达、多个电磁换向阀、多个压力传感器、溢流阀、开中心六通比例方向...",
                  },
                ]?.map((item)=>{
                    return (
                        <Card data={item}></Card>
                    )
                })
            }
            
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="mb-100px">
      <TabsPlus activeTab={0} tabs={tabs}></TabsPlus>
    </div>
  );
}
