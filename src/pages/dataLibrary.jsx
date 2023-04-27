import Link from "next/link";

export default function dataLibrary() {
  return (
    <>
      <img
        className="w-570px h-84px mx-auto mt-32px mb-60px"
        src="/dataLibrary/zhuanjia.png"
        alt=""
        srcset=""
      />
      <div className="grid container max-w-5xl grid-cols-3 mx-auto">
        <Link
          target={"_blank"}
          href="https://workspace.zhihuiya.com/detail/patent/folders?spaceId=69ff234ac0df4378b5293b8bd4de747e&page=1&tab=folder&folderId=8cd6df13a8bd43e4a813929c18530877&spaceBasicType=navigation"
        >
          <img
            className="w-300px h-180px"
            src="/dataLibrary/bandaoti.png"
            alt=""
            srcset=""
          />
        </Link>
        <Link
          target={"_blank"}
          href="https://workspace.zhihuiya.com/detail/patent/folders?spaceId=6084a24701304da391644a773c43108f&page=1&tab=folder&folderId=4271489c713e433f9cb056898abb38f0&spaceBasicType=navigation"
        >
          <img
            className="w-300px h-180px"
            src="/dataLibrary/ai.png"
            alt=""
            srcset=""
          />
        </Link>
        <Link
          target={"_blank"}
          href="https://workspace.zhihuiya.com/detail/patent/folders?spaceId=55c9489ea0ea43e59aa32bd84559ccb7&page=1&tab=folder&folderId=a33796e7a195418f87ca136a1d17bbef&spaceBasicType=navigation"
        >
          <img
            className="w-300px h-180px"
            src="/dataLibrary/5g.png"
            alt=""
            srcset=""
          />
        </Link>
      </div>
    </>
  );
}
