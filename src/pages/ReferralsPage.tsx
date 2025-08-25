import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Gift, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Award,
  Zap,
  Shield,
  Heart,
  Briefcase,
  Clock,
  DollarSign,
  UserCheck,
  MessageSquare,
  ThumbsUp,
  Info
} from 'lucide-react';


const ReferralsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    referralName: '',
    referralEmail: '',
    referralPhone: '',
    relationship: '',
    referralPosition: '',
    additionalInfo: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('how-it-works');

  useEffect(() => {
    document.title = 'Referral Program | Santek Micro Solutions';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      yourName: '',
      yourEmail: '',
      yourPhone: '',
      referralName: '',
      referralEmail: '',
      referralPhone: '',
      relationship: '',
      referralPosition: '',
      additionalInfo: '',
    });
  };



  const bonusStructure = [
    {
      level: 'Entry-level Positions',
      bonus: '$1,000',
      examples: ['Junior Developers', 'Support Specialists', 'Junior Analysts'],
      payment: 'Paid after 90 days of employment',
      icon: <Users className="h-6 w-6" />
    },
    {
      level: 'Mid-level Professionals',
      bonus: '$2,500',
      examples: ['Senior Developers', 'Product Managers', 'Business Analysts'],
      payment: 'Paid after 90 days of employment',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      level: 'Senior/Lead Positions',
      bonus: '$5,000',
      examples: ['Tech Leads', 'Senior Managers', 'Architects'],
      payment: 'Paid after 90 days of employment',
      icon: <Target className="h-6 w-6" />
    },
    {
      level: 'Executive/Director Roles',
      bonus: '$10,000',
      examples: ['Directors', 'VPs', 'CTOs'],
      payment: '50% at 90 days, 50% at 6 months',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const programFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Quick & Easy',
      description: 'Submit referrals in minutes with our streamlined process'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Secure & Private',
      description: 'Your information and referrals are kept confidential'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Fast Processing',
      description: 'We review and respond to referrals within 48 hours'
    },
    {
      icon: <Gift className="h-8 w-8 text-primary-600" />,
      title: 'Generous Rewards',
      description: 'Competitive bonuses ranging from $1,000 to $10,000'
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary-600" />,
      title: 'Quality Matches',
      description: 'We ensure the best fit for both candidates and companies'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
      title: 'Ongoing Support',
      description: 'We keep you updated throughout the entire process'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-950 to-primary-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white/5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-primary-600/20 p-4 rounded-full">
                <Gift className="h-12 w-12 text-primary-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Referral Program</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Earn rewards for connecting exceptional talent with amazing opportunities
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Your network is valuable. When you refer qualified candidates to Santek Micro Solutions, 
              everyone wins. Earn up to $10,000 for successful referrals!
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { number: '$500K+', label: 'Total Bonuses Paid' },
                { number: '2,000+', label: 'Successful Referrals' },
                { number: '95%', label: 'Success Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                >
                  <div className="text-2xl font-bold text-primary-300">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our Referral Program?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've designed our referral program to be simple, rewarding, and beneficial for everyone involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Getting started is simple. Follow these three easy steps to start earning referral bonuses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Submit Referral',
                  description: 'Fill out our simple referral form with your information and your referral\'s details.',
                  icon: <Users className="h-12 w-12 text-primary-600" />
                },
                {
                  step: '02',
                  title: 'We Connect',
                  description: 'Our team reaches out to your referral to assess fit and discuss opportunities.',
                  icon: <MessageSquare className="h-12 w-12 text-primary-600" />
                },
                {
                  step: '03',
                  title: 'Get Rewarded',
                  description: 'When your referral is hired, you receive your bonus according to our structure.',
                  icon: <Gift className="h-12 w-12 text-primary-600" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary-200 z-0"></div>
                  )}
                  
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative z-10 group hover:shadow-xl transition-all duration-300"
                       whileHover={{ 
                         y: -5,
                         transition: { duration: 0.3 }
                       }}>
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary-600 mb-2">STEP {step.step}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Structure */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Referral Bonus Structure</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Earn competitive bonuses based on the position level of your successful referral.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {bonusStructure.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl border border-primary-200 dark:border-primary-700 group hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-primary-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {bonus.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {bonus.level}
                      </h3>
                      <div className="text-2xl font-bold text-primary-600 mt-1">{bonus.bonus}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bonus.examples.map((example, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300 border border-primary-200 dark:border-primary-700"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  {bonus.payment}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-8 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 rounded-lg p-6"
          >
            <div className="flex items-start">
              <Info className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">Important Notes:</h4>
                <ul className="text-sm text-primary-700 dark:text-primary-300 space-y-1">
                  <li>• Bonuses are paid after the referred candidate has been employed for the specified period</li>
                  <li>• The referrer must be the first person to refer the candidate</li>
                  <li>• Full terms and conditions are available upon request</li>
                  <li>• Bonuses are subject to applicable taxes</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Referral Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Submit Your Referral</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Know someone who would be a great fit? Let us know and start earning your referral bonus!
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 rounded-xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You for Your Referral!</h3>
                <p className="text-lg mb-6">
                  We appreciate you taking the time to submit a referral. Our team will review the information 
                  and reach out to your referral within 48 hours.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>What happens next?</strong><br />
                    • We'll contact your referral within 48 hours<br />
                    • We'll assess their fit for current opportunities<br />
                    • We'll keep you updated throughout the process<br />
                    • You'll receive your bonus when they're hired!
                  </p>
                </div>
                <button
                  className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit Another Referral
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white flex items-center">
                    <UserCheck className="h-5 w-5 mr-2 text-primary-600" />
                    Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="yourName"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="yourEmail"
                        name="yourEmail"
                        value={formData.yourEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="yourPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        id="yourPhone"
                        name="yourPhone"
                        value={formData.yourPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Relationship to Referral*
                      </label>
                      <select
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      >
                        <option value="">Select your relationship</option>
                        <option value="former_colleague">Former Colleague</option>
                        <option value="current_colleague">Current Colleague</option>
                        <option value="friend">Friend</option>
                        <option value="classmate">Classmate</option>
                        <option value="family">Family Member</option>
                        <option value="professional_network">Professional Network</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary-600" />
                    Referral Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="referralName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Referral's Name*
                      </label>
                      <input
                        type="text"
                        id="referralName"
                        name="referralName"
                        value={formData.referralName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                        placeholder="Enter referral's full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Referral's Email*
                      </label>
                      <input
                        type="email"
                        id="referralEmail"
                        name="referralEmail"
                        value={formData.referralEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                        placeholder="Enter referral's email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="referralPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Referral's Phone
                      </label>
                      <input
                        type="tel"
                        id="referralPhone"
                        name="referralPhone"
                        value={formData.referralPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                        placeholder="Enter referral's phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="referralPosition" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Position Type*
                      </label>
                      <select
                        id="referralPosition"
                        name="referralPosition"
                        value={formData.referralPosition}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      >
                        <option value="">Select position type</option>
                        <option value="entry_level">Entry-level Position ($1,000)</option>
                        <option value="mid_level">Mid-level Professional ($2,500)</option>
                        <option value="senior_level">Senior/Lead Position ($5,000)</option>
                        <option value="executive">Executive/Director Role ($10,000)</option>
                        <option value="not_sure">Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="Please provide any additional information about your referral that might be helpful (skills, experience, current role, why you think they'd be a great fit, etc.)"
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Submit Referral & Start Earning
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ReferralsPage;