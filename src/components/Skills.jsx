import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { 
          name: 'JavaScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        { 
          name: 'React.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
          name: 'HTML5', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        { 
          name: 'CSS3', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        { 
          name: 'Tailwind CSS', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
        },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { 
          name: 'Node.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        { 
          name: 'Express.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { 
          name: 'C++', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        },
        { 
          name: 'C', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
        },
        { 
          name: 'Java', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        },
        { 
          name: 'Python', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
      ],
    },
    {
      title: 'Database',
      skills: [
        { 
          name: 'MongoDB', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        { 
          name: 'MySQL', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { 
          name: 'Git', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        { 
          name: 'GitHub', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        { 
          name: 'VS Code', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        { 
          name: 'Figma', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#45a29e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg p-6 border border-[#45a29e]/20 hover:border-[#45a29e]/40 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#45a29e] mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex flex-col items-center p-3 rounded-lg bg-[#0b0c10]/30 hover:bg-[#0b0c10]/50 transition-all duration-300 transform hover:scale-105 ${
                      animatedSkills ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` 
                    }}
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="w-10 h-10 bg-[#45a29e] rounded-lg items-center justify-center text-white font-bold text-sm hidden"
                      >
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-white text-sm font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
