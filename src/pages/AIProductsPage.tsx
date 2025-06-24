
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIProducts from '../components/AIProducts';

const AIProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Healthcare Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered tools designed to transform 
              every aspect of healthcare delivery and patient care.
            </p>
          </div>
        </div>
      </section>

      <AIProducts />
      
      <Footer />
    </div>
  );
};

export default AIProductsPage;
