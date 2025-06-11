import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, MapPin, Phone, Mail, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp (Primary)",
      description: "Best way to reach us for orders and queries",
      action: "Chat Now",
      link: () => {
        const message = encodeURIComponent("Hi! I'd like to know more about Brainy Beans books and toys! 😊");
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
      },
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us for urgent queries",
      action: "Call Now",
      link: () => window.open('tel:+911234567890'),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send us detailed queries or feedback",
      action: "Send Email",
      link: () => window.open('mailto:hello@brainybeans.com?subject=Inquiry about Brainy Beans'),
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM", note: "General queries" },
    { day: "Tuesday", hours: "6:00 PM onwards", note: "📚 Book Sale Day", highlight: true },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM", note: "General queries" },
    { day: "Thursday", hours: "6:00 PM onwards", note: "📚 Book Sale Day", highlight: true },
    { day: "Friday", hours: "9:00 AM - 6:00 PM", note: "General queries" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", note: "Limited support" },
    { day: "Sunday", hours: "6:00 PM onwards", note: "🧸 Toy Sale Day", highlight: true }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our books and toys? Want to join our community? 
            We're here to help you find the perfect learning materials for your child!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-8">
              How to Reach Us
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${method.color} text-white p-3 rounded-full flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-lg text-gray-800 mb-2">
                        {method.title}
                      </h4>
                      <p className="font-body text-gray-600 mb-4">
                        {method.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={method.link}
                        className={`${method.color} text-white px-6 py-2 rounded-full font-body font-medium transition-colors`}
                      >
                        {method.action}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-secondary-100 to-accent-100 rounded-2xl p-6 mt-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <h4 className="font-heading font-semibold text-gray-800">Service Areas</h4>
              </div>
              <p className="font-body text-gray-700">
                We deliver pan-India! Shipping charges vary by location and will be 
                communicated before order confirmation.
              </p>
            </motion.div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-8">
              Business Hours & Sale Days
            </h3>
            
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="font-heading font-semibold text-gray-800">Weekly Schedule</span>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      schedule.highlight 
                        ? 'bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-body font-semibold text-gray-800">
                        {schedule.day}
                      </div>
                      <div className="font-body text-sm text-gray-600">
                        {schedule.note}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-body font-medium text-gray-700">
                        {schedule.hours}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-soft mt-6"
            >
              <h4 className="font-heading font-bold text-lg text-gray-800 mb-4">
                📱 Response Times
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-body text-gray-600">WhatsApp Messages</span>
                  <span className="font-body font-semibold text-green-600">Within 30 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-gray-600">Phone Calls</span>
                  <span className="font-body font-semibold text-blue-600">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-gray-600">Email Queries</span>
                  <span className="font-body font-semibold text-purple-600">Within 2 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Calendar Reminder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mt-6 text-center"
            >
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-heading font-bold text-lg text-gray-800 mb-3">
                Never Miss a Sale!
              </h4>
              <p className="font-body text-gray-700 mb-4">
                Add our sale days to your calendar and get reminders for book and toy sales.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Simple calendar event creation
                  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Brainy%20Beans%20Sale%20Days&details=Books%20on%20Tuesdays%20%26%20Thursdays%2C%20Toys%20on%20Sundays`;
                  window.open(calendarUrl, '_blank');
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-body font-medium transition-colors"
              >
                Add to Calendar
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft-lg max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-4">
              Ready to Start Shopping?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Join thousands of happy parents who trust Brainy Beans for their children's 
              educational needs. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hi! I'm ready to join the Brainy Beans community! Can you add me to the WhatsApp group? 🎉");
                  window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>Join WhatsApp Group</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('questionnaire');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
              >
                <span>🎯</span>
                <span>Get Personalized Guide</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};