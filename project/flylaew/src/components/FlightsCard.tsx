import React from "react";

interface FlightsCardProps {
    flightimgeurl: string; // รูปสายการบิน
    flightname: string; // ชื่อสายการบิน
    flightid: string; // flightIDสายการบิน
    flightprice: number; // ราคาสายการบิน
    flightduration: string; // ระยะเวลาการบิน
    flightfrom: string; // ต้นทาง
    flightto: string; // ปลายทาง
    departuretime: string; // เวลาเครื่องขึ้น
    landingtime: string; // เวลาเครื่องลง
}

const FlightsCard: React.FC<FlightsCardProps> = ({
    flightimgeurl,
    flightname,
    flightid,
    flightprice,
    flightduration,
    flightfrom,
    flightto,
    departuretime,
    landingtime
}) => {


    return (
        <div className="bg-white w-full  mt-3 rounded-3xl shadow-md flex  flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8  py-5  hover:shadow-lg  transition-all duration-300">

            {/** รูปสายการบิน ชื่อสายการบิน flightID*/}
            <div className="flex items-center mb-4 md:gap-4 gap-3  sm:mb-0  md:mr-10 ">
                <img
                    src={flightimgeurl}
                    alt="flightImage"
                    className="w-[45px] h-[45px] sm:h-[50px] sm:w-[50px] object-cover rounded-full  "
                />
                <div className="text-left">
                    <p className="text-black font-medium  text-[16px] sm:text-[18px]  ">{flightname}</p>
                    <p className="text-gray-600 font-medium  text-[14px] sm:text-[15px]  ">{flightid}</p>
                </div>
            </div>

            {/* เวลา เครื่องขึ้นและลง */}
            <div className="flex items-center sm:flex-row flex-col  text-center  md:mr-10   sm:gap-6  mb-4 md:mb-0 gap-3">
                <div>
                    <p className="text-black font-medium text-[16px] sm:text-[18px]">{departuretime}</p>
                    <p className="text-gray-600 font-medium text-[14px] sm:text-[15px]">{flightfrom}</p>
                </div>

                <div className="hidden  w-[100px] sm:w-[120px] border-t border-gray-300  relative ">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-gray-400 text-[12px] sm:text-[14px] bg-white px-2">
                        {flightduration}
                    </span>
                </div>

                <div>
                    <p className="text-black font-medium text-[16px] sm:text-[18px]">{landingtime}</p>
                    <p className="text-gray-600 font-medium  text-[14px] sm:text-[15px]">{flightto}</p>
                </div>
            </div>

            {/* ราคา */}
            <div className="flex items-center md:gap-4 gap-3">
                <p className="text-black font-medium ml-2 text-[18px] sm:text-[20px]   ">
                    {flightprice.toLocaleString()} ฿
                </p>
                <button className=" bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-md font-medium text-[14px] sm:text-[16px]">
                    เลือก
                </button>
            </div>
        </div>
    );
}
export default FlightsCard