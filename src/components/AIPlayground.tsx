
import { useState } from 'react';
import { Send, Mic, MicOff, Play } from 'lucide-react';

const AIPlayground = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState('');
  const [demoResult, setDemoResult] = useState('');

  const handleDemoQuery = () => {
    if (!inputText) return;
    
    // Simulate AI processing
    setDemoResult('Processing your query...');
    setTimeout(() => {
      setDemoResult(`AI Analysis: Based on the symptoms "${inputText}", the KOI AI Engine suggests considering differential diagnoses including viral upper respiratory infection, allergic rhinitis, or early-stage bacterial sinusitis. Recommend further evaluation with physical examination and patient history review.`);
    }, 2000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputText('Patient presents with persistent cough and mild fever for 3 days');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try Our <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">KOI AI Engine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our AI engine with this interactive playground. 
            Enter medical scenarios and see how KOI AI assists with clinical decision-making.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">KOI AI Engine Playground</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">AI Ready</span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 border-b border-gray-100">
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Describe a clinical scenario, symptoms, or ask a medical question..."
                  className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={4}
                />
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <button
                    onClick={toggleRecording}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isRecording 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>
                  <button
                    onClick={handleDemoQuery}
                    disabled={!inputText}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    <span>Analyze</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Demo Buttons */}
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-3">Try these example queries:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Patient with chest pain and shortness of breath",
                  "Differential diagnosis for headache and fever",
                  "Drug interactions for diabetes medication"
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(example)}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors duration-200"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Area */}
            {demoResult && (
              <div className="p-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Play className="text-purple-600" size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">KOI AI Analysis</h4>
                      <p className="text-gray-700 leading-relaxed">{demoResult}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              * This is a demonstration. KOI AI suggestions should always be reviewed by qualified healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlayground;
