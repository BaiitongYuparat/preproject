import React from "react";
import { Link } from "react-router-dom";

interface HotelCardProps {
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

const HotelsCard: React.FC<HotelCardProps> = ({
    id,
    imageUrl,
    name,
    thaiName,
    location,
    price,
    rating,
    score,
    comments,
    totaltax,
}) => {


    return (

        <div className="bg-gradient-to-b from-white to-yellow-100 border border-yellow-100 w-[350px] h-full mt-3 rounded-3xl shadow-md flex flex-col justify-between px-5 sm:px-8 py-5 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out">


            <img
                src={imageUrl || "/placeholder.jpg"}
                alt={name}
                className="w-[300px] h-[250px] sm:h-[280px] sm:w-[280px] object-cover rounded-md hover:scale-105 transition-transform duration-500"
            />


            {/* รายละเอียดโรงแรม */}
            <div className=" flex-1 md:ml-1  mt-4 md:mt-0 w-full text-left  flex flex-col justify-between ">
                <div className="  flex  flex-wrap items-center justify-between mt-3 md:justify-start">
                    <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-medium text-[20px] sm:text-[22px] hover:text-black hover:underline"
                    >
                        {name}
                    </a>
                    <p className=" text-yellow-300 ml-3 text-[12px] sm:text-[14px] md:ml-3 "> {rating}</p>
                </div>

                <p className="text-gray-600 text-left font-medium text-[18px] sm:text-[20px] "> {thaiName} </p>

                <div className="flex items-center mt-1">
                    <p className="bg-yellow-400 text-white px-3 py-0.5 rounded-full  text-[15px] sm:text-[16px] ">{score}</p>
                    <p className="text-gray-600 ml-3 font-medium text-[14px] sm:text-[16px]">{comments}</p>
                </div>

                <div className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>


                    <p className="text-gray-600 ml-2 font-medium text-[14px] sm:text-[16px] ">{location}</p>
                </div>

                {/* ส่วนล่าง (ราคา + ปุ่ม) */}
                <div className="mt-4 text-right  items-center">
                    <p className="text-xl font-semibold text-black">{price}฿ </p>
                    <p className="text-gray-500 text-sm">
                        ทั้งหมด (รวมภาษีและค่าธรรมเนียม) {totaltax}฿
                    </p>

                    <Link to={`/hotels/${id}`}>
                        <button
                            className="w-full py-2 rounded-full mt-3 font-medium text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400  hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            ดูห้องว่าง
                        </button>

                    </Link>
                </div>
            </div>
        </div>




    )
}

export default HotelsCard

