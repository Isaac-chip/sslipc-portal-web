import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./button";
import ExpertCard from "./ExpertCard";
import ToolsBar from "../common/ToolsBar";
export default function Expert() {
  const count = 9;
  const router = useRouter();
  const data = [
    {
      url:"/expert/people2.png",
      name:"王艳红",
      EnglishName:"WANG YAN HONG",
      desc:["东莞铭普光磁股份有限公司总监","助理研究员（中级）","从事知识产权工作12年"]
    },
    {
      url:"/expert/people.png",
      name:"付光耀",
      EnglishName:"FU GUANG YAO",
      desc:["电子科技大学工学硕士","广东君逸律师事务所执业律师","专利代理师"]
    },
    {
      url:"/expert/people3.png",
      name:"杨良滔",
      EnglishName:"YANG LIANG TAO",
      desc:["脑机接/先进电极材料及设计","电化学技术在生物及储能领域方面的应用研究"]
    },
    {
      url:"/expert/people4.png",
      name:"胡拥军",
      EnglishName:"HU YONG JUN",
      desc:["广东聚创智合知识产权代理有限公司总经理","从事知识产权工作 17 年"]
    },
    {
      url:"/expert/people4.png",
      name:"任建彬",
      EnglishName:"REN JIAN BING",
      desc:["暨南大学法学学士","广东舟清律师事务所主任","东莞市优秀律师"]
    },
    {
      url:"/expert/people4.png",
      name:"张阳",
      EnglishName:"ZHANG YANG",
      desc:["高级工程师","中知（北京）认证有限公司知识产权体系五星审核员"]
    },
    {
      url:"/expert/people4.png",
      name:"王虎",
      EnglishName:"WANG HU",
      desc:["广州华享知识产权服务有限公司 执行合伙人/知识产权师","广东省谐和知识产权调解中心主任"]
    },
    {
      url:"/expert/people4.png",
      name:"刁俐颐",
      EnglishName:"DIAO LI YI",
      desc:["广东靖洋资产评估有限公司 董事长","中山大学硕士","从事知识产权工作17年"]
    },
  ]
  return (
    <>

      <div className="container mx-auto">
        <Image
          className="mx-auto mb-40px"
          width={504}
          height={84}
          src="/expert/zhuanjia.png"
        ></Image>
        <div className="flex justify-between">
          <Button activity={true} text="全部"></Button>
          <Button text="知识产权专家"></Button>
          <Button text={"技术专家"}></Button>
          <Button text={"法律专家"}></Button>
          <Button text={"投资专家"}></Button>
        </div>
        <div className="mt-40px mb-131px grid grid-cols-5 gap-8">
          {data?.map((item) => {
            return (
              <div
                className="mb-40px"
                onClick={() => router.push("/expertDetail?id=123")}
              >
                <ExpertCard data={item}></ExpertCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
