import React from "react";
import { Link } from "react-router-dom";


interface FlightsCardProps {
    id: string;
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
    id,
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
       <div className="bg-gradient-to-b from-white to-yellow-50  w-full max-w-3xl mx-auto mt-3 rounded-3xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8 py-5 border border-yellow-200 hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out">

  <div className="flex items-center mb-4 md:gap-4 gap-3 sm:mb-0 md:mr-10">
    <img src={flightimgeurl} alt="flightImage" className="w-12 h-12 sm:h-14 sm:w-14 object-cover rounded-full"/>
    <div className="text-left">
      <p className="text-black font-medium text-[14px] sm:text-[16px] truncate max-w-[120px] sm:max-w-[150px]">{flightname}</p>
      <p className="text-gray-600 font-medium text-[14px] sm:text-[15px]">{flightid}</p>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center text-center md:mr-5 gap-3 sm:gap-6 mb-4 md:mb-0 w-full sm:w-auto justify-between">
    <div>
      <p className="text-black font-medium text-[16px] sm:text-[18px]">{departuretime}</p>
      <p className="text-gray-600 font-medium text-[14px] sm:text-[15px]">{flightfrom}</p>
    </div>

    <div className="w-full sm:w-[120px] relative   mt-4 text-center">
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-gray-600 text-[10px] sm:text-[12px] truncate px-2">{flightduration}</span>
    </div>

    <div>
      <p className="text-black font-medium text-[16px] sm:text-[18px]">{landingtime}</p>
      <p className="text-gray-600 font-medium text-[14px] sm:text-[15px]">{flightto}</p>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center md:gap-4 gap-2 mt-3 md:mt-0">
    <p className="text-black font-medium ml-2 text-[18px] sm:text-[20px]">{flightprice.toLocaleString()}฿</p>
    <Link to={`/flighchoosethefare/${id}`}>
       <button className=" w-full py-2 rounded-full   text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400  transition-all duration-300 shadow-md hover:shadow-lg font-medium text-[14px] sm:text-[16px]">
                    เลือก
                </button>
    </Link>
  </div>

</div>

    );
}
export default FlightsCard