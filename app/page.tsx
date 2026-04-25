import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Concept } from "@/components/Concept";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Access } from "@/components/Access";
import { ReservationCTA } from "@/components/ReservationCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Gallery />
        <InstagramFeed />
        <Access />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
