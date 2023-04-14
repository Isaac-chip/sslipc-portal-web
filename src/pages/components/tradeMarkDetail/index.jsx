import TitleCard from "./card";
import TabsPlus from "../common/TabsPlus";
import Table from "../common/Table";
import Card from "../common/TradeMarkCard";
export default function TradeMarkDetail() {
  const tabs = [
    {
      tab: [
        {
          label: "商标详情",
          content: (
            <Table
              data={{
                rows: [
                  ["商标名称", "鼎牧臣", "商标注册号", "1D7BE46D18"], // 第一行
                  [
                    "初审公告期号",
                    "1725",
                    "初审公告日期",
                    "2020-12-27 00:00:00",
                  ],
                  ["注册公告期号", "1737", "注册公告日期", "/"],
                  [
                    "专用期限",
                    "2021-03-28 00:00:00至2031-03-27 00:00:00",
                    "是否共用商标",
                    "否",
                  ],
                  [
                    "使用范围",
                    "家具,床,沙发,衣柜,塑料线卡,画框,坚果壳制工艺品,非金属标示牌,家具用非金属脚轮,野营床垫",
                  ],
                ],
                rowSpan: [
                  // 可选。指定行合并的跨度
                  [],
                  [],
                  [],
                  // ...
                ],
                colSpan: [[], [], [], [], [null, 3]],
              }}
            ></Table>
          ),
        },
      ],
    },
    {
      tab: [
        {
          label: "过户资料",
          content: (
            <Table
              data={{
                headers: [
                  "买卖双方",
                  "公司类型",
                  "个人类型",
                  "平台提供资料",
                  "过户后可获得",
                ], // 表头
                rows: [
                  [
                    "买家",
                    "企业营业执照",
                    "身份证 个体营业执照",
                    "商标代理委托书 转让申请书 转让协议",
                    "商标注册 商标转让公证书 商标转让证明",
                  ], // 第一行
                  ["卖家", "企业营业执照商标注册原件", "身份证个体营业执照"],
                ],
                rowSpan: [
                  // 可选。指定行合并的跨度

                  [null, null, null, 2, 2],
                  [],
                  // ...
                ],
                colSpan: [[], [], [], [2]],
              }}
            ></Table>
          ),
        },
      ],
    },
    {
      tab: [
        {
          label: "常见问题",
          content: (
            <div className="mt-2">
              {[
                {
                  title: "购买商标多久可以拿到证书？",
                  des: "商标交易材料审核完成后会尽快递交商标局，一般6-8个月左右，商标局会下发《核准转让证明》。",
                },
                {
                  title: "购买的商标什么时候可以开始使用？",
                  des: "签订购买协议后，完成商标公证，公证后即可使用商标，一般公证办理需1-2个工作日。",
                },
                {
                  title: "商标购买需要准备哪些资料？",
                  des: "商标交易的购买方如果是个人，需要提供个体工商营业执照以及负责人身份证复印件，如果是企业需要提供公司营业执照及法人身份证复印件，其他资料我们会帮您准备。",
                },
                {
                  title: "还没有商标证可以转让吗？",
                  des: "还没有商标证也可以转让。但是，未取得注册证的商标可能存在被驳回的风险，导致无法顺利取得商标证。转让之后，这个风险就会由商标转让方转移给商标受让方。",
                },
                {
                  title: "商标转让是否一定要提交公证书？",
                  des: "商标局已不强制要求提交转让公证书。但最好是去公证处做商标转让公证，特别是因商标买卖而做的转让公证，公证可以证明转让人的意思表示真实、主体资格合格，有利于保障商标买方的合法权益，增强双方的信任程度。",
                },
              ].map((item, index) => {
                return (
                  <div className="flex mb-6">
                    <div className="flex-shrink-0 w-40px h-40px bg-blue-700 text-16 font-bold text-white rounded-full flex justify-center items-center">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-lg">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-2">{item.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ),
        },
      ],
    },
    {
      tab: [
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
              {new Array(10).fill("").map((item) => {
                return (
                    <div className="w-240px ml-2 mb-2">
                         <Card></Card>
                    </div>
                   
                );
              })}
            </div>
          </div>
          ),
        },
      ],
    },
  ];
  return (
    <>
      <TitleCard></TitleCard>
      {tabs.map((item) => {
        return (
          <div className="bg-white mt-4 ">
            <TabsPlus tabs={item.tab}></TabsPlus>
          </div>
        );
      })}
    </>
  );
}
