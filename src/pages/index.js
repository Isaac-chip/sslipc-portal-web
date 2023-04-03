import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "./components/common/Header/index";
// import Banner from "./components/banner/index";
const Banner = dynamic(() => import("./components/banner/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - TitleMetaNextjs</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
      </Head>
      <div>
        <Header></Header>
        <Banner></Banner>
      </div>
    </div>
  );
}
