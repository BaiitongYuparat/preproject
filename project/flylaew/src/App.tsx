
import { Routes, Route } from "react-router-dom";
import Home from "./pages-client/HomePage";
import "./App.css";
import HotelPage from "./pages-client/HotelPage";
import RoomHotels from "./pages-client/roomhotels/RoomHotelsPage";


function App() {


  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/hotels/:id" element={<RoomHotels/>} />

      </Routes>
    </div>

  );
}

export default App;
