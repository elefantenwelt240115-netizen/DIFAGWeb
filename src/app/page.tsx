import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import VideoSection from "@/components/VideoSection";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Stats />
        <Services />
        <ContactForm />
        <VideoSection />
        <Trust />
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
    </>
  );
}
