import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../assets/image/section-image/img-1.webp";
import img2 from "../../assets/image/section-image/img-2.webp";
import img3 from "../../assets/image/section-image/img-3.webp";
import img4 from "../../assets/image/section-image/img-4.webp";
import img5 from "../../assets/image/section-image/img-5.webp";
import img6 from "../../assets/image/section-image/img-6.webp";
import img8 from "../../assets/image/section-image/img-8.webp";
import img9 from "../../assets/image/section-image/img-9.webp";
import img10 from "../../assets/image/section-image/img-10.webp";
import img11 from "../../assets/image/section-image/img-11.webp";
import img12 from "../../assets/image/section-image/img-12.webp";
 
// Initial state of the event slice
const initialState = {
  content: [
    {
      items: [
        { type: "image", src: img1, alt: "Image 1" },
        { type: "text", text: "Upcoming" },
        { type: "image", src: img2, alt: "Image 2" },
        { type: "image", src: img3, alt: "Image 3" },
        { type: "image", src: img4, alt: "Image 4" },
      ],
    },
    {
      items: [
        { type: "image", src: img5, alt: "Image 5" },
        { type: "image", src: img6, alt: "Image 6" },
        { type: "image", src: img9, alt: "Image 9" },
        { type: "text", text: "Events" },
        { type: "image", src: img8, alt: "Image 8" },
      ],
    },
    {
      items: [
        { type: "image", src: img9, alt: "Image 10" },
        { type: "text", text: "2024" },
        { type: "image", src: img10, alt: "Image 11" },
        { type: "image", src: img11, alt: "Image 12" },
        { type: "image", src: img12, alt: "Image 13" },
      ],
    },
  ],
};
 
// Create the slice
const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    triggerAnimation: (state) => {
      console.log("Animation triggered!");
    },
  },
});
 
// Export the action
export const { triggerAnimation } = eventSlice.actions;
 
// Selector to access event content from the store
export const selectEvents = (state) => state.events.content;
 
// Export the reducer
export default eventSlice.reducer;