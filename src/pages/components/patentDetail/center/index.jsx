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
              专利信息
            </div>
            <div
              className="mt-2 pl-10px font-medium text-lg grid grid-cols-2"
              style={{ color: "#565656" }}
            >
              <p className="py-2">申请号：CN201810698291.4</p>
              <p className="py-2">公布号：CN1973778A</p>
              <p className="py-2">申请日：2006.06.06</p>
              <p className="py-2">公布日：2007.06.06</p>
              <p className="py-2">专利类型：发明专利</p>
              <p className="py-2">专利状态：有效</p>
              <p className="py-2">申请人：南京大学</p>
              <p className="py-2">专利权人：南京大学</p>
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
              <p className="py-4 text-lg leading-7">
                本发明提供了一种客观、量化、精确度高的胃癌术后严重并发症风险度的预测方法。该方法包括以下步骤：(1)通过全面的单因素分析，筛选出对胃癌术后严重并发症有影响的若干因素，(2)通过二值多元非条件逻辑回归分析确定真正影响预后的决定因素，(3)通过受试者工作特征曲线分析，确定最佳的预测值分界值，(4)建立以主要危险因素为自变量的预测模型，通过预测概率来判断病人术后发生严重并发症的风险度。本发明是一种高精确度、全面客观、易操作、智能化的风险评估系统。
              </p>
              {/* <p>
                数据来源：海峡股权交易中心（https://zscq.hxee.com.cn/html/zlkfxkzq/69899925673003324760.shtml）
              </p> */}
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
