
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/8c785304-4280-47e5-a110-02136e53f8cf.png" 
                alt="Hikigai AI Logo" 
                className="h-8 w-8 mr-3"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hikigai AI
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming healthcare through AI innovation. We're committed to improving patient outcomes 
              and empowering healthcare professionals with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3" />
                <span>hello@hikigai.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-purple-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/ai-products" className="hover:text-purple-400 transition-colors duration-200">Products</Link></li>
              <li><Link to="/platform" className="hover:text-purple-400 transition-colors duration-200">Platform</Link></li>
              <li><Link to="/about-us" className="hover:text-purple-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-purple-400 transition-colors duration-200">Blogs</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/ai-products" className="hover:text-purple-400 transition-colors duration-200">AI Scribe</Link></li>
              <li><Link to="/ai-products" className="hover:text-purple-400 transition-colors duration-200">KOI Smart App</Link></li>
              <li><Link to="/ai-products" className="hover:text-purple-400 transition-colors duration-200">Appointment Scheduler</Link></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Claims Processing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Patient Analytics</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hikigai AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
