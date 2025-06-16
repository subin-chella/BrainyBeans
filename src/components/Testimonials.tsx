import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  childAge: string;
  rating: number;
  text: string;
  productType: 'books' | 'toys' | 'both';
  avatar: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      childAge: "3 years old",
      rating: 5,
      text: "The sensory books from Brainy Beans have been amazing for my daughter! She's learned so much while having fun. The quality is excellent and prices are so reasonable. Highly recommend!",
      productType: "books",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      childAge: "5 & 7 years old",
      rating: 5,
      text: "As a father of two, I love how Brainy Beans has something for both my kids. The building blocks and puzzles keep them engaged for hours. Great value for money!",
      productType: "toys",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore",
      childAge: "2 years old",
      rating: 5,
      text: "The WhatsApp ordering system is so convenient! I can browse and order while my toddler naps. The books arrived quickly and were exactly as described. Will definitely order again!",
      productType: "books",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Deepak Agarwal",
      location: "Pune",
      childAge: "4 & 6 years old",
      rating: 5,
      text: "The travel-friendly toys have been a lifesaver during our family trips! Compact, educational, and keeps the kids happy. The entire family loves our Brainy Beans collection.",
      productType: "toys",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad",
      childAge: "1 year old",
      rating: 5,
      text: "Perfect for first-time parents! The board books are sturdy enough for my baby to explore safely. The customer service is excellent, and they really care about child development.",
      productType: "books",
      avatar: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Vikram Singh",
      location: "Chennai",
      childAge: "8 years old",
      rating: 5,
      text: "My son is obsessed with the science kits! They're age-appropriate, safe, and actually educational. The preloved options are also in great condition. Fantastic service!",
      productType: "both",
      avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            What Parents Are Saying
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from real parents who trust Brainy Beans for their children's learning journey.
            Join our community of happy families!
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary-600 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="font-body text-gray-600 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-accent-600 mb-2">200+</div>
            <div className="font-body text-gray-600 text-sm">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-secondary-600 mb-2">98%</div>
            <div className="font-body text-gray-600 text-sm">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-purple-600 mb-2">1000+</div>
            <div className="font-body text-gray-600 text-sm">Products Sold</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 shadow-soft relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-gray-600 text-sm">
                    {testimonial.location} • Child: {testimonial.childAge}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full font-body font-medium ${
                      testimonial.productType === 'books'
                        ? 'bg-blue-100 text-blue-700'
                        : testimonial.productType === 'toys'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {testimonial.productType === 'both' ? 'Books & Toys' : testimonial.productType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-2xl p-8 mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-4">
              Why Parents Trust Brainy Beans
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">
                Safe & Secure
              </h4>
              <p className="font-body text-gray-600">
                All products are thoroughly checked for safety and age-appropriateness
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💝</div>
              <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">
                Curated with Love
              </h4>
              <p className="font-body text-gray-600">
                Every book and toy is handpicked by parents for parents
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">
                Fast & Reliable
              </h4>
              <p className="font-body text-gray-600">
                Quick WhatsApp ordering with reliable delivery across India
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-body text-gray-600 mb-6">
            Join hundreds of happy parents who trust Brainy Beans for their children's development
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd love to start shopping for my child. Can you help me find the perfect books and toys? 😊");
              window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg flex items-center space-x-3 mx-auto transition-colors"
          >
            <span>💬</span>
            <span>Start Shopping Today</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};