import Select from "react-select";

export default function SelectPlus({ options, onChange }) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      "&:hover": {
        borderColor: state.isFocused ? "#3C76F3" : "",
      },
      border: state.isFocused ? "1px solid #3C76F3" : "1px solid (0, 0%, 80%)",
    }),
  };
  return (
    <>
      <Select
        placeholder="关键字"
        options={options}
        onChange={onChange}
        className="w-40 rounded-md "
        classNamePrefix="select"
        styles={customStyles}
      />
    </>
  );
}
