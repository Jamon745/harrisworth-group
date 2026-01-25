import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  GraduationCap,
  FileText,
  Menu,
  ArrowRight,
} from "lucide-react";
import Logo from "../assets/harrisworthConsult-main.png";
import HeroImg from "../assets/heroimg.jpg";
import HeroImg2 from "../assets/heroimg2.jpg";
import HeroImg3 from "../assets/heroImg3.jpg";
import HeroImg4 from "../assets/heroImg4.jpg";
import HeroImg5 from "../assets/heroImg5.jpg";
import HeroImg6 from "../assets/heroImg6.jpg";

type FormType = "get-started" | "book-appointment" | null;

interface GetStartedFormData {
  fullName: string;
  email: string;
  phone: string;
  studentGrade: string;
  interests: string;
  goals: string;
}

interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const Hero: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [getStartedData, setGetStartedData] = useState<GetStartedFormData>({
    fullName: "",
    email: "",
    phone: "",
    studentGrade: "",
    interests: "",
    goals: "",
  });
  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

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
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string,
  ) => {
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
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

 const COMPANY_EMAIL = "kingjaymes76@gmail.com";

 const handleGetStartedSubmit = () => {
   if (
     !getStartedData.fullName ||
     !getStartedData.email ||
     !getStartedData.phone ||
     !getStartedData.studentGrade ||
     !getStartedData.interests ||
     !getStartedData.goals
   ) {
     alert("Please fill in all required fields");
     return;
   }

   const subject = encodeURIComponent("New Get Started Form Submission");
   const body = encodeURIComponent(`
Full Name: ${getStartedData.fullName}
Email: ${getStartedData.email}
Phone: ${getStartedData.phone}
Grade Level: ${getStartedData.studentGrade}
Interests: ${getStartedData.interests}
Goals: ${getStartedData.goals}
`);

   window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

   setActiveForm(null);
   setGetStartedData({
     fullName: "",
     email: "",
     phone: "",
     studentGrade: "",
     interests: "",
     goals: "",
   });
 };


 const handleAppointmentSubmit = () => {
   if (
     !appointmentData.fullName ||
     !appointmentData.email ||
     !appointmentData.phone ||
     !appointmentData.serviceType ||
     !appointmentData.preferredDate ||
     !appointmentData.preferredTime
   ) {
     alert("Please fill in all required fields");
     return;
   }

   const subject = encodeURIComponent("New Appointment Booking Request");
   const body = encodeURIComponent(`
Full Name: ${appointmentData.fullName}
Email: ${appointmentData.email}
Phone: ${appointmentData.phone}
Service Type: ${appointmentData.serviceType}
Preferred Date: ${appointmentData.preferredDate}
Preferred Time: ${appointmentData.preferredTime}
Message: ${appointmentData.message || "N/A"}
`);

   window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

   alert(
     "Your appointment request has been received! We will confirm your booking soon.",
   );

   setActiveForm(null);
   setAppointmentData({
     fullName: "",
     email: "",
     phone: "",
     serviceType: "",
     preferredDate: "",
     preferredTime: "",
     message: "",
   });
 };


  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100 p-4">
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
        <nav className="container mx-auto px-2 py-6">
          <div className="-mt-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-white font-bold text-2xl">
                <img src={Logo} alt="Company's Logo" />
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-orange-400">
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
                  className="text-lg font-semibold text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer"
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
        {/* Hero Section with Buttons */}
        <div className="max-w-6xl mx-auto pt-2 pb-12">
          {/* Hero Content */}
          <div className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-120px)]">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-7xl font-bold text-orange-400 mb-6 leading-tight">
                Transform Your
                <span className="block text-[#0cc1e0]">
                  Educational Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                Expert guidance to help students, parents and schools achieve
                their academic goals and unlock their full potential
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setActiveForm("get-started")}
                  className="group bg-[#0cc1e0] hover:bg-[#50a2ff] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setActiveForm("book-appointment")}
                  className="bg-orange-400 bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  Book A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Overlay */}
        {activeForm && (
          <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Get Started Form */}
              {activeForm === "get-started" && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-[#0cc1e0]">
                      Get Started
                    </h2>
                    <button
                      onClick={() => setActiveForm(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={28} />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Take the first step toward academic success. Fill out the
                    form below and we'll create a personalized plan for you.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={18} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={getStartedData.fullName}
                        onChange={(e) =>
                          setGetStartedData({
                            ...getStartedData,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={18} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={getStartedData.email}
                        onChange={(e) =>
                          setGetStartedData({
                            ...getStartedData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={18} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={getStartedData.phone}
                        onChange={(e) =>
                          setGetStartedData({
                            ...getStartedData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <GraduationCap className="inline mr-2" size={18} />
                        Student Grade Level
                      </label>
                      <select
                        value={getStartedData.studentGrade}
                        onChange={(e) =>
                          setGetStartedData({
                            ...getStartedData,
                            studentGrade: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select grade level</option>
                        <option value="elementary">Elementary School</option>
                        <option value="middle">Middle School</option>
                        <option value="high">High School</option>
                        <option value="college">College</option>
                        <option value="graduate">Graduate School</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Interest
                      </label>
                      <input
                        type="text"
                        value={getStartedData.interests}
                        onChange={(e) =>
                          setGetStartedData({
                            ...getStartedData,
                            interests: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="e.g., Math, Science, Arts"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FileText className="inline mr-2" size={18} />
                        Educational Goals
                      </label>
                      <textarea
                        value={getStartedData.goals}
                        onChange={(e) =>
                          setGetStartedData({
                            ...getStartedData,
                            goals: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Tell us about your academic goals and what you hope to achieve..."
                      />
                    </div>

                    <button
                      onClick={handleGetStartedSubmit}
                      className="w-full py-4 bg-[#0cc1e0] text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}

              {/* Book Appointment Form */}
              {activeForm === "book-appointment" && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-[#0cc1e0]">
                      Book an Appointment
                    </h2>
                    <button
                      onClick={() => setActiveForm(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={28} />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Schedule a consultation with our expert advisors. We're here
                    to help you succeed.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={18} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={appointmentData.fullName}
                        onChange={(e) =>
                          setAppointmentData({
                            ...appointmentData,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={18} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={appointmentData.email}
                        onChange={(e) =>
                          setAppointmentData({
                            ...appointmentData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={18} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={appointmentData.phone}
                        onChange={(e) =>
                          setAppointmentData({
                            ...appointmentData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        value={appointmentData.serviceType}
                        onChange={(e) =>
                          setAppointmentData({
                            ...appointmentData,
                            serviceType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="academic-planning">
                          Academic Planning
                        </option>
                        <option value="college-prep">
                          College Preparation
                        </option>
                        <option value="tutoring">Tutoring Services</option>
                        <option value="career-counseling">
                          Career Counseling
                        </option>
                        <option value="test-prep">Test Preparation</option>
                        <option value="consultation">
                          General Consultation
                        </option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="inline mr-2" size={18} />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={appointmentData.preferredDate}
                          onChange={(e) =>
                            setAppointmentData({
                              ...appointmentData,
                              preferredDate: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          value={appointmentData.preferredTime}
                          onChange={(e) =>
                            setAppointmentData({
                              ...appointmentData,
                              preferredTime: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="inline mr-2" size={18} />
                        Additional Message
                      </label>
                      <textarea
                        value={appointmentData.message}
                        onChange={(e) =>
                          setAppointmentData({
                            ...appointmentData,
                            message: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Any specific topics you'd like to discuss? (Optional)"
                      />
                    </div>

                    <button
                      onClick={handleAppointmentSubmit}
                      className="w-full py-4 bg-[#0cc1e0] text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
