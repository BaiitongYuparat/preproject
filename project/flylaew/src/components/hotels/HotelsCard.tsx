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
        <Link to={`/hotels/${id}`}>
            <div className="bg-white w-[350px] h-full mt-3 rounded-3xl shadow-md flex flex-col justify-between px-5 sm:px-8 py-5 hover:shadow-lg transition-all duration-300">

                <img
                    src={imageUrl || "/placeholder.jpg"}
                    alt={name}
                    className="w-[300px] h-[250px] sm:h-[280px] sm:w-[280px] object-cover rounded-md"
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

                    <div className="flex items-center mt-4">
                        <p className="bg-yellow-400 text-white px-3 py-0.5 rounded  text-[15px] sm:text-[16px] ">{score}</p>
                        <p className="text-gray-600 ml-3 font-medium text-[14px] sm:text-[16px]">{comments}</p>
                    </div>

                    <div className="flex items-center mt-2">
                        <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg"
                            alt="location"
                            className="w-7 h-7 sm:w-8 sm:h-8"
                        />
                        <p className="text-gray-600 ml-2 font-medium text-[14px] sm:text-[16px] ">{location}</p>
                    </div>

                    {/* ส่วนล่าง (ราคา + ปุ่ม) */}
                    <div className="mt-4 text-right  items-center">
                        <p className="text-xl font-semibold text-black">{price}</p>
                        <p className="text-gray-500 text-sm">
                            ทั้งหมด (รวมภาษีและค่าธรรมเนียม) {totaltax}
                        </p>
                        <button className="bg-yellow-400  hover:bg-yellow-500 text-white w-full py-2 rounded-md mt-3 font-medium">
                            ดูห้องว่าง
                        </button>
                    </div>
                </div>
            </div>

        </Link>


    )
}

export default HotelsCard

