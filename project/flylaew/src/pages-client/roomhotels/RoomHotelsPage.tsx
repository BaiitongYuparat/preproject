import HeadRoomCard from "../../components/hotels/HeadRoomCard";
import RoomHotelsCard from "../../components/hotels/RoomHotelsCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface HeadRoomCard {
    id:string;
    imageUrl: string;
    room1: string;
    room2: string;
    hotelname: string;
    rating: string;
    score: string;
    comments: string;
    location: string;
    facilities: string[];
}

interface RoomHotels {
    id: number;
    imageUrl: string;
    nameroom: string;
    explanation: string;
    price: string;
}



const RoomHotels: React.FC = () => {
    const [headroomcard, setHeadRoomCards] = useState<HeadRoomCard | null>(null);
    const [roomhotels, setroomHotels] = useState<RoomHotels[]>([]);
     const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchroomHotels = async () => {
            try {
                const response = await axios.get<HeadRoomCard[]>("/HeadRoomCardData.json");
                const hotel = response.data.find(hotel => hotel.id ==(id)); 
                setHeadRoomCards(hotel || null);
            }
            catch (error) {
                console.log("Error fetching roomhotels:", error);
            }
        };

        const fetchRoomHotels = async () => {
            try {
                const response = await axios.get<RoomHotels[]>("/RoomHotelsData.json");
                console.log(response.data);
                setroomHotels(response.data);
            }
            catch (error: unknown) {
                console.log("Error fetching roomhotels:", error);
            }
        };

        fetchroomHotels();
        fetchRoomHotels();
    }, [id]);
    if (!headroomcard) {
        return <p>Fail</p>;
    }
    return (
        <div className="flex flex-col ">
          
                <HeadRoomCard
                    key={headroomcard.imageUrl}
                    imageUrl={headroomcard.imageUrl}
                    room1={headroomcard.room1}
                    room2={headroomcard.room2}
                    hotelname={headroomcard.hotelname}
                    rating={headroomcard.rating}
                    score={headroomcard.score}
                    comments={headroomcard.comments}
                    location={headroomcard.location}
                    facilities={headroomcard.facilities}
                />

            {roomhotels.map((roomhotel) => (
                <RoomHotelsCard
                    key={roomhotel.id}
                    imageUrl={roomhotel.imageUrl}
                    nameroom={roomhotel.nameroom}
                    explanation={roomhotel.explanation}
                    price={roomhotel.price}
                />

            ))}

        </div>
    )
}

export default RoomHotels