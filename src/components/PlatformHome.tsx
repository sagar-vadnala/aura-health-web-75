
import { Brain, Zap, Shield, Users } from 'lucide-react';

const PlatformHome = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that understand medical context and terminology"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time processing with sub-second response times for critical healthcare decisions"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "HIPAA-compliant infrastructure with end-to-end encryption and access controls"
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Easy integration with existing EHR systems and clinical workflows"
    }
  ];

  return (
    <section id="platform" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for healthcare professionals, our platform combines cutting-edge AI capabilities 
            with the security and reliability that healthcare demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
              <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200">
                <feature.icon className="text-purple-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Experience the Future of Healthcare AI</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust Hikigai AI to enhance their practice 
              and improve patient outcomes.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHome;
