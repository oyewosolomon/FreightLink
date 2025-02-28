import React, { useState, FC } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from "@/components/ui/button";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg px-4 font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 mx-3 text-indigo-500" />
        ) : (
          <ChevronDown className="w-5 h-5 mx-3 text-indigo-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 pr-4 px-4 text-base text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQs: FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How does FreightLink Global ensure the security of my shipments?",
      answer: "We employ a multi-layered security approach including real-time tracking, verified carrier network (with rigorous background checks), and secure digital documentation. All data is protected with 256-bit encryption, and our platform is ISO 27001 certified and SOC 2 Type II audited for maximum security compliance."
    },
    {
      question: "Can FreightLink handle temperature-sensitive shipments?",
      answer: "Absolutely! Our temperature-controlled shipping solution offers continuous monitoring, validated cold chain integrity, and specialized container options. We comply with FDA and EU regulations for pharmaceuticals, food, and other sensitive cargo, with instant alerts for any temperature excursions."
    },
    {
      question: "How does the customs documentation automation work?",
      answer: "Our AI-powered system automatically generates and validates all required customs documents based on your shipment details, destination requirements, and product classifications. This reduces paperwork errors by 85% and accelerates border clearance time by up to 68%, ensuring smooth international shipping."
    },
    {
      question: "What if I need help with a shipment outside business hours?",
      answer: "We provide 24/7 support through multiple channels. All Business and Enterprise plans include priority support with faster response times, and Enterprise customers enjoy dedicated account managers. Our help center and knowledge base are always accessible, and emergency situations are escalated immediately."
    },
    {
      question: "Can FreightLink integrate with my existing systems?",
      answer: "Yes, we offer seamless integrations with major ERP systems (SAP, Oracle), WMS platforms, and e-commerce solutions (Shopify, WooCommerce). Our comprehensive API allows for custom integrations, and our development team can work with you to ensure smooth data flow between systems."
    },
    {
      question: "How do you handle shipping delays or exceptions?",
      answer: "Our proactive monitoring system detects potential delays before they occur. When an exception happens, you receive instant notifications with the cause, impact, and recommended solutions. Our team works directly with carriers to resolve issues, and all shipments are backed by our service guarantee for additional peace of mind."
    },
    {
      question: "Is there a minimum shipping volume requirement?",
      answer: "No, we serve businesses of all sizes. Our Startup plan is perfect for companies shipping as few as 10-50 shipments per month, while our Enterprise solution can handle unlimited volume. You can start small and scale your plan as your business grows."
    },
    {
      question: "How accurate is your real-time tracking?",
      answer: "Our platform provides 99.8% tracking accuracy across all transport modes. We combine carrier APIs, GPS data, IoT sensors, and predictive algorithms to give you precise shipment location and ETA information, refreshed every 15 minutes for ground shipments and hourly for air/ocean freight."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Get answers to the most common questions about our platform
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Still have questions?{' '}
              <a
                href="#contact"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Contact our support team
              </a>
            </p>
          </div>
          </div>
         

          <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Experience RoboTech Solutions in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how our collaborative robots enhance productivity, precision, and efficiency in industrial automation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                {/* Replace src with the actual demo video URL */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID?si=YOUR_VIDEO_ID"
                  title="RoboTech Solutions Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Revolutionizing Industrial Automation
                </h3>
                <p className="text-muted-foreground mb-4">
                  See how our collaborative robots streamline assembly lines, improve quality control, and optimize warehouse operations.
                </p>
                <Button className="gap-2">
                  <Play className="h-4 w-4" /> Watch Full Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
