import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import "@/styles/tools.scss";
import classNames from "classnames";
import Header from "./components/common/Header/index";
import Footer from "./components/common/Footer";
import ToolsBar from "./components/common/ToolsBar";

export default function App({ Component, pageProps }) {
  const [isShowRootComponent, setIsShowRootComponent] = useState(true);
  const router = useRouter();
  const [openTabType, setOpenTabType] = useState(null);

  useEffect(() => {
    if (
      router.pathname == "/login" ||
      router.pathname == "/register" ||
      router.pathname == "/resetPassword"
    ) {
      setIsShowRootComponent(false);
    } else {
      setIsShowRootComponent(true);
    }
    if (router.pathname == "/") {
      setOpenTabType("_blank");
    } else {
      setOpenTabType("_self");
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
        {isShowRootComponent && router.pathname != "/" && (
          <div
            className="relative"
            style={{ background: "#F0F3F7", minHeight: "70px" }}
          >
            <ToolsBar
              openTabType={openTabType}
              theme={{
                toolsBar: {
                  base: "w-full hover:bg-gray-200 hover:h-96  absolute z-50",
                },
              }}
            ></ToolsBar>
          </div>
        )}

        <div className="flex-grow">
          <Component {...pageProps} />
        </div>

        <div className={classNames({ hidden: !isShowRootComponent })}>
          <Footer></Footer>
        </div>
      </div>
  );
}
