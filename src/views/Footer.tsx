import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../assets/harrisworthConsult-main.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "home" },
    { name: "About Us", href: "about" },
    { name: "Services", href: "services" },
    { name: "How It Works", href: "how-it-works" },
    { name: "Contact", href: "contact" },
  ];

 

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <footer className="bg-linear-to-br from-[#0cc1e0] to-blue-500  text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 text-2xl">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-white font-bold">
                <img src={Logo} alt="Company's Logo" />
              </div>
              <span className="text-xl lg:text-3xl font-bold text-orange-400">
                Harrisworth <span className="text-white">Consult</span>
              </span>
            </div>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Empowering students to achieve their academic and career goals
              through personalized consulting services. We guide you every step
              of the way from college admissions to career success.
            </p>
            <div className="space-y-2 text-lg text-white">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  61 Bridge Street, Kington, United Kingdom, HR5 3DJ
                  
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 shrink-0" />
                <p className="text-white">+447827048999,</p>
                <p className="text-white">+234(0)8066415424</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@harrisworthgroupltd.co.uk</span> <br />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-white hover:text-orange-400 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white  pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white">
              © {currentYear} Harrisworth Group. All rights reserved | Powered
              by Jamon TECHUB
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
