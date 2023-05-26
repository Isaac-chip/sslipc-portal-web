

import PatentAlerts from "./components/patentAlerts"



export default function patentAlertsPage(){
    return (
      <>
        <img className="w-full" src="/patentAlerts/banner3.png" alt="" srcset="" />
        <div className="container mx-auto mt-20px bg-white">
          <PatentAlerts></PatentAlerts> 
        </div>
      </>
      
    )
}