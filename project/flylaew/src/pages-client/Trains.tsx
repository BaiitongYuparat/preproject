import React from "react";
import Navbar from "../components/Navbar";
import TrainsCardList from "../components/trains/TrainsCardList";

const Trains: React.FC = () => {
    return (
        <div className="bg-yellow-50  ml-2 flex justify-center  items-center">
            <Navbar />
            <div className="mt-20">
                <TrainsCardList />
            </div>
        </div>
    );
};

export default Trains;