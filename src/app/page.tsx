import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetGroups from "@/components/TargetGroups";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Strengths from "@/components/Strengths";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
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
        <TargetGroups />
        <Benefits />
        <Stats />
        <WhyUs />
        <Strengths />
        <Services />
        <CtaBanner />
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
