import BestCustom from "@/components/home/BestCustom";
import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Services from "@/components/home/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

    <>
      <Navbar />
      <Hero />
      <Services />
      <BestCustom />
      <Map />
    </>

  );
}
