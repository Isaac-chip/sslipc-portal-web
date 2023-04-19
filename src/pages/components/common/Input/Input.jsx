import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

export default function Input({ type, placeholder, icon="/input/zhanghao.png" }) {
  return (
    <div className="relative flex items-center">
      <img className="absolute ml-2  w-25px h-25px items-center" src={icon} alt="" srcset="" />
      <input
      style={{background:"#F2F6FA",borderColor:"#E7EFF8"}}
        type={type}
        placeholder={placeholder}
        className="pl-46px py-3 border w-full   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
