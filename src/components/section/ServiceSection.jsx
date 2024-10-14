import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectServices } from "../../store/slices/serviceSlice";
import useServiceAnim from "../../hooks/useServiceAnim";
import ServiceContent from "../ui/ServiceContent";

export default function Services() {
  const serviceRefs = useRef([]);
  const servicesData = useSelector(selectServices); // Fetch services from Redux

  useEffect(() => {
    // Remove unused refs for optimization
    serviceRefs.current = serviceRefs.current.slice(0, servicesData.length);
  }, [servicesData.length]);

  useServiceAnim(serviceRefs.current); // Same animation hook

  return (
    <section className="services flex flex-col antialiased">
      <div className="container mx-auto px-4 antialiased">
        <div className="heading">
          <h2 className="text-center">
            All <span className="text-teal-200">Services</span>
          </h2>
        </div>
        <div className="section-space-inner"></div>
        {servicesData.map(({ id, title, description, img, points }, index) => (
          <div ref={(el) => (serviceRefs.current[index] = el)} key={id}>
            <ServiceContent
              title={title}
              description={description}
              img={img}
              points={points}
            />
          </div>
        ))}
      </div>
      <div className="section-space antialiased"></div>
    </section>
  );
}