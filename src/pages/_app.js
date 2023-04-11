import { useEffect } from "react";
import { useRouter } from 'next/router'
import "@/styles/globals.css";
import "@/styles/tools.scss";
import Header from "./components/common/Header/index";
import Footer from "./components/common/Footer";


export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import('@themesberg/flowbite')
  // }, [])
  const router = useRouter()
  console.log(router.pathname) 
  const pageBgColorList = {
    "/expertDetail":"#FFFFFF",
    "/expert":"#FFFFFF"
  }
  return (
    <div className="flex flex-col justify-between  min-h-screen overflow-x-hidden" style={{background:pageBgColorList[router.pathname]?pageBgColorList[router.pathname]:"#F9F9F9"}}>
      <div>
        <Header></Header>

        <Component {...pageProps} />
      </div>

      <Footer className=""></Footer>
    </div>
  );
}
