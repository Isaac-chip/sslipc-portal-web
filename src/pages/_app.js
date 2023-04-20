import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "@/styles/tools.scss";
import classNames from "classnames";

import Header from "./components/common/Header/index";
import Footer from "./components/common/Footer";

export default function App({ Component, pageProps }) {
  const [isShowRootComponent, setIsShowRootComponent] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname == "/login" || router.pathname == "/register") {
      setIsShowRootComponent(false);
    } else {
      setIsShowRootComponent(true);
    }
  }, [router.pathname]);
  const pageBgColorList = {
    "/expertDetail": "#FFFFFF",
    "/expert": "#FFFFFF",
    "/projectArea": "#FFFFFF",
    "/newsDetail": "#FFFFFF",
    "/login": "#FFFFFF",
  
  };
  return (
    <div
      className={classNames(
        "flex flex-col justify-between  min-h-screen overflow-x-hidden"
      )}
      style={{
        background: pageBgColorList[router.pathname]
          ? pageBgColorList[router.pathname]
          : "#F9F9F9",
      }}
    >
      <div className={classNames({ hidden: !isShowRootComponent })}>
        <Header></Header>
      </div>
      <div className="flex-grow"> 
      <Component {...pageProps} />
      </div>
      
      <div className={classNames({ hidden: !isShowRootComponent })}>
        <Footer></Footer>
      </div>
    </div>
  );
}
