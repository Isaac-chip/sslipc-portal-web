import IntroTitle from "../../common/IntroTitle";
import DescItem from "./desItem";
import Card from "./card";

export default function PatentProject() {
  return ( 
    <div
      className="w-full mt-60px h-full"
      style={{ background: "url(/patentProject/bg2.png)" }}
    >
      <div className="container mx-auto h-full xs:h-screen px-6" >
        <div className="pt-40px">
          <IntroTitle
            
            textColor="text-white"
            title={"推荐专利项目"}
            desc=" Recommended Patent Projects"
          ></IntroTitle>
        </div>

        <div className="sm:flex-row flex-col sm:flex mt-60px ">
          <div className="">
           
            <div className="w-300px pb-40px relative mx-auto sm:mx-0">
              <DescItem isShowMask={true} data={{"医疗器械":["专利类型", "专利价格", "专利介绍"]}}></DescItem>
              <DescItem data={{"新一代电子":["专利类型", "专利价格", "专利介绍"]}}></DescItem>
              <DescItem data={{"电化学储能":["专利类型", "专利价格", "专利介绍"]}}></DescItem>
              <div className="absolute -top-8 right-0 font-bold text-sm text-white">
              查看更多
            </div>
            </div>
          </div>
          <div className="w-5/6 flex flex-wrap sm:justify-between mx-auto sm:mx-0 justify-center">
            <Card img={'/home/tp1.png'}></Card>
            <Card img={'/home/tp3.png'}></Card>
            <Card img={'/home/tp5.png'}></Card>
            <Card img={'/home/tp2.png'}></Card>
            <Card img={'/home/tp4.png'}></Card>
            <Card img={'/home/tp6.png'}></Card>
            
          </div>
        </div>
      </div>
    </div>
  );
}
