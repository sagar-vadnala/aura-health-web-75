
import { Shield, Zap, Database, Users, Clock, Award } from 'lucide-react';

const PlatformHighlights = () => {
  const highlights = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption",
      metric: "99.9%",
      metricLabel: "Uptime"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast AI inference for critical decisions",
      metric: "<1s",
      metricLabel: "Response Time"
    },
    {
      icon: Database,
      title: "EHR Integration",
      description: "Seamless integration with 50+ EHR systems",
      metric: "50+",
      metricLabel: "Integrations"
    },
    {
      icon: Users,
      title: "Multi-user Support",
      description: "Collaborative workspace for healthcare teams",
      metric: "1000+",
      metricLabel: "Active Users"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and monitoring",
      metric: "24/7",
      metricLabel: "Support"
    },
    {
      icon: Award,
      title: "Clinical Accuracy",
      description: "Validated by leading medical institutions",
      metric: "98.5%",
      metricLabel: "Accuracy"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Platform <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for healthcare professionals with enterprise-grade reliability and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200">
                  <highlight.icon className="text-purple-600" size={32} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{highlight.metric}</div>
                  <div className="text-sm text-gray-500">{highlight.metricLabel}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg">
            Explore Platform Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
