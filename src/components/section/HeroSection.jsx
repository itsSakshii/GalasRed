// src/section/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playVideo, pauseVideo } from "../../store/slices/herovideoslice"; // Ensure correct import path
import herovdo from "../../assets/videos/herovdo.mp4";

export default function HeroSection() {
    const dispatch = useDispatch();
    const videoRef = useRef(null);
    const isPlaying = useSelector((state) => state.video.isPlaying);

    // Intersection Observer to manage video play/pause
    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        dispatch(playVideo());
                        videoElement.play(); // Play the video when in view
                    } else {
                        dispatch(pauseVideo());
                        videoElement.pause(); // Pause the video when out of view
                    }
                });
            },
            {
                threshold:0.8, // Adjust the threshold as needed (0.5 means 50% of the video should be in view)
            }
        );

        // Start observing the video element
        if (videoElement) {
            observer.observe(videoElement);
        }

        // Cleanup function to unobserve
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, [dispatch]);

    return (
        <>
            <section className="hero-section relative antialiased">
                <div className="container mx-auto px-4 antialiased">
                    <div className="hero-section-banner antialiased">
                        <div id="scene">
                            <div className="w-full lg:h-[80vh]">
                                <video
                                    ref={videoRef} // Attach ref to the video element
                                    className="hero-banner w-full h-full object-cover rounded-lg antialiased"
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={herovdo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-space-inner antialiased"></div>
        </>
    );
}
