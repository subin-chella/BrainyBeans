import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, ShoppingCart, Truck } from 'lucide-react';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: string;
  actionLink?: () => void;
}

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Join Our WhatsApp Group",
      description: "Click the button to join our friendly community of parents. Get instant access to our product catalog and sale notifications.",
      action: "Join Now",
      actionLink: () => {
        const message = encodeURIComponent("Hi! I'd like to join the Brainy Beans WhatsApp group to stay updated on sales and new arrivals! 🛍️");
        window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
      }
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: "Wait for Sale Days",
      description: "Books are available on Tuesdays & Thursdays, Toys on Sundays. We'll notify you when sales go live at 6 PM sharp!",
      // action: "Set Reminder"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Browse & Block Items",
      description: "See something you like? Simply reply with 'BLOCK' and the item number. We'll hold it for you while you decide (24-hour hold).",
      // action: "Learn More"
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8" />,
      title: "Pay & Receive",
      description: "Confirm your order, make payment via UPI/Bank transfer, and we'll deliver your items with care. Track your order via WhatsApp!"
    }
  ];

  const faqs = [
    {
      question: "How do I know if an item is still available?",
      answer: "All available items are posted in our WhatsApp group during sale times. Once sold, they're marked as 'SOLD' immediately."
    },
    {
      question: "Can I return items if my child doesn't like them?",
      answer: "We accept returns within 48 hours if the item has any quality issues. For preference-based returns, we offer exchange with other items."
    },
    {
      question: "How is the condition of preloved items?",
      answer: "All preloved items are thoroughly cleaned, sanitized, and checked for functionality. We only sell items that we'd be happy to give our own children."
    },
    {
      question: "Do you deliver all over India?",
      answer: "Yes! We deliver pan-India. Delivery charges vary by location and are communicated before confirming your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI payments (Google Pay, PhonePe, Paytm), bank transfers, and in some areas, cash on delivery."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-primary-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            How It Works
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Shopping with Brainy Beans is simple and fun! Follow these easy steps to join our 
            community and start building your child's learning library.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-primary-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-body text-sm font-medium">
                        Step {step.id}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-gray-600 mb-4">
                    {step.description}
                  </p>
                  
                  {step.action && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={step.actionLink}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-body font-medium transition-colors"
                    >
                      {step.action}
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-white">
                    {step.id}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-accent-100 to-secondary-100 rounded-2xl p-8 mb-16"
        >
          <h3 className="font-heading font-bold text-2xl text-gray-800 text-center mb-8">
            💡 Pro Tips for Smart Shopping
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Be Quick!</h4>
              <p className="font-body text-gray-600 text-sm">
                Popular items sell fast. Set notifications and be ready when sales start.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Make a Wishlist</h4>
              <p className="font-body text-gray-600 text-sm">
                Note down item numbers you're interested in to speed up your ordering.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-heading font-semibold text-gray-800 mb-2">Ask Questions</h4>
              <p className="font-body text-gray-600 text-sm">
                Don't hesitate to ask about condition, age-suitability, or more photos!
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-heading font-bold text-2xl text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft"
              >
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-3">
                  {faq.question}
                </h4>
                <p className="font-body text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft-lg max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Join our community today and give your child access to amazing books and toys 
              at unbeatable prices!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm ready to join the Brainy Beans community and start shopping for my child! Can you add me to the group? 🎉");
                window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg flex items-center space-x-3 mx-auto transition-colors"
            >
              <MessageCircle size={24} />
              <span>Join Brainy Beans Today!  </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};