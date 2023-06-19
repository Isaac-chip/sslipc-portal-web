import classNames from "classnames";
import CustomInput from "../Input";


export default function VerifyInput({
  verify = true,
  unit = null,
  label = "",
  verifyType = "default",
  name,
}) {
  
  return (
    <>
      <div className="relative w-5/12 mb-4">
        <div className="flex mt-4 justify-end">
          <div
            className={classNames(
              "flex flex-shrink-0 items-center relative mr-2"
            )}
          >
            <span
              className={classNames(
                "text-red-500 text-lg absolute top-2 -left-2",
                { hidden: !verify && verifyType == "login" }
              )}
            >
              *
            </span>
            {label}
          </div>
          <CustomInput
            verify={verify}
            name={name}
            styles={{ width: "380px" }}     
          />
          {unit && <p className="absolute  translate-y-1/2 right-4">{unit}</p>}
        </div>
      </div>
    </>
  );
}