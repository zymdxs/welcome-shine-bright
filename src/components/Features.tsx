
import { Check, Shield, Zap, Globe, Users, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-saas-500" />,
      title: 'Lightning Fast',
      description: 'Our platform is optimized for speed, ensuring your team never has to wait for critical operations.'
    },
    {
      icon: <Shield className="h-10 w-10 text-saas-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee keeps your data safe and always accessible.'
    },
    {
      icon: <Globe className="h-10 w-10 text-saas-500" />,
      title: 'Global Collaboration',
      description: 'Connect teams across different time zones with real-time collaboration tools and smart notifications.'
    },
    {
      icon: <Users className="h-10 w-10 text-saas-500" />,
      title: 'Team Management',
      description: 'Organize teams, assign roles, and track progress all in one intuitive interface.'
    },
    {
      icon: <Calendar className="h-10 w-10 text-saas-500" />,
      title: 'Advanced Scheduling',
      description: "AI-powered scheduling optimizes your team's workflow and automatically resolves conflicts."
    },
    {
      icon: <Check className="h-10 w-10 text-saas-500" />,
      title: 'Custom Workflows',
      description: 'Create tailored workflows that match your exact business processes and requirements.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Features that empower your team</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you streamline operations, improve collaboration, and drive results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 rounded-full bg-saas-50 p-3 w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
