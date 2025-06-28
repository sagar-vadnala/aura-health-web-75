import { ArrowRight, Shield, Stethoscope, Activity } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
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
              
              
              
              
              
            </div>
          </div>

          {/* Right Content - AI Scribe Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Desktop Screen - Larger and more professional */}
              <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-12 flex items-center px-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-white text-sm font-medium">Hikigai AI Scribe - Live Transcription</span>
                    </div>
                  </div>
                  <div className="p-8 h-96">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Stethoscope className="text-purple-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">Dr. Sarah Chen - Patient Consultation</div>
                          <div className="text-xs text-gray-500">Recording • 12:45 PM</div>
                        </div>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Live Transcription</div>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-800">"Patient presents with chest pain radiating to left arm, onset 2 hours ago..."</p>
                          <p className="text-sm text-purple-600 bg-purple-50 p-3 rounded border-l-4 border-purple-600">"AI Note: Potential cardiac symptoms detected. Recommend ECG and cardiac enzymes."</p>
                          <p className="text-sm text-gray-800">"Blood pressure 140/90, pulse 88 bpm, temperature 98.6°F..."</p>
                          <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded border-l-4 border-blue-600">"AI Suggestion: Consider cardiac workup protocol."</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="px-4 py-3 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium text-center">
                          Chief Complaint: Chest Pain
                        </div>
                        <div className="px-4 py-3 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium text-center">
                          ICD-10: R06.02
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-3">
                        <div className="text-sm text-gray-500">Transcription Confidence: 98%</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Screen - Larger and more professional */}
              <div className="absolute -bottom-16 -right-12 bg-gray-900 rounded-3xl p-4 shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden w-64">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-10 flex items-center justify-center relative">
                    <div className="w-20 h-1 bg-white/30 rounded-full"></div>
                    <div className="absolute right-3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="p-6 h-80">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-900">Hikigai AI Scribe</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-1 bg-gray-200 rounded-full"></div>
                        <div className="h-1 bg-gray-200 rounded-full w-4/5"></div>
                        <div className="h-1 bg-purple-200 rounded-full w-3/5"></div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                        <div className="text-xs text-gray-600">"Patient vitals within normal limits..."</div>
                        <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">AI: Normal baseline readings</div>
                        <div className="text-xs text-gray-600">"Continue monitoring blood pressure..."</div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2">
                        <div className="px-3 py-2 bg-green-100 text-green-700 rounded text-xs text-center">
                          BP: 120/80 mmHg
                        </div>
                        <div className="px-3 py-2 bg-blue-100 text-blue-700 rounded text-xs text-center">
                          HR: 72 bpm
                        </div>
                        <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded text-xs text-center">
                          Temp: 98.6°F
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Real-time Documentation</div>
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
    </section>;
};
export default Hero;