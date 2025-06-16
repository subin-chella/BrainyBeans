import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageCircle } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const SaleDays: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nextSaleDay, setNextSaleDay] = useState<string>('');
  const [saleType, setSaleType] = useState<string>('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      
      let nextSale = new Date();
      let saleDayName = '';
      let type = '';

      // Determine next sale day
      if (currentDay === 0) { // Sunday
        // If it's before 6 PM, today is toy sale day
        if (now.getHours() < 18) {
          nextSale.setHours(18, 0, 0, 0);
          saleDayName = 'Today';
          type = 'Toys';
        } else {
          // Next sale is Tuesday books
          nextSale.setDate(now.getDate() + 2);
          nextSale.setHours(18, 0, 0, 0);
          saleDayName = 'Tuesday';
          type = 'Books';
        }
      } else if (currentDay === 1) { // Monday
        // Next sale is Tuesday books
        nextSale.setDate(now.getDate() + 1);
        nextSale.setHours(18, 0, 0, 0);
        saleDayName = 'Tuesday';
        type = 'Books';
      } else if (currentDay === 2) { // Tuesday
        // If it's before 6 PM, today is book sale day
        if (now.getHours() < 18) {
          nextSale.setHours(18, 0, 0, 0);
          saleDayName = 'Today';
          type = 'Books';
        } else {
          // Next sale is Thursday books
          nextSale.setDate(now.getDate() + 2);
          nextSale.setHours(18, 0, 0, 0);
          saleDayName = 'Thursday';
          type = 'Books';
        }
      } else if (currentDay === 3) { // Wednesday
        // Next sale is Thursday books
        nextSale.setDate(now.getDate() + 1);
        nextSale.setHours(18, 0, 0, 0);
        saleDayName = 'Thursday';
        type = 'Books';
      } else if (currentDay === 4) { // Thursday
        // If it's before 6 PM, today is book sale day
        if (now.getHours() < 18) {
          nextSale.setHours(18, 0, 0, 0);
          saleDayName = 'Today';
          type = 'Books';
        } else {
          // Next sale is Sunday toys
          nextSale.setDate(now.getDate() + 3);
          nextSale.setHours(18, 0, 0, 0);
          saleDayName = 'Sunday';
          type = 'Toys';
        }
      } else if (currentDay === 5) { // Friday
        // Next sale is Sunday toys
        nextSale.setDate(now.getDate() + 2);
        nextSale.setHours(18, 0, 0, 0);
        saleDayName = 'Sunday';
        type = 'Toys';
      } else if (currentDay === 6) { // Saturday
        // Next sale is Sunday toys
        nextSale.setDate(now.getDate() + 1);
        nextSale.setHours(18, 0, 0, 0);
        saleDayName = 'Sunday';
        type = 'Toys';
      }

      const difference = nextSale.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }

      setNextSaleDay(saleDayName);
      setSaleType(type);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const joinSaleGroup = () => {
    const message = encodeURIComponent(`Hi! I'd like to join the Brainy Beans sale group to get notified about ${saleType.toLowerCase()} sales! 🛍️`);
    window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
  };

  const addToCalendar = () => {
    // Simple calendar event creation
    const eventTitle = `Brainy Beans ${saleType} Sale`;
    const eventDetails = `Don't miss our ${saleType.toLowerCase()} sale day!`;
    
    // Create a basic calendar URL (works with Google Calendar)
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary-50 to-accent-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Next Sale Day Countdown
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss our special sale days! Books on Tuesdays & Thursdays, Toys on Sundays.
            Join our WhatsApp group for instant notifications when sales go live!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-soft-lg"
          >
            {/* Next Sale Info */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-4">
                <span className="text-2xl">{saleType === 'Books' ? '📚' : '🧸'}</span>
                <span className="font-body font-semibold text-primary-700">
                  Next Sale: {nextSaleDay} {saleType}
                </span>
              </div>
              
              {nextSaleDay === 'Today' && (
                <p className="font-body text-green-600 font-semibold">
                  🎉 Sale starts at 6:00 PM today!
                </p>
              )}
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-purple-500 text-white rounded-xl p-4 mb-2">
                    <div className="font-heading font-bold text-2xl md:text-3xl">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="font-body font-medium text-gray-600 text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={joinSaleGroup}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>Join Sale Group</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addToCalendar}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
              >
                <Calendar size={20} />
                <span>Add to Calendar</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Sale Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { day: 'Tuesday', type: 'Books', icon: '📚', color: 'from-blue-500 to-primary-500' },
              { day: 'Thursday', type: 'Books', icon: '📖', color: 'from-primary-500 to-purple-500' },
              { day: 'Sunday', type: 'Toys', icon: '🧸', color: 'from-accent-500 to-secondary-500' }
            ].map((sale, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-soft"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${sale.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{sale.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                  {sale.day}
                </h3>
                <p className="font-body text-gray-600 mb-2">
                  {sale.type} Sale
                </p>
                <div className="flex items-center justify-center space-x-1 text-gray-500">
                  <Clock size={16} />
                  <span className="font-body text-sm">6:00 PM onwards</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};