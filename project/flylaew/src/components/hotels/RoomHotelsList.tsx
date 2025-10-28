import axios from "axios";
import React, { useEffect, useState } from "react";
import RoomHotelsCard from "./RoomHotelsCard";

interface RoomHotels {
    id: string;
    imageUrl: string; //รูปห้อง
    nameroom: string; //ชื่อห้อง
    explanation: string; //คําอธิบาย
    price: string; //ราคา
}

const RoomHotelsList: React.FC = () => {
    const [roomhotels, setroomHotels] = useState<RoomHotels[]>([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchroomHotels = async () => {
            try {
                setLoading(true);
                const response = await axios.get<RoomHotels[]>("/RoomHotelsData.json");
                console.log(response.data);
                setroomHotels(response.data);
            }
            catch (error: unknown) {
                console.log("Error fetching roomhotels:", error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchroomHotels();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 justify-items-center">
            {roomhotels.map((roomhotel) => (
                <RoomHotelsCard
                    key={roomhotel.id}
                    id={roomhotel.id}
                    imageUrl={roomhotel.imageUrl}
                    nameroom={roomhotel.nameroom}
                    explanation={roomhotel.explanation}
                    price={roomhotel.price}
                />
            ))}
        </div>
    );
};


export default RoomHotelsList