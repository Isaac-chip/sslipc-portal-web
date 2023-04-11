import { useState } from "react";
import TabsPlus from "./components/common/TabsPlus";
import ExpertCard from "./components/expert/ExpertCard";
export default function expertDetailPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: "相似推荐",
      content: (
        <div className="relative">
          <div className="grid grid-cols-4 gap-4">
            {new Array(10).fill("").map((item) => {
              return (
                <div className="mb-30px">
                  <ExpertCard></ExpertCard>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="container mx-auto">
      <img
        className="w-506px h-84px mx-auto"
        src="/expert/zhuanjia.png"
        alt=""
        srcset=""
      />
      <div
        className="w-ful flex pt-30px pr-41px pl-30px pb-100px"
        style={{ background: "#F7F7F8" }}
      >
        <img
          className="w-240px h-300px flex-shrink-0 bg-black"
          src=""
          alt=""
          srcset=""
        />
        <div className="ml-6">
          <div>
            <p className="font-bold text-xxl mt-10px">金翔龙</p>
            <p className="text-sm text-gray-400">JIN XIANG LONG</p>
          </div>
          <div className="mt-20px text-md">
            中国海洋地质与地球物理学家，中国海底科学奠基人之一，中国工程院院士
            ，国家海洋局第二海洋研究所研究员
            ，国家海洋局海底科学重点实验室主任。
            1956年毕业于中国地质大学，1957-1985年在中国科学院海洋研究所工作，1985年至今在国家海洋局第二海洋研究所工作。金翔龙院士对学科的创建和发展做出过重要的开拓性贡献。长期致力于我国边缘海的海底勘查与研究，开辟学科的新方向和研究的新领域，推动我国浅海海底油气勘探的起步，并率先开展我国渤、黄、东海的地球物理探测，对中国海的构造格局、地壳性质与演化，以及边缘海的演化模式等提出过重要论述，在国内外有重要影响。主持研究的大陆架及邻近海域勘查攻关项目对维护海洋权益有重要贡献，受到国家表彰。在大洋海底勘探开发方面，代表我国在联合国争得东太平洋理想矿区，并主持与负责国家海洋局承担的《大洋多金属结核资源勘探开发》重大专项，勘探工程达到国际先进水平，为按联合国要求完成区域放弃和实施洋底开采工程奠定了基础，为我国进入大洋勘探开发的国际先进行列做出了重大贡献。
          </div>
          <div className="mt-23px">
            <div className="text-lg font-bold">科学成果奖励：</div>
            <div className="text-md mt-20px">
              获得中国科学院科技进步一、二等奖和科学二等奖各一项，国家海洋局科技进步一等奖二项和科技进步二等奖一项。
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40px">
        <TabsPlus
          activeTab={activeTab}
          onTabChange={handleTabChange}
          tabs={tabs}
        ></TabsPlus>
      </div>
    </div>
  );
}
