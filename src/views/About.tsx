// import React from "react";
import { GraduationCap, Target, FileCheck, Globe } from "lucide-react";

export default function AboutPage() {
  const benefits = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Guidance",
      description:
        "Personalized academic planning and course selection strategies to help students achieve their educational goals and maximize their potential.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Counseling",
      description:
        "Expert guidance in career exploration, professional development, and strategic planning to align academic pursuits with future career aspirations.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Test Preparation",
      description:
        "Comprehensive test prep programs for SAT, ACT, GRE, GMAT, and other standardized exams with proven strategies for success.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Study Abroad Support",
      description:
        "End-to-end assistance for international education including university selection, application process, and visa guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#50a2ff]  text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering students to achieve their academic dreams and career
              aspirations
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We are a dedicated team of educational consultants with a passion
            for transforming students' academic journeys into success stories.
            With years of combined experience in education, admissions, and
            career development, we understand the challenges students face in
            today's competitive academic landscape.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our consultancy was founded on the belief that every student
            deserves personalized guidance and support to reach their full
            potential. We work closely with students and families to navigate
            the complex world of higher education, test preparation, and career
            planning with confidence and clarity.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-[#50a2ff] rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide exceptional, personalized educational consulting services
            that empower students to make informed decisions about their
            academic and professional futures. We strive to bridge the gap
            between aspiration and achievement, offering strategic guidance,
            expert insights, and unwavering support at every step of the
            educational journey.
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How We Help You Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-16 h-16 bg-[#50a2ff]  rounded-lg flex items-center justify-center text-white shadow-lg">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#50a2ff]  rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's work together to turn your educational goals into reality
          </p>
          <button className="bg-white text-[#50a2ff] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
