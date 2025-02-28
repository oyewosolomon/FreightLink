import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './style.css';

// Define TypeScript interfaces
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "FreightLink Global has transformed our logistics. Real-time visibility and intelligent routing have saved us time and cost.",
    author: "David Thompson",
    role: "Production Manager, AutoTech Corp",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    quote: "Their automated documentation system is a game-changer. We've reduced errors and improved our on-time delivery rate.",
    author: "Emma Williams",
    role: "Quality Assurance Lead, TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/women/74.jpg"
  },
  {
    quote: "Their automated documentation system is a game-changer. We've reduced errors and improved our on-time delivery rate.",
    author: "Kent Miller",
    role: "Quality Assurance Lead, TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/men/74.jpg"
  },
  {
    quote: "Their automated documentation system is a game-changer. We've reduced errors and improved our on-time delivery rate.",
    author: "Kent Miller",
    role: "Quality Assurance Lead, TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/men/74.jpg"
  },
  {
    quote: "Their automated documentation system is a game-changer. We've reduced errors and improved our on-time delivery rate.",
    author: "Kent Miller",
    role: "Quality Assurance Lead, TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/men/74.jpg"
  }
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const autoplayDelayMs = 5000; // 5 seconds between slides

  useEffect(() => {
    // Make sure to import the required modules
    Swiper.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);
    
    // Initialize Swiper after the component mounts
    const swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination, Autoplay, Keyboard, Mousewheel],
      slidesPerView: 1, // Default to 1 slide on small screens
      spaceBetween: 20,
      centeredSlides: true,
      loop: true, // Enable infinite looping
      
      // Enable autoplay
      autoplay: {
        delay: autoplayDelayMs,
        disableOnInteraction: false, // Continue autoplay after user interaction
        pauseOnMouseEnter: true, // Pause on mouse hover
      },
      
      // Enable touch and mouse controls
      grabCursor: true, // Shows grab cursor when hovering over the slider
      keyboard: {
        enabled: true, // Enable keyboard navigation
      },
      mousewheel: {
        invert: false, // Don't invert mousewheel direction
        sensitivity: 1, // Adjust sensitivity
      },
      
      // Smooth transitions
      speed: 800, // Transition speed in ms
      effect: 'slide', // Use slide effect (options: 'slide', 'fade', 'cube', 'coverflow', 'flip')
      
      // Better touch response
      touchRatio: 1.5, // Increase sensitivity to touch swipes
      touchAngle: 45, // The angle required to trigger touches
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // Makes the pagination bullets more interactive
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1, // 1 slide on medium screens
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2, // 2 slides on tablets
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 3, // 3 slides on desktops
          spaceBetween: 32,
        },
      },
    });

    swiperRef.current = swiper;

    // Add event listeners for better touch/mouse interaction feedback
    swiper.on('touchStart', () => {
      // Slow down autoplay on touch start
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    });

    swiper.on('touchEnd', () => {
      // Resume autoplay after touch end
      if (!swiper.autoplay.running) {
        swiper.autoplay.start();
      }
    });

    // Cleanup Swiper instance on component unmount
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  // Pause/resume autoplay on mouse enter/leave
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && !swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <h2 className="text-4xl text-center font-bold text-white dark:text-white lg:text-center">Testimonials</h2>
          <div className="flex items-center gap-8">
            <div className="swiper-prev custom-prev">
              <div className="group flex justify-center items-center border border-solid border-white w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600">
                <svg className="h-6 w-6 text-white group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="swiper-next custom-next">
              <div className="group flex justify-center items-center border border-solid border-white w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600">
                <svg className="h-6 w-6 text-white group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="swiper mySwiper" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600"
              >
                <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-5">
                  <img className="rounded-full object-cover w-12 h-12" src={testimonial.image} alt={testimonial.author} />
                  <div className="grid gap-1">
                    <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                      {testimonial.author}
                    </h5>
                    <span className="text-sm leading-6 text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-5"></div>
        </div>
      </div>
      

    </section>
  );
};

export default Testimonials;