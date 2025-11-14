import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Facts data
  const facts = [
    'High-quality, and delicious Mediterranean meals.',
    'Marinated for 24 Hours in Secret Herbs.'
  ];

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    // Create matchMedia for responsive animations
    const mm = gsap.matchMedia();

    // Wait for video metadata to load
    const handleLoadedMetadata = () => {
      if (!video.duration) return;

      // Desktop animations (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        // Create timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            markers: false,
            pinSpacing: false,
          }
        });

        // Scrub through video based on scroll
        tl.to(video, {
          currentTime: video.duration,
          ease: 'none',
        }, 0);

        // Fade out main title and subtitle
        tl.to(".hero-title-text", {
          opacity: 0,
          y: -100,
          ease: "power1.in"
        }, "<5%");

        // Animate facts alternating left/right
        facts.forEach((_, index) => {
          const startProgress = (index + 1) * 0.2; // 20%, 40%
          const isRight = index % 2 === 0; // Even index = right, odd = left

          tl.fromTo(`.fact-${index}`,
            {
              x: isRight ? 100 : -100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.15,
              ease: 'power2.out',
            },
            startProgress
          );

          // Fade out fact
          tl.to(`.fact-${index}`,
            {
              opacity: 0,
              y: -30,
              duration: 0.1,
              ease: 'power2.in',
            },
            startProgress + 0.12
          );
        });
      });

      // Mobile animations (max-width: 767px)
      mm.add("(max-width: 767px)", () => {
        // Fade out title on scroll
        gsap.to('.hero-title-text', {
          opacity: 0,
          y: -50,
          ease: 'power1.in',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '50% top',
            scrub: true,
          }
        });
      });
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-transparent ${isMobile ? 'h-[200vh]' : 'h-[600vh]'}`}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          muted
          playsInline
          preload="auto"
          autoPlay={isMobile}
          loop={isMobile}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Text overlay container */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          {/* Main title */}
          <h1 className="hero-title hero-title-text font-display text-5xl md:text-7xl lg:text-9xl font-bold drop-shadow-2xl mb-4 text-center relative inline-block">
            <span className="absolute -top-6 md:-top-10 lg:-top-10 left-0 text-2xl md:text-4xl lg:text-5xl text-white">THE</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">GYRO GUYS</span>
          </h1>
          <p className="hero-subtitle hero-title-text font-body text-xl md:text-2xl lg:text-4xl text-white/90 drop-shadow-lg mb-16 text-center">
            Fresh. Healthy. Fast.
          </p>

          {/* Facts container - Desktop only */}
          <div className="relative w-full max-w-4xl h-32 hidden md:block">
            {facts.map((fact, index) => {
              const isRight = index % 2 === 0;
              return (
                <p
                  key={index}
                  className={`fact-${index} absolute top-0 ${isRight ? 'right-[10%]' : 'left-[10%]'} text-4xl md:text-6xl font-display font-bold leading-tight opacity-0`}
                  style={{
                    backgroundImage: 'linear-gradient(to right, #fb923c, #dc2626)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textShadow: 'none',
                  }}
                >
                  {fact}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
