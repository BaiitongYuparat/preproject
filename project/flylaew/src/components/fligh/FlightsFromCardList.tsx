import React from "react";
import FlightsCard from "./FlightsCard";
import { useState, useEffect } from "react";
import axios from "axios";

interface FlightsCard {
    id: string;
    flightimgeurl: string; // รูปสายการบิน
    flightname: string; // ชื่อสายการบิน
    flightid: string; // flightIDสายการบิน
    flightprice: string; // ราคาสายการบิน
    flightduration: string; // ระยะเวลาการบิน
    flightfrom: string; // ต้นทาง
    flightto: string; // ปลายทาง
    departuretime: string; // เวลาเครื่องขึ้น
    landingtime: string; // เวลาเครื่องลง
}

const FlightCardList: React.FC = () => {
    const [FlightCards, setFlightCards] = useState<FlightsCard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                const response = await axios.get<FlightsCard[]>("/FlightsData.json");
                console.log(response.data);
                setFlightCards(response.data);
            }
            catch (error: unknown) {
                console.log("Error fetching Flights:", error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 justify-items-center">
            {FlightCards.map((flightCard) => (
                <FlightsCard
                    key={flightCard.id}
                    id={flightCard.id}
                    flightimgeurl={flightCard.flightimgeurl}
                    flightname={flightCard.flightname}
                    flightid={flightCard.flightid}
                    flightprice={flightCard.flightprice}
                    flightduration={flightCard.flightduration}
                    flightfrom={flightCard.flightfrom}
                    flightto={flightCard.flightto}
                    departuretime={flightCard.departuretime}
                    landingtime={flightCard.landingtime}
                />
            ))}
        </div>
    );

};
export default FlightCardList