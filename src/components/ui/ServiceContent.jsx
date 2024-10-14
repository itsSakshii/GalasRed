import React from "react";
import PropTypes from "prop-types";
 
const ServiceContent = ({ title, description, img, points = [] }) => (
<div className="service flex flex-col sm:flex-row justify-center items-center">
<div className="service-info text-xs md:text-sm lg:text-base">
<h3 className="text-teal-400">{title}</h3>
<div className="line-space" />
<p className="font-light">{description}</p>
<div className="line-space" />
      {points.length > 0 && (
<ul className="mt-4 list-disc list-inside italic font-thin text-xs lg:text-sm">
          {points.map((point, index) => (
<li key={index}>{point}</li>
          ))}
</ul>
      )}
</div>
<div className="service-img">
<img src={img} alt={title} className="imge" />
</div>
</div>
);
 
ServiceContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string),
};
 
export default ServiceContent;