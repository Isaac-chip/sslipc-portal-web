import StepRootWrap from "../../common/Steps/stepRootWrap";
import CustomInput from "../../common/Input";

export default function Step2() {
  return (
    <StepRootWrap step={3}>
      <div className="w-4/5 mx-auto">
        <div className="flex items-center justify-center mt-10">
          <img
            className="w-62px h-62px"
            src="/icon/right.png"
            alt=""
            srcset=""
          />
          <p className="font-bold text-lg ml-2">填写完成！等待工作人员联系。</p>
          <p className="text-blue-700">返回列表</p>
        </div>
      </div>
    </StepRootWrap>
  );
}
