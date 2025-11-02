import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightsCard from "./FlightsCard";

interface FlightData {
    id: string;
    flightimgeurl: string; // รูปสายการบิน
    flightname: string; // ชื่อสายการบิน
    flightid: string; // flightIDสายการบิน
    flightprice: number; // ราคาสายการบิน
    flightduration: string; // ระยะเวลาการบิน
    flightfrom: string; // ต้นทาง
    flightto: string; // ปลายทาง
    departuretime: string; // เวลาเครื่องขึ้น
    landingtime: string; // เวลาเครื่องลง
}

const FlightsCardList: React.FC = () => {
    const [flights, setFlights] = useState<FlightData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                const response = await axios.get<FlightData[]>("/FlightData.json");
                console.log("Flights data loaded:", response.data);
                setFlights(response.data);
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
            {flights.map((flight) => (
                <FlightsCard 
                key={flight.id} 
                id={flight.id}
                flightname={flight.flightname}
                flightimgeurl={flight.flightimgeurl}
                flightid={flight.flightid}
                flightprice={flight.flightprice}
                flightduration={flight.flightduration}
                flightfrom={flight.flightfrom}
                flightto={flight.flightto}
                departuretime={flight.departuretime}
                landingtime={flight.landingtime}
                />
            ))}
        </div>
    );
};

export default FlightsCardList;
