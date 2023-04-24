
import { useRouter } from "next/router"

import IntroTitle from "../../common/IntroTitle"

export default function IpServices (params) {
    const router = useRouter()
    return (
        <div className="mx-auto mt-38px flex flex-col w-11/12 xl:w-9/12 2xl:w-7/12" >
            <IntroTitle title="知识产权服务" desc="Intellectual Property Services"></IntroTitle>
            <div className="mt-40px flex sm:justify-between flex-wrap justify-around">
                <div className="w-140px">
                    <img className="h-140px w-140px" src="/ipServices/zhuanlicha.png" alt=""/>
                    <p className="text-xl font-medium text-center">专利查</p>
                </div>
                <div className="w-140px">
                    <img className="h-140px w-140px" src="/ipServices/jiazhipinggu.png" alt=""/>
                    <p className="text-xl font-medium text-center">专利价值评估</p>
                </div>
                <div className="w-140px">
                    <img className="h-140px w-150px" src="/ipServices/shujufenxi.png" alt=""/>
                    <p className="text-xl font-medium text-center w-160px">重点产业数据分析</p>
                </div>
                <div onClick={()=>router.push('/license')} className="w-140px cursor-pointer">
                    <img className="h-140px w-140px" src="/ipServices/chanquanjiaoyi.png" alt=""/>
                    <p className="text-xl font-medium text-center">知识产权交易</p>
                </div>
                <div className="w-140px cursor-pointer" onClick={()=>router.push('/projectArea')}>
                    <img className="h-140px w-140px" src="/ipServices/xiangmugonggao.png" alt=""/>
                    <p className="text-xl font-medium text-center">项目专区</p>
                </div>
            </div>
        </div>
    )
}  