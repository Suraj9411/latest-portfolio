import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const Certifications = () => {
  const [showMore, setShowMore] = useState(false);
  const stats = [
    { label: 'Certifications Earned', value: '12+', icon: Award },
    { label: 'Years of Learning', value: '3+', icon: Calendar },
    { label: 'Skills Mastered', value: '25+', icon: TrendingUp },
    { label: 'Projects Completed', value: '50+', icon: ExternalLink },
  ];

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2023',
      credentialId: 'FCC-12345',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      verifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      credentialId: 'FCC-67890',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      verifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2022',
      credentialId: 'FCC-11111',
      skills: ['HTML', 'CSS', 'Flexbox', 'Grid'],
      verifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UC-22222',
      skills: ['React', 'Redux', 'Hooks', 'Context API'],
      verifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    },
    {
      title: 'Node.js, Express, MongoDB & More',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UC-33333',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      verifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    },
    {
      title: 'Git & GitHub Masterclass',
      issuer: 'Coursera',
      date: '2022',
      credentialId: 'COURSERA-44444',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      verifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
    },
  ];

  const featuredCertifications = certifications.filter(cert => 
    cert.title === 'Full Stack Web Development' || 
    cert.title === 'JavaScript Algorithms and Data Structures' || 
    cert.title === 'Responsive Web Design'
  );
  
  const displayedCertifications = showMore ? certifications : featuredCertifications;

  return (
    <section className="py-20 bg-gradient-to-br from-[#1f2833] via-[#0b0c10] to-[#1f2833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Continuous learning and professional development through recognized certifications
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg p-6 text-center border border-[#45a29e]/20 hover:border-[#45a29e]/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#45a29e] to-[#1f2833] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-[#45a29e] mb-2">{stat.value}</div>
                <div className="text-[#d1d5db] text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#45a29e]/20 hover:border-[#45a29e]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#45a29e] rounded-full flex items-center justify-center">
                    <Award size={32} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#45a29e]/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{cert.date}</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Certificate Info */}
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-[#45a29e] font-medium mb-2">{cert.issuer}</p>
                <p className="text-[#9ca3af] text-sm mb-4">ID: {cert.credentialId}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-[#45a29e]/20 text-[#45a29e] rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify Link */}
                <a
                  href={cert.verifyUrl}
                  className="inline-flex items-center text-[#45a29e] hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#1f2833] hover:to-[#45a29e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>{showMore ? 'Show Less' : 'Show More'}</span>
            {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
