
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateUrl: 'https://aws.amazon.com/certification/',
      description: 'Demonstrates expertise in developing applications on AWS platform'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: 'January 2023',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop',
      certificateUrl: 'https://cloud.google.com/certification',
      description: 'Certified in designing and building data processing systems'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'November 2022',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop',
      certificateUrl: 'https://developers.facebook.com/certification/',
      description: 'Advanced React development skills and best practices'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'September 2022',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      certificateUrl: 'https://university.mongodb.com/certification',
      description: 'Expertise in MongoDB database development and administration'
    },
    {
      title: 'JavaScript Algorithms',
      issuer: 'FreeCodeCamp',
      date: 'July 2022',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      certificateUrl: 'https://www.freecodecamp.org/certification',
      description: 'Data structures and algorithms in JavaScript'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: 'May 2022',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      certificateUrl: 'https://www.coursera.org/professional-certificates',
      description: 'Complete full-stack web development specialization'
    }
  ];

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
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#1f2833] via-[#0b0c10] to-[#1f2833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-[#45a29e]">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-[#0b0c10]/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#45a29e]/20 hover:border-[#45a29e]/50 transition-all duration-500"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#45a29e]/20 backdrop-blur-sm rounded-full p-2">
                  <Award className="text-[#45a29e]" size={20} />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#45a29e] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[#45a29e] font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center space-x-2 text-gray-400 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <motion.a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: '6+', label: 'Certifications', icon: '🏆' },
            { number: '4+', label: 'Years Learning', icon: '📚' },
            { number: '10+', label: 'Technologies', icon: '💻' },
            { number: '100%', label: 'Commitment', icon: '🔥' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-[#1f2833]/30 backdrop-blur-lg rounded-2xl p-6 border border-[#45a29e]/20 hover:border-[#45a29e]/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#45a29e] mb-1">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
