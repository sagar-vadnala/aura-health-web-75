import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Lightbulb, Heart, Target, Calendar, MapPin, Mail, Phone, Briefcase, Home } from 'lucide-react';
const AboutUs = () => {
  const stats = [{
    number: "50+",
    label: "Healthcare Partners"
  }, {
    number: "1M+",
    label: "Patients Served"
  }, {
    number: "99.9%",
    label: "System Uptime"
  }, {
    number: "24/7",
    label: "Support Available"
  }];
  const values = [{
    icon: Heart,
    title: "Patient-Centric",
    description: "Every solution we develop puts patient outcomes and safety at the forefront"
  }, {
    icon: Award,
    title: "Clinical Excellence",
    description: "Our AI models are validated by leading medical professionals and institutions"
  }, {
    icon: Globe,
    title: "Global Impact",
    description: "Democratizing access to advanced healthcare AI across the world"
  }, {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Continuously pushing the boundaries of what's possible in healthcare AI"
  }];
  const foundingTeam = [{
    name: "Dr. Sarah Johnson",
    role: "Chief Executive Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    bio: "Former emergency medicine physician with 15+ years in healthcare technology"
  }, {
    name: "Michael Chen",
    role: "Chief Technology Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    bio: "Former Google AI researcher specializing in healthcare machine learning"
  }, {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1594824475518-6a2a522b2fa3?w=300&h=300&fit=crop&crop=face",
    bio: "Practicing physician and healthcare informatics expert with 20+ years experience"
  }, {
    name: "David Kim",
    role: "Chief Product Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Product leadership veteran with expertise in healthcare workflow optimization"
  }];
  const teamMembers = [{
    name: "Dr. Lisa Park",
    role: "Senior AI Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "James Wilson",
    role: "Lead Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Dr. Maria Santos",
    role: "Clinical Data Scientist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Dr. Rachel Green",
    role: "Healthcare Solutions Architect",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Carlos Martinez",
    role: "Machine Learning Engineer",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Dr. Jennifer Lee",
    role: "Medical Informatics Specialist",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Robert Johnson",
    role: "Security Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Dr. Amanda Davis",
    role: "Clinical Research Lead",
    image: "https://images.unsplash.com/photo-1494790108755-2616c0763d5a?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Kevin Brown",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Dr. Samantha Taylor",
    role: "UX Research Lead",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Thomas Anderson",
    role: "Data Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
  }, {
    name: "Dr. Nicole White",
    role: "Quality Assurance Lead",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop&crop=face"
  }];
  const journey = [{
    year: "2019",
    title: "Foundation",
    description: "Hikigai AI was founded with a vision to transform healthcare through artificial intelligence",
    milestone: "Company Founded"
  }, {
    year: "2020",
    title: "First Product Launch",
    description: "Launched our first AI Scribe prototype, revolutionizing clinical documentation",
    milestone: "AI Scribe Beta"
  }, {
    year: "2021",
    title: "Healthcare Partnerships",
    description: "Established partnerships with leading healthcare institutions and received HIPAA compliance certification",
    milestone: "10+ Hospital Partners"
  }, {
    year: "2022",
    title: "Product Expansion",
    description: "Expanded our product suite with Patient Intelligence Analytics and Voice Appointment Scheduler",
    milestone: "Multi-Product Platform"
  }, {
    year: "2023",
    title: "KOI Engine Development",
    description: "Developed our proprietary KOI AI Engine, powering all our healthcare solutions",
    milestone: "KOI AI Engine"
  }, {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded internationally and launched KOI Smart App, serving over 1M patients worldwide",
    milestone: "1M+ Patients Served"
  }];
  return <div className="min-h-screen">
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
      

      {/* Vision */}
      <section className="bg-gray-50 py-0">
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
      <section className="bg-white py-0">
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
      

      {/* Journey / Future Scope */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Calendar className="text-purple-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey & Future Scope</h3>
            <p className="text-lg text-gray-600">The milestones that shaped our path and our vision for tomorrow</p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-6">
              <div className="flex space-x-8 min-w-max">
                {journey.map((item, index) => <div key={index} className="flex flex-col items-center min-w-[300px]">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-4">
                      <div className="text-2xl font-bold text-purple-600 mb-2 text-center">{item.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h4>
                      <p className="text-gray-600 mb-4 text-center">{item.description}</p>
                      <div className="text-center">
                        <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {item.milestone}
                        </span>
                      </div>
                    </div>
                    {index < journey.length - 1 && <div className="w-8 h-0.5 bg-purple-200"></div>}
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote 1st Culture */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-[40px]">
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
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Founding Team</h3>
            <p className="text-lg text-gray-600">Meet the visionaries who started this journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {foundingTeam.map((member, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="relative mb-6">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 font-medium mb-3 text-sm">{member.role}</p>
                <p className="text-gray-600 text-xs">{member.bio}</p>
              </div>)}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-lg text-gray-600">13 dedicated professionals driving healthcare innovation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <div className="relative mb-4">
                  <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover mx-auto" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-purple-600 text-xs">{member.role}</p>
              </div>)}
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
            <p className="text-lg text-gray-600 mb-8">Help us Transform Healthcare.</p>
            
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold">Open Positions</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutUs;