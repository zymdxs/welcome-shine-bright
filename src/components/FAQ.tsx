
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long is the free trial period?",
      answer: "Our free trial lasts for 14 days. During this time, you'll have access to all features of your selected plan with no commitment required. No credit card is needed to start your trial."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period. When downgrading, changes will take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a limit on the number of users?",
      answer: "The Starter plan supports up to 10 team members. The Professional and Enterprise plans allow for unlimited team members, making them ideal for larger organizations or growing teams."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for qualified nonprofits, educational institutions, and open source projects. Please contact our sales team to learn more about our discount programs."
    },
    {
      question: "What kind of support is included?",
      answer: "The level of support depends on your plan. The Starter plan includes email support with a 24-hour response time. Professional adds chat support and faster response times. Enterprise includes 24/7 phone, email, and chat support, plus a dedicated account manager."
    },
    {
      question: "Can I export my data if I decide to cancel?",
      answer: "Yes, we provide data export tools that allow you to extract all your information in standard formats. Your data remains yours, and we make it easy to take it with you should you decide to leave our service."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Find answers to common questions about our platform, pricing, and policies.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Have more questions? <a href="#" className="text-saas-600 font-semibold hover:underline">Contact our support team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
