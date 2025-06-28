
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleGetDemo = () => {
    // This will be implemented to open a form modal
    console.log('Get Demo clicked');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/8c785304-4280-47e5-a110-02136e53f8cf.png" 
              alt="Hikigai AI Logo" 
              className="h-10 w-10 mr-3" 
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Hikigai AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <div className="relative">
              <button 
                onClick={toggleProductsDropdown}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Products
                <ChevronDown className="ml-1" size={16} />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link 
                    to="/ai-products" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setIsProductsDropdownOpen(false)}
                  >
                    AI Scribe
                  </Link>
                  <Link 
                    to="/ai-products" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setIsProductsDropdownOpen(false)}
                  >
                    KOI Smart App
                  </Link>
                  <Link 
                    to="/ai-products" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setIsProductsDropdownOpen(false)}
                  >
                    Appointment Scheduler
                  </Link>
                </div>
              )}
            </div>
            <Link to="/platform" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Platform
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              About Us
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Blogs
            </Link>
          </nav>

          {/* Get Demo Button */}
          <div className="hidden md:flex">
            <button 
              onClick={handleGetDemo}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-medium shadow-lg"
            >
              Get Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-purple-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Products</div>
                <Link to="/ai-products" className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600">
                  AI Scribe
                </Link>
                <Link to="/ai-products" className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600">
                  KOI Smart App
                </Link>
                <Link to="/ai-products" className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600">
                  Appointment Scheduler
                </Link>
              </div>
              <Link to="/platform" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
                Platform
              </Link>
              <Link to="/about-us" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
                About Us
              </Link>
              <Link to="/blogs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
                Blogs
              </Link>
              <button 
                onClick={handleGetDemo}
                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                Get Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
