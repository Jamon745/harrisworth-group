import { GraduationCap, Target, FileCheck, Globe } from "lucide-react";

function Services() {
        const benefits = [
          {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Academic Guidance",
            description:
              "Personalized academic planning and course selection strategies to help students achieve their educational goals and maximize their potential.",
            color: "bg-[#0cc1e0]",
          },
          {
            icon: <Target className="w-8 h-8" />,
            title: "Career Counseling",
            description:
              "Expert guidance in career exploration, professional development, and strategic planning to align academic pursuits with future career aspirations.",
            color: "bg-orange-400",
          },
          {
            icon: <FileCheck className="w-8 h-8" />,
            title: "Test Preparation",
            description:
              "Comprehensive test prep programs for SAT, ACT, GRE, GMAT, and other standardized exams with proven strategies for success.",
            color: "bg-[#0cc1e0]",
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Study Abroad Support",
            description:
              "End-to-end assistance for international education including university selection, application process, and visa guidance.",
            color: "bg-orange-400",
          },
        ];
  return (
    <div>
      {/* Key Benefits Section */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-4xl font-bold text-[#0cc1e0] text-center mb-12">
          How We Help You Succeed
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`${benefit.color} shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-white shadow-lg`}>
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
    </div>
  );
}

export default Services
