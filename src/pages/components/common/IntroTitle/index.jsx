export default function IntroTitle({ title, desc }) {
  return (
    <div>
      <p className="text-xxxl font-bold text-center">{title}</p>
      <p className="text-xs text-center">{desc}</p>
    </div>
  );
}
