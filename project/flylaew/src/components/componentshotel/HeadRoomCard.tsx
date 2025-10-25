import React from "react";

interface HaedRoomCardProps {
  imageUrl: string; // รูปโรงแรม
  room1: string; // รูปห้อง1
  room2: string; // รูปห้อง2
  hotelname: string; // ชื่อโรงแรม
  rating: string; // คะแนนโรงแรมแบบดาว
  score: string; // คะแนนโรงแรมแบบตัวเลข
  comments: string; // ความคิดเห็นโรงแรม
  location: string; // ตําแหน่งโรงแรม
  facilities: string[]; // สิ่งอำนวยความสะดวก

}

const HaedRoomCard: React.FC<HaedRoomCardProps> = ({
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
    <div className="bg-white w-full max-w-7xl mx-auto mt-6 rounded-md shadow-md flex  flex-col hover:shadow-xl transition-all duration-300 p-4 py-5 ">
      
        {/** รายละเอียดโรงแรม */}
        <div className="flex flex-col sm:flex-row  justify-between items-start sm:items-start gap-3 ml-4 mt-4">
          <div>
          <div className="flex  items-center text-left gap-3 ">
            <h1 className="text-black font-medium text-[20px] sm:text-[22px]  ">{hotelname}</h1>
            <p className=" text-yellow-300 ml-3 text-[18px] sm:text-[20px]  "> {rating}</p>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <p className="bg-yellow-400 text-white px-3 py-0.5 rounded-md font-medium text-[10px] sm:text-[12px]">{score}</p>
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
          {/** รูปห้อง1 */}
          <img
            src={room1}
            alt="room1"
            className="w-full h-[200px] sm:h-[220px]  object-cover rounded-md "
          />

          {/** รูปห้อง2 */}
          <img
            src={room2}
            alt="room2"
            className="w-full h-[200px] sm:h-[220px] object-cover rounded-md "
          />
        </div>
      </div>

      {/** ตําแหน่งโรงแรม */}
      <div className="flex items-center gap-2  ">

        <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg"
          alt="location"
          className="w-7 h-7 sm:w-8 sm:h-8"
        />
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-medium text-[14px] sm:text-[16px]  hover:underline"
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

export default HaedRoomCard