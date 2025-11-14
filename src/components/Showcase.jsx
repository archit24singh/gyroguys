import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const ingredientRef = useRef(null);
  const pitaRef = useRef(null);
  const meatRef = useRef(null);
  const veggiesRef = useRef(null);
  const sauceRef = useRef(null);
  const menuGridRef = useRef(null);

  // Menu data with images
  const menuItems = [
    { name: 'Combo Bowl', img: '/assets/images/combo.avif' },
    { name: 'Lamb Gyro', img: '/assets/images/lambgyro.avif' },
    { name: 'Chicken Bowl', img: '/assets/images/chickenbowl.avif' },
    { name: 'Chicken Wrap', img: '/assets/images/chickenwrap.avif' },
    { name: 'Lamb Fries', img: '/assets/images/lambfries.avif' },
    { name: 'Baklava', img: '/assets/images/baklava.avif' }
  ];

  useGSAP(() => {
    // Create matchMedia for responsive animations
    const mm = gsap.matchMedia();

    // Desktop animations (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      // Background Parallax Effect (Desktop only)
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

      // Ingredient Assembly Animation with Pin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ingredientRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          markers: false,
        }
      });

      // Set initial positions (off-screen)
      gsap.set(pitaRef.current, {
        y: '100vh',
        rotation: -45,
        opacity: 0,
      });

      gsap.set(meatRef.current, {
        x: '-100vw',
        rotation: -90,
        opacity: 0,
      });

      gsap.set(veggiesRef.current, {
        x: '100vw',
        rotation: 90,
        opacity: 0,
      });

      gsap.set(sauceRef.current, {
        y: '-100vh',
        scale: 3,
        opacity: 0,
      });

      // Animate ingredients to center with sequential overlaps
      tl.to(pitaRef.current, {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      }, 0)
      .to(meatRef.current, {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      }, '<0.2')
      .to(veggiesRef.current, {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      }, '<0.2')
      .to(sauceRef.current, {
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      }, '<0.2');

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
    });

    // Mobile animations (max-width: 767px)
    mm.add("(max-width: 767px)", () => {
      // Simple fade-in for ingredients (no pin, no scrub)
      gsap.from([pitaRef.current, meatRef.current, veggiesRef.current, sauceRef.current], {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ingredientRef.current,
          start: 'top 60%',
        }
      });

      // Simple fade-in for menu cards
      gsap.from(".menu-card", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: menuGridRef.current,
          start: "top 80%"
        }
      });
    });

    return () => {
      mm.revert();
    };

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden text-white">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 -z-10 bg-gray-900 h-[150%]"></div>

      {/* Part 1: Ingredients Assembly */}
      <div
        ref={ingredientRef}
        className="relative z-10 h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* Title */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 px-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Freshness You Can Taste
          </h2>
          <p className="font-body text-base md:text-lg lg:text-xl text-white/90 text-center mt-4">
            Watch as tradition comes together
          </p>
        </div>

        {/* Ingredient Layers */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Layer 1: Pita (Bottom) */}
          <img
            ref={pitaRef}
            src="/assets/images/pitabread.jpg"
            alt="Pita Bread"
            className="absolute z-10 w-[60vw] md:w-[25vw] object-contain rounded-xl"
          />

          {/* Layer 2: Meat */}
          <img
            ref={meatRef}
            src="/assets/images/meat.jpg"
            alt="Gyro Meat"
            className="absolute z-20 w-[55vw] md:w-[23vw] object-contain rounded-xl"
          />

          {/* Layer 3: Veggies */}
          <img
            ref={veggiesRef}
            src="/assets/images/veggies.jpg"
            alt="Fresh Vegetables"
            className="absolute z-30 w-[30vw] md:w-[15vw] object-contain rounded-xl"
          />

          {/* Layer 4: Sauce (Top) */}
          <img
            ref={sauceRef}
            src="/assets/images/tzatziki.jpg"
            alt="Tzatziki Sauce"
            className="absolute z-40 w-[20vw] md:w-[10vw] object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Part 2: Menu */}
      <div className="flex flex-col items-center w-full py-24 px-8">
        {/* Menu Title */}
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mb-160 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 text-center">
          Our Menu
        </h2>

        {/* Menu Grid - Responsive: 1 column mobile, 2-3 columns desktop */}
        <div ref={menuGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card space-y-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 text-center">
                {String(index + 1).padStart(2, '0')}. {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* SPACER DIV TO PUSH FOOTER DOWN */}
      <div className="h-48 w-full" />
    </section>
  );
};

export default Showcase;
