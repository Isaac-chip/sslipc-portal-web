import { useRouter } from "next/router";

import CopyRightCard from "../common/CopyRightCard";
import TradeMarkCard from "../common/TradeMarkCard";
import PatentDetailCard from "../patentDetail/card";

export default function ProjectArea() {
  const router = useRouter()
  return (
    <>
      <div className="grid grid-cols-5 gap-4 ">
        <img
          className="w-240px h-308px"
          src="/projectArea/zhuanli.png"
          alt=""
          srcset=""
        />
        {[
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
        ]?.map((item) => {
                  
          return  <PatentDetailCard data={item}></PatentDetailCard>;
        })}
      </div>
      <div className="grid grid-cols-5 gap-4 mb-5">
        <img
          className="w-240px h-350px"
          src="/projectArea/shangbiao.png"
          alt=""
          srcset=""
        />
        {[
          {
            url: "/license/tradeMark/11.png",
            title: "鼎牧臣",
            subTitle: "第43类 餐饮住宿",
            desc: "住所代理（旅馆、供膳寄宿处）,养老院,咖啡馆,餐厅,日...",
            price: "12300.00",
            labelFlag: true,
          },
          {
            url: "/license/tradeMark/12.png",
            title: "秦面师",
            subTitle: "第43类 餐饮住宿",
            desc: "住所代理（旅馆、供膳寄宿处）,养老院,咖啡馆,餐厅,旅...",
            price: "98000.00",
            labelFlag: true,
          },
          {
            url: "/license/tradeMark/13.png",
            title: "福茶倌",
            subTitle: "第43类 餐饮住宿",
            desc: "住所代理（旅馆、供膳寄宿处）,养老院,咖啡馆,餐厅,旅...",
            price: "158880.00",
            labelFlag: true,
          },
          {
            url: "/license/tradeMark/14.png",
            title: "酸魔仙",
            subTitle: "第30类 方便食品",
            desc: "蛋糕,茶,调味品,蜂蜜,比萨饼,米,果冻（糖果）,麦乳精,方便面...",
            price: "82800.00",
            labelFlag: false,
          },
        ]?.map((item) => {
          return <TradeMarkCard onClick={()=>router.push("tradeMarkDetail?id=123")} data={item}></TradeMarkCard>;
        })}
      </div>
      <div className="grid grid-cols-5 gap-4 mb-5">
        <img
          className="w-240px h-320px"
          src="/projectArea/shangbviao.png"
          alt=""
          srcset=""
        />
        {[
          {
            url: "/license/copyRight/111.png",
            title: "安妮怎么了",
            desc: "动漫作品",
            price: "14080.00",
          },
          {
            url: "/license/copyRight/112.png",
            title: "宫锁沉香",
            desc: "影视剧集",
            price: "面议",
          },
          {
            url: "/license/copyRight/113.png",
            title: "《宝石山-洞穴里的怪女孩》",
            desc: "艺术创作",
            price: "面议",
          },
          {
            url: "/license/copyRight/114.png",
            title: "心肝宝贝",
            desc: "影视剧集",
            price: "面议",
          },
          
        ].map((item) => {
          return <CopyRightCard onClick={()=>router.push("copyRightDetail?id=123")}  data={item}></CopyRightCard>;
        })}
      </div>
    </>
  );
}
