import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const ingredientsRef = useRef(null);
  const menuGridRef = useRef(null);
  const menuScrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ingredients data
  const ingredients = [
    { name: 'Pita Bread', img: '/assets/images/pitabread.jpg' },
    { name: 'Gyro Meat', img: '/assets/images/meat.jpg' },
    { name: 'Fresh Veggies', img: '/assets/images/veggies.jpg' },
    { name: 'Tzatziki Sauce', img: '/assets/images/tzatziki.jpg' }
  ];

  // Menu data with images
  const menuItems = [
    { name: 'Combo Bowl', img: '/assets/images/combo.avif' },
    { name: 'Lamb Gyro', img: '/assets/images/lambgyro.avif' },
    { name: 'Chicken Bowl', img: '/assets/images/chickenbowl.avif' },
    { name: 'Chicken Wrap', img: '/assets/images/chickenwrap.avif' },
    { name: 'Lamb Fries', img: '/assets/images/lambfries.avif' },
    { name: 'Baklava', img: '/assets/images/baklava.avif' }
  ];

  // Arrow navigation functions
  const itemsPerView = 3;
  const maxIndex = Math.max(0, menuItems.length - itemsPerView);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to end
      setCurrentIndex(maxIndex);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop to beginning
      setCurrentIndex(0);
    }
  };

  useGSAP(() => {
    // Background Parallax Effect
    gsap.to(bgRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Ingredients Scroll-In Animation (horizontal slide from left)
    gsap.from(".ingredient-item", {
      x: -100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ingredientsRef.current,
        start: "top 80%"
      }
    });

    // Menu Cards Scroll-In Animation
    gsap.from(".menu-card", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: menuGridRef.current,
        start: "top 80%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden text-white">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 -z-10 bg-gray-900 h-[150%]"></div>

      {/* Part 1: Ingredients */}
      <div ref={ingredientsRef} className="relative z-10 w-full py-24 px-8">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Our Fresh Ingredients
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item flex flex-col items-center">
              <img
                src={ingredient.img}
                alt={ingredient.name}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300"
              />
              <p className="font-display text-xl md:text-2xl font-bold mt-4 text-white">
                {ingredient.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Menu */}
      <div className="flex flex-col items-center w-full py-24 px-8">
        {/* Menu Title */}
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 text-center">
          Our Menu
        </h2>

        {/* Menu Scroll Container with Arrows */}
        <div className="relative w-full max-w-7xl flex items-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 md:p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl"
            aria-label="Previous menu items"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Menu Container */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={menuScrollRef}
              className="flex gap-4 md:gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-card flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 1}rem)` }}
                >
                  <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-2xl group">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-6">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                        {String(index + 1).padStart(2, '0')}. {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 md:p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl"
            aria-label="Next menu items"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* SPACER DIV TO PUSH FOOTER DOWN */}
      <div className="h-48 w-full" />
    </section>
  );
};

export default Showcase;
