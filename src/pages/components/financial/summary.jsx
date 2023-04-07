import classNames from "classnames";

export default function Summary({
  children,
  titleImg,
  bgImg,
  titleImgClass,
  bgImgClass,
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img
          className={classNames(titleImgClass)}
          src={titleImg}
          alt=""
          srcset=""
        />
        <img className={classNames(bgImgClass)} src={bgImg} alt="" srcset="" />
      </div>
      <div>{children}</div>
    </div>
  );
}
