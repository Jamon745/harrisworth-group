import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

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

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0cc1e0] mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous step"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next step"
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
        <div className="bg-[#0cc1e0] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Let's work together to turn your educational goals into reality
          </p>
          <button className="bg-white text-[#0cc1e0] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span className="blink-button-text">Schedule a Consultation</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0cc1e0] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; 2026 Harrisworth Consult. All rights reserved | Powered by
            Jamon Technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
