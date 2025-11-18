import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { VscSearch } from "react-icons/vsc";



const Home = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway");

  const [bookingType, setBookingType] = useState('');
  const [form, setForm] = useState({
    from: "",
    to: "",
    passengers: "",
    rooms: "",
    departDate: "",
    returnDate: "",
  });

  const handleSearch = () => {
    if (!bookingType) {
      alert("กรุณาเลือกประเภทการจองก่อน");
      return;
    }
  

    if (bookingType === "hotels") {
      navigate("/hotels", { state: form });
      return;
    }

    if (bookingType === "trains") {
      navigate("/trains", { state: form });
      return;
    }

    if (bookingType === "flights") {
      navigate("/flights", { state: form });
      return;
    }
  };


  return (
     <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
      <Navbar />

      {/* ส่วนปก */}
      <div className="relative w-full max-w-[1200px] h-[700px] sm:h-[800px] md:h-[600px] lg:h-[700px] flex items-center justify-center mx-auto mt-20 px-4">
        <img
          src="https://i.pinimg.com/1200x/90/ff/b9/90ffb9b1b163b494575538e05a209f21.jpg"
          alt="hero"
          className="w-full h-full object-cover shadow-lg rounded-2xl"
        />


        <div className="absolute text-center text-white z-10">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-md">
            อุ่นใจทุกการเดินทางกับ FlyLaew
          </h1>
          <p className="mt-2 text-sm md:text-base">
            ระบบการชำระเงินปลอดภัยวางใจได้ / ติดต่อได้ง่ายใน 30 วินาที
          </p>
        </div>


        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-3rem] backdrop-blur-lg bg-white/50 md:w-4/5 shadow-2xl w-[95%] rounded-3xl p-8 flex flex-col space-y-4 z-20 text-center border border-yellow-100">
          {/* แถว select */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <select
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
              className="bg-yellow-200 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">เลือกที่จอง</option>
              <option value="hotels">โรงแรม</option>
              <option value="flights">เที่ยวบิน</option>
              <option value="trains">รถไฟ</option>

            </select>

            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="bg-yellow-200 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="oneway">เที่ยวเดียว</option>
              <option value="roundtrip">ไป - กลับ</option>
            </select>

            <select className="bg-yellow-200 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>ชั้นประหยัด</option>
              <option>ชั้นธุรกิจ</option>
              <option>เฟิร์สคลาส</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
            {/* ต้นทาง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">ต้นทาง</p>
              <select
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                className="bg-yellow-100 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">เลือกต้นทาง</option>
                <option value="อุดรธานี">อุดรธานี</option>
                <option value="กรุงเทพ">กรุงเทพ</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
              </select>
            </div>

            {/* ปลายทาง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">ปลายทาง</p>
              <select
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
                className="bg-yellow-100 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">เลือกปลายทาง</option>
                <option value="กรุงเทพ">กรุงเทพ</option>
                <option value="อุดรธานี">อุดรธานี</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
              </select>
            </div>


            {/* จำนวนผู้โดยสาร */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">จำนวนผู้โดยสาร</p>
              <select className="bg-yellow-100 text-black px-4 py-2 rounded-full  font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* จำนวนห้อง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">จำนวนห้อง</p>
              <select className="bg-yellow-100 text-black px-4 py-2 rounded-full  font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* วันที่ไป */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">วันที่ไป</p>

              <input

                type="date"
                value={form.departDate}
                onChange={(e) => setForm({ ...form, departDate: e.target.value })}
                className="bg-yellow-100 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* วันที่กลับ */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">วันที่กลับ</p>
              <input
                type="date"
                value={form.returnDate}
                onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                className="bg-yellow-100 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* ปุ่มค้นหา */}
            <div className="col-span-full flex justify-center mt-4">
              <button
                onClick={handleSearch}
                className=" h-[40px] bg-gradient-to-r from-yellow-400  via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 text-white px-8 py-5 rounded-full font-medium flex items-center justify-center gap-2 shadow-sm hover:shadow-lg transition-all duration-300 "
              >
                <VscSearch />
                ค้นหา
              </button>
            </div>
          </div>
        </div>
      </div>


      <p className="font-medium text-black mt-40 text-[20px] sm:text-[24px] ">
        สถานที่ท่องเที่ยวแนะนำ
      </p>

      <div className="w-full max-w-[1020px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 ">
        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/max500/571234848.jpg?k=c8a6f535b487067871c5ac6021009857f855bb48196aca1c5e6c7c2736aeff39&o="
            alt="krabe"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-bold">หาดอ่าวนาง</h1>
            <h2 className="text-gray-600 mt-1">กระบี่</h2>
          </div>
        </div>


        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
          <img
            src="https://www.charnveeresortkhaoyai.com/wp-content/uploads/2022/12/Rancho-Aug-1-3.jpg.webp"
            alt="mai"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-bold">อุทยานแห่งชาติดอยสุเทพ-ปุย</h1>
            <h2 className="text-gray-600 mt-1">เชียงใหม่</h2>
          </div>
        </div>


        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
          <img
            src="https://www.charnveeresortkhaoyai.com/wp-content/uploads/2022/12/Rancho-Aug-1-7.jpg.webp"
            alt="kan"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-bold">ภูทับเบิก</h1>
            <h2 className="text-gray-600 mt-1">จังหวัดเพชรบูรณ์ </h2>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
