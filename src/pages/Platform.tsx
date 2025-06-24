
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Zap, Database, Cloud, Code, Users, CheckCircle } from 'lucide-react';

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

  const integrations = [
    "Epic EHR", "Cerner", "AllScripts", "athenahealth", "NextGen", "eClinicalWorks"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for healthcare professionals, our platform combines cutting-edge AI capabilities 
              with the security and reliability that healthcare demands.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-fit mb-6">
                  <feature.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless EHR Integrations</h3>
            <p className="text-lg text-gray-600">Connect with your existing healthcare systems</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="text-green-500" size={20} />
                </div>
                <span className="text-sm font-medium text-gray-700">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
