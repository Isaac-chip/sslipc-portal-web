import classNames from "classnames";
export default function IntroTitle({ title, desc,textColor="text-black" }) {
  return (
    <div>
      <p className={classNames("text-xxxl font-bold text-center",textColor)}>{title}</p>
      <p className={classNames("text-sm text-center scale-75",textColor)}>{desc}</p>
    </div>
  );
}
