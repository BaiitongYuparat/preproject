import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import HotelsCard from "../components/hotels/HotelsCard";
import FlightsCard from "../components/fligh/FlightsCard";

const Combo: React.FC = () => {
    return (
        <div className="bg-yellow-50 min-h-screen  ml-2 flex items-center">

            <Navbar />


            
        </div>
    );
};

export default Combo;