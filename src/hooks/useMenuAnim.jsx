import { useEffect, useRef } from "react";
import gsap from "gsap";

const useMenuAnim = (isOpen) => {
  const menuRef = useRef(null); // React ref for the menu element

  useEffect(() => {
    const menuElement = menuRef.current; // Access the current DOM element for the menu

    if (menuElement) {
      if (isOpen) {
        // Open animation using gsap
        gsap.to(menuElement, {
          y: "0%", // Bring menu into view
          opacity: 1, // Fade it in
          duration: 0.75, // Animation duration
          ease: "power4.out", // Smooth easing for opening
          pointerEvents: "auto", // Enable pointer events when menu is open
          display: "flex", // Ensure the menu is displayed and occupies full height and width
        });
      } else {
        // Close animation
        gsap.to(menuElement, {
          y: "-100%", // Move menu up and out of view
          opacity: 0, // Fade it out
          duration: 0.3, // Slightly shorter duration for closing
          ease: "power4.in", // Smooth easing for closing
          pointerEvents: "none", // Disable pointer events when menu is closed
          onComplete: () => {
            gsap.set(menuElement, { display: "none" }); // Set display to none after the animation completes
          },
        });
      }
    }
  }, [isOpen]); // Effect runs when isOpen changes

  return [menuRef]; // Return the menuRef so it can be used in the component
};

export default useMenuAnim;
