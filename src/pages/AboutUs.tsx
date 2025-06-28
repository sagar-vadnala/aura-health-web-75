
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

  const foundingTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1594824475518-6a2a522b2fa3?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Chief Product Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
    }
  ];

  const teamMembers = [
    { name: "Dr. Lisa Park", role: "Senior AI Researcher", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=250&fit=crop&crop=face" },
    { name: "James Wilson", role: "Lead Software Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=250&fit=crop&crop=face" },
    { name: "Dr. Maria Santos", role: "Clinical Data Scientist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=250&fit=crop&crop=face" },
    { name: "Alex Thompson", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=250&fit=crop&crop=face" },
    { name: "Dr. Rachel Green", role: "Healthcare Solutions Architect", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=250&fit=crop&crop=face" },
    { name: "Carlos Martinez", role: "Machine Learning Engineer", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=250&fit=crop&crop=face" },
    { name: "Dr. Jennifer Lee", role: "Medical Informatics Specialist", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=250&fit=crop&crop=face" },
    { name: "Robert Johnson", role: "Security Engineer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=250&fit=crop&crop=face" },
    { name: "Dr. Amanda Davis", role: "Clinical Research Lead", image: "https://images.unsplash.com/photo-1494790108755-2616c0763d5a?w=200&h=250&fit=crop&crop=face" },
    { name: "Kevin Brown", role: "Frontend Developer", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=250&fit=crop&crop=face" },
    { name: "Dr. Samantha Taylor", role: "UX Research Lead", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=250&fit=crop&crop=face" },
    { name: "Thomas Anderson", role: "Data Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=250&fit=crop&crop=face" },
    { name: "Dr. Nicole White", role: "Quality Assurance Lead", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=250&fit=crop&crop=face" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[40px]">
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

      {/* Vision */}
      <section className="bg-gray-50 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 py-[40px] px-[40px]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Globe className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a world where AI seamlessly integrates into healthcare workflows, 
                making quality care accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 py-[40px] px-[40px]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Target className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To transform healthcare delivery by providing intelligent AI solutions 
                that empower professionals to make better decisions and improve patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Founding Team</h3>
            <p className="text-lg text-gray-600">Meet the visionaries who started this journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {foundingTeam.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-40 rounded-lg object-cover mx-auto" 
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-lg text-gray-600">13 dedicated professionals driving healthcare innovation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-20 h-24 rounded-lg object-cover mx-auto" 
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-purple-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Location */}
      <section className="bg-gray-50 py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact & Location</h3>
            <p className="text-lg text-gray-600">Get in touch with our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Headquarters</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-purple-600 mt-1" size={20} />
                  <div>
                    <p className="text-gray-900 font-medium">San Francisco, California</p>
                    <p className="text-gray-600">123 Healthcare Innovation Drive</p>
                    <p className="text-gray-600">San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-600" size={20} />
                  <p className="text-gray-900">contact@hikigai.ai</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-600" size={20} />
                  <p className="text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Global Presence</h4>
              <p className="text-gray-600 mb-6">
                While our headquarters are in San Francisco, our remote-first culture means 
                our team spans across 25+ countries, providing 24/7 global coverage and support.
              </p>
              <div className="bg-purple-100 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h5>
                <p className="text-gray-600">
                  Support: 24/7 Global Coverage<br />
                  Sales: Monday - Friday, 9 AM - 6 PM PST<br />
                  General Inquiries: Monday - Friday, 8 AM - 8 PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h4>
            <p className="text-lg text-gray-600 mb-8">
              We are currently focused on strengthening our core team and do not have open positions at this time. 
              However, we're always interested in connecting with exceptional talent who share our vision for transforming healthcare through AI.
            </p>
            <p className="text-md text-gray-500">
              Follow us on LinkedIn for future opportunities or reach out to discuss potential collaborations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
