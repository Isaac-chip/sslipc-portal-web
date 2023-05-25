import Summary from "./components/financial/summary";
export default function securitizationPage() {
  return (
    <>
      <img
        className="w-full"
        src="/securitization/banner@2x.png"
        alt=""
        srcset=""
      />
      <div className="container mx-auto">
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/sdts@2x.png"
          titleImg="/securitization/title1@2x.png"
        ></Summary>
      </div>
    </>
  );
}
