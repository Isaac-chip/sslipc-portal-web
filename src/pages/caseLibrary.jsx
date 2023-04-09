import PaginationPlus from "./components/common/Pagination";
export default function caseLibraryPage() {
  return (
    <div className=" box-border" style={{ background: "#F9F9F9" }}>
      <img className="w-full" src="/caseLibrary/banner6.png" alt="" srcset="" />
      <div className="container mx-auto mt-30px ">
        <div className="h-800px bg-white mb-20px">
        </div> 
        <div className="pt40 pb-100px">
        <PaginationPlus></PaginationPlus>
        </div>
       
      </div>
    </div>
  );
}
