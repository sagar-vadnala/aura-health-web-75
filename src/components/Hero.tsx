import { ArrowRight, Play } from 'lucide-react';
const Hero = () => {
  return <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20 pb-16 py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 md:text-6xl">
              Spend Less Time on Paperwork, More Time with{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 bg-clip-text text-transparent">Patients</span>
            </h1>
            
            <p className="mb-8 leading-relaxed text-left font-normal text-black text-xl">Hikigai's AI tools automate clinical documentation, streamline workflows, and enhance patient care, so you can focus on what matters most.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center">
                See it in Action
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold flex items-center justify-center">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right Column - AI Scribe Interface */}
          <div className="relative">
            {/* Desktop Screen - Larger */}
            <div className="relative bg-gray-800 rounded-2xl p-1 shadow-2xl px-[5px]">
              <div className="bg-white rounded-xl overflow-hidden" style={{
              width: '600px',
              height: '360px'
            }}>
                <div className="bg-gray-100 py-3 border-b flex items-center space-x-2 px-[5px]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 ml-4">Hikigai AI Scribe - Live Transcription</div>
                </div>
                <div className="p-6 h-full bg-white px-[20px] py-[2px]">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live Recording...</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">Doctor:</p>
                      <p className="text-sm text-gray-600">"Patient presents with chest pain lasting 2 hours..."</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">AI Analysis:</p>
                      <p className="text-sm text-gray-600">• Possible angina symptoms detected</p>
                      <p className="text-sm text-gray-600">• Recommended: ECG, Cardiac enzymes</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">ICD-10 Suggestions:</p>
                      <p className="text-sm text-gray-600">R06.02 - Shortness of breath</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone Screen - Realistic */}
            <div className="absolute -bottom-8 -left-16 bg-black rounded-3xl p-1 shadow-xl" style={{
            width: '120px',
            height: '240px'
          }}>
              <div className="bg-white rounded-3xl overflow-hidden h-full relative">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-5 bg-black rounded-b-2xl z-10"></div>
                
                <div className="pt-7 px-2 pb-2 h-full">
                  <div className="text-center mb-2">
                    <h3 className="text-xs font-bold text-gray-800">AI Scribe</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <p className="text-xs font-medium">Next Appointment</p>
                      <p className="text-xs text-gray-600">Dr. Smith - 2:30 PM</p>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <p className="text-xs font-medium">Medication</p>
                      <p className="text-xs text-green-600">✓ Taken today</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg">
                      <p className="text-xs font-medium">Health Score</p>
                      <p className="text-xs text-gray-600">85/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;