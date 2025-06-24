
import { ArrowRight, Shield, Stethoscope, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <img 
                src="/lovable-uploads/52dceae5-d475-4cdc-bdca-3ee7a2bec4d5.png" 
                alt="Healthcare AI Logo" 
                className="h-16 w-16"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Healthcare
            <span className="block text-blue-600">with AI Innovation</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering healthcare professionals with cutting-edge AI solutions that enhance patient care, 
            improve diagnostic accuracy, and streamline clinical workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group">
              Explore Our Platform
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-semibold">
              Schedule Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">Enterprise-grade security and privacy protection</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Stethoscope className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Excellence</h3>
              <p className="text-gray-600">Validated by leading medical professionals</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Activity className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Instant insights for better decision making</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
