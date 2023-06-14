import Card from "./components/hightValue/card";

export default function HightValuePage() {
  return (
    <>
      <img
        className="w-full"
        src="/hightValue/Group 443.png"
        alt=""
        srcset=""
      />
      <div className="container mx-auto py-4">
        <Card
          data={{
            url: "/license/patent/bg4.png",
            title: "多能源多电机液压挖掘机电液混合驱动系统及控制方法",
            desc: "本发明公开一种多能源多电机液压挖掘机电液混合驱动系统及控制方法。该系统包括动力电池、超级电容、能量管理单元、动力电机、电机控制器、先导操作手柄、液压蓄能器、油箱、液压泵/马达、多个电磁换向阀、多个压力传感器、溢流阀、开中心六通比例方向...",
          }}
        ></Card>
      </div>
    </>
  );
}
