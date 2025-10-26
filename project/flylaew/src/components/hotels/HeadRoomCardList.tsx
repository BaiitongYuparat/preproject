import React, { useEffect, useState } from "react";
import HeadRoomCard from "./HeadRoomCard";
import axios from "axios";

interface HeadRoomCard {
    imageUrl: string; // รูปโรงแรม
  room1: string; // รูปโรงแรม
  room2: string; // รูปโรงแรม
  hotelname: string; // ชื่อโรงแรม
  rating: string; // คะแนนโรงแรมแบบดาว
  score: string; // คะแนนโรงแรมแบบตัวเลข
  comments: string; // ความคิดเห็นโรงแรม
  location: string; // ตําแหน่งโรงแรม
  facilities: string[]; // สิ่งอำนวยความสะดวก

}

const HeadRoomCardList: React.FC = () => {
    const [headroomcards, setHeadRoomCards] = useState<HeadRoomCard[]>([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchroomHotels = async () => {
            try {
                setLoading(true);
                const response = await axios.get<HeadRoomCard[]>("/HeadRoomCardData.json");
                console.log(response.data);
                setHeadRoomCards(response.data);
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
            {headroomcards.map((headroomcard) => (
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
            ))}
        </div>
    );
}

export default HeadRoomCardList