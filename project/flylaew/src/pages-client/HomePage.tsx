import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { VscSearch } from "react-icons/vsc";
// import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState('');
  const [form, setForm] = useState({
    from: "",
    to: "",
    passengers: "",
    rooms: "",
    departDate: "",
    returnDate: "",
  });

  // const banner = [
  //   "https://i.pinimg.com/736x/0a/07/7b/0a077bdd82a51cc0b5eeecba6467f738.jpg",
  //   "https://i.pinimg.com/1200x/e0/6c/7f/e06c7feb1a4699675fb4a105060c0e57.jpg",
  //   "https://i.pinimg.com/1200x/df/7b/e0/df7be0b19829c9df22664ff8ec241b9b.jpg"
  // ]

  // const [currentBanner, setCurrentBanner] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBanner((prev) => (prev + 1) % banner.length);
  //   }, 600000); 

  //   return () => clearInterval(interval); 
  // }, []);


  const handleSearch = () => {
    if (!bookingType) return;

    // ส่งค่า form ไปหน้าเป้าหมาย
    if (bookingType === "hotels") {
      navigate("/hotels", { state: form });
    } else if (bookingType === "flights") {
      navigate("/flights", { state: form });
    } else if (bookingType === "trains") {
      navigate("/trains", { state: form });
    } else if (bookingType === "combo") {
      navigate("/combo", { state: form });
    }
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* ส่วนปก */}
      <div className="relative w-full max-w-[1200px] h-[700px] sm:h-[800px] md:h-[600px] lg:h-[700px] flex items-center justify-center mx-auto mt-20 px-4">
        <img
          src="https://i.pinimg.com/1200x/cf/1d/b8/cf1db89fc8b650f69258258cb3423655.jpg"
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

        {/* กล่องค้นหา */}
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
              <option value="combo">โรงแรม + เที่ยวบิน</option>
            </select>

            <select className="bg-yellow-200 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>ไป - กลับ</option>
              <option>เที่ยวเดียว</option>
            </select>

            <select className="bg-yellow-200 text-black px-4 py-2 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>ชั้นประหยัด</option>
              <option>ชั้นธุรกิจ</option>
              <option>เฟิร์สคลาส</option>
            </select>
          </div>

          {/* แถว input */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
            {/* ต้นทาง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">ต้นทาง</p>
              <input
                type="text"
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                className="bg-yellow-100 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* ปลายทาง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">ปลายทาง</p>
              <input
                type="text"
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
                className="bg-yellow-100 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* จำนวนผู้โดยสาร */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">จำนวนผู้โดยสาร</p>
              <select className="bg-yellow-100 text-black px-4 py-2 rounded-full  font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* จำนวนห้อง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">จำนวนห้อง</p>
              <select className="bg-yellow-100 text-black px-4 py-2 rounded-full  font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
                {Array.from({ length: 100 }, (_, i) => (
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
    </div>
  );
};

export default Home;
