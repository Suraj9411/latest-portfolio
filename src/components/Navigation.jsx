import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Award, Mail, Menu, X } from 'lucide-react';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Add a small delay to show the active state before closing menu
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f2833]/80 backdrop-blur-md border-b border-[#45a29e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#45a29e]">&lt;Suraj/Singh/Rawat&gt;</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === item.id
                        ? 'bg-[#45a29e] text-white'
                        : 'text-[#d1d5db] hover:bg-[#45a29e]/20 hover:text-[#45a29e]'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#d1d5db] hover:text-[#45a29e] hover:bg-[#45a29e]/20 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1f2833]/95 backdrop-blur-sm rounded-lg mt-2 border border-[#45a29e]/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white shadow-lg border border-[#45a29e]/50'
                      : 'text-[#d1d5db] hover:bg-[#45a29e]/20 hover:text-[#45a29e] hover:border-[#45a29e]/30 border border-transparent'
                  }`}
                >
                  <Icon size={20} className={activeSection === item.id ? 'text-white' : ''} />
                  <span className={activeSection === item.id ? 'font-semibold' : ''}>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
