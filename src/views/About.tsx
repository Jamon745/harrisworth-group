
export default function AboutPage() {
  

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0cc1e0]  text-white">
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
        <div className="bg-[#0cc1e0] rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white">
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
      </div>
    </div>
  );
}
