import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShoppingBag, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Brainy Beans books and toys! 📚🧸");
    window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-300 to-purple-300 rounded-full flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-gray-800">Brainy Beans</h1>
              <p className="text-xs text-gray-600 font-body">Growing Minds, One Book at a Time</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('books')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Books
            </button>
            <button
              onClick={() => scrollToSection('toys')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Toys
            </button>
            <button
              onClick={() => scrollToSection('questionnaire')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Find Perfect Match
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              What Parents Say
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-body font-medium flex items-center space-x-2 transition-colors"
            >
              <MessageCircle size={18} />
              <span>Shop via WhatsApp</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-lg shadow-soft mt-4 overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <button
                  onClick={() => scrollToSection('books')}
                  className="flex items-center space-x-3 w-full text-left font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <ShoppingBag size={18} />
                  <span>Books</span>
                </button>
                <button
                  onClick={() => scrollToSection('toys')}
                  className="flex items-center space-x-3 w-full text-left font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Heart size={18} />
                  <span>Toys</span>
                </button>
                <button
                  onClick={() => scrollToSection('questionnaire')}
                  className="flex items-center space-x-3 w-full text-left font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <span>🎯</span>
                  <span>Find Perfect Match</span>
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="flex items-center space-x-3 w-full text-left font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <span>❓</span>
                  <span>How It Works</span>
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="flex items-center space-x-3 w-full text-left font-body font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <span>📷</span>
                  <span>Gallery</span>
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-body font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>Shop via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};