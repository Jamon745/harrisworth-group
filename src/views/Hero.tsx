import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../assets/harrisworthConsult-main.png";
import HeroImg from "../assets/heroimg.jpg";
import HeroImg2 from "../assets/heroimg2.jpg";
import HeroImg3 from "../assets/heroImg3.jpg";
import HeroImg4 from "../assets/heroImg4.jpg";
import HeroImg5 from "../assets/heroImg5.jpg";
import HeroImg6 from "../assets/heroImg6.jpg";



const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    HeroImg,
    HeroImg2,
    HeroImg3,
    HeroImg4,
    HeroImg5,
    HeroImg6,
  ];

  const navItems = ["Home", "About", "Services", "How it Works", "Contact Us"];

  // Smooth scroll function
  const handleNavClick = (e:React.MouseEvent<HTMLAnchorElement>, item:string) => {
    e.preventDefault();
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 z-0"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-700/80 z-10" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="container mx-auto px-6 py-6">
          <div className="-mt-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-white font-bold text-2xl">
                <img src={Logo} alt="Company's Logo" />
              </div>
              <span className="text-xl lg:text-3xl font-bold text-orange-400">
                Harrisworth <span className="text-[#0cc1e0]">Consult</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-xl font-semibold text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black/80 bg-opacity-10 backdrop-blur-md rounded-lg p-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block text-white hover:text-[#0cc1e0] py-2 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold text-orange-400 mb-6 leading-tight">
              Transform Your
              <span className="block text-[#0cc1e0]">Educational Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Expert guidance to help students, parents and schools achieve
              their academic goals and unlock their full potential
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-[#0cc1e0] hover:bg-[#50a2ff] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-orange-400 bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
                Book Appointment
              </button>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 mt-12">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-white w-8"
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
