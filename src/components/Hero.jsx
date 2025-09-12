import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Open resume in new window
    const resumeUrl = '/suraj_singh_rawat_.pdf';
    const newWindow = window.open(resumeUrl, '_blank');
    
    // Fallback if popup is blocked
    if (!newWindow) {
      // Create a temporary link and click it
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#45a29e]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Name and Title */}
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Suraj <span className="text-[#45a29e]">Singh Rawat</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#d1d5db] font-light">
                Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-[#9ca3af] max-w-2xl lg:max-w-none leading-relaxed">
                Passionate about creating innovative web solutions that combine beautiful design 
                with powerful functionality. I specialize in building scalable applications 
                using modern technologies and best practices.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={downloadResume}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white font-semibold rounded-lg hover:from-[#1f2833] hover:to-[#45a29e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download size={20} className="mr-2" />
                View Resume
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="animate-fade-in">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-[#45a29e] to-[#1f2833] p-2 shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Suraj Singh Rawat"
                  className="w-full h-full rounded-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face';
                  }}
                />
              </div>
            </div>
            
            {/* Scroll Indicator - Only visible on mobile, centered below profile image */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce lg:hidden">
              <button
                onClick={scrollToAbout}
                className="text-[#45a29e] hover:text-white transition-colors duration-300"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only visible on desktop, centered on screen */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-[#45a29e] hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
