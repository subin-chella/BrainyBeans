import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  age: string;
  price: string;
  originalPrice?: string;
  condition: 'new' | 'preloved';
  rating: number;
  image: string;
  description: string;
  tags: string[];
}

export const FeaturedProducts: React.FC = () => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Interactive ABC Learning Book",
      category: "Educational Books",
      age: "2-4 years",
      price: "₹399",
      originalPrice: "₹599",
      condition: "new",
      rating: 4.8,
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Touch and feel alphabet book with sounds and textures",
      tags: ["Bestseller", "Educational"]
    },
    {
      id: 2,
      name: "Wooden Building Blocks Set",
      category: "Educational Toys",
      age: "3-6 years",
      price: "₹299",
      originalPrice: "₹450",
      condition: "preloved",
      rating: 4.6,
      image: "https://images.pexels.com/photos/4107845/pexels-photo-4107845.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Safe wooden blocks for creative building and learning",
      tags: ["Eco-friendly", "Creative"]
    },
    {
      id: 3,
      name: "My First Science Kit",
      category: "STEM Toys",
      age: "5-8 years",
      price: "₹799",
      condition: "new",
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Safe experiments to spark curiosity about science",
      tags: ["STEM", "Popular"]
    },
    {
      id: 4,
      name: "Adventure Stories Collection",
      category: "Story Books",
      age: "6-10 years",
      price: "₹249",
      originalPrice: "₹399",
      condition: "preloved",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Set of 5 exciting adventure stories for young readers",
      tags: ["Bundle", "Adventure"]
    }
  ];

  const orderProduct = (product: Product) => {
    const message = encodeURIComponent(`Hi! I'm interested in the "${product.name}" (${product.price}). Can you please provide more details? 📚✨`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Featured Favorites
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked books and toys that parents and children absolutely love. 
            These are our most popular items that keep flying off our virtual shelves!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-body font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-body font-medium ${
                    product.condition === 'new' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {product.condition === 'new' ? 'New' : 'Preloved'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary-600 font-body font-medium text-sm">
                    {product.category}
                  </span>
                  <span className="text-gray-500 font-body text-sm">
                    {product.age}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="font-body text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="font-body text-sm text-gray-600 ml-2">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-heading font-bold text-xl text-gray-800">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-body text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-body font-medium">
                      Save {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => orderProduct(product)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-body font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Order</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                  >
                    <Heart size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('gallery');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-colors"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};