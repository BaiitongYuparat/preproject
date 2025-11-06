import { useState, useEffect } from "react";
import TrainsChoosethefareCard from "./TrainsChoosethefareCard";
import axios from "axios";
import { useParams } from "react-router-dom";

interface TrainFareData {
    id: string;
    trainprice: number;
    trainto: string
    trainfrom: string
}


const TrainsChoosethefareCardList: React.FC = () => {
    const [trains, setTrains] = useState<TrainFareData[]>([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchTrains = async () => {
            try {
                setLoading(true);
                const trainresponse = await axios.get<TrainFareData[]>("/TrainData.json");
                const filteredTrains = trainresponse.data.filter(t => t.id === id);
                setTrains(filteredTrains);
            } catch (error) {
                console.error("Error fetching trains:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrains();
    }, [id]);

    if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

    return (
        <div className="flex flex-col space-y-4">
            {trains.map((train) => (
                <TrainsChoosethefareCard
                    key={train.id}
                    trainfrom={train.trainfrom}
                    trainto={train.trainto}
                    trainprice={train.trainprice}
                />
            ))}
        </div>
    );
};

export default TrainsChoosethefareCardList;
