
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Lightbulb, Heart, Target, Calendar, MapPin, Mail, Phone, Briefcase, Home } from 'lucide-react';

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

  const journey = [
    {
      year: "2019",
      title: "Foundation",
      description: "Hikigai AI was founded with a vision to transform healthcare through artificial intelligence",
      milestone: "Company Founded"
    },
    {
      year: "2020", 
      title: "First Product Launch",
      description: "Launched our first AI Scribe prototype, revolutionizing clinical documentation",
      milestone: "AI Scribe Beta"
    },
    {
      year: "2021",
      title: "Healthcare Partnerships", 
      description: "Established partnerships with leading healthcare institutions and received HIPAA compliance certification",
      milestone: "10+ Hospital Partners"
    },
    {
      year: "2022",
      title: "Product Expansion",
      description: "Expanded our product suite with Patient Intelligence Analytics and Voice Appointment Scheduler", 
      milestone: "Multi-Product Platform"
    },
    {
      year: "2023",
      title: "KOI Engine Development",
      description: "Developed our proprietary KOI AI Engine, powering all our healthcare solutions",
      milestone: "KOI AI Engine"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded internationally and launched KOI Smart App, serving over 1M patients worldwide",
      milestone: "1M+ Patients Served"
    }
  ];

  const openPositions = [
    { title: "Senior AI Engineer", department: "Engineering", location: "Remote" },
    { title: "Healthcare Solutions Architect", department: "Product", location: "Remote" },
    { title: "Clinical Data Scientist", department: "Research", location: "San Francisco, CA" },
    { title: "DevOps Engineer", department: "Engineering", location: "Remote" }
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

      {/* About Hikigai */}
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

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Hikigai</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hikigai AI is at the forefront of healthcare innovation, developing cutting-edge artificial intelligence 
              solutions that empower healthcare professionals and improve patient outcomes. Founded in 2019, we've 
              grown from a small team of passionate technologists to a global leader in healthcare AI, serving over 
              1 million patients across 50+ healthcare partners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Globe className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a world where every healthcare professional has access to intelligent AI tools that 
                enhance their clinical decision-making, reduce administrative burden, and ultimately lead to 
                better patient outcomes. We envision a future where AI seamlessly integrates into healthcare 
                workflows, making quality care accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
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

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h3>
            <p className="text-lg text-gray-600">Built on the foundation of innovation, security, and patient care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Journey / Future Scope */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Calendar className="text-purple-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey & Future Scope</h3>
            <p className="text-lg text-gray-600">The milestones that shaped our path and our vision for tomorrow</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full border-4 border-white shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remote 1st Culture */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Home className="text-purple-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Remote-First Culture</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that great work happens everywhere. Our remote-first approach allows us to attract 
              top talent globally while maintaining strong collaboration and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Remote Positions</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Coverage</div>
            </div>
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

      {/* Contact + Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@hikigai.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">     
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Headquarters</h4>
                    <p className="text-gray-600">San Francisco, CA<br />United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Briefcase className="text-purple-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-600">Help us transform healthcare through AI innovation</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 mb-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Open Positions</h4>
              <p className="text-gray-600">Join our mission to revolutionize healthcare with AI</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">{position.title}</h5>
                  <p className="text-purple-600 font-medium mb-1">{position.department}</p>
                  <p className="text-gray-600 text-sm mb-4">{position.location}</p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold">
                View All Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
