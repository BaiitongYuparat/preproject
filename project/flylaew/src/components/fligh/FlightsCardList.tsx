// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import HotelsCard from "./FlightsCard";


// interface Flights {
//     id: string;
//     flightimgeurl: string; // รูปสายการบิน
//     flightname: string; // ชื่อสายการบิน
//     flightid: string; // flightIDสายการบิน
//     flightprice: number; // ราคาสายการบิน
//     flightduration: string; // ระยะเวลาการบิน
//     flightfrom: string; // ต้นทาง
//     flightto: string; // ปลายทาง
//     departuretime: string; // เวลาเครื่องขึ้น
//     landingtime: string; // เวลาเครื่องลง
// }

// const HotelsList: React.FC = () => {

//     const [Flights, setFlights] = useState<Flights[]>([]); 
//     const [loading, setLoading] = useState(true); //สถานะการโหลดข้อมูล

//     useEffect(() => {
//         const fetchHotels = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get<Flights[]>("/FlightsData.json");
//                 console.log(response.data);
//                 setFlights(response.data);
//             }
//             catch (error: unknown) {
//                 console.log("Error fetching hotels:", error);
//             }
//             finally {
//                 setLoading(false);
//             }
//         };
//         fetchHotels();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <p className="text-gray-600 text-lg">กำลังโหลดข้อมูลเที่ยวบิน...</p>
//             </div>
//         );
//     }

//     return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 p-16 justify-items-center ">
//         {Flights.map((flight) => ( 
//             <HotelsCard
//                 key={flight.id}
//                 id={flight.id}  
//                 flightimgeurl={flight.flightimgeurl}
//                 flightname={flight.flightname}
//                 flightid={flight.flightid}
//                 flightprice={flight.flightprice}
//                 flightduration={flight.flightduration}
//                 flightfrom={flight.flightfrom}
//                 flightto={flight.flightto}
//                 departuretime={flight.departuretime}
//                 landingtime={flight.landingtime}
//             />
//         ))}
//     </div>
// )

// }
// export default HotelsList