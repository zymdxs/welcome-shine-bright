
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Streamline Your Business with Our SaaS Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our powerful suite of tools helps teams work faster, smarter, and more efficiently. Join thousands of satisfied customers today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-saas-600 hover:bg-saas-700">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
          <div className="mt-12 relative w-full max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
            <div className="relative shadow-2xl rounded-xl overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80" 
                alt="SaaS Platform Dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <p className="text-sm font-medium text-gray-600">Trusted by 10,000+ businesses worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
