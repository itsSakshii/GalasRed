import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // Import Lenis
 
gsap.registerPlugin(ScrollTrigger);
 
const useServiceAnim = (servicesRefs) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t,
      smooth: true,
    });
 
    const animateServices = (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          const imgContainer = target.querySelector(".imge");
          gsap.fromTo(imgContainer, { width: "30%" }, {
            width: "100%",
            duration: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: target,
              start: "top 80%",
              end: "bottom top",
              scrub: 1,
              once: true,
            },
          });
        }
      });
    };
 
    const observer = new IntersectionObserver(animateServices, {
      threshold: 0.1,
    });
 
    servicesRefs.forEach((service) => {
      if (service) observer.observe(service);
    });
 
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
 
    requestAnimationFrame(raf);
 
    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, [servicesRefs]);
};
 
export default useServiceAnim;