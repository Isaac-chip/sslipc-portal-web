import { useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/tools.scss";
import { divide } from "lodash";
import Header from "./components/common/Header/index";
import Footer from "./components/common/Footer";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import('@themesberg/flowbite')
  // }, [])
  return (
    <div className="flex flex-col justify-between  min-h-screen overflow-x-hidden3" style={{background:"#F9F9F9"}}>
      <div>
        <Header></Header>

        <Component {...pageProps} />
      </div>

      <Footer className=""></Footer>
    </div>
  );
}
