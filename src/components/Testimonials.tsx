
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief of Cardiology",
      hospital: "Metropolitan Medical Center",
      content: "Hikigai AI has revolutionized our diagnostic workflow. The accuracy and speed of the AI scribe has reduced our documentation time by 60% while improving the quality of our clinical notes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Emergency Medicine Physician",
      hospital: "City General Hospital",
      content: "The KOI AI Engine has been a game-changer in our ER. It helps us quickly identify critical conditions and provides valuable insights that enhance our decision-making process.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Family Medicine Practitioner",
      hospital: "Healthcare Partners",
      content: "The seamless integration with our EHR system and the intuitive interface makes Hikigai AI an essential tool in our practice. Our patients appreciate the increased face-time during consultations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824475518-6a2a522b2fa3?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Healthcare Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what healthcare professionals are saying about their experience with Hikigai AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 relative group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 text-purple-200">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-purple-600 font-medium">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Community</h3>
            <p className="text-lg text-gray-700 mb-6">
              Over 10,000+ healthcare professionals trust Hikigai AI to enhance their practice
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
