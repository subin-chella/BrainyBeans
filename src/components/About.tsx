import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Made with Love",
      description: "Every book and toy is carefully selected with love and attention to your child's development."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured",
      description: "New and preloved items undergo thorough quality checks to ensure safety and durability."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Educational Focus",
      description: "We prioritize items that spark creativity, learning, and cognitive development."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Join our WhatsApp community of parents sharing experiences and recommendations."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Why Choose Brainy Beans?
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            We believe every child deserves access to quality books and educational toys that nurture their 
            growing minds. Our mission is to make learning affordable, accessible, and absolutely delightful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600">
                  {value.icon}
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-2xl p-8 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-3xl text-primary-600 mb-2">200+</div>
              <div className="font-body text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-accent-600 mb-2">1000+</div>
              <div className="font-body text-gray-600">Books Sold</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-secondary-600 mb-2">200+</div>
              <div className="font-body text-gray-600">Toys Available</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-purple-600 mb-2">98%</div>
              <div className="font-body text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};