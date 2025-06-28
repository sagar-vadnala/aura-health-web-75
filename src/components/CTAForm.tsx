
import { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';

const CTAForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const benefits = [
    {
      icon: Users,
      title: "Join 50+ Healthcare Partners",
      description: "Trusted by leading medical institutions worldwide"
    },
    {
      icon: Clock,
      title: "Save 2+ Hours Daily",
      description: "Reduce documentation time by 75% on average"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant & Secure",
      description: "Enterprise-grade security for patient data protection"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center aligned heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get started with Hikigai AI to experience the future of Healthcare documentation and reduce clinician load from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Free Trial</h3>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="doctor@hospital.com"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600">We'll be in touch shortly to get you started.</p>
              </div>
            )}
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="p-3 bg-white/20 rounded-full flex-shrink-0">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-blue-100">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
