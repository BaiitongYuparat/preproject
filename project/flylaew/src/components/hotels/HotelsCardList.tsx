import axios from "axios";
import React, { useEffect, useState } from "react";
import HotelsCard from "./HotelsCard";

interface HotelsCardListProps {
    from: string;
}

interface Hotels {
    id: string;
    imageUrl: string; // รูปโรงแรม
    name: string; // ชื่อโรงแรมภาษาอังกฤษ
    thaiName: string; // ชื่อโรงแรมภาษาไทย
    location: string;  // ที่ตั้งโรงแรม (ใช้สำหรับการกรอง)
    city: string;  // จังหวัด
    price: number; // ราคาโรงแรม
    rating: string; // คะแนนโรงแรมแบบดาว
    score: string; // คะแนนโรงแรมแบบตัวเลข
    comments: string; // จํานวนความคิดเห็น
    totaltax: number; // ราคารวมภาษี
}


const HotelsList: React.FC<HotelsCardListProps> = ({ from }) => {

    const [hotels, setHotels] = useState<Hotels[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Hotels[]>("/HotelsData.json");
                console.log(response.data);
                setHotels(response.data);
            }
            catch (error: unknown) {
                console.error("Error fetching hotels:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    const filteredHotels = hotels.filter(hotel =>
        hotel.city === from
    );


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600 text-lg">กำลังโหลดข้อมูลโรงแรม...</p>
            </div>
        );
    }

    if (!from) {
        return <p className="text-center mt-10 text-gray-500">กรุณาระบุสถานที่ปลายทางเพื่อค้นหาโรงแรม</p>;
    }

    if (filteredHotels.length === 0) {
        return <p className="text-center mt-10 text-gray-500">ไม่พบโรงแรมใน **{from}**</p>;
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  p-4 justify-items-center ">
            {filteredHotels.map((hotel) => (
                <HotelsCard
                    key={hotel.id}
                    id={hotel.id}
                    imageUrl={hotel.imageUrl}
                    name={hotel.name}
                    thaiName={hotel.thaiName}
                    location={hotel.location}
                    price={hotel.price}
                    rating={hotel.rating}
                    score={hotel.score}
                    comments={hotel.comments}
                    totaltax={hotel.totaltax}
                />
            ))}
        </div>
    )
}
export default HotelsList