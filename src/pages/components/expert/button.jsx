export default function Button({ text }) {
  return (
      <div
        className="leading-3 truncate w-160px h-52px text-white font-bold text-lg sm:flex justify-center items-center"
        style={{ background: "#2B2B2B",lineHeight:"50px" }}
      >
        {text}
      </div>

  );
}
