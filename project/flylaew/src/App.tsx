import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotels';
import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hotels' element={<Hotel />} />
            </Routes>
        </div>
    )
}

export default App