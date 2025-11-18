import { useState, useEffect } from "react";
import TrainsChoosethefareCard from "./TrainsChoosethefareCard";
import axios from "axios";
import { useParams } from "react-router-dom";

interface TrainFareData {
  id: number;
  trainprice: number;
  trainduration: string;
  trainfrom: string;
  trainto: string;
  departuretime: string;
  landingtime: string;
}

const TrainsChoosethefareCardList: React.FC = () => {
  const [trains, setTrains] = useState<TrainFareData[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        setLoading(true);

        const res = await axios.get<TrainFareData[]>("/TrainData.json");
        const numId = Number(id);
        const filtered = res.data.filter((item) => item.id === numId);

        setTrains(filtered);
      } catch (error) {
        console.error("Error fetching trains:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  if (trains.length === 0)
    return <p className="text-center mt-10 text-red-500">ไม่พบข้อมูลรถไฟ</p>;

  return (
    <div className="flex flex-col space-y-4">
      {trains.map((train) => (
        <TrainsChoosethefareCard
          key={train.id}
          trainprice={train.trainprice}
          trainfrom={train.trainfrom}
          trainto={train.trainto}
        />
      ))}
    </div>
  );
};

export default TrainsChoosethefareCardList;
