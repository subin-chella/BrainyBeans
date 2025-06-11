import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Books', href: '#books' },
    { name: 'Toys', href: '#toys' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const categories = [
    { name: 'Board Books', age: '0-3 years' },
    { name: 'Story Books', age: '2-10 years' },
    { name: 'Educational Toys', age: '3-10 years' },
    { name: 'Building Blocks', age: '2-8 years' },
    { name: 'Puzzles', age: '1-10 years' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about Brainy Beans! 😊");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-300 to-purple-300 rounded-full flex items-center justify-center">
                <span className="text-xl">🧠</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Brainy Beans</h3>
                <p className="text-gray-300 text-sm font-body">Growing Minds, One Book at a Time</p>
              </div>
            </div>
            
            <p className="font-body text-gray-300 mb-6 leading-relaxed">
              Affordable books and educational toys for children aged 0-10. 
              New and preloved items delivered with love across India.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Heart size={16} className="text-red-400" />
              <span className="font-body">Made with love for growing minds</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-gray-300 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('questionnaire');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body text-gray-300 hover:text-primary-300 transition-colors"
                >
                  Find Perfect Match
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Popular Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">Popular Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-body text-gray-300">{category.name}</span>
                  <span className="font-body text-xs text-gray-400">{category.age}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-gray-300 text-sm">WhatsApp (Primary)</p>
                  <button
                    onClick={openWhatsApp}
                    className="font-body text-green-400 hover:text-green-300 transition-colors"
                  >
                    +91 12345 67890
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-gray-300 text-sm">Phone Support</p>
                  <a
                    href="tel:+911234567890"
                    className="font-body text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-gray-300 text-sm">Email</p>
                  <a
                    href="mailto:hello@brainybeans.com"
                    className="font-body text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    hello@brainybeans.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body text-gray-300 text-sm">Service Area</p>
                  <p className="font-body text-orange-400">Pan-India Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sale Days Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-6 mt-12 text-center"
        >
          <h4 className="font-heading font-bold text-xl mb-3">📅 Sale Day Reminders</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-heading font-bold text-lg">Tuesday</div>
              <div className="font-body text-sm opacity-90">Books Sale</div>
            </div>
            <div>
              <div className="font-heading font-bold text-lg">Thursday</div>
              <div className="font-body text-sm opacity-90">Books Sale</div>
            </div>
            <div>
              <div className="font-heading font-bold text-lg">Sunday</div>
              <div className="font-body text-sm opacity-90">Toys Sale</div>
            </div>
          </div>
          <p className="font-body text-sm opacity-90 mt-4">All sales start at 6:00 PM</p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-body text-gray-300 text-sm">
                © 2024 Brainy Beans. Made with ❤️ for growing minds.
              </p>
              <p className="font-body text-gray-400 text-xs mt-1">
                All rights reserved. Prices and availability subject to change.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-body font-medium flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Join WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center space-x-8 mt-8 pt-6 border-t border-gray-700"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-green-400">✓</span>
            <span className="font-body text-sm">Safe & Secure</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-blue-400">✓</span>
            <span className="font-body text-sm">Pan-India Delivery</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-purple-400">✓</span>
            <span className="font-body text-sm">Quality Assured</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-yellow-400">✓</span>
            <span className="font-body text-sm">500+ Happy Families</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};