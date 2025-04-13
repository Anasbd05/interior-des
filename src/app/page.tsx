import BestCustom from "@/components/home/BestCustom";
import BestSeller from "@/components/home/BestSeller";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Services from "@/components/home/Services";

export default function Home() {
  return (

    <>
      <Hero />
      <Services />
      <BestCustom />
      <BestSeller />
      <Map />
      <Footer />
    </>

  );
}
