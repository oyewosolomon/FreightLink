import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Truck } from 'lucide-react';
import Navbar from '../layout/Navbar';

const HeroSection = () => {
  return (
    <div className="relative dark:bg-gray-900">
      {/* <Navbar/> */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1000/1000')] bg-center bg-repeat-space opacity-10"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-700 bg-opacity-30 text-blue-100 text-sm font-medium mb-6">
              <Globe size={16} className="mr-2" />
              Trusted by 10,000+ businesses worldwide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seamless Global Shipping in One Digital Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl">
              Connecting 50,000+ carriers with shippers worldwide through real-time tracking, automated documentation, and intelligent routing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 transform hover:-translate-y-1 flex items-center justify-center">
                Get Started Free
                <ArrowRight size={16} className="ml-2" />
              </button>
              
              <button className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold rounded-lg transition duration-200">
                Schedule a Demo
              </button>
            </div>
          </div>
          
          {/* Right Column - Image/Illustration */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-video bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl overflow-hidden shadow-2xl">
              {/* <img 
                src="https://source.unsplash.com/random/800x600" 
                alt="Global logistics network visualization" 
                className="object-cover w-full h-full opacity-90 mix-blend-overlay"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              
              {/* Pulsing dots representing active shipments */}
              <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-blue-400 animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 h-3 w-3 rounded-full bg-green-400 animate-ping animation-delay-1000"></div>
              <div className="absolute bottom-1/4 right-1/4 h-3 w-3 rounded-full bg-yellow-400 animate-ping animation-delay-2000"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Truck className="text-blue-200" size={24} />
                    <div>
                      <div className="text-blue-100 text-sm">Active Shipments</div>
                      <div className="text-white font-bold text-xl">12,453</div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm font-medium">
                    99.8% On Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex flex-col items-center text-center p-3">
            <div className="text-3xl font-bold text-white mb-1">50,000+</div>
            <div className="text-blue-200 text-sm">Verified Carriers</div>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <div className="text-3xl font-bold text-white mb-1">120+</div>
            <div className="text-blue-200 text-sm">Countries Served</div>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <div className="text-3xl font-bold text-white mb-1">99.8%</div>
            <div className="text-blue-200 text-sm">On-time Delivery Rate</div>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <div className="text-3xl font-bold text-white mb-1">$2B+</div>
            <div className="text-blue-200 text-sm">Freight Managed Annually</div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-70">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-1 text-blue-200">
              <ShieldCheck size={16} />
              <span className="text-xs">Trusted Partner</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;