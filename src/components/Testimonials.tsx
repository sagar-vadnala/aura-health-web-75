
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "I am a firm believer in Artificial Intelligence in health care. Hikigai Platform is completely reshaping my workflow, making it easy for me to embrace a digital approach to healthcare in this semi-rural town",
      author: "Dr. Mahendran",
      location: "Coimbatore, India"
    },
    {
      content: "We have been using human scribes for documenting the patient encounters. Using AI for automating documentation is a game changer. Not only it offers high ROI, it also reduces human errors which is critical in patient care and, also, in claims processing",
      author: "Dr. Nair",
      location: "Michigan, USA"
    }
  ];

  return (
    <section className="bg-gray-50 py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Healthcare Professionals <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from doctors and healthcare providers using Hikigai AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
              <div className="absolute top-6 right-6 text-purple-200">
                <Quote size={32} />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg pr-8">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 text-lg">{testimonial.author}</h4>
                <p className="text-purple-600 font-medium">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
