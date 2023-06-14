import classNames from "classnames";
import CustomInput from "../Input";
export default function VerifyInput({verify=true,unit=null,label=""}) {
  return (
    <>
      <div className="relative w-5/12">
        <div className="flex mt-4 justify-end">
          <div className={classNames("flex flex-shrink-0 items-center relative mr-2")}>
            <span className={classNames("text-red-500 text-lg absolute top-2 -left-2",{"hidden":!verify})}>
              *
            </span>
            {label}
          </div>
          <CustomInput styles={{ width: "380px" }}></CustomInput>
          {
            unit && <p className="absolute  translate-y-1/2 right-4">{unit}</p>
          }
          
        </div>
      </div>
    </>
  );
}
