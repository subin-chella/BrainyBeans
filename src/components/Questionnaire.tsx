import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gift, Download, MessageCircle, Star } from 'lucide-react';

interface FunnelData {
  childAge: string;
  primaryGoal: string;
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  multipleAges?: string[];
}

interface AgePathway {
  id: string;
  title: string;
  message: string;
  question: string;
  options: {
    id: string;
    title: string;
    description: string;
    leadMagnet: {
      title: string;
      description: string;
      preview: string[];
    };
  }[];
  transformationStory: {
    childName: string;
    situation: string;
    outcome: string;
    timeframe: string;
  };
}

export const Questionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FunnelData>({
    childAge: '',
    primaryGoal: '',
    childName: '',
    parentName: '',
    email: '',
    phone: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const agePathways: AgePathway[] = [
    {
      id: '0-2',
      title: '0-2 Years: Foundation Building',
      message: 'The first 1,000 days of your child\'s life shape their brain architecture forever. The right experiences now can lead to stronger cognitive abilities, better emotional regulation, and advanced language skills later.',
      question: 'Which developmental outcome matters most to you right now?',
      options: [
        {
          id: 'language',
          title: 'Strong Language Foundation',
          description: 'Build vocabulary and communication skills that last a lifetime',
          leadMagnet: {
            title: 'Early Language Builder Kit',
            description: '10 research-backed activities that boost vocabulary development',
            preview: ['Finger plays for language development', 'Interactive reading techniques', 'First word encouragement activities', 'Daily language rituals']
          }
        },
        {
          id: 'cognitive',
          title: 'Cognitive Development',
          description: 'Enhance brain development and thinking skills',
          leadMagnet: {
            title: 'Baby Brain Booster Guide',
            description: 'Sensory play ideas and cognitive development activities',
            preview: ['Sensory exploration activities', 'Cause-effect games', 'Object permanence activities', 'Memory building exercises']
          }
        },
        {
          id: 'emotional',
          title: 'Emotional Security & Social Bonds',
          description: 'Create secure attachment and emotional intelligence',
          leadMagnet: {
            title: 'Secure Attachment Activity Set',
            description: 'Bonding rituals and emotional regulation techniques',
            preview: ['Daily bonding rituals', 'Comfort techniques', 'Emotional regulation games', 'Trust-building activities']
          }
        },
        {
          id: 'physical',
          title: 'Physical Development & Coordination',
          description: 'Support motor skills and physical milestones',
          leadMagnet: {
            title: 'Motor Skills Milestone Map',
            description: 'Age-appropriate activities for physical development',
            preview: ['Crawling encouragement activities', 'Grasping skill builders', 'Early walking support', 'Coordination games']
          }
        }
      ],
      transformationStory: {
        childName: 'Aanya',
        situation: 'When Aanya was 14 months old, her mom Priya was concerned that she wasn\'t saying any words yet.',
        outcome: 'After using our Language Foundation activities for just 6 weeks, Aanya said her first word, and by 18 months had a vocabulary of over 20 words.',
        timeframe: '6 weeks'
      }
    },
    {
      id: '3-5',
      title: '3-5 Years: School Readiness',
      message: 'Children who develop strong pre-literacy skills at this age are 32% more likely to become confident readers. The right activities now can transform your child\'s school readiness and future academic success.',
      question: 'Which outcome would make the biggest difference for your child?',
      options: [
        {
          id: 'school-readiness',
          title: 'School Readiness & Confidence',
          description: 'Prepare your child for kindergarten success',
          leadMagnet: {
            title: 'Kindergarten Readiness Roadmap',
            description: '4-week activity plan for school preparation',
            preview: ['Letter recognition games', 'Number concept activities', 'Listening skills builders', 'Following directions practice']
          }
        },
        {
          id: 'creative-thinking',
          title: 'Creative Thinking & Problem Solving',
          description: 'Develop imagination and innovative thinking',
          leadMagnet: {
            title: 'Imagination Igniter Kit',
            description: 'Open-ended activities for creative development',
            preview: ['Open-ended art projects', 'Storytelling prompts', 'Creative problem-solving games', 'Invention challenges']
          }
        },
        {
          id: 'focus-attention',
          title: 'Focus & Attention Span',
          description: 'Build concentration and sustained attention',
          leadMagnet: {
            title: 'Concentration Builders Collection',
            description: 'Graduated activities for attention development',
            preview: ['Attention-span activities', 'Mindfulness games for preschoolers', 'Focus-enhancing play ideas', 'Calm-down techniques']
          }
        },
        {
          id: 'social-skills',
          title: 'Social Skills & Emotional Intelligence',
          description: 'Develop friendship skills and emotional awareness',
          leadMagnet: {
            title: 'Friendship & Feelings Toolkit',
            description: 'Activities for social and emotional development',
            preview: ['Emotion recognition activities', 'Sharing games', 'Conflict resolution stories', 'Empathy building exercises']
          }
        }
      ],
      transformationStory: {
        childName: 'Rohan',
        situation: 'Rohan struggled with sitting still for activities and his parents worried about his kindergarten readiness.',
        outcome: 'After following our Focus-Building System for 8 weeks, he can now engage with activities for 15+ minutes and his preschool teacher has noticed a significant improvement.',
        timeframe: '8 weeks'
      }
    },
    {
      id: '6-8',
      title: '6-8 Years: Reading Mastery',
      message: 'This critical age determines whether your child becomes a lifelong reader or struggles with reading. Children who read for pleasure at this age score higher in ALL school subjects—not just language arts.',
      question: 'What outcome would you most like to see in your child?',
      options: [
        {
          id: 'reading-confidence',
          title: 'Reading Confidence & Love of Books',
          description: 'Transform reluctant readers into book lovers',
          leadMagnet: {
            title: 'Reading Confidence System',
            description: '6-week plan to help reluctant readers',
            preview: ['Book ladder approach', 'Comprehension discussion questions', 'Reading reward system', 'Confidence building techniques']
          }
        },
        {
          id: 'academic-success',
          title: 'Academic Success & Knowledge Building',
          description: 'Excel in all school subjects through enhanced learning',
          leadMagnet: {
            title: 'Subject Mastery Starter Kit',
            description: 'Learning games and study strategies',
            preview: ['Core subject learning games', 'Memory techniques for kids', 'Homework success strategies', 'Study skills development']
          }
        },
        {
          id: 'creative-expression',
          title: 'Creative Expression & Imagination',
          description: 'Develop storytelling and creative writing abilities',
          leadMagnet: {
            title: 'Story Creator\'s Handbook',
            description: 'Creative writing and storytelling guide',
            preview: ['Creative writing prompts', 'Illustration techniques', 'Storytelling games', 'Character development activities']
          }
        },
        {
          id: 'independence',
          title: 'Independence & Self-Directed Learning',
          description: 'Foster autonomous learning and self-motivation',
          leadMagnet: {
            title: 'Self-Directed Learning Launch Pad',
            description: 'Project-based learning and independence skills',
            preview: ['Project-based learning ideas', 'Independent study skills', 'Self-monitoring techniques', 'Goal-setting for kids']
          }
        }
      ],
      transformationStory: {
        childName: 'Meera',
        situation: 'Meera used to avoid reading time and would get frustrated with books. Her mother Anjali was worried about her falling behind.',
        outcome: 'After following our Reading Confidence System and starting with the right level of books, within 3 months Meera was voluntarily choosing to read before bed.',
        timeframe: '3 months'
      }
    },
    {
      id: '9-10',
      title: '9-10 Years: Advanced Skills',
      message: 'The skills your child develops now will shape their future academic success and personal interests. This is when children develop the critical thinking abilities that determine future success in school and beyond.',
      question: 'Which of these outcomes would benefit your child most?',
      options: [
        {
          id: 'critical-thinking',
          title: 'Critical Thinking & Problem-Solving',
          description: 'Develop analytical and logical reasoning skills',
          leadMagnet: {
            title: 'Critical Thinker\'s Toolkit',
            description: 'Logic puzzles and analytical thinking activities',
            preview: ['Logic puzzles and brain teasers', 'Debate frameworks for kids', 'Analytical reading techniques', 'Problem-solving strategies']
          }
        },
        {
          id: 'academic-confidence',
          title: 'Confidence in Academic Abilities',
          description: 'Build strong study skills and test confidence',
          leadMagnet: {
            title: 'Subject Strength Builder',
            description: 'Advanced study techniques and confidence building',
            preview: ['Advanced study techniques', 'Test preparation strategies', 'Learning style assessment', 'Academic confidence builders']
          }
        },
        {
          id: 'discovering-passions',
          title: 'Discovering Passions & Interests',
          description: 'Explore diverse interests and find natural talents',
          leadMagnet: {
            title: 'Interest Exploration Guide',
            description: 'Diverse project ideas across multiple disciplines',
            preview: ['Multi-discipline project ideas', 'Professional interview questions', 'Goal-setting framework', 'Talent discovery activities']
          }
        },
        {
          id: 'digital-literacy',
          title: 'Digital Literacy & Future Skills',
          description: 'Prepare for the digital future with essential tech skills',
          leadMagnet: {
            title: 'Digital Skills Roadmap',
            description: 'Age-appropriate tech learning path',
            preview: ['Tech learning progression', 'Online safety guidelines', 'Creative digital projects', 'Future skills development']
          }
        }
      ],
      transformationStory: {
        childName: 'Dev',
        situation: 'Dev was struggling with science concepts at school and losing interest in STEM subjects.',
        outcome: 'After introducing our STEM Discovery Kit and activity guide, the hands-on experiments connected abstract concepts to real-world applications. His last science project earned the highest grade in his class.',
        timeframe: '2 months'
      }
    }
  ];

  const multipleChildrenOption = {
    id: 'multiple',
    title: 'Multiple Children',
    message: 'Families with multiple children face unique challenges. Our approach helps you maximize learning moments that work for different ages while creating valuable bonding experiences.',
    question: 'Select the age ranges of your children',
    leadMagnet: {
      title: 'Family Growth System',
      description: 'Multi-age activities and family learning strategies',
      preview: ['Multi-age reading activities', 'STEM projects for all ages', 'Sibling teaching opportunities', 'Family project ideas']
    }
  };

  const getCurrentPathway = (): AgePathway | null => {
    return agePathways.find(pathway => pathway.id === formData.childAge) || null;
  };

  const getCurrentOption = () => {
    const pathway = getCurrentPathway();
    if (!pathway) return null;
    return pathway.options.find(option => option.id === formData.primaryGoal) || null;
  };

  const handleAgeSelect = (age: string) => {
    setFormData(prev => ({ ...prev, childAge: age, primaryGoal: '' }));
    setCurrentStep(1);
  };

  const handleGoalSelect = (goal: string) => {
    setFormData(prev => ({ ...prev, primaryGoal: goal }));
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/save-response", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
      if (response.ok) {
        setShowResults(true);
      } else {
        alert("Failed to save your response. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const downloadLeadMagnet = () => {
    alert('Your personalized development guide is being prepared! Check your email in a few minutes.');
  };

  const shareToWhatsApp = () => {
    const option = getCurrentOption();
    const pathway = getCurrentPathway();
    const message = encodeURIComponent(`Hi! I just completed the Brainy Beans development assessment for my ${formData.childAge} child. I'm most interested in ${option?.title} and would love to see your recommended books and toys! 📚✨`);
    window.open(`https://wa.me/7904472575?text=${message}`, '_blank');
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
            className="max-w-3xl mx-auto"
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
              Unlock Your Child's Full Learning Potential
              <span className="block text-primary-600">in Just 15 Minutes a Day</span>
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
              Get a personalized development plan based on your child's age and your biggest goals.
              Discover the exact books and activities that will accelerate their growth.
            </p>

            {/* Benefits Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 rounded-xl p-4">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="font-heading font-semibold text-gray-800 mb-1">Faster Development</h3>
                <p className="font-body text-sm text-gray-600">Research-backed activities that accelerate learning</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-heading font-semibold text-gray-800 mb-1">Personalized Plan</h3>
                <p className="font-body text-sm text-gray-600">Customized to your child's exact age and needs</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <div className="text-2xl mb-2">⏰</div>
                <h3 className="font-heading font-semibold text-gray-800 mb-1">Quick Results</h3>
                <p className="font-body text-sm text-gray-600">See improvements in just 2-3 weeks</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleVisibility}
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-10 py-5 rounded-full font-body font-bold text-xl flex items-center space-x-3 mx-auto shadow-soft-lg transition-all duration-200"
            >
              <Gift size={28} />
              <span>Get Your Free Development Plan</span>
            </motion.button>

            <p className="font-body text-sm text-gray-500 mt-4">
              ✨ Takes less than 2 minutes • Instant results • No spam, ever
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const option = getCurrentOption();
    const pathway = getCurrentPathway();

    return (
      <section id="questionnaire" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-primary-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-soft-lg"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="font-heading font-bold text-3xl text-gray-800 mb-4">
                Perfect! Here's Your Personalized Plan, {formData.parentName}!
              </h2>
              <p className="font-body text-lg text-gray-600">
                Based on your child's age ({formData.childAge}) and your focus on {option?.title.toLowerCase()},
                we've created the perfect development roadmap.
              </p>
            </div>

            {/* Lead Magnet Preview */}
            <div className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-500 text-white p-2 rounded-full">
                  <Gift size={20} />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800">
                  Your Free Guide: {option?.leadMagnet.title}
                </h3>
              </div>
              <p className="font-body text-gray-700 mb-4">
                {option?.leadMagnet.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {option?.leadMagnet.preview.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 font-body text-sm text-gray-700">
                    <Star size={14} className="text-yellow-500 fill-current flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transformation Story */}
            {pathway && (
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h4 className="font-heading font-bold text-lg text-gray-800 mb-3">
                  🌟 Real Success Story
                </h4>
                <p className="font-body text-gray-700 mb-2">
                  <strong>{pathway.transformationStory.childName}'s Story:</strong> {pathway.transformationStory.situation}
                </p>
                <p className="font-body text-gray-700 mb-2">
                  <strong>Result:</strong> {pathway.transformationStory.outcome}
                </p>
                <p className="font-body text-sm text-primary-600 font-semibold">
                  ⏰ Timeline: {pathway.transformationStory.timeframe}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadLeadMagnet}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-body font-bold text-lg flex items-center space-x-2 transition-colors"
              >
                <Download size={24} />
                <span>Download Your Free Guide</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareToWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-body font-bold text-lg flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={24} />
                <span>Shop Recommended Items</span>
              </motion.button>
            </div>

            <div className="text-center mt-6">
              <p className="font-body text-sm text-gray-600">
                📧 Your complete guide will be emailed to you within 5 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const progress = ((currentStep + 1) / 4) * 100;

  return (
    <section id="questionnaire" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-primary-50">
      <div className="container mx-auto max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm text-gray-600">
              Step {currentStep + 1} of 4
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
                <span className="text-xs">🚀</span>
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
            {currentStep === 0 && (
              <div className="text-center">
                <div className="text-5xl mb-6">👶</div>
                <h2 className="font-heading font-bold text-2xl text-gray-800 mb-6">
                  What age is your child?
                </h2>
                <p className="font-body text-gray-600 mb-8">
                  Each age has unique developmental opportunities. Let's find the perfect approach for your child.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {agePathways.map((pathway) => (
                    <motion.button
                      key={pathway.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAgeSelect(pathway.id)}
                      className="p-6 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-25 transition-all text-left"
                    >
                      <div className="text-3xl mb-2">
                        {pathway.id === '0-2' ? '👶' : pathway.id === '3-5' ? '🧒' : pathway.id === '6-8' ? '👦' : '👧'}
                      </div>
                      <div className="font-heading font-bold text-lg text-gray-800 mb-1">
                        {pathway.id} Years
                      </div>
                      <div className="font-body text-sm text-gray-600">
                        {pathway.title.split(': ')[1]}
                      </div>
                    </motion.button>
                  ))}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAgeSelect('multiple')}
                    className="p-6 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-25 transition-all text-left sm:col-span-2"
                  >
                    <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                    <div className="font-heading font-bold text-lg text-gray-800 mb-1">
                      Multiple Children
                    </div>
                    <div className="font-body text-sm text-gray-600">
                      Different ages, family activities
                    </div>
                  </motion.button>
                </div>
              </div>
            )}

            {currentStep === 1 && formData.childAge !== 'multiple' && (
              <div>
                {(() => {
                  const pathway = getCurrentPathway();
                  if (!pathway) return null;

                  return (
                    <div className="text-center">
                      <div className="text-5xl mb-6">🎯</div>
                      <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">
                        {pathway.question}
                      </h2>
                      <div className="bg-blue-50 rounded-xl p-4 mb-8">
                        <p className="font-body text-gray-700 leading-relaxed">
                          {pathway.message}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {pathway.options.map((option) => (
                          <motion.button
                            key={option.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleGoalSelect(option.id)}
                            className={`w-full p-4 rounded-xl border-2 transition-all text-left ${formData.primaryGoal === option.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300 hover:bg-primary-25'
                              }`}
                          >
                            <div className="font-heading font-bold text-lg text-gray-800 mb-2">
                              {option.title}
                            </div>
                            <div className="font-body text-gray-600 text-sm">
                              {option.description}
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {/* Transformation Story */}
                      <div className="bg-green-50 rounded-xl p-6 mt-8">
                        <h4 className="font-heading font-bold text-lg text-gray-800 mb-3">
                          🌟 Success Story
                        </h4>
                        <p className="font-body text-gray-700 text-sm">
                          <strong>{pathway.transformationStory.childName}:</strong> {pathway.transformationStory.situation} {pathway.transformationStory.outcome}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">📋</div>
                  <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">
                    Almost Done! Just Your Details
                  </h2>
                  <p className="font-body text-gray-600">
                    We'll send your personalized development plan to your email instantly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-body"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-body"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-body"
                      placeholder="+91 79044 72575"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Child's Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.childName}
                      onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-body"
                      placeholder="Your child's name"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="font-body text-sm text-gray-600">
                      I agree to receive my personalized development plan and helpful parenting tips.
                      I can unsubscribe anytime. No spam, ever! 🤝
                    </label>
                  </div>
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
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-medium transition-all ${currentStep === 0
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
                onClick={currentStep === 2 ? handleSubmit : handleNext}
                disabled={
                  (currentStep === 0 && !formData.childAge) ||
                  (currentStep === 1 && !formData.primaryGoal) ||
                  (currentStep === 2 && (!formData.parentName || !formData.email))
                }
                className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-body font-medium transition-colors"
              >
                <span>{currentStep === 2 ? 'Get My Development Plan' : 'Next'}</span>
                {currentStep !== 2 && <ChevronRight size={20} />}
                {currentStep === 2 && <Gift size={20} />}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};