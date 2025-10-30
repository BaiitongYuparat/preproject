import { Routes, Route } from "react-router-dom";
import Home from "./pages-client/HomePage";
import "./App.css";
// import ChoosethefareCard from "./components/fligh/FlighChoosethefareCard";
import HotelPage from "./pages-client/HotelPage";
import RoomHotels from "./pages-client/roomhotels/RoomHotelsPage";
import Flights from "./pages-client/Flights";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/hotels/:id" element={<RoomHotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/trains" element={<Flights />} />
        <Route path="/combo" element={<Flights />} />

      </Routes>

      {/* <ChoosethefareCard
        id="1"
        flightimgeurl="https://play-lh.googleusercontent.com/-3Ip-GZtF5T18egow7h0QcdiRlR9Wrwntj49_i7klvyi9toLUTPNAsVV8XbL5G88Lg"
        flightid="FD3630"
        flightprice="4,000"
        flightfrom="อุดรธานี (UTH)"
        flightto="กรุงเทพฯ (DMK)"
        departuretime="10:00"
        landingtime="11:05"
        returndeparture="12:00"
        returnlanding="13:05"
        luggage="1 ชิ้น (carry-on)"
      /> */}
    </>
  );
}

export default App;
