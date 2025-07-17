
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Server, Smartphone, Database, Globe, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('whatido');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const whatIDoItems = [
    {
      icon: Code,
      title: 'Build Full-Stack Websites',
      description: 'Create end-to-end websites using modern frameworks and technologies'
    },
    {
      icon: Palette,
      title: 'Design Interactive UIs',
      description: 'Craft beautiful, responsive user interfaces with smooth animations'
    },
    {
      icon: Server,
      title: 'Develop REST APIs',
      description: 'Build scalable backend services and RESTful APIs'
    },
    {
      icon: Smartphone,
      title: 'Create Responsive Websites',
      description: 'Ensure perfect user experience across all devices and screen sizes'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Graphic Era Hill University, Dehradun',
      year: '2022 - 2026',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Shri Guru Ram Rai Public School, Kotdwara',
      year: '2021 - 2022',
      description: 'Science stream with focus on Mathematics and Computer Science'
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-[#45a29e]">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with expertise in creating innovative web solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4"
          >
            {[
              { id: 'whatido', label: 'What I Do', icon: Code },
              { id: 'education', label: 'Education', icon: GraduationCap }
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-[#45a29e] text-white shadow-lg'
                    : 'bg-[#1f2833] text-gray-300 hover:bg-[#45a29e]/20 hover:text-[#45a29e]'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="bg-[#1f2833]/50 backdrop-blur-lg rounded-2xl p-8 border border-[#45a29e]/20"
          >
            {activeTab === 'whatido' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatIDoItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-[#0b0c10]/50 rounded-xl border border-[#45a29e]/10 hover:border-[#45a29e]/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#45a29e]/20 rounded-lg">
                        <item.icon size={24} className="text-[#45a29e]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 pb-6 border-l-2 border-[#45a29e]/30 last:border-l-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#45a29e] rounded-full border-2 border-[#0b0c10]"></div>
                    <div className="bg-[#0b0c10]/50 p-6 rounded-xl border border-[#45a29e]/10 hover:border-[#45a29e]/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                          <p className="text-[#45a29e] font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
