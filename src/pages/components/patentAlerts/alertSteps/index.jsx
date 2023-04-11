import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import StepsButton from "../../common/Steps/stepsButton";
export default function AlertSteps() {
 const [step,setStep] = useState(1)
  return (
    <div>
      {
        step==1 && <Step1></Step1>
      }
      {
        step==2 && <Step2></Step2>
      }
       {
        step==3 && <Step3></Step3>
      }
      <div className="mt-10 pb-6 flex justify-center">
        <StepsButton hasPreBtn={step>1?true:false} next={()=>{
            let num = step+1
            setStep(num)
        }}></StepsButton>
      </div>
    </div>
  );
}
