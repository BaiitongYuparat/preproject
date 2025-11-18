
import React from "react";
import Navbar from "../components/Navbar";
import HotelsList from "../components/hotels/HotelsCardList";
import { useLocation } from "react-router-dom";

const HotelPage: React.FC = () => {

    const { state } = useLocation();

    const from = state?.from || "";


  return (
    <div className="bg-yellow-50 min-h-screen  ml-2 flex items-center">
      {/* Navbar */}
      <Navbar />
      <div className="mt-20  ">
        <HotelsList from={from} />
      </div>

    </div>
  );
};

export default HotelPage;
