
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Zap, Database, Cloud, Code, Users, CheckCircle, Lock, Award, Globe, Brain, Settings, UserCheck, AlertTriangle, EyeOff, FileText } from 'lucide-react';

const Platform = () => {
  const fourPillars = [
    {
      icon: Settings,
      title: "Open Extensible Platform",
      description: "Built with modular architecture that allows seamless integration with existing healthcare systems and third-party applications. Our open APIs enable custom workflows and unlimited scalability.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      icon: UserCheck,
      title: "Personalization",
      description: "AI-driven personalized experiences tailored to individual clinician workflows and patient needs. Machine learning adapts to your practice patterns for optimized healthcare delivery.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      icon: AlertTriangle,
      title: "Bias Prevention",
      description: "Advanced algorithms designed to identify and eliminate healthcare disparities. Our AI models are continuously audited to ensure fair and equitable patient care across all demographics.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      icon: EyeOff,
      title: "Privacy Centric",
      description: "Privacy-by-design architecture with zero-trust security model. Patient data remains encrypted at rest and in transit, with granular access controls and comprehensive audit trails.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    }
  ];

  const supportedEHRs = [
    "Epic", "Oracle Cerner", "Athena Health", "eClinicalWorks", "Hikigai SmartPAM"
  ];

  const platformFeatures = [
    {
      icon: FileText,
      title: "Streamlined Clinical Documentation",
      description: "AI-powered documentation that reduces charting time by 75% while maintaining clinical accuracy and compliance standards."
    },
    {
      icon: Brain,
      title: "Advanced Clinical Decision Support",
      description: "Evidence-based recommendations and alerts that enhance diagnostic accuracy and treatment planning for better patient outcomes."
    },
    {
      icon: Zap,
      title: "Enhanced ROI through AI driven Automation",
      description: "Automate routine tasks and workflows to increase efficiency, reduce costs, and maximize return on investment in healthcare technology."
    },
    {
      icon: Shield,
      title: "Increased Patient Safety with Alerting",
      description: "Real-time alerts for drug interactions, allergies, and critical values to prevent medical errors and improve patient safety."
    },
    {
      icon: Database,
      title: "Comprehensive Data Integration and Interoperability",
      description: "Seamless data exchange across multiple systems and platforms for complete patient visibility and coordinated care."
    },
    {
      icon: Lock,
      title: "Robust Security and Privacy Compliance",
      description: "Enterprise-grade security with HIPAA compliance, SOC 2 certification, and advanced threat protection for healthcare data."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Built by combining Large Action Models (LAMs), structured Knowledge Graphs, and an advanced Agentic Framework to deliver healthcare insights that you can trust.
            </p>
          </div>

          {/* Hero paragraphs */}
          <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The Hikigai Platform represents a paradigm shift in healthcare technology, where artificial intelligence doesn't just process data—it understands context, learns from interactions, and evolves with your practice. Our platform is built on the foundation of trust, transparency, and clinical excellence.
            </p>
            <p>
              By leveraging Large Action Models, we've created an AI system that can perform complex healthcare tasks while maintaining the nuanced understanding that medical practice requires. Our Knowledge Graphs connect disparate pieces of medical information, creating a comprehensive view of patient health that was previously impossible.
            </p>
            <p>
              The Agentic Framework enables our AI to take autonomous actions within defined parameters, allowing for real-time decision support and workflow automation that adapts to your specific practice patterns. This isn't just another healthcare tool—it's your intelligent partner in delivering exceptional patient care.
            </p>
            <p>
              Security and privacy are not afterthoughts but fundamental design principles. Every component of our platform is built with healthcare's stringent requirements in mind, ensuring that patient data remains protected while enabling the collaborative care that modern medicine demands.
            </p>
            <p>
              Join thousands of healthcare professionals who have already transformed their practice with Hikigai. Experience the future of healthcare technology today, where AI amplifies human expertise rather than replacing it.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="bg-gray-50 py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Pillars of Hikigai Platform</h2>
            <p className="text-xl text-gray-600">The foundation of reliable healthcare AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fourPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="relative mb-6">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-40 object-cover rounded-lg" 
                  />
                  <div className="absolute -bottom-3 left-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                    <pillar.icon className="text-purple-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-white py-[40px]">
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

      {/* EHR Integration Section - Reworked */}
      <section className="bg-gray-50 py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless EHR Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your existing healthcare systems effortlessly</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported EHR Systems</h3>
                <div className="space-y-4 mb-8">
                  {supportedEHRs.map((ehr, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="text-lg font-medium text-gray-700">{ehr}</span>
                      {ehr === "Hikigai SmartPAM" && (
                        <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Our EHR</span>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart on FHIR Compatible</h4>
                  <p className="text-gray-600">
                    Hikigai platform can integrate with any EHR that supports Smart on FHIR, ensuring broad compatibility across the healthcare ecosystem.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Integrations</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Health Data Platforms</h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-gray-700">Apple Health</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-gray-700">Google Health</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Services</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Medication ordering systems</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Lab test ordering platforms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Claims processing systems</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <p className="text-gray-700 font-medium">
                      We are continuously integrating with all major industry standard healthcare systems and data sources to provide comprehensive interoperability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features + Benefits */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features & Benefits</h2>
            <p className="text-xl text-gray-600">Everything you need for modern healthcare delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200 group border border-gray-100">
                <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200 w-fit mb-6">
                  <feature.icon className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
