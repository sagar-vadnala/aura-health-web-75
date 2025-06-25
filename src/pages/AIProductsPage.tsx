
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Brain } from 'lucide-react';

const AIProductsPage = () => {
  const products = [
    {
      icon: FileText,
      title: "AI Scribe",
      description: "Revolutionary AI-powered clinical documentation system that transforms doctor-patient conversations into structured medical records in real-time.",
      features: [
        "Real-time speech-to-text transcription",
        "Automatic ICD-10 coding",
        "Clinical note generation",
        "Integration with major EHR systems",
        "HIPAA compliant security",
        "Multi-specialty support"
      ],
      color: "purple",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    {
      icon: Brain,
      title: "KOI Smart App",
      description: "Intelligent healthcare companion app that provides personalized health insights, medication reminders, and connects patients with healthcare providers.",
      features: [
        "Personalized health tracking",
        "Smart medication reminders",
        "Symptom checker with AI",
        "Telemedicine integration",
        "Health analytics dashboard",
        "Emergency contact features"
      ],
      color: "blue",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our innovative AI-powered solutions designed to transform 
              healthcare delivery and enhance patient care experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-6 left-6 p-4 rounded-full ${getColorClasses(product.color)}`}>
                    <product.icon size={32} />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-8 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold text-lg">
                    Learn More
                  </button>
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

export default AIProductsPage;
