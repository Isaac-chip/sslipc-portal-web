import VerifyInput from "./components/common/verifyInput";
import VerifyCheckbox from "./components/common/verifyCheckbox";
import VerifyTextArea from "./components/common/VerifyTextArea";
import Dropdown from "./components/common/DropDown";
export default function AssistanceFlowPage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full bg-white mt-4 mb-4">
          <div className="container mx-auto bg-white pt-20px pl-20px pr-20px pb-20px mt-4 mb-4">
            <div className="flex items-center">
              <div
                className="w-4px h-20px"
                style={{ background: "#3C76F3" }}
              ></div>
              <p className="text-xl font-bold ml-10px">维权援助申请表</p>
            </div>
            <div className="pl-16px">
              <div className="mt-23px">
                <p className="text-lg font-bold" style={{ color: "#3C76F3" }}>
                申请人信息
                </p>
                <div className="flex flex-wrap justify-between">
                  <VerifyInput label="申请人姓名"></VerifyInput>
                  <VerifyInput label="申请人身份证号"></VerifyInput>
                  <VerifyInput label="申请人地址"></VerifyInput>
                  <VerifyInput label="联系方式"></VerifyInput>
                  <VerifyInput verify={false} label="电子邮箱"></VerifyInput>
                  <VerifyInput verify={false} label="单位名称"></VerifyInput>
                </div>
              </div>
            </div>
            <div className="pl-16px">
              <div className="mt-23px">
                <p className="text-lg font-bold" style={{ color: "#3C76F3" }}>
                维权援助内容
                </p>
                <VerifyTextArea verify={true} label="申请维权援助事项"></VerifyTextArea>
                <VerifyCheckbox
                    verify={true}
                    title="涉及权利类别"
                    data={[{ value: "专利" },{ value: "商标" },{ value: "版权" },{ value: "集成电路布图设计" },{ value: "其他" }]}
                  ></VerifyCheckbox>
                   <VerifyTextArea label="相关号码"></VerifyTextArea>
                   <Dropdown></Dropdown>
              </div>
            </div>

            <div
              className="text-16 text-white flex justify-center items-center mx-auto my-8"
              style={{
                width: "348px",
                height: "40px",
                background: "linear-gradient(127deg, #5794FD 0%, #3761EA 100%)",
                boxShadow: "2px 4px 4px 0px rgba(83,142,251,0.4)",
                borderRadius: "100px 100px 100px 100px",
                opacity: 1,
              }}
            >
              提交
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
