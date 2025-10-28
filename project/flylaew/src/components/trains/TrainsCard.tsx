import React from "react";

interface TrainsCardProps {

    trainprice: number // ราคาต่อคน
    trainduration: string // เวลาในการเดินทาง
    trainfrom: string // จาก
    trainto: string // ถึง
    departuretime: string // เวลาเดินทาง
    landingtime: string // เวลาถึง
}

const TrainsCard: React.FC<TrainsCardProps> = ({
    trainprice,
    trainduration,
    trainfrom,
    trainto,
    departuretime,
    landingtime
}) => {

    return(
        <div className="bg-white w-full  mt-3 rounded-3xl shadow-md flex  flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8  py-5  hover:shadow-lg  transition-all duration-300">
             {/* เวลา รถไฟไปและถึง */}
            <div className="flex items-center sm:flex-row flex-col  text-center  md:mr-10   sm:gap-6  mb-4 md:mb-0 gap-3">
                <div>
                    <p className="text-black font-medium text-[16px] sm:text-[18px]">{departuretime}</p>
                    <p className="text-gray-600 font-medium text-[14px] sm:text-[15px]">{trainfrom}</p>
                </div>

                <div className="  w-[100px] sm:w-[150px] border-t border-gray-300  relative "></div>

                <div>
                    <p className="text-black font-medium text-[16px] sm:text-[18px]">{landingtime}</p>
                    <p className="text-gray-600 font-medium  text-[14px] sm:text-[15px]">{trainto}</p>
                </div>
            </div>

            {/* เวลาในการเดินทาง */}
            <div className="flex items-center md:gap-4 px-5 ">
                <p className="text-gray-600 font-medium text-[14px] sm:text-[14px]">{trainduration}</p>
            </div>

   

            {/* ราคา */}
            <div className="flex items-center md:gap-4 gap-3">
                <p className="text-black font-medium ml-2 text-[18px] sm:text-[20px]   ">
                    {trainprice.toLocaleString()} ฿
                </p>
                <button className=" bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-md font-medium text-[14px] sm:text-[16px]">
                    เลือก
                </button>
            </div>
        </div>
    )
}

export default TrainsCard