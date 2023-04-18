import TabsPlus from "../../common/TabsPlus";
import Card from "../card";
export default function Bottom() {
  const tabs = [
    {
      label: "相似推荐",
      content: (
        <div style={{ display: "flex", overflowX: "auto" }}>
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {
                new Array(10).fill()?.map((item)=>{
                    return (
                        <Card></Card>
                    )
                })
            }
            
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="mb-100px">
      <TabsPlus activeTab={0} tabs={tabs}></TabsPlus>
    </div>
  );
}
