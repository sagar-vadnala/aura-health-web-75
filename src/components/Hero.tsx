
import { ArrowRight, Shield, Stethoscope, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <img 
                  src="/lovable-uploads/8c785304-4280-47e5-a110-02136e53f8cf.png" 
                  alt="Hikigai AI Logo" 
                  className="h-16 w-16"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Healthcare
              <span className="block bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 bg-clip-text text-transparent">
                with AI Innovation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Empowering healthcare professionals with cutting-edge AI solutions that enhance patient care, 
              improve diagnostic accuracy, and streamline clinical workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold flex items-center justify-center group shadow-lg">
                Explore Our Platform
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full hover:border-purple-500 hover:text-purple-800 transition-colors duration-200 font-semibold">
                Schedule Demo
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-purple-100 rounded-full mb-3 group-hover:bg-purple-200 transition-colors duration-200">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">HIPAA Compliant</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-200 transition-colors duration-200">
                  <Stethoscope className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Clinical Excellence</h3>
                <p className="text-gray-600 text-sm">Validated by medical professionals</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-green-100 rounded-full mb-3 group-hover:bg-green-200 transition-colors duration-200">
                  <Activity className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Real-time Analytics</h3>
                <p className="text-gray-600 text-sm">Instant insights for decisions</p>
              </div>
            </div>
          </div>

          {/* Right Content - AI Scribe Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Desktop Screen */}
              <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-8 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6 h-64">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Stethoscope className="text-purple-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded-full"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                          <div className="h-2 bg-purple-200 rounded-full w-4/6"></div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">AI Scribe</div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Real-time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Screen */}
              <div className="absolute -bottom-8 -right-4 bg-gray-900 rounded-3xl p-2 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden w-32">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-6 flex items-center justify-center">
                    <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="p-3 h-48">
                    <div className="space-y-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full mx-auto"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded-full"></div>
                        <div className="h-1 bg-gray-200 rounded-full w-4/5"></div>
                        <div className="h-1 bg-purple-200 rounded-full w-3/5"></div>
                      </div>
                      <div className="bg-gray-50 rounded p-2">
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-300 rounded-full"></div>
                          <div className="h-1 bg-gray-300 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
