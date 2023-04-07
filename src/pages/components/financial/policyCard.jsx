


export default function PolicyCard({icon,children}){
    return (
        <div
        className="w-570px h-120px mb-20px flex items-center"
        style={{
          background:
            "linear-gradient(129deg, #F2F5F7 0%, #F6F8FB 100%)",
        }}
      >
        <div>
          <img
            className="w-92px h-92px"
            src={icon}
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col justify-between h-60px ml-30px text-md">
            {children} 
        </div>
      </div>
    )
}