import { Routes, Route, } from 'react-router-dom';
// import Home from './pages/Home';
// {/*import Hotel from './pages/Hotels';*/}
// import Flights from './pages/Flights';
// import Trains from './pages/Trains';
// import Combo from './pages/Combo';
import RoomHotels from './pages/RoomHotels';
import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<RoomHotels/>} />
                {/*<Route path='/hotels' element={<Hotel />} />
                <Route path='/flights' element={<Hotel />} />*/}
                {/* <Route path='/flights' element={<Flights />} />
                <Route path='/trains' element={<Trains />} />
                <Route path='/combo' element={<Combo />} /> */}
            </Routes>
        </div>
    )
}

export default App