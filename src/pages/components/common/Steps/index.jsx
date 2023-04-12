export default function Steps({step=1}) {
  return (
    <div className="mx-auto">
  
      <img
      
        className="mx-auto max-w-sm  sm:max-w-md md:max-w-xl lg:max-w-2xl  px-10 pt-4"
        src={`/steps/jindu${step}.png`}
        alt=""
        srcset=""
      />
    </div>
  );
}
