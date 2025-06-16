import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter, MessageCircle } from 'lucide-react';

interface BookCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  ageRange: string;
  benefits: string[];
  featured: boolean;
}

export const BooksSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const bookCategories: BookCategory[] = [
    {
      id: 'board',
      name: 'Board Books',
      icon: '👶',
      description: 'Sturdy books perfect for tiny hands and curious minds',
      ageRange: '0-3 years',
      benefits: ['Safe for teething', 'Develops motor skills', 'Introduces concepts'],
      featured: true
    },
    {
      id: 'sensory',
      name: 'Sensory Books',
      icon: '👋',
      description: 'Interactive books with textures, sounds, and surprises',
      ageRange: '0-4 years',
      benefits: ['Stimulates senses', 'Encourages exploration', 'Builds vocabulary'],
      featured: true
    },
    {
      id: 'activity',
      name: 'Activity Books',
      icon: '✏️',
      description: 'Engaging workbooks with puzzles, coloring, and learning activities',
      ageRange: '3-8 years',
      benefits: ['Improves focus', 'Develops skills', 'Encourages creativity'],
      featured: false
    },
    {
      id: 'story',
      name: 'Story Books',
      icon: '📖',
      description: 'Captivating tales that transport children to magical worlds',
      ageRange: '2-10 years',
      benefits: ['Builds imagination', 'Language development', 'Emotional growth'],
      featured: true
    },
    {
      id: 'educational',
      name: 'Educational Books',
      icon: '🧠',
      description: 'Learning made fun with subjects like math, science, and nature',
      ageRange: '4-10 years',
      benefits: ['Subject mastery', 'Critical thinking', 'Prepares for school'],
      featured: false
    },
    {
      id: 'picture',
      name: 'Picture Books',
      icon: '🎨',
      description: 'Beautiful illustrations that tell stories without many words',
      ageRange: '1-6 years',
      benefits: ['Visual literacy', 'Imagination', 'Art appreciation'],
      featured: true
    }
  ];

  const orderBooks = (category: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in your ${category} collection. Can you show me what's available? 📚✨`);
    window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
  };

  const filteredCategories = selectedCategory === 'all' 
    ? bookCategories 
    : bookCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="books" className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-body font-medium">
              Books Collection
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Books That Grow With Your Child
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From first touch-and-feel books to exciting chapter books, our curated collection 
            supports every stage of your child's reading journey. New and preloved options available.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-body font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-100'
              }`}
            >
              All Categories
            </button>
            {bookCategories.filter(cat => cat.featured).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-body font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-100'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Book Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                  {category.name}
                </h3>
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-body text-sm font-medium mb-3">
                  {category.ageRange}
                </div>
                <p className="font-body text-gray-600 mb-4">
                  {category.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-gray-800 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 font-body text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => orderBooks(category.name)}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-body font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={18} />
                <span>Check for {category.name}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-secondary-200 to-accent-200 rounded-2xl p-8 mt-16 text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-gray-800 mb-4">
            📚 Book Bundle Deals
          </h3>
          <p className="font-body text-gray-700 mb-6">
            Mix and match any 5 books from our collection and get 20% off! 
            Perfect for building your home library on a budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/70 px-4 py-2 rounded-full">
              <span className="font-body font-semibold text-gray-800">
                🏷️ Bundle Price: From ₹999 (Save ₹250+)
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => orderBooks('Bundle Deal')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
            >
              <MessageCircle size={18} />
              <span>Get Bundle Deal</span>
            </motion.button>
          </div>
        </motion.div>

        {/* How to Order Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="font-heading font-bold text-lg text-gray-800 mb-3">
              📅 Remember: Book Sales on Tuesdays & Thursdays
            </h4>
            <p className="font-body text-gray-600">
              Join our WhatsApp group to get notified when new books arrive and sales go live!
              First come, first served basis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};