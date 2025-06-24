
import { Shield, Zap, Database, Cloud, Code, Users } from 'lucide-react';

const Platform = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "HIPAA-compliant infrastructure with end-to-end encryption and advanced access controls"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast AI inference with sub-second response times for critical healthcare decisions"
    },
    {
      icon: Database,
      title: "Unified Data Hub",
      description: "Seamlessly integrate with existing EHR systems and medical databases"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable, reliable cloud infrastructure that grows with your healthcare organization"
    },
    {
      icon: Code,
      title: "API-First Design",
      description: "Comprehensive APIs and SDKs for easy integration into existing healthcare workflows"
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Multi-disciplinary team collaboration tools designed for healthcare professionals"
    }
  ];

  return (
    <section id="platform" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Platform, Simple Integration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for healthcare professionals, our platform combines cutting-edge AI capabilities 
            with the security and reliability that healthcare demands.
          </p>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-100">
              <div className="p-3 bg-blue-100 rounded-full w-fit mb-6">
                <feature.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Platform Architecture</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modular, microservices-based architecture ensures scalability, reliability, and easy maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Layer</h4>
              <p className="text-gray-600 text-sm">Secure data ingestion, processing, and storage with real-time synchronization</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Engine</h4>
              <p className="text-gray-600 text-sm">Advanced machine learning models with continuous learning capabilities</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">API Gateway</h4>
              <p className="text-gray-600 text-sm">RESTful APIs with comprehensive documentation and SDK support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
