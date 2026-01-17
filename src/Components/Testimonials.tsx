import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  gender: "male" | "female";
  university: string;
  major: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    gender: "female",
    university: "Stanford University",
    major: "Computer Science",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    text: "Harriswoth Consult completely transformed my college application process. Their personalized guidance helped me identify my strengths and craft compelling essays that truly reflected who I am. I'm now studying at my dream school!",
  },
  {
    id: 2,
    name: "Michael Thompson",
    gender: "male",
    university: "MIT",
    major: "Engineering",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "The consultants at Harriswoth didn't just help me get into MIT—they helped me discover my passion for engineering. Their strategic approach to test prep and extracurricular planning was invaluable. I couldn't have done it without them.",
  },
  {
    id: 3,
    name: "David Rodriguez",
    gender: "male",
    university: "Yale University",
    major: "Political Science",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Working with Harriswoth Consult was the best investment in my future. They provided expert advice on everything from course selection to scholarship applications. Their team genuinely cares about student success and it shows in the results.",
  },
  {
    id: 4,
    name: "Emily Watson",
    gender: "female",
    university: "Princeton University",
    major: "Biology",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "I was struggling with my SAT scores and felt overwhelmed by the college process. Harriswoth's dedicated tutors helped me improve my scores by 200 points and their application coaches helped me secure admission to Princeton with a full scholarship!",
  },
  {
    id: 5,
    name: "James Park",
    gender: "male",
    university: "Columbia University",
    major: "Business Administration",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Harriswoth Consult's holistic approach made all the difference. They didn't just focus on grades and test scores—they helped me develop leadership skills and build a compelling narrative. Their support throughout my journey was exceptional.",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex flex-col items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100 mb-4"
        />
        <h3 className="font-bold text-xl text-orange-400 text-center">
          {testimonial.name}
        </h3>
        <p className="text-base font-semibold text-[#0cc1e0] text-center mt-1">
          {testimonial.major}
        </p>
        <p className="text-sm text-gray-600 text-center">
          {testimonial.university}
        </p>
      </div>

      <div className="flex justify-center mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed italic text-center grow">
        "{testimonial.text}"
      </p>
    </div>
  );
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, maxIndex]);

  

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0cc1e0] mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            We are dedicated to empowering students to achieve academic
            excellence and here are what some of them have to say.
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / slidesToShow}% - ${((slidesToShow - 1) * 24) / slidesToShow}px)`,
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-[#0cc1e0] text-[#0cc1e0] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-[#0cc1e0] text-[#0cc1e0] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#0cc1e0]"
                  : "w-3 bg-gray-300 hover:bg-[#0cc1e0]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
