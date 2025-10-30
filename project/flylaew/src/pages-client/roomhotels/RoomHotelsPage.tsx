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
  const { id } = useParams(); 
  const [headroomcard, setHeadRoomCard] = useState<HeadRoomCardData | null>(null);
  const [roomhotels, setRoomHotels] = useState<RoomHotelsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setErr("");

      try {
        const headRes = await axios.get<HeadRoomCardData[]>("/HeadRoomCardData.json", {
          headers: { "Cache-Control": "no-cache" },
        });
        const hotel =
          (id ? headRes.data.find((h) => String(h.id) === String(id)) : headRes.data[0]) || null;
        if (!cancelled) setHeadRoomCard(hotel);
        const roomRes = await axios.get<RoomHotelsData[]>("/RoomHotelsData.json", {
          headers: { "Cache-Control": "no-cache" },
        });
        let filteredRooms: RoomHotelsData[] = roomRes.data;
        if (hotel?.id) {
          const hotelId = String(hotel.id);
          filteredRooms = roomRes.data.filter((r) => {
            const roomHotelId = r.id.includes("-") ? r.id.split("-")[0] : r.id;
            return String(roomHotelId) === hotelId;
          });
        }

        if (!cancelled) setRoomHotels(filteredRooms);
      } catch (e: any) {
        if (!cancelled) setErr(e?.message || "โหลดข้อมูลล้มเหลว");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [id]);


  if (loading) {
    return <p className="text-center text-gray-500 mt-10">กำลังโหลดข้อมูล…</p>;
  }
  if (err) {
    return <p className="text-center text-red-600 mt-10">เกิดข้อผิดพลาด: {err}</p>;
  }
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
