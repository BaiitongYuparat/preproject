import axios from "axios";
import React, { useEffect, useState } from "react";
import HotelsCard from "./HotelsCard";


interface Hotels {
    id: string;
    imageUrl: string; // รูปโรงแรม
    name: string; // ชื่อโรงแรมภาษาอังกฤษ
    thaiName: string; // ชื่อโรงแรมภาษาไทย
    location: string;  // ที่ตั้งโรงแรม
    price: number; // ราคาโรงแรม
    rating: string; // คะแนนโรงแรมแบบดาว
    score: string; // คะแนนโรงแรมแบบตัวเลข
    comments: string; // จํานวนความคิดเห็น
    totaltax: number; // ราคารวมภาษี
}

const HotelsList: React.FC = () => {

    const [hotels, setHotels] = useState<Hotels[]>([]); //เก็บข้อมูลจาก API
    const [loading, setLoading] = useState(true); //สถานะการโหลดข้อมูล

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Hotels[]>("/HotelsData.json");
                console.log(response.data);
                setHotels(response.data);
            }
            catch (error: unknown) {
                console.log("Error fetching hotels:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600 text-lg">กำลังโหลดข้อมูลโรงแรม...</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 p-16 justify-items-center ">
            {hotels.map((hotel) => (
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