import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Suraj9411',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/suraj-singh-rawat005',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:surajrwt9411@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-[#0b0c10] border-t border-[#45a29e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#45a29e]">Suraj Singh Rawat</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1f2833] rounded-lg flex items-center justify-center text-[#d1d5db] hover:bg-[#45a29e] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#9ca3af] hover:text-[#45a29e] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-[#9ca3af]">
                <span className="text-[#45a29e]">Email:</span> surajrwt9411@gmail.com
              </p>
              <p className="text-[#9ca3af]">
                <span className="text-[#45a29e]">Phone:</span> +91 8433260352
              </p>
              <p className="text-[#9ca3af]">
                <span className="text-[#45a29e]">Location:</span> Kotdwara, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#45a29e]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#9ca3af] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Suraj Singh Rawat. All rights reserved.
            </p>
            <p className="text-[#9ca3af] text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
