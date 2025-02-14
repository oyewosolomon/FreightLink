import React, { useState } from 'react';
import { Globe, Truck, Thermometer, Code, Check } from 'lucide-react';
import { SiSap, SiOracle, SiShopify, SiWoo, SiNette } from 'react-icons/si';


const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      icon: <Globe size={20} />,
      title: "Cross-Border Expertise",
      features: [
        "Automated customs documentation",
        "Multi-language support",
        "Duty and tax calculator",
        "Compliance monitoring",
        "International trade advisors"
      ],
      image: "https://source.unsplash.com/random/600x400?shipping,global",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Truck size={20} />,
      title: "Carrier Network",
      features: [
        "Rigorous vetting process",
        "Performance ratings and reviews",
        "Specialization filtering",
        "Real-time availability",
        "Instant quote comparison"
      ],
      image: "https://source.unsplash.com/random/600x400?trucks,logistics",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Thermometer size={20} />,
      title: "Temperature-Controlled Shipping",
      features: [
        "Continuous temperature monitoring",
        "Validated cold chain integrity",
        "Specialized container options",
        "Compliance with FDA/EU regulations",
        "Excursion alerts and reporting"
      ],
      image: "https://source.unsplash.com/random/600x400?refrigerated,container",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: <Code size={20} />,
      title: "Technology Platform",
      features: [
        "Cloud-based management system",
        "Mobile app for on-the-go access",
        "API integration with your systems",
        "Custom reporting and analytics",
        "Predictive ETA technology"
      ],
      image: "https://source.unsplash.com/random/600x400?technology,dashboard",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Tools for Modern Logistics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how our comprehensive feature set solves your most complex shipping challenges
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className="max-w-6xl mx-auto">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${
                activeTab === index ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Feature Image */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tab.color} opacity-70 z-10`}></div>
                    <img
                      src={tab.image}
                      alt={`${tab.title} visualization`}
                      className="w-full h-full object-cover relative"
                      style={{ minHeight: '320px' }}
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                      <h3 className="text-white text-3xl font-bold mb-4 text-shadow">{tab.title}</h3>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                        <span className="text-white text-sm">
                          Trusted by industry leaders worldwide
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Capabilities</h4>
                    <ul className="space-y-4">
                      {tab.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-1 flex-shrink-0 bg-green-100 text-green-600 rounded-full p-1">
                            <Check size={16} />
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 inline-flex items-center">
                        Learn More About {tab.title}
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Teaser */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            <svg className="mr-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L9 7.25M9 10.75L9 12M4.5 10.75L4.5 7.25M13.5 10.75L13.5 7.25M13.5 6L13.5 4C13.5 3.44772 13.0523 3 12.5 3L5.5 3C4.94772 3 4.5 3.44772 4.5 4L4.5 6M13.5 12L13.5 14C13.5 14.5523 13.0523 15 12.5 15L5.5 15C4.94772 15 4.5 14.5523 4.5 14L4.5 12M15.5 14L19.5 14C20.0523 14 20.5 13.5523 20.5 13L20.5 10M18.5 8L20.5 10M20.5 10L18.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Seamless Integration
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Connect with Your Essential Tools</h3>
          <p className="text-gray-600 dark:text-gray-100 mb-8 max-w-2xl mx-auto">
            FreightLink Global integrates with leading ERP, WMS, and e-commerce platforms to provide a unified logistics experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {[
                { name: 'SAP', icon: <SiSap size={40} className="text-blue-600" /> },
                { name: 'Oracle', icon: <SiOracle size={40} className="text-red-600" /> },
                { name: 'Shopify', icon: <SiShopify size={40} className="text-green-600" /> },
                { name: 'WooCommerce', icon: <SiWoo size={40} className="text-purple-600" /> },
                { name: 'NetSuite', icon: <SiNette size={40} className="text-indigo-600" /> },
            ].map((partner, index) => (
                <div key={index} className="flex items-center justify-center bg-gray-100 rounded-lg p-4 w-32 h-16">
                {partner.icon}
                </div>
            ))}
            </div>

        </div>
      </div>

     
    </section>
  );
};

export default FeaturesSection;