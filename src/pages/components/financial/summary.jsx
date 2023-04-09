import classNames from "classnames";

export default function Summary({
  children,
  titleImg,
  bgImg,
  titleImgClass,
  bgImgClass,
  rootClass
}) {
  return (
    <div>
      <div className={classNames("flex justify-between items-center",rootClass)}>
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
