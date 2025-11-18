import React from "react";
import Navbar from "../components/Navbar";
import TrainsCardList from "../components/trains/TrainsCardList";
import { useLocation } from "react-router-dom";

const Trains: React.FC = () => {
    
      const { state } = useLocation();

       const trainfrom = state?.from || "";
    const trainto = state?.to || "";

    return (
        <div className="min-h-screen bg-yellow-50 mt-24">
            <Navbar />
             {/* <div>
                <div className=" mt-3 px-4">
                    <div className="bg-white text-gray-600 text-sm font-medium py-3 px-5 rounded-xl shadow text-left border border-gray-200">
                       {trainfrom} - {trainto}
                    </div>
                </div> */}

            <div className="mt-4">
                <TrainsCardList 
                from={trainfrom}
                to={trainto} 
                />
            </div>
            {/* </div> */}
        </div>
    );
};

export default Trains;