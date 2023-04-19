import classNames from "classnames";
import { Card } from "flowbite-react";
import { useState } from "react";
import IntroTitle from "../../common/IntroTitle";
import { useRouter } from "next/router";

export default function SpecialInformation() {
  const [active, setActive] = useState();
  const fakeData = {
    news: [
      {
        title: "南方中心助力全国首期河套合作区主题知识产权证券化产品发行中南方",
        date: "2023-03-06",
      },
      {
        title: "南方中心助力全国首期河套合作区主题知识产权证券化产品发行中南方",
        date: "2023-03-06",
      },
      {
        title: "南方中心助力全国首期河套合作区主题知识产权证券化产品发行中南方",
        date: "2023-03-06",
      },
      {
        title: "南方中心助力全国首期河套合作区主题知识产权证券化产品发行中南方",
        date: "2023-03-06",
      },
      {
        title: "南方中心助力全国首期河套合作区主题知识产权证券化产品发行中南方",
        date: "2023-03-06",
      },
    ],
    trends: [],
  };

  const router = useRouter()
  return (
    <div>
      <div className="mt-73px mb-42px">
        <IntroTitle title="专题资讯" desc={"Special Information"}></IntroTitle>
      </div>
    
      <div className=" container mx-auto items-center">
        <div className="block lg:flex justify-center">
          <div className="  lg:mr-6">
            <div className="relative w-400px h-300px mb-10 lg:mb-0 bg-black smmr-2: mx-auto ">
              <img
               onClick={()=>router.push('/newsDetail?id=111')}
                className="w-full h-full "
                src="https://ts3.cn.mm.bing.net/th?id=ORMS.2d6d7f75944705cb4a16d5fe73585eec&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
                alt=""
              />
              <div
                className="absolute bottom-0 h-50px w-full flex"
                style={{
                  background: "rgba(48, 120, 236, 0.3)",
                }}
              >
                <div
                  className="w-60px h-50px flex flex-col justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(270deg, #3078EC 0%, #4B73FA 100%)",
                  }}
                >
                  <div className="text-xl text-white font-bold leading-none">
                    16
                  </div>
                  <div className="scale-75 transform leading-none text-white">
                    2023.3
                  </div>
                </div>
                <div
                  className="text-white ml-20px mr-20px truncate"
                  style={{ lineHeight: "50px" }}
                >
                  外国驻穗领团参观考察南方中心点赞知识产权运外国驻穗领团参观考察南方中心点赞知识产权运
                </div>
              </div>
            </div>
          </div>
     
            <div
              className="xs:w-720px xs:h-300px bg-blue-light box-border pt-20px pr-28px pl-27px "
              style={{
                boxShadow: "2px 3px 12px 3px rgba(50,119,237,0.08)",
              }}
            >
              <div
                className={classNames(
                  "flex justify-between items-center mb-16px"
                )}
              >
                <div className={classNames("flex")}>
                  <div
                    className={classNames("text-md text-blue-dark font-bold")}
                  >
                    最新公告
                  </div>
                  <div
                    className={classNames(
                      "ml-16px text-sm font-bold flex items-center"
                    )}
                  >
                    行业动态
                  </div>
                </div>
                <div className={classNames("flex items-center")}>
                  <div
                    className={classNames(
                      "text-xs text-gray-light font-medium mr-6px"
                    )}
                  >
                    更多资讯
                  </div>
                  <img
                    className="w-14px h-10px"
                    src="/icon/rightIcon.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {fakeData.news?.map((item, index) => {
                    return (
                      <li key={item + "-" + index} className="py-3 ">
                        <div className="flex items-center space-x-4">
                          <div className="w-2/3 xs:min-w-0 flex-1">
                            <p  onClick={()=>router.push('/newsDetail?id=111')} className="truncate text-sm font-medium text-gray-900 dark:text-white hover:text-blue cursor-pointer hover:underline">
                              {item.title}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray text-sm dark:text-white">
                            {item.date}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
}
