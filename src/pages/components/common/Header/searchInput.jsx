export default function Search() {
  return (
    <div
      className="     
        flex
        md:justify-between
        md:pt-0
        "
    >
      <input className="outline-none rounded-l-md border border-blue w-171px h-30px box-border pl-10px text-xs font-normal text-gray"  placeholder="搜索更多内容"></input>
      <div className="rounded-r-md bg-blue w-30px h-30px flex items-center justify-center relative right-2">
        <img
          className="w-16px h-16px"
          src="/icon/searchIcon.png"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
}
