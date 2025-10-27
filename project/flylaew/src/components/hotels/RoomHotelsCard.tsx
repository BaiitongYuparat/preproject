import React from "react";

interface RoomHotelsCardProps {
    
    imageUrl: string; //รูปห้อง
    nameroom: string; //ชื่อห้อง
    explanation: string; //คําอธิบาย
    price: string; //ราคา

}

const RoomHotelsCard: React.FC<RoomHotelsCardProps> = ({
    imageUrl,
    nameroom,
    explanation,
    price,
}) => {
    return (
       <div className="bg-gradient-to-b from-yellow-100   to-yellow-50 border  border-yellow-100  mt-3 rounded-3xl shadow-md flex  flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8  py-5  hover:shadow-lg  transition-all duration-300">

            <img
                src={imageUrl}
                alt="roomhotelImage"
                className=" w-[250px] h-[250px] sm:h-[280px] sm:w-[280px] object-cover rounded-md "
            />

            {/* รายละเอียดโรงแรม */}
            <div className="flex-1 md:ml-6 mt-4 md:mt-0 w-full  text-left">
                <div className="flex flex-wrap items-center  justify-between md:justify-start">
                    <p className="text-black font-medium  text-[18px] sm:text-[20px] ">{nameroom}</p>
                </div>
                <p className="text-gray-600 font-medium  text-[12px] sm:text-[14px]  ">{explanation}</p>
            </div>

            {/* ราคา */}
            <div className="flex items-center md:gap-4 gap-3">
                <p className="text-black font-medium ml-8 text-[20px] sm:text-[22px]   ">
                    {price}฿
                </p>
                <button className=" bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-md font-medium text-[14px] sm:text-[16px]">
                    เลือก
                </button>
            </div>


        </div>

    )
}
export default RoomHotelsCard