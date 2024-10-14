import { useEffect } from "react";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { setLoaded } from "../store/slices/preloaderSlice"; // Import the action

export const usePreloaderAnimation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const counterElement = document.querySelector(".counter-number");
        const preloaderElement = document.querySelector(".preloader");
        const loadervdos = document.querySelectorAll(".vdoData");
        const contentElements = document.querySelectorAll(".content, .counter-number");
        const loadingPoints = [5, 30, 60, 90];

        let currentValue = 0;

        const updateCounter = () => {
            if (currentValue < 100) {
                currentValue++;
                counterElement.textContent = currentValue;

                // Handle video animations at specific counter points
                loadingPoints.forEach((point, index) => {
                    if (currentValue === point) {
                        gsap.to(loadervdos[index], { opacity: 1, duration: 0.5, ease: "power2.inOut" });
                    }
                });

                requestAnimationFrame(updateCounter);
            } else {
                // Trigger animations after preloader completes
                gsap.timeline({
                    onComplete: () => {
                        preloaderElement.style.display = "none";
                        dispatch(setLoaded()); // Dispatch action to set loaded state
                    },
                })
                .to(loadervdos, { scale: 1.1, duration: 1, ease: "power2.inOut", stagger: 0.2 })
                .to(contentElements, { opacity: 0, duration: 1, ease: "power2.inOut" })
                .to(".preloader-inner", { opacity: 0, duration: 1 });
            }
        };

        const startDelay = 2000;
        const timerId = setTimeout(() => {
            requestAnimationFrame(updateCounter);
        }, startDelay);

        return () => clearTimeout(timerId);
    }, [dispatch]);
};
