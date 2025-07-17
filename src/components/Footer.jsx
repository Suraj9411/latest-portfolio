
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/johndoe', label: 'Twitter' },
    { icon: Mail, href: 'mailto:john.doe@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0b0c10] via-[#1f2833] to-[#0b0c10] py-12 border-t border-[#45a29e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-[#45a29e] mb-4">John Doe</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05, color: '#45a29e' }}
                  className="block text-gray-300 hover:text-[#45a29e] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[#1f2833] rounded-full text-[#45a29e] hover:bg-[#45a29e] hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-[#45a29e]/20 text-center"
        >
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} John Doe. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <Heart className="text-[#45a29e]" size={16} fill="currentColor" />
            </motion.span>
            <span>and React.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
