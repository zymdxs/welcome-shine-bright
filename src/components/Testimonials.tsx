
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation.",
      author: "Sarah Johnson",
      title: "CTO, TechInnovate",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "The automation features saved us countless hours of manual work. The ROI was evident within the first month of use.",
      author: "Michael Chen",
      title: "Operations Manager, GlobalCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "Customer support is exceptional. Any issues we've had were resolved quickly, and the team is always receptive to feedback.",
      author: "Emily Rodriguez",
      title: "Product Director, CreativeMinds",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trusted by industry leaders</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Don't take our word for it. Here's what our customers have to say about our platform.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 py-8">
            <img src="https://dummyimage.com/120x60/e0e0e0/707070.png&text=COMPANY+LOGO" alt="Company Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://dummyimage.com/120x60/e0e0e0/707070.png&text=COMPANY+LOGO" alt="Company Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://dummyimage.com/120x60/e0e0e0/707070.png&text=COMPANY+LOGO" alt="Company Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://dummyimage.com/120x60/e0e0e0/707070.png&text=COMPANY+LOGO" alt="Company Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://dummyimage.com/120x60/e0e0e0/707070.png&text=COMPANY+LOGO" alt="Company Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
