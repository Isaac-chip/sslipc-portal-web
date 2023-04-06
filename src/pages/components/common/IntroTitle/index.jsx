import classNames from "classnames";
export default function IntroTitle({ title, desc,textColor="text-black" }) {
  return (
    <div>
      <p className={classNames("text-xxxl font-bold text-center",textColor)}>{title}</p>
      <p className={classNames("text-xs text-center",textColor)}>{desc}</p>
    </div>
  );
}
