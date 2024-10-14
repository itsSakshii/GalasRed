import PropTypes from "prop-types";
import useMarqueeAnim from "../../hooks/useMarqueeAnim";

const EventContent = ({ eventContent }) => {
  useMarqueeAnim();

  return (
    <>
      <div className="section-space"></div>
      {eventContent.map((marquee, index) => (
        <div className="marquee" key={index} id={`marquee-${index + 1}`}>
          {marquee.items.map((item, idx) => (
            <div className="item" key={idx}>
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} className="min-h-[80px]" />
              ) : (
                <h4 className="event-title text-xs md:text-2xl lg:text-3xl">
                  {item.text}
                </h4>
              )}
            </div>
          ))}
        </div>
      ))}
      <div className="section-space"></div>
    </>
  );
};

EventContent.propTypes = {
  eventContent: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(["image", "text"]).isRequired,
          src: PropTypes.string,
          alt: PropTypes.string,
          text: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default EventContent;
