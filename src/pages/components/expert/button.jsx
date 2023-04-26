import classNames from "classnames";
export default function Button({ text,activity }) {
  return (
      <div
        className={classNames("leading-3 truncate w-160px h-52px text-white font-bold text-lg sm:flex justify-center items-center",{"bg-blue":activity})}
        style={{ background: activity?"#3078EC":"#2B2B2B",lineHeight:"50px"}}
      >
        {text}
      </div>

  );
}
