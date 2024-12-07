import Footer from "@/components/footer";
import TopHeader, { Header } from "@/components/Header";
import Hero, { CardDetails, Hero1, Hero3 } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <TopHeader/>
    <Header/>
    <Hero/>
    <Hero1/>
    <CardDetails/>
    <Hero3/>
    
    <br />
    <Footer/>
   </div>
  );
}
