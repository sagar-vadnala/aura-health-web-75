
import Header from '../components/Header';
import Hero from '../components/Hero';
import PlatformHome from '../components/PlatformHome';
import AIProducts from '../components/AIProducts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PlatformHome />
      <AIProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
