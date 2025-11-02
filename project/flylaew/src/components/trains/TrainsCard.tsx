import React from "react";
import { Link } from "react-router-dom";

interface TrainsCardProps {
id: string
    trainprice: number // ราคาต่อคน
    trainduration: string // เวลาในการเดินทาง
    trainfrom: string // จาก
    trainto: string // ถึง
    departuretime: string // เวลาเดินทาง
    landingtime: string // เวลาถึง
}

const TrainsCard: React.FC<TrainsCardProps> = ({
    id,
    trainprice,
    trainduration,
    trainfrom,
    trainto,
    departuretime,
    landingtime
}) => {

    return(
        <div className="bg-gradient-to-b from-white to-yellow-50  w-full  mt-3 rounded-3xl shadow-md flex  flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8  py-5  hover:shadow-lg   border border-yellow-200  hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out  ">
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
                    {trainprice.toLocaleString()}฿
                </p>
                <Link to={`/trainschoosethefare/${id}`}>
               <button className=" w-full py-2 rounded-full   text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400  transition-all duration-300 shadow-md hover:shadow-lg font-medium text-[14px] sm:text-[16px]">
                    เลือก
                </button>
                </Link>
                
            </div>
        </div>
    )
}

export default TrainsCard