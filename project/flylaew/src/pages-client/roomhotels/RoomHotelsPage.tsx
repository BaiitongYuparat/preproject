import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import HeadRoomCard from "../../components/hotels/HeadRoomCard";
import RoomHotelsCard from "../../components/hotels/RoomHotelsCard";

interface HeadRoomCardData {
  id: string;
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

interface RoomHotelsData {
  id: string;
  imageUrl: string;
  nameroom: string;
  explanation: string;
  price: string;
}

const RoomHotels: React.FC = () => {
  const [headroomcard, setHeadRoomCard] = useState<HeadRoomCardData | null>(null);
  const [roomhotels, setRoomHotels] = useState<RoomHotelsData[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // โหลดข้อมูล 
        const headResponse = await axios.get<HeadRoomCardData[]>("/HeadRoomCardData.json");
        const hotel = headResponse.data.find((h) => h.id === id);
        setHeadRoomCard(hotel || null);

        // โหลดข้อมูล
        const roomResponse = await axios.get<RoomHotelsData[]>("/RoomHotelsData.json");
        setRoomHotels(roomResponse.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchData();
  }, [id]);

  // กรณีโหลดไม่สำเร็จหรือยังไม่มีข้อมูล
  if (!headroomcard) {
    return <p className="text-center text-gray-500 mt-10">ไม่พบข้อมูลโรงแรม</p>;
  }

  return (
    <div className="flex flex-col">
      <HeadRoomCard
        key={headroomcard.id}
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

      {roomhotels.length > 0 ? (
        roomhotels.map((room) => (
          <RoomHotelsCard
            key={room.id}
            id={room.id}
            imageUrl={room.imageUrl}
            nameroom={room.nameroom}
            explanation={room.explanation}
            price={room.price}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">ไม่มีข้อมูลห้องพัก</p>
      )}
    </div>
  );
};

export default RoomHotels;
