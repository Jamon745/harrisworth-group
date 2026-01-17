import { Calendar, Mail, MessageSquareReply, Phone, User, X } from "lucide-react";
import { useState, useEffect } from "react";

type FormType = "get-started" | "book-appointment" | null;

interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const COMPANY_EMAIL = "kingjaymes76@gmail.com";

   const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });

  const steps = [
    {
      number: "01",
      title: "Book a Consultation",
      description:
        "Schedule a free initial consultation at a time that works for you. We'll discuss your student's current situation, challenges, and educational goals.",
      color: "bg-[#0cc1e0]",
    },
    {
      number: "02",
      title: "Assess Student Needs",
      description:
        "Through detailed evaluation and conversation, we identify your student's learning style, strengths, areas for improvement, and specific academic requirements.",
      color: "bg-orange-400",
    },
    {
      number: "03",
      title: "Personalised Plan",
      description:
        "We create a customised educational roadmap tailored to your student's unique needs, complete with actionable strategies, resources, and clear milestones.",
      color: "bg-[#0cc1e0]",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "Stay connected with regular check-ins, progress updates, and continuous guidance. We adjust strategies as needed to ensure consistent growth and success.",
      color: "bg-orange-400",
    },
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: any) => {
    setCurrentStep(index);
  };

  const currentStepData = steps[currentStep];

  
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
    <div className="min-h-screen overflow-x-hidden bg-linear-to-br from-[#0cc1e0] to-orange-200">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Our straightforward process ensures every student receives the
          personalized support they need to thrive academically
        </p>
      </section>

      {/* Slideshow Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Main Slide */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 min-h-56 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out">
            {/* Icon */}
            <div
              className={`${currentStepData.color} w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg mb-8 transition-all duration-500`}
            >
              {/* Number */}
              <span className="text-6xl font-bold text-white">
                {currentStepData.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#0cc1e0] mb-6 transition-all duration-500">
              {currentStepData.title}
            </h3>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-500">
              {currentStepData.description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStep}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2
           bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg
           transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextStep}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2
           bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg
           transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {steps.map((_step, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentStep
                  ? "w-12 h-3 bg-[#0cc1e0]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Step Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-600 font-medium">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <style>{`
        @keyframes blink {
          0%, 100% { color: #0cc1e0; }
          50% { color: #fb923c; }#ff8904
        }
        .blink-button-text {
          animation: blink 2s ease-in-out infinite;
        }
        button:hover .blink-button-text {
          animation: none;
          opacity: 1;
        }
      `}</style>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-linear-to-br from-[#0cc1e0] to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Let's work together to turn your educational goals into reality
          </p>
          <button
            onClick={() => setActiveForm("book-appointment")}
            className="bg-white text-[#0cc1e0] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="blink-button-text">Schedule a Consultation</span>
          </button>
        </div>
        {/* Modal Overlay */}
        {activeForm && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Schedule Appointment Form */}
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
              Schedule a consultation with our expert advisors. We're here to
              help you succeed.
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
                  <option value="academic-planning">Academic Planning</option>
                  <option value="college-prep">College Preparation</option>
                  <option value="tutoring">Tutoring Services</option>
                  <option value="career-counseling">Career Counseling</option>
                  <option value="test-prep">Test Preparation</option>
                  <option value="consultation">General Consultation</option>
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
                  <MessageSquareReply className="inline mr-2" size={18} />
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
}
