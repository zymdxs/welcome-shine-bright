
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams just getting started",
      price: 29,
      billing: "per user/month",
      features: [
        "Up to 10 team members",
        "Basic collaboration tools",
        "2GB storage per user",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      description: "Ideal for growing teams needing more power",
      price: 79,
      billing: "per user/month",
      features: [
        "Unlimited team members",
        "Advanced collaboration tools",
        "10GB storage per user",
        "Priority email & chat support",
        "Advanced analytics",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      description: "For organizations requiring the highest level of service",
      price: 199,
      billing: "per user/month",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "24/7 phone, email & chat support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees"
      ],
      popular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-8 border ${plan.popular ? 'border-saas-500' : 'border-gray-200'} relative flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-saas-500 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.billing}</span>
              </div>
              <ul className="space-y-3 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-saas-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={plan.buttonVariant} className={`w-full ${plan.popular ? 'bg-saas-600 hover:bg-saas-700' : ''}`}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need a custom solution? <a href="#" className="text-saas-600 font-semibold hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
