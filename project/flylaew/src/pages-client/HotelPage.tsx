
import React from "react";
import Navbar from "../components/Navbar";
import HotelsList from "../components/hotels/HotelsCardList";

const HotelPage: React.FC = () => {
  return (
    <div className="bg-yellow-50 min-h-screen  ml-2 flex items-center">
      {/* Navbar */}
      <Navbar />
      <div className="mt-20  ">
        <HotelsList />
      </div>

    </div>
  );
};

export default HotelPage;
