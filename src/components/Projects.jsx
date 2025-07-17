
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Realtime Chat Application',
      description: 'A full-stack realtime chat app built with React, Node.js, and Socket.io. Includes user authentication, private messaging, and live chat updates.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'socker.io'],
      liveUrl: 'https://chattyzone.onrender.com',
      sourceUrl: 'https://github.com/Suraj9411/chat-application',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and engagement tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Express.js'],
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: false
    },
    {
      title: 'Recipe Finder App',
      description: 'Recipe discovery application with ingredient-based search, nutritional information, and meal planning features.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      technologies: ['React', 'Spoonacular API', 'CSS3'],
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency price tracking with portfolio management and market analysis tools.',
      image: 'https://images.unsplash.com/photo-1518544866478-cfe5da40c67a?w=600&h=400&fit=crop',
      technologies: ['React', 'CoinGecko API', 'Chart.js'],
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showMore ? projects : featuredProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#1f2833] via-[#0b0c10] to-[#1f2833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-[#45a29e]">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group bg-[#0b0c10]/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#45a29e]/20 hover:border-[#45a29e]/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-[#45a29e] text-white rounded-full hover:bg-[#45a29e]/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-[#1f2833] text-white rounded-full hover:bg-[#1f2833]/80 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#45a29e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#45a29e]/20 text-[#45a29e] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-[#45a29e] text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-[#45a29e]/80 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </motion.a>
                  <motion.a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-[#1f2833] text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-[#1f2833]/80 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>{showMore ? 'Show Less' : 'Show More'}</span>
            {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
