import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MessageCircle, Filter } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'books' | 'toys';
  subcategory: string;
  age: string;
  price: string;
  condition: 'new' | 'preloved';
  image: string;
  description: string;
  available: boolean;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Touch & Feel Farm Animals",
      category: "books",
      subcategory: "Sensory Books",
      age: "0-3 years",
      price: "₹299",
      condition: "new",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Interactive book with different textures for each farm animal",
      available: true
    },
    {
      id: 2,
      title: "Wooden Rainbow Stacker",
      category: "toys",
      subcategory: "Building Toys",
      age: "1-4 years",
      price: "₹399",
      condition: "preloved",
      image: "https://images.pexels.com/photos/4107845/pexels-photo-4107845.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Colorful wooden stacking toy for developing motor skills",
      available: true
    },
    {
      id: 3,
      title: "My First Science Experiments",
      category: "books",
      subcategory: "Educational Books",
      age: "5-8 years",
      price: "₹449",
      condition: "new",
      image: "https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Safe and fun science experiments for curious minds",
      available: false
    },
    {
      id: 4,
      title: "Magnetic Building Tiles",
      category: "toys",
      subcategory: "STEM Toys",
      age: "3-8 years",
      price: "₹799",
      condition: "new",
      image: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Colorful magnetic tiles for creative building and learning",
      available: true
    },
    {
      id: 5,
      title: "Bedtime Stories Collection",
      category: "books",
      subcategory: "Story Books",
      age: "3-6 years",
      price: "₹199",
      condition: "preloved",
      image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Set of 10 soothing bedtime stories with beautiful illustrations",
      available: true
    },
    {
      id: 6,
      title: "Travel Activity Kit",
      category: "toys",
      subcategory: "Travel Toys",
      age: "4-8 years",
      price: "₹349",
      condition: "new",
      image: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Compact activity kit perfect for car rides and flights",
      available: true
    },
    {
      id: 7,
      title: "ABC Learning Cards",
      category: "books",
      subcategory: "Educational Books",
      age: "2-5 years",
      price: "₹149",
      condition: "preloved",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Colorful alphabet cards with pictures and words",
      available: true
    },
    {
      id: 8,
      title: "Puzzle Adventure Set",
      category: "toys",
      subcategory: "Puzzles",
      age: "4-7 years",
      price: "₹299",
      condition: "new",
      image: "https://images.pexels.com/photos/4107845/pexels-photo-4107845.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Set of 4 progressive puzzles with increasing difficulty",
      available: false
    },
    {
      id: 9,
      title: "Interactive World Map",
      category: "books",
      subcategory: "Educational Books",
      age: "6-10 years",
      price: "₹599",
      condition: "new",
      image: "https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Large format book with interactive elements about world geography",
      available: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '🌟' },
    { id: 'books', name: 'Books', icon: '📚' },
    { id: 'toys', name: 'Toys', icon: '🧸' },
    { id: 'new', name: 'New Items', icon: '✨' },
    { id: 'preloved', name: 'Preloved', icon: '💝' }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'books' || selectedCategory === 'toys') {
      return item.category === selectedCategory;
    }
    if (selectedCategory === 'new' || selectedCategory === 'preloved') {
      return item.condition === selectedCategory;
    }
    return true;
  });

  const orderItem = (item: GalleryItem) => {
    const message = encodeURIComponent(`Hi! I'm interested in "${item.title}" (${item.price}). Is it still available? 📚🧸`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Product Gallery
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our current collection of books and toys. Items shown here are examples - 
            join our WhatsApp group to see real-time availability during sale days!
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-body font-medium transition-colors flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className={`text-xs px-2 py-1 rounded-full font-body font-medium ${
                    item.condition === 'new' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.condition === 'new' ? 'New' : 'Preloved'}
                  </span>
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-body font-medium">
                    {item.category === 'books' ? '📚' : '🧸'}
                  </span>
                </div>

                {/* Availability */}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-body font-medium ${
                    item.available 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.available ? 'Available' : 'Sold'}
                  </span>
                </div>

                {/* Overlay for sold items */}
                {!item.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg">SOLD</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary-600 font-body font-medium text-sm">
                    {item.subcategory}
                  </span>
                  <span className="text-gray-500 font-body text-sm">
                    {item.age}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="font-body text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-xl text-gray-800">
                    {item.price}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                    {item.available && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          orderItem(item);
                        }}
                        className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle size={16} className="text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`text-sm px-3 py-1 rounded-full font-body font-medium ${
                      selectedItem.condition === 'new' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {selectedItem.condition === 'new' ? 'New' : 'Preloved'}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full font-body font-medium ${
                      selectedItem.available 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {selectedItem.available ? 'Available' : 'Sold Out'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-body font-medium">
                      {selectedItem.subcategory}
                    </span>
                    <span className="text-gray-500 font-body">
                      {selectedItem.age}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-gray-800 mb-4">
                    {selectedItem.title}
                  </h3>

                  <p className="font-body text-gray-600 mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-bold text-3xl text-gray-800">
                      {selectedItem.price}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    {selectedItem.available ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => orderItem(selectedItem)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center justify-center space-x-2 transition-colors"
                      >
                        <MessageCircle size={20} />
                        <span>Order Now</span>
                      </motion.button>
                    ) : (
                      <div className="flex-1 bg-gray-300 text-gray-500 px-6 py-3 rounded-full font-body font-semibold text-center">
                        Currently Sold Out
                      </div>
                    )}
                    
                    <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                      <Heart size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-4">
              Want to See More?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              This is just a sample of what we offer! Join our WhatsApp group to see our full 
              collection and get notified when new items arrive.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd love to see your full collection of books and toys. Can you add me to the WhatsApp group? 📚🧸");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg flex items-center space-x-3 mx-auto transition-colors"
            >
              <MessageCircle size={24} />
              <span>Join WhatsApp Group</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};