import React from "react";

interface InformationCardProps {
    imageUrl: string;
    thaiName: string;
    location: string;
    priceroom: string;
    nameroom: string;
    score: string;
    comments: string;
    explanation: string;

}

const InformationCard: React.FC<InformationCardProps> = ({
    imageUrl,
    thaiName,
    location,
    priceroom,
    nameroom,
    score,
    comments,
    explanation
}) => {
    return (
        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 border border-yellow-300 mt-3 rounded-3xl shadow-md flex flex-col items-start justify-between px-5 sm:px-8 py-5 hover:shadow-lg transition-all duration-300  ">

            {/* ส่วนบน: รูปและชื่อโรงแรม */}
            <div className="flex items-start gap-4">
                <img
                    src={imageUrl}
                    alt="hotelImage"
                    className=" w-[220px] h-[220px] sm:h-[240px] sm:w-[240px] object-cover rounded-md "
                />

                <div className="flex flex-col text-left justify-between">
                    <div>
                        <h2 className="text-[18px] sm:text-[20px] text-black font-medium">{thaiName}</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-yellow-300 text-gray-800 px-2 py-1 rounded-full font-medium text-[12px] sm:text-[16px]">
                                {score}
                            </span>
                            <span className="text-lg text-gray-700 font-medium text-[10px] sm:text-[16px] ">{comments}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2 font-medium text-[14px] sm:text-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* ข้อมูลห้องพัก */}
            <div className=" mt-5 text-left px-1">
                <h3 className="text-black font-medium text-[18px] sm:text-[20px] ">{nameroom}</h3>
                <p className="text-gray-700 mt-1">

                </p>
                <p className="text-gray-500 ">
                    {explanation}
                </p>
            </div>

            <div className="  w-[300px]  sm:w-[500px] border-t border-yellow-500 mt-5 relative "></div>

            {/* ราคา */}
            <div className="flex justify-between items-center w-full mt-2 px-7">
                <p className="text-black font-medium text-[20px] sm:text-[22px]">ราคา</p>
                <p className="text-black font-medium text-[20px] sm:text-[22px]">
                    {priceroom}฿
                </p>
            </div>
        </div>
    );
};

export default InformationCard;
