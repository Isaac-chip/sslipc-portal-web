import Image from "next/image";
import { useRouter } from 'next/router'
import Button from "./button";
import ExpertCard from "./ExpertCard";
export default function Expert() {
  const count = 9;
  const router = useRouter()
  return (
    <div className="container mx-auto">
      <Image
        className="mx-auto"
        width={504}
        height={84}
        src="/expert/zhuanjia.png"
      ></Image>
      <div className="flex justify-between">
        <Button text="首席专家"></Button>
        <Button text={"法律专家"}></Button>
        <Button text={"投资专家"}></Button>
        <Button text={"技术专家"}></Button>
        <Button text={"知识产权专家"}></Button>
      </div>
      <div className="mt-40px mb-131px flex flex-wrap sm:justify-between justify-center flex-1">
        {new Array(count).fill("")?.map((item) => {
          return (
            <div className="mb-40px" onClick={()=>router.push('/expertDetail?id=123')}>
              <ExpertCard></ExpertCard>
            </div>
          );
        })}
       
      </div>
    </div>
  );
}
