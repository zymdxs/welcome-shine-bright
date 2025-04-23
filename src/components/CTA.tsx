
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-saas-600 to-saas-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-lg max-w-3xl opacity-90">
            Join thousands of companies already using our platform to boost productivity and drive growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-saas-800 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
