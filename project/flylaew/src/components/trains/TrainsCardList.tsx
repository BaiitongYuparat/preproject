import TrainsCard from "./TrainsCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface TrainsCardData {
    id: string
    trainprice: number // ราคาต่อคน
    trainduration: string // เวลาในการเดินทาง
    trainfrom: string // จาก
    trainto: string // ถึง
    departuretime: string // เวลาเดินทาง
    landingtime: string // เวลาถึง
}

const TrainsCardList: React.FC = () => {
    const [trains, setTrains] = useState<TrainsCardData[]>([]);
    const [loading, setLoading] = useState(true); 

     useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                const response = await axios.get<TrainsCardData[]>("/TrainData.json");
                console.log("Flights data loaded:", response.data);
                setTrains(response.data);
            } catch (error) {
                console.error("Error fetching flights:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

    return (
        <div className="flex flex-col space-y-4">
            {trains.map((train) => (
                <TrainsCard
                    key={train.id}
                    id={train.id}
                    trainprice={train.trainprice}
                    trainduration={train.trainduration}
                    trainfrom={train.trainfrom}
                    trainto={train.trainto}
                    departuretime={train.departuretime}
                    landingtime={train.landingtime}
                />
            ))}
        </div>
    );
};

export default TrainsCardList
