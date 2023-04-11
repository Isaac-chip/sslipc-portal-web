import Steps from "./"
export default function StepRootWrap({step=1,children}){
    return (
        <div className="mt-4">
              <Steps step={step}></Steps>
              <div className="mx-auto max-w-sm  sm:max-w-md md:max-w-xl lg:max-w-2xl pl-2 lg:pl-0 mt-2">
                {children}
              </div>
        </div>
    )
}