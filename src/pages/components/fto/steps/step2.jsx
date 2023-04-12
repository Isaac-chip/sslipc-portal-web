import StepRootWrap from "../../common/Steps/stepRootWrap";
import CustomInput from "../../common/Input";
import TextArea from "../../common/TexTArea";
export default function Step2() {
  return (
    <StepRootWrap step={2}>
      <div className="w-4/5 mx-auto">
        <div className="flex ">
          <div className="flex flex-shrink-0 items-center mr-2">分析目标</div>
          <CustomInput></CustomInput>
        </div>
        <div className="flex mt-4">
          <div className="flex flex-shrink-0 items-center relative mr-2">
            <span className="text-red-500 text-lg absolute top-2 -left-2">*</span>收件邮箱
          </div>
          <CustomInput></CustomInput>
        </div>
      </div>
    </StepRootWrap>
  );
}
