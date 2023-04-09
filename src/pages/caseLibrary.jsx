import PaginationPlus from "./components/common/Pagination";
export default function caseLibraryPage() {
  return (
    <div className=" box-border h-full pb-1" style={{ background: "#F9F9F9" }}>
      <img className="w-full" src="/caseLibrary/banner6.png" alt="" srcset="" />
      <div className="container mx-auto mt-30px ">
        <div  className="mb-20px ">
          <div className=" bg-white">
            <ul >
              <li>i</li>
              <li>i</li>
              <li>i</li>
            </ul>
          </div>

          <div className=" pt-40px pb-70px ">
            <PaginationPlus></PaginationPlus>
          </div>
        </div>
      </div>
    </div>
  );
}
