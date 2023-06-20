import classNames from "classnames";
import CustomInput from "../Input";
import {useSelector, useDispatch } from "react-redux";
import { increment } from "@/store/actions/creators";

const VerifyInput=({
  verify = true,
  unit = null,
  label = "",
  name,
  rules
})=> {
  const dispatch = useDispatch()
  const counter = useSelector(state => state._Form);

  return (
    <>
      <div className="relative w-5/12 mb-6">
        <div className="flex mt-4 justify-end">
          <div
            className={classNames(
              "flex flex-shrink-0 items-center relative mr-2"
            )}
          >
            <span
              className={classNames(
                "text-red-500 text-lg absolute top-2 -left-2",
                { hidden: !verify }
              )}
            >
              *
            </span>
            {label}
          </div>
          <CustomInput
            value={(e)=>{
              console.log(e)
              dispatch(increment(e))
         
          
            }}
            verify={verify}
            name={name}
            styles={{ width: "380px" }}     
            rules={rules}
          />
          {unit && <p className="absolute  translate-y-1/2 right-4">{unit}</p>}
        </div>
      </div>
    </>
  );

}


export default VerifyInput;