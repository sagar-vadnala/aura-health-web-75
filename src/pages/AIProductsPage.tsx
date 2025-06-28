import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Brain, Calendar, Play, ArrowRight, Shield, Zap, Users, Clock, Database, Award } from 'lucide-react';
const AIProductsPage = () => {
  const products = [{
    id: 'ai-scribe',
    icon: FileText,
    title: "AI Scribe",
    subtitle: "Revolutionary AI-powered clinical documentation system",
    heroDescription: "Transform doctor-patient conversations into structured medical records in real-time with 98% accuracy and seamless EHR integration.",
    features: [{
      icon: Shield,
      title: "Real-time speech-to-text transcription",
      description: "Convert conversations to text instantly with 98% accuracy"
    }, {
      icon: Database,
      title: "Automatic ICD-10 coding",
      description: "Generate accurate medical codes automatically"
    }, {
      icon: FileText,
      title: "Clinical note generation",
      description: "Create comprehensive clinical notes from conversations"
    }, {
      icon: Users,
      title: "Integration with major EHR systems",
      description: "Seamlessly connect with 50+ EHR platforms"
    }, {
      icon: Shield,
      title: "HIPAA compliant security",
      description: "Enterprise-grade security and compliance"
    }, {
      icon: Award,
      title: "Multi-specialty support",
      description: "Supports all medical specialties and practices"
    }],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
  }, {
    id: 'smart-app',
    icon: Brain,
    title: "KOI Smart App",
    subtitle: "Intelligent healthcare companion for patients",
    heroDescription: "Personalized health insights, medication reminders, and seamless connection with healthcare providers through advanced AI technology.",
    features: [{
      icon: Brain,
      title: "Personalized health tracking",
      description: "AI-powered health monitoring and insights"
    }, {
      icon: Clock,
      title: "Smart medication reminders",
      description: "Intelligent reminders based on your schedule"
    }, {
      icon: Shield,
      title: "Symptom checker with AI",
      description: "AI-powered symptom analysis and recommendations"
    }, {
      icon: Users,
      title: "Telemedicine integration",
      description: "Connect with healthcare providers remotely"
    }, {
      icon: Database,
      title: "Health analytics dashboard",
      description: "Comprehensive health data visualization"
    }, {
      icon: Award,
      title: "Emergency contact features",
      description: "Quick access to emergency services and contacts"
    }],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
  }, {
    id: 'appointment-scheduler',
    icon: Calendar,
    title: "Appointment Scheduler",
    subtitle: "AI-powered intelligent scheduling system",
    heroDescription: "Natural language processing for appointment booking with intelligent calendar management and automated patient communication.",
    features: [{
      icon: Brain,
      title: "Voice-powered scheduling",
      description: "Schedule appointments using natural language"
    }, {
      icon: Zap,
      title: "Natural language processing",
      description: "Understand and process complex scheduling requests"
    }, {
      icon: Clock,
      title: "Automated reminders",
      description: "Smart reminders via SMS, email, and phone calls"
    }, {
      icon: Database,
      title: "Calendar integration",
      description: "Sync with Google, Outlook, and other calendar systems"
    }, {
      icon: Users,
      title: "Multi-provider support",
      description: "Manage schedules for multiple healthcare providers"
    }, {
      icon: Award,
      title: "Real-time availability",
      description: "Live updates on provider availability and scheduling"
    }],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">AI Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hikigai's suite of tools empowers clinicians and care teams to work smarter, not harder.
            </p>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      {products.map((product, index) => <section key={product.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Product Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-6">
                  
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">{product.title}</h2>
                    <p className="text-lg text-purple-600 font-medium">{product.subtitle}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {product.heroDescription}
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold">
                    Try it Out
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold flex items-center">
                    <Play className="mr-2" size={20} />
                    How it Works
                  </button>
                </div>
              </div>
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Features & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.features.map((feature, featureIndex) => <div key={featureIndex} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                    <div className="p-3 bg-purple-100 rounded-full w-fit mb-4">
                      <feature.icon className="text-purple-600" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>)}
      
      <Footer />
    </div>;
};
export default AIProductsPage;