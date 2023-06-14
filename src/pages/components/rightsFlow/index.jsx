import { useState } from "react";
import BreadcrumbPlus from "../common/BreadcrumbPlus";
import SideBar from "../common/SideBar";
import Table from "../common/Table";

export default function RightsFlow() {
  const [component, setComponent] = useState(null);
  const sideBarList = [
    {
      label: "维权流程",
      children: [
        {
          label: "维权援助流程",
          component: <img className="mx-auto" src="/rightFlow/weiquan@2x.png"></img>,
        },
        {
          label: "人民调解流程",
          component: <img className="mx-auto" src="/rightFlow/zhuanli@2x.png"></img>,
        },
        // { label: "仲裁调解流程" },
        // { label: "专利侵权纠纷提交材料" },
      ],
      open: true,
    },
    {
      label: "全球维权援助网络",
      children: [
        {
          label: "知识产权保护中心",
          component: (
            <div className="">
              <Table
                data={{
                  headers: [
                    "序号",
                    "中心名称",
                    "领域",
                    "所在地(详细地址)",
                    "联系电话",
                    "微信公众号",
                  ],
                  rows: [
                    [
                      "序号",
                      "中心名称",
                      "领域",
                      "所在地(详细地址)",
                      "联系电话",
                      "微信公众号",
                    ],
                    [
                      "1",
                      "中国（常州）知识产权保护中心",
                      "机器人及智能硬件",
                      "江苏省常州市武进区科教城创研港3号楼D座1楼",
                      "0519-88010807",
                      "常州科教城之窗",
                    ],
                    [
                      "2",
                      "中国（烟台）知识产权保护中心",
                      "现代食品和化工产业",
                      "山东省烟台市莱山区山海路117号内1号烟台总部经济基地",
                      "0535-6722556",
                      "烟台市知识产权保护中心",
                    ],
                    [
                      "3",
                      "中国（长沙）知识产权保护中心",
                      "智能制造装备",
                      "湖南省长沙市岳麓区咸嘉湖西路麓谷企业广场B8栋广电计量大厦6楼",
                      "0731-82275658",
                      "长沙知识产权保护中心",
                    ],
                    [
                      "4",
                      "中国（浦东）知识产权保护中心",
                      "高端装备制造，生物医药，新一代信息技术",
                      "上海市浦东新区丹桂路999号4号楼",
                      "15921298981",
                      "-",
                    ],
                    [
                      "5",
                      "中国（广东）知识产权保护中心",
                      "新一代信息技术和生物",
                      "广东省广州市先烈中路100号大院60栋9-12楼",
                      "15914223297",
                      "GDIPPC",
                    ],
                    [
                      "6",
                      "中国（佛山）知识产权保护中心",
                      "智能制造装备和建材",
                      "广东省佛山市禅城区季华西路131号绿岛湖都市产业区B4栋1、6楼",
                      "0757-82961260",
                      "中国佛山知识产权保护中心",
                    ],
                    [
                      "7",
                      "中国（四川）知识产权保护中心",
                      "新一代信息技术和装备制造",
                      "四川省成都市高新区天府五街200号菁蓉汇7号楼8层",
                      "028-62075078",
                      "中国四川知识产权保护中心",
                    ],
                    [
                      "8",
                      "中国（南京）知识产权保护中心",
                      "新一代信息技术和生物制药",
                      "南京市浦口区团结路98号扬子科创中心B座18楼",
                      "025-58188227",
                      "南京知识产权保护中心",
                    ],
                    [
                      "9",
                      "中国（北京）知识产权保护中心",
                      "新一代信息技术和高端装备制造",
                      "北京市海淀区北四环西路66号中国技术交易大厦2层",
                      "预审咨询：010-62544288-853，维权咨询：010-62544288-860",
                      "中国北京知识产权保护中心",
                    ],
                    [
                      "10",
                      "中国（中关村）知识产权保护中心",
                      "新材料和生物医药",
                      "北京市海淀区成府路45号中关村智造大街A座",
                      "010-83454118",
                      "中关村知识产权保护中心",
                    ],
                    [
                      "11",
                      "中国（东营）知识产权保护中心",
                      "石油开采及加工和橡胶轮胎",
                      "山东省东营市东营区南一路337号财金大厦",
                      "18554661055",
                      "东营市知识产权保护中心",
                    ],
                    [
                      "12",
                      "中国（宁波）知识产权保护中心",
                      "汽车及零部件制造",
                      "浙江省宁波市高新区研发园扬帆路999弄B区3号6楼",
                      "0574-87978973",
                      "中国宁波知识产权保护中心",
                    ],
                    [
                      "13",
                      "中国（南昌）知识产权保护中心",
                      "中医药和电子信息",
                      "江西省南昌市湾里区梅岭大道招贤大楼",
                      "0791-82228883",
                      "中国南昌知识产权保护中心",
                    ],
                    [
                      "14",
                      "中国（潍坊）知识产权保护中心",
                      "光电，机械装备，化工，生物医药",
                      "山东省潍坊市寒亭区北海路与泰祥街交汇处总部基地东区5号楼七、八层",
                      "0536-7907662 18553623143",
                      "wfippc",
                    ],
                    [
                      "15",
                      "中国（沈阳）知识产权保护中心",
                      "高端装备制造",
                      "沈阳市和平区三好街96号同方广场B座24层",
                      "23897712",
                      "中国沈阳知识产权保护中心",
                    ],
                    [
                      "16",
                      "中国（浙江）知识产权保护中心",
                      "新一代信息技术和新能源",
                      "浙江省杭州市西湖区文二路218号",
                      "0571-56788315",
                      "zjippc",
                    ],
                    [
                      "17",
                      "中国（武汉）知识产权保护中心",
                      "光电子信息",
                      "湖北省武汉市江汉区发展大道164号武汉科技大厦12楼",
                      "027-65692113",
                      "武汉知识产权保护中心",
                    ],
                    [
                      "18",
                      "中国（西安）知识产权保护中心",
                      "高端装备制造",
                      "西安市凤城八路西北国金中心B座23层",
                      "快速维权：029-89296280 办公室：029-86218501",
                      "西安市知识产权保护中心",
                    ],
                    [
                      "19",
                      "中国（深圳）知识产权保护中心",
                      "新能源和互联网",
                      "深圳市南山区前海深港合作区桂湾四路前海深港基金小镇33栋中国（深圳）知识产权保护中心,代办处地址:深圳市南山区学府路软件产业基地4栋C座6楼",
                      "0755-86268610",
                      "SZMQS_CN",
                    ],
                    [
                      "20",
                      "中国（新乡）知识产权保护中心",
                      "起重设备和电池",
                      "新乡市新飞大道南段高新区火炬园",
                      "0373－12330",
                      "新乡知识产权保护中心",
                    ],
                    [
                      "21",
                      "中国（滨海新区）知识产权保护中心",
                      "高端装备制造和生物医药",
                      "天津市滨海新区洞庭北路与忻州道交口融汇商务园六区1号楼",
                      "022-66387907",
                      "天津市滨海新区知识产权保护中心",
                    ],
                    [
                      "22",
                      "中国（苏州）知识产权保护中心",
                      "新材料和生物制品制造",
                      "江苏省苏州市工业园区金鸡湖大道1355号国际科技园3期8楼",
                      "0512-88182714",
                      "苏州市知识产权保护中心",
                    ],
                    [
                      "23",
                      "中国（济南）知识产权保护中心",
                      "高端装备制造和生物医药",
                      "济南市历下区龙鼎大道龙奥大厦F区8层",
                      "12330-2",
                      "-",
                    ],
                    [
                      "24",
                      "中国（山东）知识产权保护中心",
                      "新一代信息技术和海洋科技",
                      "济南市历下区经十东路157号山东知识产权事业发展中心大楼504房间",
                      "12315",
                      "-",
                    ],
                    [
                      "25",
                      "中国（河北）知识产权保护中心",
                      "节能环保和高端装备制造",
                      "石家庄市体育南大街316号",
                      "0311-12330",
                      "河北12330",
                    ],
                    [
                      "26",
                      "中国（黑龙江）知识产权保护中心",
                      "装备制造和生物",
                      "哈尔滨市松北区创新三路600号科技大厦",
                      "12330\n        (2019年已被12315合并）",
                      "-",
                    ],
                    [
                      "27",
                      "中国（汕头）知识产权保护中心",
                      "化工产业和机械装备制造",
                      "汕头市金平区海滨路12号科技馆16楼",
                      "12345",
                      "-",
                    ],
                    [
                      "28",
                      "中国（珠海）知识产权保护中心",
                      "高端装备制造和家电电气",
                      "珠海市香洲区人民东路125号工商大厦14楼",
                      "0756-2622097",
                      "-",
                    ],
                    [
                      "29",
                      "中国（南通）知识产权保护中心",
                      "智能制造装备和现代纺织",
                      "南通市崇川区崇川路106号1106室",
                      "12315",
                      "-",
                    ],
                    [
                      "30",
                      "中国（徐州）知识产权保护中心",
                      "智能制造",
                      "徐州市经开区政务服务中心五楼",
                      "13852047735\n        0516-69850592",
                      "-",
                    ],
                    [
                      "31",
                      "中国（泉州）知识产权保护中心",
                      "智能制造和半导体",
                      "泉州市丰泽区东海行政中心B栋363室",
                      "0595-12345",
                      "-",
                    ],
                    [
                      "32",
                      "中国（广州）知识产权保护中心",
                      "高端装备制造和新材料产业",
                      "广州市天河区天河北路892号12楼",
                      "020-38217376",
                      "广州知识产权保护",
                    ],
                    [
                      "33",
                      "中国（克拉玛依）知识产权保护中心",
                      "石油开采加工和新材料产业",
                      "新疆克拉玛依市银河路51号",
                      "19909909119",
                      "-",
                    ],
                    [
                      "34",
                      "中国（合肥）知识产权保护中心",
                      "新一代信息技术和高端装备制造产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "35",
                      "中国（山西）知识产权保护中心",
                      "新能源和现代装备制造产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "36",
                      "中国（甘肃）知识产权保护中心",
                      "先进制造和节能环保产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "37",
                      "中国（昆明）知识产权保护中心",
                      "生物制品制造和智能制造装备产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "38",
                      "中国（天津）知识产权保护中心",
                      "新一代信息技术和新材料产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "39",
                      "中国（杭州）知识产权保护中心",
                      "高端装备制造产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "40",
                      "中国（宁德）知识产权保护中心",
                      "锂电新能源产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "41",
                      "中国（福建）知识产权保护中心",
                      "机械装备和电子信息产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "42",
                      "中国（内蒙古）知识产权保护中心",
                      "生物和新材料产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "43",
                      "中国（辽宁）知识产权保护中心",
                      "新材料和新一代信息技术产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "44",
                      "中国（吉林）知识产权保护中心",
                      "高端装备制造和生物医药产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "45",
                      "中国（长春）知识产权保护中心",
                      "新一代信息技术和现代化农业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "46",
                      "中国（江苏）知识产权保护中心",
                      "高端装备产业、新兴功能和结构材料",
                      "",
                      "",
                      "",
                    ],
                    [
                      "47",
                      "中国（无锡）知识产权保护中心",
                      "物联网和智能制造",
                      "",
                      "",
                      "",
                    ],
                    [
                      "48",
                      "中国（赣州）知识产权保护中心",
                      "新型功能材料和装备制造",
                      "",
                      "",
                      "",
                    ],
                    [
                      "49",
                      "中国（淄博）知识产权保护中心",
                      "面向新材料产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "50",
                      "中国（德州）知识产权保护中心",
                      "新材料和生物医药产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "51",
                      "中国（三亚）知识产权保护中心",
                      "海洋和现代化农业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "52",
                      "中国（成都）知识产权保护中心",
                      "生物和新材料产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "53",
                      "中国（上海）知识产权保护中心",
                      "新材料和节能环保产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "54",
                      "中国（贵阳）知识产权保护中心",
                      "新一代信息技术和高端装备制造产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "55",
                      "中国（大连）知识产权保护中心",
                      "新能源和高端装备制造产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "56",
                      "中国（泰州）知识产权保护中心",
                      "先进装备制造和医药产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "57",
                      "中国（洛阳）知识产权保护中心",
                      "先进装备制造和新材料产业",
                      "",
                      "",
                      "",
                    ],
                    [
                      "58",
                      "中国（安徽）知识产权保护中心",
                      "新材料和节能环保产业",
                      "",
                      "",
                      "",
                    ],
                  ],
                  rowSpan: [],
                  colSpan: [],
                }}
              ></Table>
            </div>
          ),
        },
        {
          label: "知识产权快速维权中心",
          component: (
            <Table
              data={{
                headers: [
                  "序号",
                  "中心名称",
                  "所在地(详细地址)",
                  "联系电话",
                  "微信公众号",
                ],
                rows: [
                  [
                    "1",
                    "中国中山（灯饰）知识产权快速维权中心；中国（中山）知识产权维权援助中心",
                    "广东省中山市古镇镇中兴大道侧灯饰大厦A座三楼",
                    "0760-22383925",
                    "-",
                  ],
                  [
                    "2",
                    "中国南通（家纺）知识产权快速维权中心",
                    "江苏省南通市通州区川姜镇五洲路川姜镇人民政府4楼",
                    "0513-80160636",
                    "-",
                  ],
                  [
                    "3",
                    "中国北京朝阳（设计服务业）知识产权快速维权中心",
                    "北京市朝阳区三丰北里7号悠唐国际B座1906",
                    "010-85630093，010-85630081",
                    "朝阳知识产权",
                  ],
                  [
                    "4",
                    "中国杭州（制笔）知识产权快速维权援助中心",
                    "浙江省杭州市桐庐县城南街道迎春南路28号海陆世贸中心1区2号",
                    "57164258560",
                    "tlkswqyzzx12330",
                  ],
                  [
                    "5",
                    "中国东莞（家具）知识产权快速维权援助中心",
                    "广东省东莞市厚街镇厚街大道90号创新大厦1楼",
                    "76988631188",
                    "中国东莞家具知识产权援助中心",
                  ],
                  [
                    "6",
                    "中国顺德（家电）知识产权快速维权中心",
                    "广东省佛山市顺德区容桂朝桂南路顺德科技创新中心4座11楼F07",
                    "0757-66854030",
                    "Jdkwzx",
                  ],
                  [
                    "7",
                    "中国广州花都（皮革皮具）知识产权快速维权中心",
                    "广东省广州市花都区狮岭镇阳光南路6号",
                    "020-36978585",
                    "花都市场监督（快维中心）",
                  ],
                  [
                    "8",
                    "中国景德镇（陶瓷）知识产权快速维权中心",
                    "江西省景德镇市昌江区龙井路1号",
                    "0798-2182709",
                    "景德镇陶瓷知识产权快速维权中心",
                  ],
                  [
                    "9",
                    "中国镇江丹阳（眼镜）知识产权快速维权中心",
                    "镇江市丹阳市云阳高新区科创园A4楼",
                    "0511-86560018",
                    "-",
                  ],
                  [
                    "10",
                    "中国阳江（五金刀剪）知识产权快速维权中心",
                    "广东省阳江市江城区农科路22号",
                    "0662-8155255",
                    "市场监管局网站",
                  ],
                  [
                    "11",
                    "中国厦门（厨卫）知识产权快速维权中心",
                    "厦门市象屿路89号国际航运中心c区5层",
                    "0592-5685573",
                    "-",
                  ],
                  [
                    "12",
                    "中国温州（服饰）知识产权快速维权中心",
                    "浙江省温州市府东路717号温州知识产权服务园一楼",
                    "0577-88122107",
                    "zgwz12330",
                  ],
                  [
                    "13",
                    "中国郑州（创意产业）知识产权快速维权中心",
                    "河南省郑州市金水区国基路60号国家知识产权创意产业试点园区A座七楼",
                    "0371-56577087",
                    "-",
                  ],
                  [
                    "14",
                    "重庆（汽车摩托车）知识产权快速维权中心",
                    "重庆市渝北区黄山大道中段55号附2号",
                    "023-63560020",
                    "重庆汽摩知识产权快维中心",
                  ],
                  [
                    "15",
                    "中国汕头（玩具）知识产权快速维权中心",
                    "广东省汕头市澄海区宝奥城A栋9楼",
                    "0754-81850276",
                    "汕头玩具快维中心",
                  ],
                  [
                    "16",
                    "中国成都（家居鞋业）知识产权快速维权中心",
                    "成都市新都区新繁镇家具园区繁川家具大道南段245号",
                    "028-83049083",
                    "-",
                  ],
                  [
                    "17",
                    "中国潮州（餐具炊具）知识产权快速维权中心",
                    "广东省潮州市枫溪区安丰东路23号陶研所大院内",
                    "0768-3261330",
                    "潮州餐具炊具知识产权快速维权中心",
                  ],
                  [
                    "18",
                    "中国义乌（小商品）知识产权快速维权中心",
                    "浙江省义乌市福田街道银海路399号义乌国际贸易服务中心二楼",
                    "0579-85531980",
                    "义乌市场监管",
                  ],
                  [
                    "19",
                    "中国武汉（汽车及零部件）知识产权快速维权中心",
                    "武汉市武汉经济技术开发区南太子湖路创谷二期启迪协信科创园人才楼",
                    "027 84490005",
                    "-",
                  ],
                  [
                    "20",
                    "中国宁津（健身器材和家具）知识产权快速维权中心",
                    "山东省德州市宁津县黄河大街开运社区三号商业楼55号",
                    "0534-5531919、0534-5356919",
                    "宁津快维中心",
                  ],
                  [
                    "21",
                    "中国绍兴柯桥（纺织）知识产权快速维权",
                    "浙江省绍兴市柯桥",
                    "",
                    "",
                  ],
                  [
                    "22",
                    "中国晋江（鞋服和食品）知识产权快速维权中心",
                    "福建省泉州市晋江市",
                    "",
                    "",
                  ],
                  [
                    "23",
                    "中国霸州（家具）知识产权快速维权中心",
                    "河北省廊坊市",
                    "",
                    "",
                  ],
                  [
                    "24",
                    "中国安吉（绿色家居）知识产权快速维权中心",
                    "",
                    "",
                    "",
                  ],
                  [
                    "25",
                    "中国桐乡（现代服饰）知识产权快速维权中心",
                    "",
                    "",
                    "",
                  ],
                  [
                    "26",
                    "中国海宁（纺织服装与家居）知识产权快速维权中心",
                    "",
                    "",
                    "",
                  ],
                  [
                    "27",
                    "中国云和（木制玩具）知识产权快速维权中心",
                    "",
                    "",
                    "",
                  ],
                  [
                    "28",
                    "中国曹县（演出服装和林产品）知识产权快速维权中心",
                    "",
                    "",
                    "",
                  ],
                  [
                    "29",
                    "中国漯河经济技术开发区（食品）知识产权快速维权中心",
                    "",
                    "",
                    "",
                  ],
                  ["30", "中国禹州（钧瓷）知识产权快速维权中心", "", "", ""],
                ],
              }}
            ></Table>
          ),
        },
        { label: "知识产权维权援助中心",component:(
          <Table data={{
            headers:[ '序号', '中心名称', '所在地(详细地址)', '联系电话', '微信公众号' ],
            rows:[  [
              '1',
              '中国（北京）知识产权维权援助中心',
              '北京市海淀区知春路23号量子银座大厦3层',
              '010-12330',
              '北京知识产权维权援助'
            ],
            [
              '2',
              '中国（上海）知识产权维权援助中心',
              '徐汇区漕宝路650号东幢2楼',
              '021-12330',
              '上海知识产权服务'
            ],
            [ '3', '天津市知识产权保护中心', '华苑产业园区华天道6号海泰信息广场G座1楼', '12330', '-' ],
            [ '4', '中国（重庆）知识产权维权援助中心', '江北区五简路9号2110', '无', '-' ],
            [ '5', '中国（安徽）知识产权维权援助中心', '合肥市延安路13号', '12315', '-' ],
            [
              '6',
              '中国（福建）知识产权维权援助中心',
              '福州市鼓楼区湖东路7号',
              '0591-88612330',
              'zcfujian；FJIPCC'
            ],
            [ '7', '中国（甘肃）知识产权维权援助中心', '兰州市雁滩高新区联创广场B座4楼', '(0931)12315', '-' ],
            [
              '8',
              '中国（广东）知识产权维权援助中心',
              '广州市开发区科学城科学大道182号创新大厦C3区207',
              '12330',
              'GDIPPC'
            ],
            [ '9', '中国（广西）知识产权维权援助中心', '南宁市青秀区云景路32号14楼', '广西地市区号+12315', '-' ],
            [ '10', '中国（贵州）知识产权维权援助中心', '贵阳市南明区醒狮路36号', '12315', '-' ],
            [
              '11',
              '中国（河北）知识产权维权援助中心',
              '石家庄市体育南大街316号',
              '0311-12330',
              '河北12330'
            ],
            [ '12', '中国（河南）知识产权维权援助中心', '郑州市金水区花园路21号', '12315', '-' ],
            [
              '13',
              '中国（黑龙江）知识产权维权援助中心',
              '哈尔滨市松北区创新三路600号科技大厦',
              '12330(2019年已被12315合并）',
              '-'
            ],
            [
              '14',
              '中国（湖北）知识产权维权援助中心',
              '武汉市洪山区广八路8号',
              '027-12315-5',
              '湖北省知识产权局'
            ],
            [ '15', '中国（湖南）知识产权维权援助中心', '长沙市岳麓区潇湘中路113号', '12315', '-' ],
            [
              '16',
              '中国（吉林）知识产权维权援助中心',
              '长春市东南湖大路1088号',
              '0431-12315',
              '吉林省专利信息服务中心'
            ],
            [ '17', '中国（济南）知识产权维权援助中心', '济南市历下区龙鼎大道龙奥大厦F区8层', '12330-2', '-' ],
            [
              '18',
              '中国（济宁）知识产权维权援助中心',
              '济宁市太白湖新区省运会指挥中心市知识产权事业发展中心',
              '12330、12345',
              '-'
            ],
            [
              '19',
              '中国（江苏）知识产权维权援助中心',
              '南京市建邺区汉中门大街145号江苏省政务服务中心二期六楼',
              '025-12330',
              '江苏省专利信息服务中心'
            ],
            [ '20', '全国知识产权维权援助中心江西中心', '南昌市', '12315', '-' ],
            [
              '21',
              '中国（辽宁）知识产权维权援助中心',
              '沈阳市和平区十纬路16号（辽宁省知识产权局）',
              '024-12330-1',
              '-'
            ],
            [
              '22',
              '中国（内蒙古）知识产权维权援助中心',
              '呼和浩特赛罕区昭乌达路山丹街2号科技大厦1012室',
              '0471-12330',
              '-'
            ],
            [
              '23',
              '中国（宁夏）知识产权维权援助中心',
              '银川市金凤区北京中路106号市场监管厅204室',
              '0951-12330',
              '-'
            ],
            [
              '24',
              '中国（山东）知识产权维权援助中心',
              '济南市历下区经十东路157号山东知识产权事业发展中心大楼504房间',
              '12315',
              '-'
            ],
            [
              '25',
              '中国（山西）知识产权维权援助中心',
              '太原市杏花岭区府西街29号',
              '12315',
              '山西省知识产权技术服务中心'
            ],
            [
              '26',
              '中国（陕西）知识产权维权援助中心',
              '西安市碑林区南二环西段69号1楼102室',
              '12315-3',
              '陕西省知识产权服务中心'
            ],
            [
              '27',
              '中国（深圳）知识产权维权援助中心',
              '深圳市前海桂湾四路深港基金小镇33栋',
              '12345',
              '中国知识产权保护中心'
            ],
            [
              '28',
              '中国（四川）知识产权维权援助中心',
              '成都市天府五街200号菁蓉汇7号楼8楼',
              '0571-81134005',
              '-'
            ],
            [
              '29',
              '中国（新疆）知识产权维权援助中心',
              '乌鲁木齐市经济技术开发区头屯河区喀纳斯尖湖北路455号G16楼',
              '12315',
              '-'
            ],
            [ '30', '中国（云南）知识产权维权援助中心', '昆明市日新东路376号', '12315', '-' ],
            [
              '31',
              '中国（浙江）知识产权维权援助中心',
              '杭州市滨江区丹枫路399号知识产权大厦',
              '0571-12330-1',
              '知产者们'
            ],
            [ '32', '鞍山市市场监管事务服务中心', '鞍山市铁东区常青街18号', '12345', '-' ],
            [ '33', '中国（本溪）知识产权维权援助与举报投诉中心', '本溪市明山区东明路4号', '0414-12330', '' ],
            [
              '34',
              '中国（常州）知识产权维权援助中心',
              '常州市常武中路18号 科教城天润科技大厦C座5层',
              '12315',
              '-'
            ],
            [ '35', '中国（成都）知识产权维权援助中心', '成都市武侯区致民东路6号副楼6楼', '028-86692312', '-' ],
            [ '36', '中国（大连）知识产权维权援助中心', '大连市沙河口区中山路572号1108', '12345', '-' ],
            [ '37', '中国（德阳）知识产权维权援助中心', '德阳市天山南路三段138号', '0838-12330', '-' ],
            [
              '38',
              '中国（东莞）知识产权维权援助中心',
              '东莞市南城街道东莞大道南城段112号',
              '0769-12345/12315/12330',
              'dg12330'
            ],
            [
              '39',
              '中国（东营）知识产权维权援助中心',
              '东营市东营区南一路337号财金大厦16楼',
              '5468339776',
              '-'
            ],
            [
              '40',
              '中国（佛山）知识产权维权援助中心',
              '佛山市禅城区季华西路131号绿岛湖都市产业区B4栋6楼',
              '75712330',
              '中国佛山知识产权保护中心'
            ],
            [
              '41',
              '中国(哈尔滨)知识产权维权援助中心',
              '哈尔滨市道里区新阳路259号一楼',
              '0451-12330',
              'hrb12330'
            ],
            [
              '42',
              '中国（海口）知识产权维权援助中心',
              '海口市秀英区长滨一路市政府办公区18栋北5019',
              '0898-12330',
              '-'
            ],
            [ '43', '中国（杭州）知识产权维权援助中心', '杭州市江干区凤起东路109号', '12345', '-' ],
            [
              '44',
              '中国（洛阳）知识产权维权援助中心',
              '洛阳市西工区解放路13号洛阳市市场监管局北院办公楼14层',
              '0379-12315',
              '-'
            ],
            [ '45', '中国（南昌）市知识产权维权援助中心', '南昌市红谷滩区丽景路666号', '0791-12330', '-' ],
            [
              '46',
              '南通市知识产权保护中心（南通市知识产权维权援助中心）',
              '南通市崇川区崇川路106号1106室',
              '12315',
              '-'
            ],
            [ '47', '中国（南阳）知识产权维权援助中心', '南阳市宛城区范蠡东路699号', '0377-12330', '-' ],
            [
              '48',
              '中国（宁波）知识产权保护中心（中国（宁波）知识产权维权援助中心）',
              '宁波市高新区扬帆路999弄B3号楼6楼',
              '0574-12330',
              'nbippc'
            ],
            [
              '49',
              '中国（平顶山）知识产权维权援助中心',
              '平顶山市建设路东段912号（市科学技术局院内）',
              '0375-12315',
              '-'
            ],
            [
              '50',
              '中国（青岛）知识产权维权援助中心',
              '青岛市崂山区银川东路9号崂山湾大厦14层',
              '12345',
              '青岛市知识产权公共服务平台'
            ],
            [ '51', '中国（泉州）知识产权维权援助中心', '泉州市丰泽区东海行政中心B栋363室', '0595-12345', '-' ],
            [ '52', '中国（三明）知识产权维权援助中心', '三明市', '0598-12330', '-' ],
            [ '53', '中国（厦门）知识产权维权援助中心', '厦门市湖滨南路43号', '12315', '厦门知识产权' ],
            [ '54', '中国（汕头）知识产权维权援助中心', '汕头市金平区海滨路12号科技馆16楼', '12345', '-' ],
            [
              '55',
              '中国（沈阳）知识产权维权援助中心',
              '沈阳市三好街96号同方广场B座24层',
              '024-12315',
              '中国沈阳知识产权保护中心'
            ],
            [
              '56',
              '中国（苏州）知识产权维权援助中心',
              '苏州市工业园区金鸡湖大道1355号国际科技园3期8楼',
              '0512-12330',
              '苏州市知识产权保护中心'
            ],
            [ '57', '中国（泰安）知识产权维权援助中心', '泰安市泰山区东岳大街439号', '12315', '-' ],
            [ '58', '中国（泰州）知识产权维权援助中心', '泰州市海陵南路315号', '12315', '-' ],
            [ '59', '中国（潍坊）知识产权维权援助中心', '潍坊市高新区卧龙东街2129号', '12345', '潍坊市场监管' ],
            [
              '60',
              '中国（温州）知识产权维权援助中心',
              '温州市鹿城区府东路717号温州市知识产权服务园101室',
              '12345',
              '-'
            ],
            [ '61', '中国（无锡）知识产权维权援助中心', '无锡市梁溪区永和路28号14楼', '12315', '-' ],
            [
              '62',
              '中国（武汉）知识产权维权援助中心',
              '武汉市发展大道164号武汉科技大厦12楼',
              '027-12330-2',
              '武汉知识产权保护中心'
            ],
            [ '63', '中国（湘潭）知识产权维权援助中心', '湘潭市宝塔中路13号湘潭市市场监督管理局院内', '12315', '-' ],
            [
              '64',
              '中国（襄阳）知识产权维权援助中心',
              '襄阳市樊城区追日路2号A座305室',
              '0710-12330',
              '襄阳12330'
            ],
            [
              '65',
              '中国（新乡）知识产权保护中心',
              '新乡市新飞大道南段高新区火炬园',
              '0373－12330',
              '新乡知识产权保护中心'
            ],
            [
              '66',
              '中国（烟台）知识产权保护中心',
              '烟台市莱山区山海南路117号内1号',
              '12345',
              '烟台市知识产权保护中心'
            ],
            [ '67', '中国（盐城）知识产权维权援助中心', '盐城市解放南路138号', '0515—12315', '-' ],
            [ '68', '中国（宜昌）知识产权维权援助中心', '宜昌市发展大道35号', '12330', '-' ],
            [
              '69',
              '中国（枣庄）知识产权维权援助中心',
              '枣庄市新城枣庄市市场监管综合服务中心',
              '63212315',
              '枣庄市场监管服务'
            ],
            [ '70', '中国（长春）知识产权维权援助中心', '长春市景阳大路1199号', '12330', '' ],
            [
              '71',
              '中国（长沙）知识产权维权援助中心',
              '长沙市高新区麓谷企业广场广电计量大厦6楼',
              '0731-82275655',
              '长沙知识产权保护中心'
            ],
            [ '72', '中国（镇江）知识产权维权援助中心', '镇江市南徐大道62-2号商务A区B幢1023室', '12315', '-' ],
            [
              '73',
              '中国（郑州）知识产权维权援助中心',
              '郑州市中原区桐柏南路108号，邮编：450006',
              '0371-12315',
              '-'
            ],
            [
              '74',
              '中国中山（灯饰）知识产权快速维权中心 中国（中山）知识产权维权援助中心',
              '中山市古镇镇中兴大道侧灯饰大厦A座三楼',
              '0760-12330',
              '-'
            ],
            [ '75', '中国（株洲）知识产权维权援助中心', '株洲市黄河北路788号', '12315', '-' ],
            [ '76', '中国（淄博）知识产权维权援助中心', '淄博市张店区华光路96号', '12345', '淄博市场监管' ]]
          }}></Table>
        ) },
      ],
      open: false,
    },
    {
      label: "国家海外知识产权 纠纷应对指导",
      children: [],
      open: false,
      component:(
        <div>
          <img className="w-full" src="/rightFlow/ipweiquan@2x.png" alt="" srcset="" /> 
        </div>
      )
    },
    {
      label: "维权工具",
      children: [],
      open: false,
      component:(
        <div>
          <img className="w-full" src="/rightFlow/flow2.png" alt="" srcset="" />
          <img className="w-full" src="/rightFlow/flow3.png" alt="" srcset="" />
          <div className="flex">
            <img className="flex-grow" src="/rightFlow/flow4.png" alt="" srcset="" />
            <img className="flex-grow" src="/rightFlow/flow5.png" alt="" srcset="" />
          </div>
        </div>
      )
    },
    // {
    //   label: "维权援助相关资料",
    //   children: [],
    //   open: false,
    // },
  ];
  return (
    <div className="container mx-auto">
      <div className="py-3">
        <BreadcrumbPlus
          BreadcrumbList={[{ label: "维权流程", href: "/rightsFlow" }]}
        ></BreadcrumbPlus>
      </div>
      <div className="flex w-full">
        <SideBar sideBar={sideBarList} setComponent={setComponent}></SideBar>
        <div className="ml-2 bg-white w-full px-1 py-2 mb-8">{component}</div>
      </div>
    </div>
  );
}
