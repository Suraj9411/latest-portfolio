import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_gnhxkvh',
        'template_0cvaamh',
        {
          to_name: 'Suraj',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        'h4dZZMeqrUtE5f4tj'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'surajrwt9411@gmail.com',
      href: 'mailto:surajrwt9411@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8433260352',
      href: 'tel:+918433260352',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kotdwara, Uttarakhand, India',
      href: '#',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#45a29e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-[#9ca3af] leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out through any of 
                the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-[#1f2833]/50 backdrop-blur-sm rounded-lg border border-[#45a29e]/20 hover:border-[#45a29e]/40 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#45a29e] to-[#1f2833] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[#9ca3af] text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1f2833]/50 backdrop-blur-sm rounded-lg p-8 border border-[#45a29e]/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#d1d5db] text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0b0c10]/50 border border-[#45a29e]/30 rounded-lg text-white placeholder-[#9ca3af] focus:border-[#45a29e] focus:ring-1 focus:ring-[#45a29e] outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#d1d5db] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0b0c10]/50 border border-[#45a29e]/30 rounded-lg text-white placeholder-[#9ca3af] focus:border-[#45a29e] focus:ring-1 focus:ring-[#45a29e] outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#d1d5db] text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0b0c10]/50 border border-[#45a29e]/30 rounded-lg text-white placeholder-[#9ca3af] focus:border-[#45a29e] focus:ring-1 focus:ring-[#45a29e] outline-none transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#d1d5db] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0b0c10]/50 border border-[#45a29e]/30 rounded-lg text-white placeholder-[#9ca3af] focus:border-[#45a29e] focus:ring-1 focus:ring-[#45a29e] outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <div className={`flex items-center p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} className="mr-2" />
                  ) : (
                    <AlertCircle size={20} className="mr-2" />
                  )}
                  {submitStatus === 'success' 
                    ? 'Message sent successfully! I\'ll get back to you soon.' 
                    : 'Failed to send message. Please try again or contact me directly.'}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white font-semibold rounded-lg hover:from-[#1f2833] hover:to-[#45a29e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                ) : (
                  <Send size={20} className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
