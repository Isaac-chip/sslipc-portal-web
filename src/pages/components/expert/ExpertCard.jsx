
export default function ExpertCard({data}) {
  if(!data){
    return null
  }
  const {url="/public/expert/people4.png",name,EnglishName,desc} = data
  return (
    <div className="w-240px">
        <img className=" h-300px" src={url} />
        <p className="font-bold text-xxl mt-10px">{name}</p>
        <p className="text-sm text-gray-400">{EnglishName}</p>
        {
          desc.map((item)=>{
            return (
              <p className="leading-7">{item}</p>
            )
          })
        }        
        <div className="flex items-center mt-19px">
          <div className="font-bold text-md text-blue">查看更多</div>
          <img className="" src="/expert/right.png" alt="" srcset="" />
        </div>
    </div>
  );
}
