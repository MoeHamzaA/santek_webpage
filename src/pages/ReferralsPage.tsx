import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CtaSection from '../components/home/CtaSection';

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

  useEffect(() => {
    document.title = 'Referrals | Santek Micro Solutions';
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
    // In a real application, you would send this data to your backend
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

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Referral Program</h1>
            <p className="text-xl text-gray-300">
              Recommend exceptional talent and be rewarded for your network
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">How Our Referral Program Works</h2>
            <p className="text-xl text-gray-600">
              Your network is valuable. When you refer qualified candidates to Santek Micro Solutions, everyone benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Refer',
                description: 'Submit your referral using our simple form below.',
                icon: (
                  <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'We Connect',
                description: 'Our team reaches out to your referral to assess fit and interest.',
                icon: (
                  <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                title: 'Get Rewarded',
                description: 'When your referral is hired, you receive a referral bonus.',
                icon: (
                  <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Referral Bonus Structure</h2>
            <p className="text-xl text-gray-600">
              We offer competitive bonuses based on position type
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          >
            <table className="w-full text-left">
              <thead className="bg-primary-950 text-white">
                <tr>
                  <th className="px-6 py-4">Position Type</th>
                  <th className="px-6 py-4">Referral Bonus</th>
                  <th className="px-6 py-4">Payment Terms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Entry-level Positions</td>
                  <td className="px-6 py-4 font-medium">$1,000</td>
                  <td className="px-6 py-4">Paid after 90 days of employment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">Mid-level Professionals</td>
                  <td className="px-6 py-4 font-medium">$2,500</td>
                  <td className="px-6 py-4">Paid after 90 days of employment</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Senior/Lead Positions</td>
                  <td className="px-6 py-4 font-medium">$5,000</td>
                  <td className="px-6 py-4">Paid after 90 days of employment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">Executive/Director Roles</td>
                  <td className="px-6 py-4 font-medium">$10,000</td>
                  <td className="px-6 py-4">50% at 90 days, 50% at 6 months</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-8 bg-primary-50 border border-primary-200 rounded-lg p-4 text-primary-800">
            <p className="text-sm">
              <strong>Note:</strong> Bonuses are paid after the referred candidate has been employed for the specified period. The referrer must be the first person to refer the candidate. Full terms and conditions are available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Submit a Referral</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Know someone who would be a great fit? Let us know!
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">Thank You for Your Referral!</h3>
                <p className="mb-4">
                  We appreciate you taking the time to submit a referral. Our team will review the information and reach out to your referral soon.
                </p>
                <button
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit Another Referral
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="yourName"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="yourEmail"
                        name="yourEmail"
                        value={formData.yourEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="yourPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        id="yourPhone"
                        name="yourPhone"
                        value={formData.yourPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                        Relationship to Referral*
                      </label>
                      <select
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
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
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Referral Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="referralName" className="block text-sm font-medium text-gray-700 mb-1">
                        Referral's Name*
                      </label>
                      <input
                        type="text"
                        id="referralName"
                        name="referralName"
                        value={formData.referralName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Referral's Email*
                      </label>
                      <input
                        type="email"
                        id="referralEmail"
                        name="referralEmail"
                        value={formData.referralEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="referralPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Referral's Phone
                      </label>
                      <input
                        type="tel"
                        id="referralPhone"
                        name="referralPhone"
                        value={formData.referralPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="referralPosition" className="block text-sm font-medium text-gray-700 mb-1">
                        Position Type*
                      </label>
                      <select
                        id="referralPosition"
                        name="referralPosition"
                        value={formData.referralPosition}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select position type</option>
                        <option value="entry_level">Entry-level Position</option>
                        <option value="mid_level">Mid-level Professional</option>
                        <option value="senior_level">Senior/Lead Position</option>
                        <option value="executive">Executive/Director Role</option>
                        <option value="not_sure">Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please provide any additional information about your referral that might be helpful (skills, experience, current role, etc.)"
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Submit Referral
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ReferralsPage;