import React, { useEffect, useRef } from "react";
import herovdoPoster from "../../assets/videos/herovdoPoster.png"; 
import herovdo from "../../assets/videos/herovdo.mp4";

export default function HeroSection() {
    const videoRef = useRef(null);

    // Intersection Observer to manage video play/pause
    useEffect(() => {
        const videoElement = videoRef.current;

        const handlePlayPause = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                videoElement.play().catch((error) => console.error("Error playing video:", error));
            } else {
                videoElement.pause();
            }
        };

        const observer = new IntersectionObserver(handlePlayPause, {
            threshold: 0.8, // 80% of the video should be in view
        });

        if (videoElement) {
            observer.observe(videoElement);
        }

        // Cleanup observer on component unmount
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <section className="hero-section relative antialiased">
            <div className="container mx-auto px-4 antialiased">
                <div className="hero-section-banner antialiased">
                    <div id="scene">
                        <div className="w-full lg:h-[80vh]">
                            <video
                                ref={videoRef}
                                className="hero-banner w-full h-full object-cover rounded-lg antialiased"
                                loop
                                muted
                                playsInline
                                preload="metadata"  // Load metadata only initially
                                poster={herovdoPoster} // Poster image before video loads
                                loading="lazy"  // Lazy loading the video
                            >
                                <source src={herovdo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}