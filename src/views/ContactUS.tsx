import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  User,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
type SubmitStatus = "success" | "error" | "validation-error" | null;

 const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

 const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
   e.preventDefault();

   // ✅ Simple validation
   const isFormIncomplete = Object.values(formData).some(
     (value) => value.trim() === ""
   );

   if (isFormIncomplete) {
     setSubmitStatus("validation-error");
     return; // ⛔ stop submission
   }

   setIsSubmitting(true);
   setSubmitStatus(null);

   try {
     const subject = encodeURIComponent(
       `New Inquiry: ${formData.subject || "General Inquiry"}`
     );

     const body = encodeURIComponent(
       `Name: ${formData.name}\n` +
         `Email: ${formData.email}\n` +
         `Phone: ${formData.phone}\n` +
         `Grade Level: ${formData.grade}\n` +
         `Subject: ${formData.subject}\n\n` +
         `Message:\n${formData.message}`
     );

     const companyEmail = "kingjaymes76@gmail.com";
     const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;

     window.location.href = mailtoLink;

     setSubmitStatus("success");

     setTimeout(() => {
       setFormData({
         name: "",
         email: "",
         phone: "",
         grade: "",
         subject: "",
         message: "",
       });
       setSubmitStatus(null);
     }, 2000);
   } catch (error) {
     setSubmitStatus("error");
     console.error("Error submitting form:", error);
   } finally {
     setIsSubmitting(false);
   }
 };


 const handleChange = (
   e: React.ChangeEvent<
     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
   >
 ) => {
   const { name, value } = e.target;

   setFormData((prev) => ({
     ...prev,
     [name]: value,
   }));
 };


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0cc1e0] mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us today and let's discuss how we can help you achieve your
            academic goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#0cc1e0] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0cc1e0] bg-opacity-10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@harrisworthconsult.com</p>
                    <p className="text-gray-600">
                      support@harrisworthconsult.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400 bg-opacity-10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+447827048999</p>
                    <p className="text-gray-600">+234(0)8066415424</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0cc1e0] bg-opacity-10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Education Street,
                      <br />
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400 bg-opacity-10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-linear-to-br from-[#0cc1e0] to-blue-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Personalized consultation services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Expert academic guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Free initial consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#0cc1e0] mb-6">
              Send Us a Message
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0cc1e0] focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0cc1e0] focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0cc1e0] focus:border-transparent outline-none transition"
                    placeholder="+234 (0) 123 456 7890"
                  />
                </div>
              </div>

              {/* Grade Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Grade Level / Education Stage *
                </label>
                <select
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0cc1e0] focus:border-transparent outline-none transition"
                >
                  <option value="">Select your grade level</option>
                  <option value="Primary School">Primary School</option>
                  <option value="Junior Secondary">
                    Junior Secondary (JSS 1-3)
                  </option>
                  <option value="Senior Secondary">
                    Senior Secondary (SSS 1-3)
                  </option>
                  <option value="University Undergraduate">
                    University Undergraduate
                  </option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Parent/Guardian">Parent/Guardian</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0cc1e0] focus:border-transparent outline-none transition"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="College Admissions">
                    College Admissions Consulting
                  </option>
                  <option value="Test Preparation">
                    Test Preparation (SAT, ACT, WAEC)
                  </option>
                  <option value="Career Counseling">Career Counseling</option>
                  <option value="Academic Tutoring">Academic Tutoring</option>
                  <option value="Scholarship Application">
                    Scholarship Application
                  </option>
                  <option value="Study Abroad">Study Abroad Programs</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0cc1e0] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#0cc1e0] hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "validation-error" && (
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg">
                  Please fill in all required fields before submitting the form.
                </div>
              )}

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  Oops! Something went wrong. Please try again or contact us
                  directly via email.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
