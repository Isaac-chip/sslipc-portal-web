import License from "./components/license";
import ToolsBar from "./components/common/ToolsBar";

export default function licensePage() {
  return (
    <>
      <div className="relative" style={{background:"#F0F3F7",minHeight:"70px"}}>
        <ToolsBar theme={{
            toolsBar:{
                base:"w-full hover:bg-gray-200 hover:h-80  absolute z-50"
            }
        }}></ToolsBar>
      </div>

      <img className="w-full" src="/banner/jiaoyibanner.png" alt="" srcset="" />

      <License></License>
    </>
  );
}
