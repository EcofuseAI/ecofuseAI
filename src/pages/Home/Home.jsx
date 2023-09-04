import About from "../../components/Home/About/About";
import Community from "../../components/Home/Community/Community";
import Contact from "../../components/Home/Contact/Contact";
import EcosystemPartners from "../../components/Home/EcosystemPartners/EcosystemPartners";
import Features from "../../components/Home/Features/Features";
import FeaturesHighlights from "../../components/Home/FeaturesHighlights/FeaturesHighlights";
import Hero from "../../components/Home/Hero/Hero";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Welcome from "../../components/Home/Welcome/Welcome";

const Home = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      <FeaturesHighlights />
      <About />
      <Features />
      <EcosystemPartners />
      <Community />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
