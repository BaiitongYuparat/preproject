import React from "react";

export interface RoomHotelsCardProps {
    name: string; // ชื่อโรงแรมอังกฤษ
    thaiName: string; // ชื่อโรงแรมภาษาไทย
    rating: string; // ดาว
    comment: string; // ความคิดเห็น 
    images: string[]; // รูป โรงแรม
    location: string; // แผนที่
    facilities: string[]; // สิ่งอํานวยความสะดวก

    // ห้อง
    rooms: {
        roomName: string; // ชื่อห้อง
        bedInfo: string; // ข้อมูลเตียง
        noExtraBed: boolean; // ไม่มีเตียงเพิ่ม
        pricePerPerson: number; // ราคาต่อคน
        roomImage: string; // รูปห้อง
    }[]; 
}

const RoomHotelsCard: React.FC<RoomHotelsCardProps> = ({
    name,
    thaiName,
    rating,
    comment,
    images,
    location,
    facilities,
    rooms,
}) => {
    return (
        <div className="bg-yellow-50  w-[100%] py-6 px-8 flex flex-col items-center">
            {/* ส่วนข้อมูลโรงแรม */}
            <div className="bg-white rounded-xl shadow-md w-[1100px] p-6">
                {/* หัวข้อโรงแรม */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-black flex items-center">
                        {name}
                    </h3>
                    <p className="text-[18px] font-semibold text-gray-500 flex items-center">
                        {thaiName}
                    </p>
                    <p className="text-yellow-400 text-sm text-left mt-1">
                        {rating} <span className="ml-1 text-gray-400">{comment}</span>
                    </p>
                </div>

                {/* ภาพโรงแรม */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <img
                        src={images[0]}
                        alt={name}
                        className="col-span-2  object-cover rounded-lg"
                    />
                    <div className="flex flex-col  gap-3">
                        {images.slice(1, 3).map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${name}-${idx + 1}`}
                                className="w-[400px]  object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center mb-4">
                    <img
                        src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg"
                        alt="location"
                        className="w-5 h-5 mr-2"
                    />
                    <p className="text-blue-700 underline text-sm">{location}</p>
                </div>

                {/* สิ่งอำนวยความสะดวก */}
                <div>
                    <h4 className="font-medium text-left text-gray-800 underline mb-2">
                        สิ่งอำนวยความสะดวก
                    </h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 text-sm">
                        {facilities.map((fac, idx) => (
                            <p key={idx}>• {fac}</p>
                        ))}
                    </div>
                </div>

                {/* คำอธิบาย */}
                <div className="mt-4 text-left text-gray-950 text-sm">
                    <p> โรงแรมสะอาด เดินทางสะดวก มีอาหารเช้าให้ด้วย</p>
                </div>
            </div>

            {/* ส่วนของห้องพัก */}
            <div className="mt-6 w-[90%] flex flex-col gap-5">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md flex flex-col md:flex-row p-5"
                    >
                        <img
                            src={room.roomImage}
                            alt={room.roomName}
                            className="w-full md:w-[45%] h-[250px] md:h-[230px] object-cover rounded-lg"
                        />

                        <div className="flex flex-col justify-between  md:ml-6 mt-4 md:mt-0 w-full">
                            <div>
                                <h3 className="font-semibold text-gray-800 text-lg">
                                    {room.roomName}
                                </h3>
                                <p className="text-gray-600 mt-1 text-sm">{room.bedInfo}</p>
                                {room.noExtraBed && (
                                    <p className="text-red-500 text-xs mt-1 underline">
                                        ห้องพักประเภทนี้ไม่มีบริการเตียงเสริมและเตียงเด็กอ่อน
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center    mx-auto">
                                   <p className="border border-gray-400 px-3 py-1 rounded text-gray-800 text-sm">
                                    ผู้ใหญ่ ฿{room.pricePerPerson.toFixed(2)} ต่อคน/คืน
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-end mt-3">
                             
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 mt-3 md:mt-0 rounded-md font-medium">
                                    จอง
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomHotelsCard;
