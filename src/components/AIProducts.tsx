
import { Brain, Eye, Heart, Pill, FileText, Database } from 'lucide-react';

const AIProducts = () => {
  const products = [
    {
      icon: Brain,
      title: "Neural Diagnostics",
      description: "Advanced AI algorithms for neurological condition detection and monitoring",
      features: ["Real-time analysis", "Pattern recognition", "Predictive modeling"],
      color: "blue"
    },
    {
      icon: Eye,
      title: "Vision AI",
      description: "Computer vision solutions for medical imaging and radiology",
      features: ["Image analysis", "Anomaly detection", "3D reconstruction"],
      color: "green"
    },
    {
      icon: Heart,
      title: "Cardiac Monitor",
      description: "AI-powered cardiovascular health monitoring and risk assessment",
      features: ["ECG analysis", "Risk prediction", "Early warning system"],
      color: "red"
    },
    {
      icon: Pill,
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with AI-driven drug discovery",
      features: ["Molecular analysis", "Clinical trials", "Safety prediction"],
      color: "purple"
    },
    {
      icon: FileText,
      title: "Clinical Notes AI",
      description: "Natural language processing for clinical documentation",
      features: ["Auto-transcription", "Clinical coding", "Documentation assist"],
      color: "orange"
    },
    {
      icon: Database,
      title: "Health Analytics",
      description: "Comprehensive health data analytics and population health insights",
      features: ["Data visualization", "Trend analysis", "Population health"],
      color: "teal"
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
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Healthcare Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI products designed to revolutionize every aspect of healthcare delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className={`p-4 rounded-full w-fit mb-6 transition-colors duration-200 ${getColorClasses(product.color)}`}>
                <product.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProducts;
