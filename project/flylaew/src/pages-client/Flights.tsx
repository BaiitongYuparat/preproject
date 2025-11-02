import React from "react";
import FlightsCardList from "../components/fligh/FlightsCardList";
import Navbar from "../components/Navbar";

const Flights: React.FC = () => {
    return (
        <div className="bg-yellow-50  ml-2 flex justify-center  items-center">
            <Navbar />
            <div className="mt-20">
                <FlightsCardList />
            </div>
        </div>

    );
};

export default Flights;