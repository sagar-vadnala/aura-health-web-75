
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Zap, Database, Cloud, Code, Users, CheckCircle, Lock, Award, Globe } from 'lucide-react';

const Platform = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Engine",
      description: "Proprietary machine learning models trained specifically for healthcare applications"
    },
    {
      icon: Database,
      title: "Unified Data Hub",
      description: "Centralized data processing and management across all healthcare touchpoints"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable infrastructure that grows with your healthcare organization"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "HIPAA-compliant infrastructure with military-grade encryption"
    }
  ];

  const fourPillars = [
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast processing with sub-second response times for critical healthcare decisions",
      metric: "<1s Response"
    },
    {
      icon: Shield,
      title: "Security",
      description: "End-to-end encryption with advanced access controls and audit trails",
      metric: "100% HIPAA Compliant"
    },
    {
      icon: Database,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems and automated failover",
      metric: "99.9% Uptime"
    },
    {
      icon: Users,
      title: "Scalability",
      description: "Seamlessly scales from small practices to large hospital networks",
      metric: "Unlimited Scale"
    }
  ];

  const integrations = [
    "Epic EHR", "Cerner", "AllScripts", "athenahealth", "NextGen", "eClinicalWorks",
    "Practice Fusion", "DrChrono", "Amazing Charts", "CureMD", "Greenway Health", "MEDITECH"
  ];

  const platformFeatures = [
    {
      icon: Code,
      title: "API-First Design",
      description: "Comprehensive RESTful APIs with extensive documentation and SDK support"
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description: "Role-based access control for entire healthcare teams"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Multi-region deployment with data residency compliance"
    },
    {
      icon: Award,
      title: "Clinical Validation",
      description: "Validated by leading medical institutions and healthcare professionals"
    }
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

      {/* Core Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Technology</h2>
            <p className="text-xl text-gray-600">Powered by advanced AI and built for healthcare</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-6">
                  <feature.icon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Pillars of HKG Platform</h2>
            <p className="text-xl text-gray-600">The foundation of reliable healthcare AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fourPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                    <pillar.icon className="text-purple-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{pillar.title}</h3>
                      <span className="text-lg font-bold text-purple-600">{pillar.metric}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Security & Compliance</h2>
              <p className="text-xl text-gray-600 mb-8">
                Your data security and patient privacy are our top priorities. We maintain the highest 
                standards of security and compliance in the healthcare industry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">HIPAA Compliant Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">End-to-End Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">Regular Security Audits</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 text-center">
              <div className="p-6 bg-white rounded-full w-fit mx-auto mb-6">
                <Lock className="text-purple-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                Military-grade encryption and multi-layered security protocols protect your sensitive healthcare data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless EHR Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your existing healthcare systems effortlessly</p>
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

      {/* Platform Features + Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features & Benefits</h2>
            <p className="text-xl text-gray-600">Everything you need for modern healthcare delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="p-4 bg-purple-100 rounded-full flex-shrink-0">
                  <feature.icon className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
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
