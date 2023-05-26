

import PatentAlerts from "./components/patentAlerts"



export default function patentAlertsPage(){
    return (
      <>
        <img className="w-full" src="/patentAlerts/banner3.png" alt="" srcset="" />
        <div className="container mx-auto grid grid-cols-2 mt-4" style={{background:"url(/patentAlerts/bg1.png)"}}>
              <div className="h-174px box-border pt-4 pl-4">
                  <div className="flex items-center">
                      <img className="w-36px h-36px" src="/patentAlerts/projectIcon.png" alt="" srcset="" />
                      <p className="text-xxl font-bold ml-12px">项目进行中</p>
                  </div>
                  <p style={{color:"#818181"}} className="pl-52px text-16px leading-6 max-w-xl">可以及时跟踪和分析该领域的最新研究进展，根据预警分析结果对研发项目目标技术路线进行动态调整。</p>
              </div>
              <div className="h-174px box-border pt-4 pl-4">
                  <div className="flex items-center">
                      <img className="w-36px h-36px" src="/patentAlerts/zhongqu.png" alt="" srcset="" />
                      <p className="text-xxl font-bold ml-12px">项目中期</p>
                  </div>
                  <p style={{color:"#818181"}} className="pl-52px text-16px leading-6 max-w-xl">评估等关键节点或者定期对项目相关知识产权文献进行更新检索和分析，关注主要竞争对手的技术动态。</p>
              </div> 
          </div>
        <div className="container mx-auto mt-20px bg-white">
     
          <PatentAlerts></PatentAlerts> 
        </div>
      </>
      
    )
}
