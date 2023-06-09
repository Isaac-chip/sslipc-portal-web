import React, { useState } from "react";
import classNames from "classnames";

const CustomInput = ({
  value = () => {},
  onChange,
  placeholder,
  styles,
  name,
  verify,
  rules,
  icon,
  type="text"
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [pass, setPass] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    let pass = false;
    if (e.target.value != "") {
      pass = true;
    }
    setPass(pass);
    value({ [name]: { value: e.target.value, pass: pass } });
  };

  const inputClasses = classNames(
    "w-full h-39px px-4 py-2 rounded-md border focus:border-2 border-gray-300 focus:border-blue-500 transition duration-300",
    isFocused && "outline-none border-blue-500",
    {
      "border-red-500": !pass && !isFocused && verify,
    },
    {
      "pl-8": icon,
    }
  );

  return (
    <div
      className={classNames("relative")}
    >
      <div className="flex items-center">
        {icon && (
          <img
            className="absolute ml-2  w-25px h-25px items-center"
            src={icon}
            alt=""
            srcset=""
          />
        )}
        <input
          placeholder={placeholder}
          className={inputClasses}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles}
          name={name}
          verify={verify}
          type={type}
        />
      </div>

      {verify && !pass && !isFocused && (
        <div className="absolute text-red-500 text-14">
          {rules?.required || "请填写信息"}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
