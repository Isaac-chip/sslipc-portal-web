import classNames from "classnames";
import Label from "./label";

export default function Options({ items,labelText }) {
  const gridColsNum = items.length>7? 7:items.length
  return (
    <div className="flex">
      <div className="mt-4">
        <Label labelText={labelText}></Label>
      </div>
      <div className="flex items-center">
        <div
          className={classNames(`grid cursor-pointer border`)}
          style={{ background: "#F2F6FA", borderColor: "#E7EFF8",gridTemplateColumns: `repeat(${gridColsNum}, minmax(0, 1fr))` }}
        >
          {items.map((item,index) => {
            return (
              <div className={classNames("border-b",{"border-none":index+1>parseInt(items.length/gridColsNum)*gridColsNum})} style={{ borderColor: "#E7EFF8"}}>
                <div className={classNames(" justify-center text-lg h-22px hover:text-blue-700  border-r flex items-center px-4 box-border mt-12px mb-12px",{"border-none":(index+1)%gridColsNum==0})}>
                 {item.title} 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
