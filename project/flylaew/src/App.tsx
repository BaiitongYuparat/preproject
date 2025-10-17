import { Routes, Route, } from 'react-router-dom';
// import Home from './pages/Home';
// import Hotel from './pages/Hotels';
import './App.css';
import RoomHotels from './pages/RoomHotels';

function App() {
    return (
        <div>
            <nav >


            </nav>

            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                {/* <Route path='/' element={<Hotel />} /> */}
                <Route path='/' element={<RoomHotels />} />
            </Routes>

        </div>
    )
}

export default App