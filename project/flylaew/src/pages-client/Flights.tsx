import React from "react";
import FlightsCardList from "../components/fligh/FlightsCardList";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom"; 

const Flights: React.FC = () => {
    
    const { state } = useLocation();

    const flightfrom = state?.from || "";
    const flightto = state?.to || "";

    return (
       <div className="min-h-screen bg-yellow-50 mt-24">
            <Navbar />
            <div>
                {/* <div className=" mt-28 px-4">
                    <div className="bg-white text-gray-600 text-sm font-medium py-3 px-5 rounded-xl shadow text-left border border-gray-200">
                       {flightfrom} - {flightto} 
                    </div>
                </div> */}

                <div className="mt-5">
                    <FlightsCardList 
                        from={flightfrom} 
                        to={flightto} 
                    />
                </div>
            </div>
        </div>

    );
};

export default Flights;