const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full shadow-xl flex items-center justify-between bg-yellow-50 py-4 z-50">
        {/* โลโก้ */}
        <div className="flex items-center space-x-3 pl-6">
          <img
            src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
            alt="logo"
            className="w-40 h-auto object-contain"
          />
        </div>

        {/* เมนูด้านขวา */}
        <div className="flex items-center space-x-6 pr-6">
          <p className="text-black hover:text-yellow-500 transition">ช่วยเหลือ</p>
          <button className="text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium transition">
            ลงทะเบียน / เข้าสู่ระบบ
          </button>
        </div>
      </nav>

      {/* ส่วนปก */}
      <div className="relative w-[1200px] h-[700px] flex items-center justify-center mx-auto mt-20">
        {/* รูปพื้นหลัง */}
        <img
          src="https://i.pinimg.com/1200x/ef/3c/81/ef3c8175242b7cb1368be14fe7d619a1.jpg"
          alt="hero"
          className="w-full h-full object-cover shadow-sm rounded-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>

        {/* ข้อความบนภาพ */}
        <div className="absolute text-center text-white z-10">
          <h1 className="text-2xl md:text-4xl font-semibold drop-shadow-md">
            อุ่นใจทุกการเดินทางกับ FlyLaew
          </h1>
          <p className="mt-2 text-sm md:text-base">
            ระบบการชำระเงินปลอดภัยวางใจได้ / ติดต่อได้ง่ายใน 30 วินาที
          </p>
        </div>

        {/* กล่องค้นหา */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-3rem] bg-white w-11/12 md:w-4/5 shadow-lg rounded-2xl p-6 flex flex-col space-y-4 z-20 text-center">
          {/* แถว select */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <select className="bg-yellow-200 text-black px-4 py-2 rounded-t-md font-medium cursor-pointer focus:outline-none">
              <option>เลือกที่จอง</option>
              <option>โรงแรม</option>
              <option>เที่ยวบิน</option>
              <option>รถไฟ</option>
              <option>โรงแรม + เที่ยวบิน</option>
            </select>

            <select className="bg-yellow-200 text-black px-4 py-2 rounded-t-md font-medium cursor-pointer focus:outline-none">
              <option>ไป - กลับ</option>
              <option>เที่ยวเดียว</option>
            </select>

            <select className="bg-yellow-200 text-black px-4 py-2 rounded-t-md font-medium cursor-pointer focus:outline-none">
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
                className="bg-yellow-200 text-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* ปลายทาง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">ปลายทาง</p>
              <input
                type="text"
                className="bg-yellow-200 text-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* จำนวนผู้โดยสาร */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">จำนวนผู้โดยสาร</p>
              <input
                type="text"
                className="bg-yellow-200 text-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* จำนวนห้อง */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">จำนวนห้อง</p>
              <input
                type="text"
                  
                className="bg-yellow-200 text-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* วันที่ไป */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">วันที่ไป</p>
              <input
                type="date"
                className="bg-yellow-200 text-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* วันที่กลับ */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <p className="text-gray-500 text-sm mb-1 text-left">วันที่กลับ</p>
              <input
                type="date"
                className="bg-yellow-200 text-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* ปุ่มค้นหา */}
            <div className="col-span-full flex justify-center mt-3">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2">
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
