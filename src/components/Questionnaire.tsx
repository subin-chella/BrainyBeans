import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gift, Download, MessageCircle } from 'lucide-react';

interface QuestionnaireData {
  childAge: string;
  readingStage: string;
  bookInterests: string[];
  readingFrequency: string;
  skillsTodevelop: string[];
  budget: string;
  toyPreferences: string[];
  itemCondition: string;
  occasions: string[];
  howHeard: string;
  email: string;
  phone: string;
  childName: string;
  parentName: string;
}

export const Questionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuestionnaireData>({
    childAge: '',
    readingStage: '',
    bookInterests: [],
    readingFrequency: '',
    skillsTodev: [],
    budget: '',
    toyPreferences: [],
    itemCondition: '',
    occasions: [],
    howHeard: '',
    email: '',
    phone: '',
    childName: '',
    parentName: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const questions = [
    {
      id: 'childAge',
      title: 'What age group is your child in?',
      type: 'single',
      options: ['0-2 years', '3-5 years', '6-8 years', '9-10 years', 'Multiple ages'],
      icon: '👶'
    },
    {
      id: 'readingStage',
      title: 'Which reading stage is your child at?',
      type: 'single',
      options: ['Pre-reading', 'Early reader', 'Independent reader', 'Advanced reader'],
      icon: '📖'
    },
    {
      id: 'bookInterests',
      title: 'What types of books does your child enjoy most?',
      type: 'multiple',
      options: ['Adventure', 'Educational', 'Fantasy', 'Science', 'Animals', 'Vehicles', 'Arts & Crafts'],
      icon: '📚'
    },
    {
      id: 'readingFrequency',
      title: 'How often do you read with your child?',
      type: 'single',
      options: ['Daily', 'Several times a week', 'Weekly', 'Occasionally'],
      icon: '⌚'
    },
    {
      id: 'skillsTodev',
      title: 'What skills are you hoping to develop in your child?',
      type: 'multiple',
      options: ['Language', 'Creativity', 'Problem-solving', 'Social skills', 'Fine motor skills', 'Concentration'],
      icon: '🧠'
    },
    {
      id: 'budget',
      title: "What's your budget range for children's books?",
      type: 'single',
      options: ['Under ₹500', '₹500-1000', '₹1000-2000', 'Over ₹2000'],
      icon: '💰'
    },
    {
      id: 'toyPreferences',
      title: 'What types of toys does your child prefer?',
      type: 'multiple',
      options: ['Building blocks', 'Puzzles', 'Pretend play', 'Outdoor', 'Arts & crafts', 'Educational', 'Travel-friendly'],
      icon: '🧸'
    },
    {
      id: 'itemCondition',
      title: 'Do you prefer new or preloved items?',
      type: 'single',
      options: ['New only', 'Preloved only', 'Both', 'Depends on item'],
      icon: '✨'
    },
    {
      id: 'occasions',
      title: 'What special occasions are you shopping for?',
      type: 'multiple',
      options: ['Birthday', 'Holiday gift', 'Reward', 'Travel entertainment', 'Educational support', 'Just because'],
      icon: '🎉'
    },
    {
      id: 'howHeard',
      title: 'How did you hear about Brainy Beans?',
      type: 'single',
      options: ['Friend/Family', 'Social Media', 'Search Engine', 'Local Event', 'Other'],
      icon: '📢'
    }
  ];

  const contactFields = [
    { id: 'parentName', label: "Parent's Name", type: 'text', required: true },
    { id: 'email', label: 'Email Address', type: 'email', required: true },
    { id: 'phone', label: 'WhatsApp Number', type: 'tel', required: true },
    { id: 'childName', label: "Child's Name (Optional)", type: 'text', required: false }
  ];

  const handleOptionSelect = (questionId: string, option: string, isMultiple: boolean) => {
    if (isMultiple) {
      const currentValues = formData[questionId as keyof QuestionnaireData] as string[];
      const newValues = currentValues.includes(option)
        ? currentValues.filter(v => v !== option)
        : [...currentValues, option];
      setFormData(prev => ({ ...prev, [questionId]: newValues }));
    } else {
      setFormData(prev => ({ ...prev, [questionId]: option }));
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length + 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would normally send data to your backend
    console.log('Form submitted:', formData);
    setShowResults(true);
  };

  const generateRecommendations = () => {
    const recommendations = [];
    
    // Age-based recommendations
    if (formData.childAge === '0-2 years') {
      recommendations.push('Board books with textures', 'Soft toys for sensory play', 'Simple musical toys');
    } else if (formData.childAge === '3-5 years') {
      recommendations.push('Picture books with simple stories', 'Building blocks', 'Creative art supplies');
    } else if (formData.childAge === '6-8 years') {
      recommendations.push('Early chapter books', 'Educational puzzles', 'Science experiment kits');
    } else if (formData.childAge === '9-10 years') {
      recommendations.push('Adventure novels', 'Complex building sets', 'Strategy games');
    }

    // Interest-based recommendations
    if (formData.bookInterests.includes('Science')) {
      recommendations.push('Science experiment books', 'Nature exploration guides');
    }
    if (formData.bookInterests.includes('Animals')) {
      recommendations.push('Animal encyclopedia', 'Pet care books');
    }

    return recommendations.slice(0, 5);
  };

  const downloadLeadMagnet = () => {
    // In a real implementation, this would generate and download a PDF
    alert('Your personalized guide is being prepared! Check your email in a few minutes.');
  };

  const shareToWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I just completed the Brainy Beans questionnaire and got some amazing recommendations! I'd love to learn more about your books and toys. My child is ${formData.childAge} and enjoys ${formData.bookInterests.join(', ')}. 📚✨`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <section id="questionnaire" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-primary-50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              Find the Perfect Books & Toys for Your Child
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8">
              Take our quick 2-minute questionnaire and get personalized recommendations plus a free guide 
              tailored to your child's age and interests!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleVisibility}
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-body font-semibold text-lg flex items-center space-x-3 mx-auto shadow-soft-lg transition-all duration-200"
            >
              <Gift size={24} />
              <span>Get Your Free Guide</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const recommendations = generateRecommendations();
    
    return (
      <section id="questionnaire" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-primary-50">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-soft-lg text-center"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="font-heading font-bold text-3xl text-gray-800 mb-6">
              Congratulations, {formData.parentName}!
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8">
              Based on your answers, we've created personalized recommendations for {formData.childName || 'your child'}!
            </p>

            <div className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-xl p-6 mb-8">
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">
                Your Personalized Recommendations
              </h3>
              <ul className="space-y-2 text-left">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center space-x-2 font-body text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadLeadMagnet}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
              >
                <Download size={20} />
                <span>Download Full Guide</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareToWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-body font-semibold flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>Shop Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const isContactStep = currentStep === questions.length;
  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  return (
    <section id="questionnaire" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-primary-50">
      <div className="container mx-auto max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm text-gray-600">
              Step {currentStep + 1} of {questions.length + 1}
            </span>
            <span className="font-body text-sm text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary-500 to-purple-500 h-3 rounded-full relative"
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-primary-500 flex items-center justify-center">
                <span className="text-xs">🚂</span>
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-soft-lg"
          >
            {isContactStep ? (
              <div>
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">📋</div>
                  <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">
                    Almost Done! Just a Few Details
                  </h2>
                  <p className="font-body text-gray-600">
                    We'll use this information to send your personalized recommendations and free guide.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactFields.map((field) => (
                    <div key={field.id}>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.id as keyof QuestionnaireData] as string}
                        onChange={(e) => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-body"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="font-body text-sm text-gray-600">
                      I agree to receive my personalized recommendations and occasional updates about 
                      Brainy Beans products. I can unsubscribe anytime.
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{questions[currentStep].icon}</div>
                  <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">
                    {questions[currentStep].title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {questions[currentStep].options.map((option, index) => {
                    const isMultiple = questions[currentStep].type === 'multiple';
                    const currentValues = formData[questions[currentStep].id as keyof QuestionnaireData] as string | string[];
                    const isSelected = isMultiple 
                      ? (currentValues as string[]).includes(option)
                      : currentValues === option;

                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOptionSelect(questions[currentStep].id, option, isMultiple)}
                        className={`w-full p-4 rounded-lg border-2 transition-all font-body font-medium text-left ${
                          isSelected
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-300 hover:bg-primary-25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {isSelected && <span className="text-primary-500">✓</span>}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-medium transition-all ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                <ChevronLeft size={20} />
                <span>Previous</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={isContactStep ? handleSubmit : handleNext}
                className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-body font-medium transition-colors"
              >
                <span>{isContactStep ? 'Get My Recommendations' : 'Next'}</span>
                {!isContactStep && <ChevronRight size={20} />}
                {isContactStep && <Gift size={20} />}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};