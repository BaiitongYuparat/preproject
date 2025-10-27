
import { Routes, Route } from "react-router-dom";
import Home from "./pages-client/HomePage";
import "./App.css";
import HotelPage from "./pages-client/HotelPage";
import RoomHotels from "./pages-client/roomhotels/RoomHotelsPage";
import Flights from "./pages-client/Flights";


function App() {


  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/hotels/:id" element={<RoomHotels/>} />
        <Route path="/flights" element={<Flights />} />

      </Routes>
    </div>

  );
}

export default App;
