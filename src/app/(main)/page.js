import About from "@/components/about/page";
import Hero from "@/components/Hero";
import OffersTwo from "../(details)/offersTwo/page";
import TopOffer from "@/components/TopOffer";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <TopOffer />
      <OffersTwo />
    </section>
  );
}
