// src/pages/HotelDetailPage.tsx
import React from "react";
// import HeadRoomCard from "../components/hotels/HeadRoomCard";

import Navbar from "../components/Navbar";
import HotelsList from "../components/hotels/HotelsCardList";

const HotelPage: React.FC = () => {
  return (
     <div className="bg-yellow-50 min-h-screen  ml-2 flex items-center">
          {/* Navbar */}
          <Navbar />
          <HotelsList />
    </div>
  );
};

export default HotelPage;
