import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectServices } from "../../store/slices/serviceSlice";
import useServiceAnim from "../../hooks/useServiceAnim";
import ServiceContent from "../ui/ServiceContent";
 
export default function Services() {
  const servicesData = useSelector(selectServices); // Fetch services from Redux
  const serviceRefs = useRef([]); // Single ref array to hold service refs
 
  useServiceAnim(serviceRefs.current); // Animation hook
 
  return (
<section className="services flex flex-col antialiased">
<div className="container mx-auto px-4 antialiased">
<div className="heading text-center">
<h2>
            All <span className="text-teal-200">Services</span>
</h2>
</div>
<div className="section-space-inner" />
        {servicesData.map((service, index) => (
<div ref={(el) => (serviceRefs.current[index] = el)} key={service.id}>
<ServiceContent {...service} /> {/* Spread service props */}
</div>
        ))}
</div>
<div className="section-space antialiased" />
</section>
  );
}

