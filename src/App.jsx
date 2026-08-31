import "./App.css";
import LandingPageBgGradient from "./components/gradients/LandingPageBgGradient";
import HeaderSection from "./components/sections/HeaderSection";
import AboutSection from "./components/sections/AboutSection";
import SignupSection from "./components/sections/SignupSection";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <div className='relative min-h-screen text-white flex flex-col overflow-hidden [text-shadow:0_2px_12px_rgba(0,0,0,0.75)]'>
      <LandingPageBgGradient />

      <HeaderSection />

      <AboutSection />

      <SignupSection />

      <Footer />
    </div>
  );
};

export default App;
