import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

interface HotelCardProps {
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

const HotelCard: React.FC<HotelCardProps> = ({
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

    // const [hotelImage, sethotelImage] = useState(imageUrl);

    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         sethotelImage(URL.createObjectURL(file));
    //     }

    // }


    return (

        // <link to={`HotelPage`}>
        <div className="bg-white w-full mt-3 rounded-3xl shadow-md flex  flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8  py-5  hover:shadow-lg  transition-all duration-300">

            {/* รายละเอียดรูปภาพ
                <label className="cursor-pointer relative self-centermd:self-start">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    /> */}
            <img
                src={imageUrl}
                alt="roomhotelImage"
                className=" w-[250px] h-[250px] sm:h-[280px] sm:w-[280px] object-cover rounded-md "
            />

            {/* </label> */}

            {/* รายละเอียดโรงแรม */}
            <div className=" flex-1 md:ml-6 mt-4 md:mt-0 w-full text-left ">
                <div className="  flex  flex-wrap items-center justify-between md:justify-start">
                    <a
                        href={`https://www.google.com/maps/search/${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-medium text-[20px] sm:text-[22px] hover:text-black hover:underline"
                    >
                        {name}
                    </a>
                    <p className=" text-yellow-300 ml-3 text-[18px] sm:text-[20px] md:ml-3 "> {rating}</p>
                </div>

                <p className="text-gray-600 text-left font-medium text-[18px] sm:text-[20px] "> {thaiName} </p>

                <div className="flex items-center mt-4">
                    <p className="bg-yellow-400 text-white px-3 py-0.5 rounded  text-[15px] sm:text-[16px] ">{score}</p>
                    <p className="text-gray-600 ml-3 font-medium text-[14 px] sm:text-[16px]">{comments}</p>
                </div>

                <div className="flex items-center mt-2">
                    <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg"
                        alt="location"
                        className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                    <p className="text-gray-600 ml-2 font-medium text-[14px] sm:text-[16px] ">{location}</p>
                </div>

                {/* ราคา */}
                <div className="flex items-end flex-col justify-end  md:gap-1 gap-3 ">
                    <div >
                        <p className="font-medium text-black text-[22px] sm:text-[24px]">{price.toLocaleString()} </p>
                    </div>
                    <div >
                        <p className="font-medium text-gray-600 text-[14px] sm:text-[16px]"> ทั้งหมด (รวมภาษีและค่าธรรมเนียม) {totaltax.toLocaleString()} </p>
                    </div>
                    <div >
                        <button className=" bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md mt-3 font-medium text-[15px] sm:text-[17px]">
                            ดูห้องว่าง
                        </button>
                    </div>
                </div>

            </div>
        </div>
        // </link>


    )
}

export default HotelCard

