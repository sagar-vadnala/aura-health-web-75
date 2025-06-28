
import { Shield, Clock, Users, Award, Zap, Heart } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "HIPAA Compliant & Secure",
      description: "Bank-level security with end-to-end encryption protecting patient data"
    },
    {
      icon: Clock,
      title: "Save 2+ Hours Daily",
      description: "Reduce documentation time by 75% with AI-powered clinical notes"
    },
    {
      icon: Users,
      title: "Trusted by 50+ Healthcare Partners",
      description: "Serving over 1M+ patients with proven clinical outcomes"
    },
    {
      icon: Award,
      title: "98.5% Clinical Accuracy",
      description: "Validated by leading medical institutions with continuous learning"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Sub-second response times for critical healthcare decisions"
    },
    {
      icon: Heart,
      title: "Patient-Centric AI",
      description: "Every solution designed to improve patient outcomes and safety"
    }
  ];

  return (
    <section className="bg-white py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai AI?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by healthcare professionals worldwide for reliable, secure, and intelligent AI solutions
          </p>
        </div>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 flex items-center space-x-6 hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex-shrink-0">
                <reason.icon className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
