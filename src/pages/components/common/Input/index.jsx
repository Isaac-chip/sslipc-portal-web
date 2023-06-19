import React, { useEffect, useState } from "react";
import classNames from "classnames";


const CustomInput = ({
  value,
  onChange,
  placeholder,
  styles,
  name,
  verify,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [detail,setDetail] = useState({})
  const [pass,setPass] = useState(true)

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false)
    console.log("onBlur")
    console.log(e.target.value)
    let pass = false
    if(e.target.value!=""){
      pass=true
    }
    setPass(pass)
    setDetail({
      value:e.target.value,
      pass:pass
    })
  };
  
  const inputClasses = classNames(
    "w-full h-39px px-4 py-2 rounded-md border focus:border-2 border-gray-300 focus:border-blue-500 transition duration-300",
    isFocused  && "outline-none border-blue-500",
    {
      "border-red-500":!pass && !isFocused
    }
   
  );

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles}
        name={name}
        
      />
     {
      (verify && !pass && !isFocused) && (
        <div className="absolute text-red-500">asdfsadf</div>
      )
     }
    </div>
  );
};

export default CustomInput;


