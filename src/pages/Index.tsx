
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTAForm from '../components/CTAForm';
import WhyChoose from '../components/WhyChoose';
import AIProducts from '../components/AIProducts';
import PlatformHighlights from '../components/PlatformHighlights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CTAForm />
      <WhyChoose />
      <AIProducts />
      <PlatformHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
