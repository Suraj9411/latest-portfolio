import React, { useState } from 'react';
import { ExternalLink, Github, Eye, EyeOff, X, Calendar, Code, Globe } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Realtime Chat Application',
      description: 'A modern chat application with real-time messaging, user authentication, and file sharing capabilities.',
      longDescription: 'This is a comprehensive real-time chat application built with modern web technologies. It features instant messaging, user authentication, file sharing, and group chat functionality. The application uses WebSocket connections for real-time communication and includes features like message encryption, online status indicators, and message history.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'JWT'],
      liveUrl: 'https://chattyzone.onrender.com',
      githubUrl: 'https://github.com/Suraj9411',
      featured: true,
      date: 'December 2023',
      category: 'Full Stack Web App'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A comprehensive project management tool with drag-and-drop functionality and team collaboration features.',
      longDescription: 'A full-featured task management application designed for teams and individuals. It includes drag-and-drop task organization, project tracking, team collaboration tools, deadline management, and progress visualization. The app supports multiple project views and integrates with popular productivity tools.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Redux', 'DnD Kit'],
      liveUrl: 'https://taskmanager-demo.vercel.app',
      githubUrl: 'https://github.com/Suraj9411',
      featured: true,
      date: 'November 2023',
      category: 'Web Application'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application with location-based forecasts and beautiful data visualizations.',
      longDescription: 'A comprehensive weather dashboard that provides detailed weather information, forecasts, and historical data. Features include location-based weather, interactive maps, weather alerts, and beautiful data visualizations using charts and graphs. The app supports multiple locations and provides detailed meteorological data.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3', 'Axios', 'Geolocation API'],
      liveUrl: 'https://weather-dashboard-demo.netlify.app',
      githubUrl: 'https://github.com/Suraj9411',
      featured: true,
      date: 'October 2023',
      category: 'Frontend Application'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.',
      longDescription: 'A powerful social media management platform that allows users to manage multiple social media accounts from a single dashboard. Features include post scheduling, analytics tracking, content calendar, engagement metrics, and automated posting. The platform supports major social media platforms and provides detailed insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'Bootstrap', 'Chart.js', 'Social APIs'],
      liveUrl: 'https://social-dashboard-demo.herokuapp.com',
      githubUrl: 'https://github.com/Suraj9411',
      featured: false,
      date: 'September 2023',
      category: 'Web Application'
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'A mobile-responsive app for discovering and saving recipes with ingredient-based search functionality.',
      longDescription: 'A comprehensive recipe discovery application that helps users find recipes based on available ingredients, dietary preferences, and cooking time. Features include recipe search, ingredient substitution suggestions, nutritional information, meal planning, and personal recipe collections. The app supports multiple cuisines and dietary restrictions.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Recipe API', 'Redux', 'Nutrition API', 'AsyncStorage'],
      liveUrl: 'https://recipe-finder-demo.netlify.app',
      githubUrl: 'https://github.com/Suraj9411',
      featured: false,
      date: 'August 2023',
      category: 'Mobile Application'
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency price tracking with portfolio management and market analysis tools.',
      longDescription: 'A comprehensive cryptocurrency tracking application that provides real-time price updates, portfolio management, and market analysis. Features include price alerts, portfolio tracking, market trends, historical data, and news integration. The app supports multiple cryptocurrencies and provides detailed market insights.',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
      technologies: ['React', 'CoinGecko API', 'Chart.js', 'Material-UI', 'WebSocket', 'Local Storage'],
      liveUrl: 'https://crypto-tracker-demo.vercel.app',
      githubUrl: 'https://github.com/Suraj9411',
      featured: false,
      date: 'July 2023',
      category: 'Web Application'
    },
  ];

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1f2833] via-[#0b0c10] to-[#1f2833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#45a29e]/20 hover:border-[#45a29e]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Eye size={32} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">Click to view details</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#45a29e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#9ca3af] mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#45a29e]/20 text-[#45a29e] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[#1f2833]/50 text-[#9ca3af] rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-[#45a29e] hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-[#d1d5db] hover:text-[#45a29e] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="mr-1" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white font-semibold rounded-lg hover:from-[#1f2833] hover:to-[#45a29e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAll ? <EyeOff size={20} className="mr-2" /> : <Eye size={20} className="mr-2" />}
            {showAll ? 'Show Less' : 'Show More Projects'}
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1f2833] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">{selectedProject.category}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-4 text-[#9ca3af]">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Code size={16} className="mr-1" />
                      <span>{selectedProject.technologies.length} technologies</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#d1d5db] text-lg leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#45a29e]/20 text-[#45a29e] rounded-lg text-sm font-medium border border-[#45a29e]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white font-semibold rounded-lg hover:from-[#1f2833] hover:to-[#45a29e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Globe size={20} className="mr-2" />
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-[#0b0c10] text-white font-semibold rounded-lg hover:bg-[#1f2833] transition-all duration-300 transform hover:scale-105 border border-[#45a29e]/30 hover:border-[#45a29e]/50"
                >
                  <Github size={20} className="mr-2" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;