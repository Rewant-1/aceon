import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const faqData = [
  {
    id: "item-1",
    question: "What services does Aceon Interiors offer?",
    answer: "Aceon Interiors specializes in complete interior design solutions including residential and commercial spaces, modular kitchens, custom wardrobes, full home renovations, and space planning. We work with clients in Varanasi and surrounding areas to create beautiful, functional spaces that match their lifestyle and budget."
  },
  {
    id: "item-2",
    question: "How long does a typical interior design project take?",
    answer: "Project timelines vary depending on the scope and complexity. A full home renovation might take 4-8 weeks, while a modular kitchen installation could be completed in 2-3 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
  },
  {
    id: "item-3",
    question: "Do you work with existing furniture or do you provide everything?",
    answer: "We offer flexible solutions! We can work with your existing furniture and incorporate it into the new design, or we can source new furniture and decor items. Our team will assess your current items and provide recommendations for what works best with your vision."
  },
  {
    id: "item-4",
    question: "What is your design process like?",
    answer: "Our design process includes: 1) Initial consultation and space assessment, 2) Concept development with mood boards and sketches, 3) Detailed planning and material selection, 4) Implementation with regular updates, and 5) Final walkthrough and project completion. We ensure you're involved at every step."
  },
  {
    id: "item-5",
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our craftsmanship. We offer warranties on workmanship and materials used in our projects. The specific warranty terms depend on the type of work and materials used, which we'll discuss during your consultation."
  },
  {
    id: "item-6",
    question: "Can you work within a specific budget?",
    answer: "Absolutely! We work with clients across different budget ranges. During our initial consultation, we'll discuss your budget constraints and provide design solutions that maximize value while staying within your financial parameters. We believe great design shouldn't be expensive."
  }
];

export function FAQSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
      <div className="container-custom px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 md:mb-12 text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with Aceon Interiors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-primary text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>✉️</span>
              <span>info@aceoninteriors.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}