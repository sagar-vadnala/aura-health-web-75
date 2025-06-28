import { Shield, Zap, Database, Users, Clock, Award } from 'lucide-react';
const PlatformHighlights = () => {
  const highlights = [{
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with end-to-end encryption",
    metric: "99.9%",
    metricLabel: "Uptime"
  }, {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast AI inference for critical decisions",
    metric: "<1s",
    metricLabel: "Response Time"
  }, {
    icon: Database,
    title: "EHR Integration",
    description: "Seamless integration with 50+ EHR systems",
    metric: "50+",
    metricLabel: "Integrations"
  }, {
    icon: Users,
    title: "Multi-user Support",
    description: "Collaborative workspace for healthcare teams",
    metric: "1000+",
    metricLabel: "Active Users"
  }, {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support and monitoring",
    metric: "24/7",
    metricLabel: "Support"
  }, {
    icon: Award,
    title: "Clinical Accuracy",
    description: "Validated by leading medical institutions",
    metric: "98.5%",
    metricLabel: "Accuracy"
  }];
  return <section className="bg-white py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hikigai Platform harnesses the power of Large Action Models and Knowledge Graphs to deliver a comprehensive, 360-degree view of patient health data enriched with the latest medical insights.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform seamlessly integrates with existing EHR systems, empowering doctors and healthcare specialists with personalized recommendations, intelligent automation, and actionable insights at every stage of the patient journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By streamlining workflows and enhancing care delivery, Hikigai enables providers to focus on what matters most: guiding each patient on their unique path to better health.
            </p>
          </div>

          {/* Right Column - Highlights Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200">
                      <highlight.icon className="text-purple-600" size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-600">{highlight.metric}</div>
                      <div className="text-xs text-gray-500">{highlight.metricLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>)}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg">
            Explore Platform Features
          </button>
        </div>
      </div>
    </section>;
};
export default PlatformHighlights;