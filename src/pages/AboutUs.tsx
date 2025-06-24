
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Lightbulb, Heart, Target } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: "50+", label: "Healthcare Partners" },
    { number: "1M+", label: "Patients Served" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Heart,
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

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "20+ years in emergency medicine and healthcare technology"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI researcher specializing in healthcare applications"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1594824475518-6a2a522b2fa3?w=400&h=400&fit=crop&crop=face",
      bio: "Product leader with expertise in healthcare workflow optimization"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're pioneering the future of healthcare through artificial intelligence, 
              making advanced medical insights accessible to healthcare providers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Target className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To transform healthcare delivery by providing intelligent, accessible, and reliable AI solutions 
                that empower healthcare professionals to make better decisions, improve patient outcomes, 
                and reduce the burden of administrative tasks. We believe that AI should augment human expertise, 
                not replace it, creating a future where technology serves humanity's most essential need: health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                  <value.icon className="text-purple-600" size={24} />
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
            <p className="text-lg text-gray-600">Meet the experts driving healthcare innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
