
import { Phone, Brain, FileText, CreditCard, BarChart3, BookOpen } from 'lucide-react';

const AIProducts = () => {
  const products = [
    {
      icon: Phone,
      title: "AI Voice Appointment Scheduler",
      description: "Intelligent voice-powered scheduling system that handles patient appointments 24/7",
      features: ["Natural language processing", "Calendar integration", "Automated confirmations"],
      color: "blue",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop"
    },
    {
      icon: Brain,
      title: "Patient Prep Insights",
      description: "AI-driven patient preparation recommendations and pre-visit optimization",
      features: ["Pre-visit analysis", "Risk assessment", "Care pathway optimization"],
      color: "green",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
    },
    {
      icon: FileText,
      title: "AI Scribe for EHR Automation",
      description: "Automated clinical documentation with real-time transcription and coding",
      features: ["Real-time transcription", "ICD-10 coding", "Clinical note generation"],
      color: "purple",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop"
    },
    {
      icon: CreditCard,
      title: "Automated Claims Processing with AI",
      description: "Streamlined insurance claims processing with intelligent error detection",
      features: ["Automated submission", "Error detection", "Compliance checking"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1559757175-0eb6d27d9d84?w=400&h=400&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Patient Intelligence and Analytics",
      description: "Advanced analytics platform for population health insights and trends",
      features: ["Population health metrics", "Predictive analytics", "Custom dashboards"],
      color: "teal",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop"
    },
    {
      icon: BookOpen,
      title: "Medical Research Copilot for Doctors",
      description: "AI-powered research assistant for evidence-based medical decisions",
      features: ["Literature review", "Clinical guidelines", "Research recommendations"],
      color: "red",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
      green: "bg-green-100 text-green-600 group-hover:bg-green-200",
      red: "bg-red-100 text-red-600 group-hover:bg-red-200",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-200",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-200",
      teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI features designed to revolutionize every aspect of healthcare delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-full transition-colors duration-200 ${getColorClasses(product.color)}`}>
                  <product.icon size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProducts;
