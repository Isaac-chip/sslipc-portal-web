import classNames from "classnames";

export default function StepsButton({hasPreBtn=true,next}) {
  return (
    <div className="flex mx-auto max-w-xl">
      <div className={classNames("cursor-pointer w-200px h-48px rounded border-2 border-blue-700 text-lg text-blue-700 font-bold flex justify-center items-center bg-white",{"hidden":!hasPreBtn})}>
        上一步
      </div>
      <div onClick={next} className="ml-2 cursor-pointer bg-blue w-460px h-48px rounded text-lg text-white flex justify-center items-center">下一步</div>
    </div>
  );
}