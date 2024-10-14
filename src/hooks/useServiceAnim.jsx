import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // Import Lenis

gsap.registerPlugin(ScrollTrigger);

const useServiceAnim = (servicesRefs) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 0.2, // Make scrolling a bit faster
      easing: (t) => t, 
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time); 
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf); 

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".imge");

          // Smooth scroll-triggered animation
          gsap.fromTo(imgContainer, { width: "30%" }, {
            width: "100%",
            duration: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              end: "bottom top",
              scrub: 1,
              once: true,
            },
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    servicesRefs.forEach((service) => {
      if (service) {
        observer.observe(service);
      }
    });

    return () => {
      observer.disconnect();
      lenis.destroy(); 
    };
  }, [servicesRefs]);
};

export default useServiceAnim;