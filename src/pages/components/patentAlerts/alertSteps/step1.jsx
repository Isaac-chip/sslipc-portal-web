import { useState, useEffect } from "react";
import SelectPlus from "../../common/Select";


import CustomInput from "../../common/Input";

import StepRootWrap from "../../common/Steps/stepRootWrap";
export default function Step1() {
  const [count, setCount] = useState(1);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (e) => {
    console.log(e);
  };

  return (
    <StepRootWrap>
      <div className="text-lg mt-10px mb-20px">当前检索共0条专利</div>
      <form>
        <div class="sm:col-span-3">
          {new Array(count).fill("").map((item) => {
            return (
              <div class="mt-2 flex">
                <div className="mb-4">
                  <SelectPlus
                    options={options}
                    onChange={handleSelectChange}
                  ></SelectPlus>
                </div>
                <div className="ml-4 w-full">
                  <CustomInput
                    placeholder={"可输入关键词、公司名称或者专利号"}
                  ></CustomInput>
                </div>
              </div>
            );
          })}

          <div className="cursor-pointer w-160px h-38px rounded-md border border-blue text-blue flex items-center box-border justify-center">
            <img
              className="w-20px h-20px mr-1"
              src="/icon/添加.png"
              alt=""
              srcset=""
            />
            <div
              className="text-md"
              onClick={() => {
                let num = count + 1;
                setCount(num);
              }}
            >
              添加字段
            </div>
          </div>
        </div>
      </form>
    </StepRootWrap>
  );
}
