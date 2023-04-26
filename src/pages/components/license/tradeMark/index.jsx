import { useRouter } from "next/router";

import Card from "../../common/TradeMarkCard";
import PaginationPlus from "../../common/Pagination";
import Options from "../../common/ItemDivider";
import SortButton from "../../common/SortButton";

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
      label: "交易价格：",
      options: [
        { id: 1, title: "免费" },
        { id: 2, title: "5000以下" },
        { id: 3, title: "5000 - 1万" },
        { id: 4, title: "1 - 2万" },
        { id: 4, title: "2 - 5万" },
        { id: 4, title: "5万以上" },
      ],
    },
    {
        label: "商标组合：",
        options: [
          { id: 1, title: "不限" },
          { id: 2, title: "中文" },
          { id: 3, title: "英文(拼音)" },
          { id: 4, title: "中文+英文(拼音)" },
          { id: 4, title: "图形" },
          { id: 4, title: "组合" },
          { id: 4, title: "数字" },
        ],
      },
      {
        label: "发布时间：",
        options: [
          { id: 1, title: "近一个月" },
          { id: 2, title: "近三个月" },
          { id: 3, title: "近一年" },
         
        ],
      },
  ];
  const router = useRouter()
  const data = [
    {
      url:"/license/tradeMark/11.png",
      title:"鼎牧臣",
      subTitle:"第43类 餐饮住宿",
      desc:"住所代理（旅馆、供膳寄宿处）,养老院,咖啡馆,餐厅,日...",
      price:"12300.00",
      labelFlag:true
    },
    {
      url:"/license/tradeMark/12.png",
      title:"秦面师",
      subTitle:"第43类 餐饮住宿",
      desc:"住所代理（旅馆、供膳寄宿处）,养老院,咖啡馆,餐厅,旅...",
      price:"98000.00",
      labelFlag:true
    },
    {
      url:"/license/tradeMark/13.png",
      title:"福茶倌",
      subTitle:"第43类 餐饮住宿",
      desc:"住所代理（旅馆、供膳寄宿处）,养老院,咖啡馆,餐厅,旅...",
      price:"158880.00",
      labelFlag:true
    },
    {
      url:"/license/tradeMark/14.png",
      title:"酸魔仙",
      subTitle:"第30类 方便食品",
      desc:"蛋糕,茶,调味品,蜂蜜,比萨饼,米,果冻（糖果）,麦乳精,方便面...",
      price:"82800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/15.png",
      title:"优舌 SUPERIORTONG...",
      subTitle:"第29类 食品鱼肉",
      desc:"干蔬菜,食用油,肉,加工过的坚果,蛋,虾（非活）,食用燕窝 ...",
      price:"98800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/16.png",
      title:"抵芽 OFFSETBUD",
      subTitle:"第36类 金融物管",
      desc:"不动产管理,不动产经纪,海关金融经纪服务,担保,保险咨询,典...",
      price:"185880.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/17.png",
      title:"米莲巧 MILICHORD",
      subTitle:"第30类 方便食品",
      desc:"丝绸（布料）,布,织物,无纺布,卸妆用布,家庭日用纺 ...",
      price:"56800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/18.png",
      title:"扁叶堂",
      subTitle:"第35类 广告销售",
      desc:"药用、兽医用、卫生用制剂和医疗用品的零售服务,通过网站 ...",
      price:"126800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/19.png",
      title:"燕补时节",
      subTitle:"第30类 方便食品",
      desc:"用作茶叶代用品的花或叶,红糖,冰糖燕窝,米,糖果,茶,调味品 ...",
      price:"108800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/20.png",
      title:"鲸心装",
      subTitle:"第37类 建筑修理",
      desc:"加热设备安装和修理,电梯安装和修理,汽车保养和修理,建筑 ...",
      price:"158080.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/21.png",
      title:"养味官",
      subTitle:"第30类 方便食品",
      desc:"食用淀粉,蜂蜜,面条,糕点,米,用作茶叶代用品的花或叶,红糖,...",
      price:"128800.00",
      labelFlag:true
    },
    {
      url:"/license/tradeMark/22.png",
      title:"太阳伯伯",
      subTitle:"第29类 食品鱼肉",
      desc:"干蔬菜,食用油,肉,加工过的坚果,蛋,虾（非活）,食用燕窝 ...",
      price:"98800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/23.png",
      title:"FONX",
      subTitle:"第03类 化妆日用",
      desc:"指甲油,染发剂,动物用化妆品,化妆品,香,香精油,洗衣用织物柔...",
      price:"38880.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/24.png",
      title:"佗叶堂",
      subTitle:"第30类 方便食品",
      desc:"调味品,食用淀粉,蜂蜜,面条,糕点,米,用作茶叶代用品的花 ...",
      price:"68800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/25.png",
      title:"智己人",
      subTitle:"第07类 机械机器",
      desc:"搅拌机,电动榨果汁机,雕刻机,洗衣机,清洁用吸尘装置,清洁永 ...",
      price:"128800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/26.png",
      title:"图形",
      subTitle:"第25类 服装鞋帽",
      desc:"腰带，服装带,特种运动服装,衣物,鞋,手套（不包括特种手套...",
      price:"220000.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/27.png",
      title:"MADAMS KISS",
      subTitle:"第25类 服装鞋帽",
      desc:"服装,睡衣,拖鞋,袜,短围巾,成品衣,游泳衣,帽,手套（服装） ...",
      price:"268000.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/28.png",
      title:"卤尊宝",
      subTitle:"第43类 餐饮住宿",
      desc:"酒吧服务,出租椅子、桌子、桌布和玻璃器皿,流动饮食供应...",
      price:"10080.00",
      labelFlag:false
    },

    {
      url:"/license/tradeMark/29.png",
      title:"便优蜂",
      subTitle:"第35类 广告销售",
      desc:"职业介绍,广告,商业企业迁移的管理服务,自动售货机出租,网 ...",
      price:"226800.00",
      labelFlag:false
    },
    {
      url:"/license/tradeMark/30.png",
      title:"重彪 MAJORTIGER",
      subTitle:"第07类 机械机器",
      desc:"搅拌机,洗衣机,清洁用吸尘装置,化学工业用电动机械,化肥制 ...",
      price:"48080.00",
      labelFlag:false
    },
    

  ]
  return (
    <>
      <div>
        {arr?.map((item) => {
          return (
            <div className="mb-6">
              <Options labelText={item.label} items={item.options}></Options>
            </div>
          );
        })}
      </div>
      <div className="flex w-300px justify-between mt-6 ml-20 mb-10">
          <SortButton text={"发布时间排序"}></SortButton>
          <SortButton text={"价格排序"}></SortButton>
        </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data?.map((item) => {
          return <Card data={item} onClick={()=>router.push('/tradeMarkDetail?id=123')}></Card>;
        })}
      </div>
      <div className="mt-70px mb-95px">
        {/* <PaginationPlus></PaginationPlus> */}
      </div>
    </>
  );
}
