
import { Users, Award, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50+", label: "Healthcare Partners" },
    { number: "1M+", label: "Patients Served" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Every solution we develop puts patient outcomes and safety at the forefront"
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Our AI models are validated by leading medical professionals and institutions"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Democratizing access to advanced healthcare AI across the world"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Continuously pushing the boundaries of what's possible in healthcare AI"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About HealthAI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're pioneering the future of healthcare through artificial intelligence, 
            making advanced medical insights accessible to healthcare providers worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To transform healthcare delivery by providing intelligent, accessible, and reliable AI solutions 
              that empower healthcare professionals to make better decisions, improve patient outcomes, 
              and reduce the burden of administrative tasks. We believe that AI should augment human expertise, 
              not replace it, creating a future where technology serves humanity's most essential need: health.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
              <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                <value.icon className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
