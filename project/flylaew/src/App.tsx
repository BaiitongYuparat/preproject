import { Routes, Route } from "react-router-dom";
import "./App.css";
import HotelPage from "./pages-client/HotelPage";
import Home from "./pages-client/HomePage";
import RoomHotels from "./pages-client/roomhotels/RoomHotels"; // ✅ import หน้า RoomHotels

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/rooms" element={<RoomHotels />} /> {/* ✅ เพิ่ม Route */}
      </Routes>
    </div>
  );
}

export default App;
