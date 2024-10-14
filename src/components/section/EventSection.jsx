import React from "react";
import { useSelector } from "react-redux";
import { selectEvents } from "../../store/slices/eventSlice";
import EventContent from "../ui/EventContent";
 
const Events = () => {
  const eventContent = useSelector(selectEvents);
 
  return (
<section className="marquee-container text-white antialiased" id="marqu">
<EventContent eventContent={eventContent} />
</section>
  );
};
 
export default Events;