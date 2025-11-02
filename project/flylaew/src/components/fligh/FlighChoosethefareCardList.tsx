import { useState, useEffect } from "react";
import FlighChoosethefareCard from "./FlighChoosethefareCard";
import axios from "axios";
import { useParams } from "react-router-dom";

interface ChoosethefareCardData {
    id: string;
    flightimgeurl: string;
    flightid: string;
    flightprice: number;
    flightfrom: string;
    flightto: string;
    departuretime: string;
    landingtime: string;
    returndeparture: string;
    returnlanding: string;
    luggage: string;
}

const FlighChoosethefareCardList: React.FC = () => {
    const [flights, setFlights] = useState<ChoosethefareCardData[]>([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                const flightResponse = await axios.get<[ChoosethefareCardData]>("/FlightData.json");
                const Flights = flightResponse.data.filter(f => f.id.toString() === id);

                setFlights(Flights);
            } catch (error) {
                console.error("Error fetching flights:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [id]);

    if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

    return (
        <div className="flex flex-col space-y-4">
            {flights.map((flight) => (
                <FlighChoosethefareCard
                    key={flight.id}
                    flightimgeurl={flight.flightimgeurl}
                    flightid={flight.flightid}
                    flightprice={flight.flightprice}
                    flightfrom={flight.flightfrom}
                    flightto={flight.flightto}
                    departuretime={flight.departuretime}
                    landingtime={flight.landingtime}
                    returndeparture={flight.returndeparture}
                    returnlanding={flight.returnlanding}
                    luggage={flight.luggage}
                />
            ))}
        </div>
    );
};

export default FlighChoosethefareCardList;