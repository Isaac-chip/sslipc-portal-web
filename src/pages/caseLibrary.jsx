import PaginationPlus from "./components/common/Pagination";
export default function caseLibraryPage() {
  return (
    <div className=" box-border h-full pb-1" style={{ background: "#F9F9F9" }}>
      <img className="w-full" src="/caseLibrary/banner6.png" alt="" srcset="" />
      <div className="container mx-auto mt-30px ">
        <div className="mb-20px ">
          <div className=" bg-white pt-12px pr-37px pl-21px pb-20px">
            <div className="text-xxl font-bold">维权援助指导文件</div>
            {new Array(3).fill("")?.map((item) => {
              return (
                <div className="border-b" style={{ borderColor: "#D6E4F4" }}>
                  <div className="text-xl pt-15px pb-7px">
                    德国专利诉讼案件分析
                  </div>
                  <div className="text-sm pb-12px" style={{ color: "#818181" }}>
                    2022-03-18
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" pt-40px pb-70px ">
            <PaginationPlus></PaginationPlus>
          </div>
        </div>
      </div>
    </div>
  );
}
