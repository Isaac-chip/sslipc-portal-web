import { useRouter } from "next/router";
import CopyRightCard from "../../common/CopyRightCard";
import Options from "../../common/ItemDivider";
import SortButton from "../../common/SortButton";
import PaginationPlus from "../../common/Pagination";
export default function Copyright() {
  const router = useRouter()
  const arr = [
    {
      label: "交易价格：",
      options: [
        { id: 1, title: "免费" },
        { id: 2, title: "5000以下" },
        { id: 3, title: "5000 - 1万" },
        { id: 4, title: "1 - 2万" },
        { id: 5, title: "2 - 5万" },
        { id: 6, title: "5万以上" },
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
  const data = [
    {
      url:"/license/copyRight/111.png",
      title:"安妮怎么了",
      desc:"动漫作品",
      price:"14080.00"
    },
    {
      url:"/license/copyRight/112.png",
      title:"宫锁沉香",
      desc:"影视剧集",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/114.png",
      title:"心肝宝贝",
      desc:"影视剧集",
      price:"面议"
    },
    {
      url:"/license/copyRight/115.png",
      title:"《默》",
      desc:"歌曲音乐",
      price:"面议"
    },
    {
      url:"/license/copyRight/111.png",
      title:"安妮怎么了",
      desc:"动漫作品",
      price:"14080.00"
    },
    {
      url:"/license/copyRight/112.png",
      title:"宫锁沉香",
      desc:"影视剧集",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/111.png",
      title:"安妮怎么了",
      desc:"动漫作品",
      price:"14080.00"
    },
    {
      url:"/license/copyRight/112.png",
      title:"宫锁沉香",
      desc:"影视剧集",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/111.png",
      title:"安妮怎么了",
      desc:"动漫作品",
      price:"14080.00"
    },
    {
      url:"/license/copyRight/112.png",
      title:"宫锁沉香",
      desc:"影视剧集",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/111.png",
      title:"安妮怎么了",
      desc:"动漫作品",
      price:"14080.00"
    },
    {
      url:"/license/copyRight/112.png",
      title:"宫锁沉香",
      desc:"影视剧集",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
    {
      url:"/license/copyRight/113.png",
      title:"《宝石山-洞穴里的怪女孩》",
      desc:"艺术创作",
      price:"面议"
    },
  ]
  return (
    <>
      <div className="mt-2">
        {arr?.map((item) => {
          return (
            <div className="mb-5">
              <Options labelText={item.label} items={item.options}></Options>
            </div>
          );
        })}
      </div>
    
      <div className="flex w-300px mb-6 justify-between mt-6 ml-20">
        <SortButton text={"发布时间排序"}></SortButton>
        <SortButton text={"价格排序"}></SortButton>
      </div>
      <div className="grid grid-cols-5">
      {
        data?.map((item)=>{
          return (
           <div className="mb-4">
             <CopyRightCard data={item} onClick={()=>router.push('/copyRightDetail?id=123')}></CopyRightCard>
           </div>
          )
        })
      }
      </div>
     
     
     <div className="mt-70px mb-95px">
        {/* <PaginationPlus></PaginationPlus> */}
     </div>
    </>
  );
}
