import React, { useState } from 'react';
import { Code, Palette, Server, Smartphone, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('what-i-do');

  const services = [
    {
      icon: Code,
      title: 'Build Full-Stack Websites',
      description: 'Complete web applications with modern frontend and robust backend architecture.',
    },
    {
      icon: Palette,
      title: 'Design Interactive UIs',
      description: 'Beautiful, user-friendly interfaces that provide exceptional user experiences.',
    },
    {
      icon: Server,
      title: 'Develop REST APIs',
      description: 'Scalable and secure APIs that power modern web and mobile applications.',
    },
    {
      icon: Smartphone,
      title: 'Create Responsive Websites',
      description: 'Mobile-first designs that work perfectly across all devices and screen sizes.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Graphic Era Hill University, Dehradun',
      period: '2022 - 2026',
      status: 'Currently Pursuing',
    },
    {
      degree: 'Senior Secondary Education (12th)',
      field: 'Science (PCM)',
      institution: 'Shri Guru Ram Rai Public School, Kotdwara, Uttarakhand',
      period: '2021 - 2022',
      status: 'Completed',
    },
    {
      degree: 'Secondary Education (10th)',
      field: 'General',
      institution: 'Shri Guru Ram Rai Public School, Kotdwara, Uttarakhand',
      period: '2019 - 2020',
      status: 'Completed',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Get to know more about my skills, experience, and educational background
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg p-2">
            <button
              onClick={() => setActiveTab('what-i-do')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'what-i-do'
                  ? 'bg-[#45a29e] text-white shadow-lg'
                  : 'text-[#d1d5db] hover:text-[#45a29e]'
              }`}
            >
              What I Do
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ml-2 ${
                activeTab === 'education'
                  ? 'bg-[#45a29e] text-white shadow-lg'
                  : 'text-[#d1d5db] hover:text-[#45a29e]'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* What I Do Tab */}
          <div className={`transition-all duration-500 ${
            activeTab === 'what-i-do' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg p-6 hover:bg-[#1f2833]/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-[#45a29e]/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#45a29e] to-[#1f2833] rounded-lg flex items-center justify-center mr-4">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <p className="text-[#9ca3af] leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Tab */}
          <div className={`transition-all duration-500 ${
            activeTab === 'education' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
          }`}>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#45a29e] to-[#1f2833]"></div>
                
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-start mb-12 last:mb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-[#45a29e] rounded-full border-4 border-[#0b0c10] z-10"></div>
                    
                    {/* Content */}
                    <div className="ml-20 bg-[#1f2833]/50 backdrop-blur-sm rounded-lg p-6 flex-1 border border-[#45a29e]/20">
                      <div className="flex items-center mb-2">
                        <GraduationCap size={20} className="text-[#45a29e] mr-2" />
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Currently Pursuing' 
                            ? 'bg-[#45a29e]/20 text-[#45a29e]' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                      <h4 className="text-lg text-[#45a29e] mb-2">{edu.field}</h4>
                      <p className="text-[#d1d5db] mb-2">{edu.institution}</p>
                      <div className="flex items-center text-[#9ca3af]">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
