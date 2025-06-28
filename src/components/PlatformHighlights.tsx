
import { Brain, BarChart, Users, BookOpen, Database, Shield } from 'lucide-react';

const PlatformHighlights = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Gen AI & Predictive Algorithms",
      description: "Advanced machine learning models for intelligent healthcare insights"
    },
    {
      icon: BarChart,
      title: "Health Analytics",
      description: "Comprehensive analytics dashboard for population health management"
    },
    {
      icon: Users,
      title: "Patient Graph",
      description: "Connected patient data visualization for holistic care view"
    },
    {
      icon: BookOpen,
      title: "Medical Knowledge",
      description: "Evidence-based medical knowledge base with latest research"
    },
    {
      icon: Database,
      title: "EHR Integration",
      description: "Seamless integration with 50+ electronic health record systems"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption"
    }
  ];

  return (
    <section className="bg-white py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed text-left">
              Hikigai Platform uses the power of Large Action Models & Knowledge Graphs to give a 360° view of patient's health enriched with medical insights.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform integrates with existing EHRs to empower clinicians with personalized recommendations, automation and actionable insights throughout the patient journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By streamlining workflows & boosting care delivery Hikigai cuts the complexity so clinicians can focus on patient care.
            </p>
          </div>

          {/* Right Column - Highlights Stack */}
          <div>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200 flex-shrink-0">
                      <highlight.icon className="text-purple-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
