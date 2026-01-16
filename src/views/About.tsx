import { useState } from "react";

export default function AboutPage() {
  // State to track expanded/collapsed state for each section
  const [showFullWhoWeAre, setShowFullWhoWeAre] = useState(false);
  const [showFullMission, setShowFullMission] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#0cc1e0] to-blue-500  text-white">
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

      {/* Who We Are Section - WITH TEXT CLIPPING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0cc1e0] mb-6">
            Who We Are
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed">
            {/* First paragraph with line-clamp-4 on mobile */}
            <p
              className={`mb-4 ${
                !showFullWhoWeAre ? "line-clamp-4 md:line-clamp-none" : ""
              }`}
            >
              We are a dedicated team of educational consultants with a passion
              for transforming students' academic journeys into success stories.
              With years of combined experience in education, admissions, and
              career development, we understand the challenges students face in
              today's competitive academic landscape.
            </p>
            {/* Second paragraph - hidden on mobile unless expanded */}
            <p className={`${!showFullWhoWeAre ? "hidden md:block" : ""}`}>
              Our consultancy was founded on the belief that every student
              deserves personalized guidance and support to reach their full
              potential. We work closely with students and families to navigate
              the complex world of higher education, test preparation, and
              career planning with confidence and clarity.
            </p>
            {/* Read More/Less button - only visible on mobile */}
            <button
              onClick={() => setShowFullWhoWeAre(!showFullWhoWeAre)}
              className="md:hidden text-[#0cc1e0] font-semibold mt-2 hover:underline"
            >
              {showFullWhoWeAre ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Mission Section - WITH TEXT CLIPPING */}
        <div className="bg-linear-to-br from-[#0cc1e0] to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <div className="text-lg leading-relaxed">
            {/* Text with line-clamp-4 on mobile */}
            <p
              className={`${
                !showFullMission ? "line-clamp-4 md:line-clamp-none" : ""
              }`}
            >
              To provide exceptional, personalized educational consulting
              services that empower students to make informed decisions about
              their academic and professional futures. We strive to bridge the
              gap between aspiration and achievement, offering strategic
              guidance, expert insights, and unwavering support at every step of
              the educational journey.
            </p>
            {/* Read More/Less button - only visible on mobile */}
            <button
              onClick={() => setShowFullMission(!showFullMission)}
              className="md:hidden text-white font-semibold mt-2 hover:underline"
            >
              {showFullMission ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
