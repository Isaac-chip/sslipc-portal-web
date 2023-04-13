import Top from "./top";
import Center from "./center";
import Bottom from "./bottom";
export default function PatentDetail() {
  return (
    <div className="container mx-auto">
      <div className="mt-4">
        <Top></Top>
      </div>
      <Center></Center>
      <div className="mt-4 bg-white">
        <Bottom></Bottom>
      </div>
    </div>
  );
}
