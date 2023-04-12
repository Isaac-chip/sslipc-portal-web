import StepRootWrap from "../../common/Steps/stepRootWrap";
import CustomInput from "../../common/Input";
import TextArea from "../../common/TexTArea";
export default function Step1() {
  return (
    <StepRootWrap>
      <div className="w-4/5 mx-auto">
        <CustomInput placeholder={"企业名称填写"}></CustomInput>
        <div className="mt-30px">
          <TextArea placeholder="简述申请需求"></TextArea>
        </div>
      </div>
    </StepRootWrap>
  );
}
