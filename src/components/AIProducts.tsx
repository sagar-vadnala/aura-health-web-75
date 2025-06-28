import { Mic, Brain, Calendar, FileText, BarChart, Stethoscope } from 'lucide-react';
const AIProducts = () => {
  const features = [{
    icon: Mic,
    title: "AI Voice Appointment Scheduler",
    description: "Intelligent voice-powered scheduling system that handles patient appointments with natural language processing. Reduces administrative overhead while improving patient satisfaction through 24/7 availability and instant confirmation of appointments.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
  }, {
    icon: Brain,
    title: "Patient Prep Insights",
    description: "AI-driven patient preparation recommendations and pre-visit optimization for better outcomes. Analyzes patient history, current medications, and upcoming procedures to provide personalized preparation instructions and risk assessments.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  }, {
    icon: FileText,
    title: "AI Scribe for EHR Automation",
    description: "Automated clinical documentation that integrates seamlessly with your existing EHR systems. Converts natural conversation into structured medical records with 98% accuracy, reducing documentation time by up to 75% while maintaining clinical quality.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=250&fit=crop"
  }, {
    icon: Calendar,
    title: "Automated Claims Processing with AI",
    description: "Streamlined insurance claims processing with AI-powered accuracy and fraud detection. Automatically generates and submits claims with proper coding, reducing denials and accelerating reimbursement cycles for healthcare providers.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop"
  }, {
    icon: BarChart,
    title: "Patient Intelligence and Analytics",
    description: "Comprehensive patient insights and predictive analytics for personalized care delivery. Leverages machine learning to identify at-risk patients, predict health outcomes, and recommend preventive interventions for improved population health management.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  }, {
    icon: Stethoscope,
    title: "Medical Research Copilot for Doctors",
    description: "AI-powered research assistant that helps physicians stay updated with latest medical literature. Provides evidence-based recommendations, drug interaction alerts, and treatment protocol suggestions based on current best practices and clinical guidelines.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  }];
  return <section id="features" className="bg-white py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Features</span> & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered healthcare solutions designed to transform your practice and improve patient outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group border border-gray-100">
              <div className="relative mb-6">
                <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-lg" />
                <div className="absolute -bottom-4 left-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200">
                  <feature.icon className="text-purple-600" size={24} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AIProducts;