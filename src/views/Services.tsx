import { GraduationCap, Target, FileCheck, Globe } from "lucide-react";

function Services() {
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
    <div>
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
                <div className="shrink-0 w-16 h-16 bg-[#0cc1e0]  rounded-lg flex items-center justify-center text-white shadow-lg">
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
      <div className="bg-[#0cc1e0]  rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Let's work together to turn your educational goals into reality
        </p>
        <button className="bg-white text-[#0cc1e0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
}

export default Services
