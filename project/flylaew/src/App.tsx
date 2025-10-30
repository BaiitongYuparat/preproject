// import { Routes, Route } from "react-router-dom";
// import Home from "./pages-client/HomePage";
import "./App.css";
// import ChoosethefareCard from "./components/fligh/FlighChoosethefareCard";
// import TrainsChoosethefareCard from "./components/trains/TrainsChoosethefareCard";
// import HotelPage from "./pages-client/HotelPage";
// import RoomHotels from "./pages-client/roomhotels/RoomHotelsPage";
// import Flights from "./pages-client/Flights";
import { Routes, Route } from "react-router-dom";
import RoomHotels from "./pages-client/roomhotels/RoomHotelsPage";


function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/hotels/:id" element={<RoomHotels />} />
        <Route path="/flights/:id" element={<Flights />} />
      </Routes> */}

          <Routes>
      <Route path="/roomhotels/:id" element={<RoomHotels />} />
      {/* หน้าอื่น ๆ */}
    </Routes>
  
{/* 
      <TrainsChoosethefareCard
        trainclassone="WiFi, ที่จอดรถสาธารณะ, สถานีชาร์จรถยนต์ไฟฟ้า, บริการจองแท็กซี่"
        trainclasstwo="WiFi, ที่จอดรถสาธารณะ, สถานีชาร์จรถยนต์ไฟฟ้า, บริการจองแท็กซี่"
        trainclassthree="WiFi, ที่จอดรถสาธารณะ, สถานีชาร์จรถยนต์ไฟฟ้า, บริการจองแท็กซี่"
        trainprice={1200}
      /> */}
    </>
  );
}

export default App;
