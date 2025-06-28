import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Brain, Calendar, Play, ArrowRight } from 'lucide-react';
const AIProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState('ai-scribe');
  const products = {
    'ai-scribe': {
      icon: FileText,
      title: "AI Scribe",
      heroDescription: "Revolutionary AI-powered clinical documentation system that transforms doctor-patient conversations into structured medical records in real-time.",
      features: ["Real-time speech-to-text transcription", "Automatic ICD-10 coding", "Clinical note generation", "Integration with major EHR systems", "HIPAA compliant security", "Multi-specialty support"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    'smart-app': {
      icon: Brain,
      title: "KOI Smart App",
      heroDescription: "Intelligent healthcare companion app that provides personalized health insights, medication reminders, and connects patients with healthcare providers.",
      features: ["Personalized health tracking", "Smart medication reminders", "Symptom checker with AI", "Telemedicine integration", "Health analytics dashboard", "Emergency contact features"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    'appointment-scheduler': {
      icon: Calendar,
      title: "Appointment Scheduler",
      heroDescription: "AI-powered appointment scheduling system that handles patient bookings with natural language processing and intelligent calendar management.",
      features: ["Voice-powered scheduling", "Natural language processing", "Automated reminders", "Calendar integration", "Multi-provider support", "Real-time availability"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
    }
  };
  const currentProduct = products[activeProduct as keyof typeof products];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[30px]">
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

      {/* Product Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {Object.entries(products).map(([key, product]) => <button key={key} onClick={() => setActiveProduct(key)} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeProduct === key ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}>
                <product.icon size={20} />
                <span>{product.title}</span>
              </button>)}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-purple-100 rounded-full mr-4">
                  <currentProduct.icon className="text-purple-600" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">{currentProduct.title}</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {currentProduct.heroDescription}
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold">Try it Out</button>
            </div>
            <div className="relative">
              <img src={currentProduct.image} alt={currentProduct.title} className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Features & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProduct.features.map((feature, index) => <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mb-4"></div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>)}
            </div>
          </div>

          {/* How it Works Video */}
          <div className="mb-20">
            
            
          </div>

          {/* CTA Section */}
          
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default AIProductsPage;