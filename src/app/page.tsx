import Image from "next/image";
import Header from "./copmonents/Header-1/page";
import HeroSec1 from "./copmonents/Hero-Sec-01/page";
import Footer1 from "./copmonents/Footer-1/page";
import HeroSec2 from "./copmonents/Hero-Sec-02/page";
import HeroSec3 from "./copmonents/Hero-Sec-03/page";
import HeroSec from "./copmonents/Hero-Sec-04/page";
import MainLastHeroSec from "./copmonents/Main-Last-Hero-Sec/page";
import MainFooter from "./copmonents/Main-Footer/page";
// import NextPage1 from "./Next-Page-01/page";

export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSec1/>
    <Footer1/>
    <HeroSec2/>
    <HeroSec3/>
    <HeroSec/>
    <MainLastHeroSec/>
    <MainFooter/>
    {/* <NextPage1/> */}
   </div>
  );
}
