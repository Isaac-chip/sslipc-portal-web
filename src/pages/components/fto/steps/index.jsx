import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import StepsButton from "../../common/Steps/stepsButton";
export default function FTOSteps() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="bg-white pb-57px">
        {step == 1 && <Step1></Step1>}
        {step == 2 && <Step2></Step2>}
        <div className="mt-29px flex justify-center">
          <StepsButton
            hasPreBtn={step > 1 ? true : false}
            next={() => {
              let num = step + 1;
              setStep(num);
            }}
          ></StepsButton>
        </div>
      </div>
    </>
  );
}
