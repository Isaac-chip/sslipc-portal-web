import TabsPlus from "../common/TabsPlus";
import CopyRightCard from "../common/CopyRightCard";
export default function ProjectIntro() {
  const tabs = [
    {
      tab: [
        {
          label: "项目介绍",
          content: (
            <div className="font-medium text-lg" style={{ color: "#565656" }}>
              每一个故事都是一颗颗珍贵的宝石
              闪烁着民间传说与童话的文化魅力一套十册的俄罗斯经典动漫图书《宝石山》中文版终于面世了。《宝石山》系列是俄罗斯天才动画编导与制片亚历山大·塔塔斯基精心策划和制作之作，它通过动画来表现俄罗斯广袤土地上各族人民的民间传说，童话故事与历史文化。俄罗斯最著名的艺术家如尤里·诺斯坦，阿里克山大·佩斯罗夫都参与《宝石山》系列作品的创作，他们为儿童所创作的这些作品已成为经典之作。这一系列动画作品所采用的各种艺术表现形式如纸绘，剪纸、木偶，黏土，玻璃，油画甚至是山水画等给予了孩子们丰富的艺术享受，从小培养了他们对美的感受如欣赏能力。《宝石山》动画与图书，音像系列制品自播出和出版以来，在俄罗斯乃至世界广受欢迎。
              仅在我们所引进，翻译出版的这一套十册的图书中，我们就可欣赏到以生动有趣的画面和文字所表现的俄罗斯各民族流传至今，生动有趣的民间故事和传说，内容涉及到俄罗斯人，白俄罗斯人，朝鲜人，达吉斯坦人，巴什基尔人，鞑靼人等。每一册书还通过简洁的文字介绍了居住在俄罗斯各民族人民的风俗民情，自然景观和动植物特征。这套根据同名系列动画改编的系列丛书中的每一个故事都是一颗颗珍贵的宝石，闪烁着民间传说与童话的文化魅力。
              通过阅读《宝石山》系列作品，我们感到该系列作品的编导，从俄罗斯童话，民间传说中选取了美好，激发孩子们想像力的素材，经过精心的再创造，制作了这一佳作。在这一系列作品中，有拟人化可爱的动物小棕熊，只有指姆大的聪明孩子和神奇的猫总督…，精美的画面，引人入胜的故事，富于哲理的语言，如《皇帝的三个问题》中的问题：世界上最快的是什么？聪明的女孩回答到，＂最快的是思想，因为它一眨眼就能跑遍全世界＂等语言像一串串闪烁智慧之光的钻石，使孩子们得到启发和教育。这一系列作品中的故事充满了对祖国自然景色的热爱，讴歌了人们真挚的友情，表现了人与自然万物合谐。
              据我们所知，这是近年来国内首次引进的俄罗斯系列作品。它为我们打开了另一扇窗口，让我们的家长和孩子，通过这套丛书的了解到一带一路上主要国家俄罗斯的历史文化，童话故事，民间传说。阅读能使孩子更加聪明，我们希望这些精彩的书籍将伴随儿童健康向上地生长。
            </div>
          ),
        },
      ],
    },
    {
      tab: [
        {
          label: "版权人介绍",
          content: (
            <div className="font-medium text-lg" style={{ color: "#565656" }}>
              三辰影库音像出版社有限公司
            </div>
          ),
        },
      ],
    },
    {
      tab: [
        {
          label: "作品内容",
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
                    <img
                      className="w-290px h-230px bg-black mr-2 mb-4"
                      style={{ flex: "0 0 auto" }}
                    />
                  );
                })}
              </div>
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
                             <CopyRightCard></CopyRightCard>
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
    <div className="mb-10">
      {tabs.map((tabItem, index) => (
        <div className="bg-white mt-4" key={index}>
          <TabsPlus tabs={tabItem.tab} />
        </div>
      ))}
    </div>
  );
}
