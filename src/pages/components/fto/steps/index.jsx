import { useEffect, useState } from "react";
import classNames from "classnames";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import StepsButton from "../../common/Steps/stepsButton";
export default function FTOSteps() {
  const [step, setStep] = useState(1);
 
  return (
    <>
      <div className="bg-white pb-57px">
        {step == 1 && <Step1></Step1>}
        {step == 2 && <Step2></Step2>}
        {step == 3 && <Step3></Step3>}
        <div className={classNames("mt-29px flex justify-center",{"hidden":step==3})}>
          <StepsButton
            hasPreBtn={step == 2 ? true : false}
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
