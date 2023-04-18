import Steps from "../../common/Steps";
import CustomInput from "../../common/Input";
import Checkbox from "./checkbox";
import SelectPlus from "../../common/Select";
import StepRootWrap from "../../common/Steps/stepRootWrap";
export default function Step2() {
  const checkBoxRowData = {
    监控事件: [
      { label: "首次公开" },
      { label: "发生诉讼" },
      { label: "法律状态发生变更" },
      { label: "发生许可转让" },
    ],
    监控内容: [
      { label: "发明专利" },
      { label: "实用新型" },
      { label: "外观设计" },
    ],
  };
  return (
    <StepRootWrap step={2}>
      <div className="flex box-border items-center mb-4">
        <span className="text-red-500 text-lg">*</span>预警名称
        <div className="ml-2 w-96">
          <CustomInput></CustomInput>
        </div>
      </div>
      {Object.keys(checkBoxRowData)?.map((item) => {
        return (
          <div className="flex box-border items-center mb-34px">
            <span className="text-red-500 ">*</span>
            {item}
            <div className="ml-2 ">
              <div className="flex ">
                {checkBoxRowData[item]?.map((item) => {
                  return <Checkbox data={item}></Checkbox>;
                })}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex box-border items-center mb-34px">
        <span className="text-red-500 ">*</span>
        预警频率
        <div className="ml-2 ">
          <div className="flex ">
            <SelectPlus></SelectPlus>
            <div className="ml-2">
              <SelectPlus></SelectPlus>
            </div>
          </div>
        </div>
      </div>
      <div className="flex box-border items-center mb-34px">
        <div className="flex flex-shrink-0">
          <span className="text-red-500 ">*</span>
          收件邮箱
        </div>
        <div className="ml-2 w-full">
          <CustomInput></CustomInput>
        </div>
      </div>{" "}
    </StepRootWrap>
  );
}
