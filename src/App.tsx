import Hero from "./views/Hero";
import "./App.css";
import AboutPage from "./views/About";
import Services from "./views/Services";
import HowItWorks from "./views/HowItWorks";
import ContactUs from "./views/ContactUS";

function App() {
  return (
    <>
      <div>
        {/* Hero section with id="home" */}
        <div id="home">
          <Hero />
        </div>

        {/* About section with id="about" */}
        <div id="about">
          <AboutPage />
        </div>

        {/* Services section with id="services" */}
        <div id="services">
          <Services />
        </div>

        {/* How it Works section with id="how-it-works" */}
        <div id="how-it-works">
          <HowItWorks />
        </div>

        {/* Contact us section with id="contact-us" */}
        <div id="contact-us">
          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default App;
