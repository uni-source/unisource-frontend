import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import HeaderStats from "./components/homestats/homestats";
import Topic from "./components/topics/topics";
import Cslider from "./components/companyslider/companyslider";
import Tslider from "./components/technologyslider/techslider";
import Benefits from "./components/benefit_grid/benefits";
import NavScrollExample from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
    <NavScrollExample />
    <Header />
    <HeaderStats />
    <Topic message="Our Partners"/>
    <Cslider />
    <Topic message="Key Benefits"/>
    <Benefits />
    <Topic message="Technologies You Reach Here"/>
    <Tslider />
    <Footer />
    </>
  );
}
