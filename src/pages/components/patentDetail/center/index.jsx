import TabsPlus from "../../common/TabsPlus";
export default function Center() {
  const tabs = [
    {
      label: "专利详情",
      content: (
        <div>
          <div className="mb-22px">
            <div
              className="font-bold text-lg pt-12px pb-12px pl-10px"
              style={{ color: "#3C76F3", background: "#ECF4FF" }}
            >
              许可方式
            </div>
            <div
              className="pl-10px font-medium text-lg "
              style={{ color: "#565656" }}
            >
              <p className="py-4">开放许可期限界满日：2024-12-01</p>
              <p>支付方式：免费</p>
            </div>
          </div>
          <div className="mb-22px ">
            <div
              className="font-bold text-lg pt-12px pb-12px pl-10px"
              style={{ color: "#3C76F3", background: "#ECF4FF" }}
            >
              许可方式
            </div>
            <div
              className="mt-2 pl-10px font-medium text-lg grid grid-cols-2"
              style={{ color: "#565656" }}
            >
              <p className="py-2">申请号：CN201810698291.4</p>
              <p className="py-2">公布号：CN108938619B</p>
              <p className="py-2">申请日：2018-06-29</p>
              <p className="py-2">公布日：2019-03-19</p>
              <p className="py-2">申请人：莆田学院</p>
              <p className="py-2">专利权人：莆田学院</p>
            </div>
          </div>
          <div className="mb-22px">
            <div
              className="font-bold text-lg pt-12px pb-12px pl-10px"
              style={{ color: "#3C76F3", background: "#ECF4FF" }}
            >
              专利介绍
            </div>
            <div
              className="pl-10px font-medium text-lg "
              style={{ color: "#565656" }}
            >
              <p className="py-4">
                本发明提供了7‑(2,4‑二氟苯基)‑1,3‑二羟基氧杂蒽酮具有新的抗肿瘤活性，因此在制备抗肿瘤药物方面有新的应用，特别是肝癌、肺癌(紫杉醇耐药)和乳腺癌以及广谱抗癌药物方面的应用。
              </p>
              <p>
                数据来源：海峡股权交易中心（https://zscq.hxee.com.cn/html/zlkfxkzq/69899925673003324760.shtml）
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-4 bg-white">
      <TabsPlus activeTab={0} tabs={tabs}></TabsPlus>
    </div>
  );
}
