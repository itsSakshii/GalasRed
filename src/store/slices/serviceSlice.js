import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../assets/image/section-image/service-1.webp";
import img2 from "../../assets/image/section-image/service-2.webp";
import img3 from "../../assets/image/section-image/service-3.webp";
 
const initialState = {
  services: [
    {
      id: 1,
      title: "DJ Nights",
      description: "At our vibrant DJ Nights, we bring the pulsating energy of the dance floor.",
      img: img1,
      points: ["Electrifying beats", "Unforgettable evenings", "Talented DJs"],
    },
    {
      id: 2,
      title: "Music Events",
      description: "Join us for exhilarating music events that showcase talented artists.",
      img: img2,
      points: ["Diverse talent", "Live shows", "Memorable vibes"],
    },
    {
      id: 3,
      title: "Corporate Events",
      description: "At our corporate events, we create an engaging atmosphere that fosters networking and collaboration.",
      img: img3,
      points: [
        "Networking opportunities",
        "Engaging workshops",
        "Inspiring presentations",
      ],
    },
  ],
};
 
export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
});
 
export const { setServices } = serviceSlice.actions;
 
export const selectServices = (state) => state.services.services;
 
export default serviceSlice.reducer;