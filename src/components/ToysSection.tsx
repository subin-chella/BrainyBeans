import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Filter, MessageCircle, Star } from 'lucide-react';

interface ToyCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  ageRange: string;
  benefits: string[];
  priceRange: string;
  featured: boolean;
}

export const ToysSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toyCategories: ToyCategory[] = [
    {
      id: 'building',
      name: 'Building Blocks',
      icon: '🧱',
      description: 'Colorful blocks for endless creativity and construction fun',
      ageRange: '2-8 years',
      benefits: ['Spatial awareness', 'Problem solving', 'Fine motor skills'],
      priceRange: '₹199-₹899',
      featured: true
    },
    {
      id: 'puzzles',
      name: 'Puzzles',
      icon: '🧩',
      description: 'From simple shape sorters to complex jigsaw puzzles',
      ageRange: '1-10 years',
      benefits: ['Patience', 'Logical thinking', 'Concentration'],
      priceRange: '₹149-₹599',
      featured: true
    },
    {
      id: 'pretend',
      name: 'Pretend Play',
      icon: '🎭',
      description: 'Kitchen sets, doctor kits, and role-playing toys',
      ageRange: '2-8 years',
      benefits: ['Imagination', 'Social skills', 'Emotional development'],
      priceRange: '₹299-₹1299',
      featured: true
    },
    {
      id: 'educational',
      name: 'Educational Toys',
      icon: '🔬',
      description: 'STEM toys, science kits, and learning games',
      ageRange: '3-10 years',
      benefits: ['STEM learning', 'Critical thinking', 'Scientific curiosity'],
      priceRange: '₹399-₹1599',
      featured: false
    },
    {
      id: 'arts',
      name: 'Arts & Crafts',
      icon: '🎨',
      description: 'Drawing sets, craft kits, and creative supplies',
      ageRange: '3-10 years',
      benefits: ['Creativity', 'Self-expression', 'Fine motor skills'],
      priceRange: '₹199-₹799',
      featured: true
    },
    {
      id: 'travel',
      name: 'Travel-Friendly',
      icon: '✈️',
      description: 'Compact toys perfect for car rides and vacations',
      ageRange: '2-10 years',
      benefits: ['Portable fun', 'Quiet play', 'Travel entertainment'],
      priceRange: '₹99-₹499',
      featured: false
    },
    {
      id: 'outdoor',
      name: 'Outdoor Toys',
      icon: '⚽',
      description: 'Balls, frisbees, and active play equipment',
      ageRange: '2-10 years',
      benefits: ['Physical activity', 'Gross motor skills', 'Social play'],
      priceRange: '₹199-₹999',
      featured: false
    },
    {
      id: 'musical',
      name: 'Musical Toys',
      icon: '🎵',
      description: 'Simple instruments and music-making toys',
      ageRange: '1-8 years',
      benefits: ['Rhythm', 'Auditory skills', 'Creative expression'],
      priceRange: '₹249-₹899',
      featured: false
    }
  ];

  const orderToys = (category: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in your ${category} collection. Can you show me what's available? 🧸✨`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const filteredCategories = selectedCategory === 'all' 
    ? toyCategories 
    : toyCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="toys" className="py-20 px-4 bg-gradient-to-br from-accent-50 to-secondary-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 px-4 py-2 rounded-full mb-6">
            <Puzzle className="w-5 h-5 text-accent-600" />
            <span className="text-accent-700 font-body font-medium">
              Toys Collection
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Educational Toys That Inspire Learning
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Carefully selected toys that combine fun with learning. From budget-friendly options 
            to premium educational sets, we have something for every child and budget.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-body font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-accent-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-accent-100'
              }`}
            >
              All Categories
            </button>
            {toyCategories.filter(cat => cat.featured).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-body font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-accent-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-accent-100'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Toy Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">
                  {category.name}
                </h3>
                <div className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full font-body text-sm font-medium mb-2">
                  {category.ageRange}
                </div>
                <div className="text-purple-600 font-body font-semibold text-sm mb-3">
                  {category.priceRange}
                </div>
                <p className="font-body text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-gray-800 mb-2 text-sm">Benefits:</h4>
                <ul className="space-y-1">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 font-body text-xs text-gray-600">
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
                onClick={() => orderToys(category.name)}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-body font-semibold text-sm flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Browse {category.name}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Special Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-200 to-primary-200 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
              Budget-Friendly Options
            </h3>
            <p className="font-body text-gray-700 mb-4">
              Quality doesn't have to be expensive! We specialize in finding amazing toys 
              that provide great value for money. Most toys under ₹500!
            </p>
            <div className="bg-white/70 px-4 py-2 rounded-full inline-block">
              <span className="font-body font-semibold text-gray-800">
                🏷️ Starting from just ₹99
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-secondary-200 to-accent-200 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
              Travel-Friendly Focus
            </h3>
            <p className="font-body text-gray-700 mb-4">
              Compact, lightweight toys perfect for car rides, flights, and hotel stays. 
              Keep your little ones entertained anywhere you go!
            </p>
            <div className="bg-white/70 px-4 py-2 rounded-full inline-block">
              <span className="font-body font-semibold text-gray-800">
                🎒 Fits in any bag!
              </span>
            </div>
          </motion.div>
        </div>

        {/* Toy Safety & Quality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 mt-12 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <h3 className="font-heading font-bold text-2xl text-gray-800">
              Safety & Quality Assured
            </h3>
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Safety First</h4>
              <p className="font-body text-gray-600 text-sm">
                All toys are thoroughly checked for safety standards and age-appropriateness
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Quality Check</h4>
              <p className="font-body text-gray-600 text-sm">
                Preloved toys are cleaned, sanitized, and inspected for any damage
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Age-Appropriate</h4>
              <p className="font-body text-gray-600 text-sm">
                Every toy is labeled with appropriate age ranges for safe, developmental play
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sunday Toy Sale Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="font-heading font-bold text-lg text-gray-800 mb-3">
              🗓️ Remember: Toy Sales Every Sunday!
            </h4>
            <p className="font-body text-gray-600 mb-4">
              New toy arrivals are announced in our WhatsApp group every Sunday. 
              Join now to never miss out on the perfect toy for your child!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to join the Brainy Beans toy sale group! 🧸");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center space-x-2 mx-auto transition-colors"
            >
              <MessageCircle size={18} />
              <span>Join Toy Sale Group</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};