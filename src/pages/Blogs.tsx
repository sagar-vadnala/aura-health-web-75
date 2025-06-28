
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care",
      excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes across the globe.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "HIPAA Compliance in AI Healthcare Solutions",
      excerpt: "Understanding the critical importance of maintaining patient privacy and data security in AI-powered healthcare applications.",
      author: "Mark Johnson",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Streamlining Clinical Documentation with AI Scribes",
      excerpt: "How AI-powered documentation tools are reducing administrative burden and allowing doctors to focus more on patient care.",
      author: "Dr. Emily Watson",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Integration Challenges: EHR Systems and AI Solutions",
      excerpt: "Overcoming technical and organizational challenges when integrating AI tools with existing electronic health record systems.",
      author: "Tech Team",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "ROI of AI Implementation in Healthcare Practices",
      excerpt: "Analyzing the financial benefits and return on investment when implementing AI solutions in healthcare settings.",
      author: "Dr. Michael Rodriguez",
      date: "February 22, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Patient Trust and AI: Building Confidence in Technology",
      excerpt: "Strategies for healthcare providers to build patient trust and acceptance of AI-powered healthcare solutions.",
      author: "Dr. Lisa Park",
      date: "February 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Healthcare AI <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in AI-powered healthcare technology
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Healthcare AI Trends
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest insights delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
