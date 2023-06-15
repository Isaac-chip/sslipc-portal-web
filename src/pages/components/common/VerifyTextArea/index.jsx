import TextArea from "../TexTArea";
export default function VerifyTextArea({verify=false,label,placeholder="简述申请需求"}) {
  return (
    <>
      <div className="flex w-full mt-4">
        <div className="w-72px flex flex-shrink-0 relative mr-2">
         {verify &&  <span className="text-red-500 text-lg ">*</span>}
          {label}
        </div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </>
  );
}
