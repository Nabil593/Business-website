import "./App.css";
import Hero from "./componants/Hero.jsx";
import Navber from "./componants/Navber.jsx";
import CompanyLogo from "./componants/CompanyLogo.jsx";
import PurposeSection from "./componants/PurposeSection.jsx";
import FeaturesSection from "./componants/FeaturesSection.jsx";
import ScheduleSection from "./componants/ScheduleSection.jsx";
import MonitorSection from "./componants/MonitorSection.jsx";
import PriceSection from "./componants/PriceSection.jsx";
import ServicesSection from "./componants/ServicesSection.jsx";
import TestimonialsSection from "./componants/TestimonialsSection.jsx";
import NewsletterSection from "./componants/NewsletterSection.jsx";
import FooterSection from "./componants/FooterSection.jsx";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-[80px]
      -z-10"
      ></div>
      <div className="overflow-hidden">
        <Navber />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PriceSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <FooterSection />
      </div>
    </main>
  );
}

export default App;
