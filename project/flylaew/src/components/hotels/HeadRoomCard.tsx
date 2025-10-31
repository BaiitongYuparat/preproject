import React from "react";
import { LuMapPin } from "react-icons/lu";

interface HeadRoomCardProps {
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

const HeadRoomCard: React.FC<HeadRoomCardProps> = ({
  imageUrl,
  room1,
  room2,
  hotelname,
  rating,
  score,
  comments,
  location,
  facilities,
}) => {

  return (
    <div className="bg-gradient-to-t from-yellow-100 via-white  to-yellow-100 border  border-yellow-100 w-full max-w-7xl mx-auto mt-6 rounded-lg shadow-md flex  flex-col hover:shadow-xl transition-all duration-300 p-4 py-5 ">

      {/** รายละเอียดโรงแรม */}
      <div className="flex flex-col sm:flex-row  justify-between items-start sm:items-start gap-3 ml-4 mt-4">
        <div>
          <div className="flex  items-center text-left gap-3 ">
            <h1 className="text-black font-medium text-[20px] sm:text-[24px]  ">{hotelname}</h1>
            <p className=" text-yellow-300 ml-3 text-[18px] sm:text-[20px]  "> {rating}</p>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <p className="bg-yellow-400 text-white px-3 py-0.5 rounded-full font-medium text-[10px] sm:text-[12px]">{score}</p>
            <p className="text-gray-600 font-medium text-[10px] sm:text-[12px] ">{comments}</p>
          </div>
        </div>
      </div>


      {/** รูปโรงแรม */}
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center p-4 mb-4 ">
        <img
          src={imageUrl}
          alt="hotelImage"
          className="w-full h-[300px] sm:h-[450px] object-cover rounded-md "
        />
        <div className="grid grid-cols-1 gap-4  mt-3 w-full lg:w-[40%]">
          {/** รูปโรงแรม */}
          <img
            src={room1}
            alt="room1"
            className="w-full h-[200px] sm:h-[220px]  object-cover rounded-md "
          />

          {/** รูปโรงแรม */}
          <img
            src={room2}
            alt="room2"
            className="w-full h-[200px] sm:h-[220px] object-cover rounded-md "
          />
        </div>
      </div>

      {/** ตําแหน่งโรงแรม */}
      <div className="flex items-center gap-2  ">

        <LuMapPin />

        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 font-medium text-[14px] sm:text-[16px]  hover:underline"
        >
          {location}
        </a>
      </div>

      {/** สิ่งอำนวยความสะดวก */}
      <div className="mt-6 ">
        <h1 className="text-black text-left  font-medium text-[16px] sm:text-[18px] ">
          สิ่งอำนวยความสะดวก
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2">
          {facilities.map((item, index) => (
            <p key={index} className="text-gray-600  text-left font-medium text-[14px] sm:text-[16px]" >
              ➟ {item}
            </p>
          ))}

        </div>
      </div>
    </div>


  )

}

export default HeadRoomCard