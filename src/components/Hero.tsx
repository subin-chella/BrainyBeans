import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Brainy Beans books and toys! 📚🧸");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const scrollToQuestionnaire = () => {
    const element = document.getElementById('questionnaire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl animate-float">📚</div>
        <div className="absolute top-32 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>🧸</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🎨</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: '3s' }}>🧩</div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-secondary-600" />
            <span className="text-secondary-700 font-body font-medium text-sm">
              New & Preloved • Ages 0-10 • WhatsApp Shopping
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-gray-800 mb-6 leading-tight">
            Growing Minds,
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              One Book at a Time
            </span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover affordable books and educational toys that spark curiosity and learning. 
            From board books to puzzles, we bring joy to growing minds through carefully curated collections.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg flex items-center space-x-3 shadow-soft-lg transition-all duration-200"
          >
            <MessageCircle size={24} />
            <span>Shop via WhatsApp</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToQuestionnaire}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg flex items-center space-x-3 shadow-soft-lg transition-all duration-200"
          >
            <span>🎯</span>
            <span>Find Perfect Books</span>
          </motion.button>
        </motion.div>

        {/* Sale Days Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-accent-200 to-secondary-200 rounded-2xl p-6 max-w-lg mx-auto mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">🗓️</span>
            <h3 className="font-heading font-bold text-lg text-gray-800">Sale Days</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/60 rounded-lg p-2">
              <div className="font-body font-bold text-sm text-gray-700">Tuesday</div>
              <div className="text-xs text-gray-600">Books</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2">
              <div className="font-body font-bold text-sm text-gray-700">Thursday</div>
              <div className="text-xs text-gray-600">Books</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2">
              <div className="font-body font-bold text-sm text-gray-700">Sunday</div>
              <div className="text-xs text-gray-600">Toys</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="font-body text-sm text-gray-500 mb-2">Discover more</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};