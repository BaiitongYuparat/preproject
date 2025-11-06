import { Routes, Route } from "react-router-dom";
import Home from "./pages-client/HomePage";
import "./App.css";
// import ChoosethefareCard from "./components/fligh/FlighChoosethefareCard";
import HotelPage from "./pages-client/HotelPage";
import RoomHotels from "./pages-client/roomhotels/RoomHotelsPage";
import Flights from "./pages-client/Flights";
import Logins from "./pages-client/Logins";
import Trains from "./pages-client/Trains";
// import Register from "./pages-client/Register";
import Information from "./pages-client/information/InformationHotel";
import FlighChoosethefareCardList from "./components/fligh/FlighChoosethefareCardList";
import TrainsChoosethefareCardList from "./components/trains/TrainsChoosethefareCardList";
import AdminPage from "./admin/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Logins />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/hotels/:id" element={<RoomHotels />} />
        <Route path="/information/:id" element={<Information />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flighchoosethefare/:id" element={<FlighChoosethefareCardList />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/trainschoosethefare/:id" element={<TrainsChoosethefareCardList />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </>
  );
}

export default App;
