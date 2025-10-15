import './App.css'
import Main from './components/Main'
import logo from './assets/logo.png'
import Bgimg from './assets/Bg.jpg'

function App() {
  return (
    <div className="min-h-screen w-full bg-yellow-50 flex flex-col">
      {/* Navbar */}
      <Main imageUrl={logo} />

      {/* ปก */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white shadow-lg"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="text-center z-10 p-4">
          <h2 className="text-white text-4xl sm:text-5xl font-semibold mb-3 drop-shadow-lg">
            อุ่นใจทุกการเดินทางกับ FlyLaew
          </h2>
          <p className="text-white text-lg sm:text-xl font-medium drop-shadow-md">
            ระบบการชำระเงินปลอดภัย วางใจได้ / ติดต่อจองง่ายใน 30 วินาที
          </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="relative -mt-16 z-20 flex justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-11/12 md:w-3/4 lg:w-2/3 flex flex-col gap-5">

          {/* แถวบน */}
          <div className="flex flex-wrap justify-center gap-3">
            <select className="border border-yellow-200 rounded-lg px-6 py-3 bg-yellow-300 text-black font-semibold shadow-sm">
              <option value="">เลือกที่จอง</option>
              <option value="flight">จองตั๋วเครื่องบิน</option>
              <option value="train">จองรถไฟ</option>
              <option value="hotel">จองโรงแรม</option>
            </select>

            <select className="border border-yellow-300 rounded-lg px-6 py-3 bg-yellow-300 text-black font-semibold shadow-sm">
              <option>ไป - กลับ</option>
              <option>เที่ยวเดียว</option>
            </select>

            <select className="border border-yellow-300 rounded-lg px-6 py-3 bg-yellow-300 text-black font-semiboldshadow-sm">
              <option>ชั้นประหยัด</option>
              <option>ชั้นธุรกิจ</option>
              <option>ชั้นหนึ่ง</option>
            </select>
          </div>

          {/* แถวล่าง */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2 text-gray-700">
            {/* ต้นทาง */}
            <div className="flex items-center border rounded-lg px-4 py-3 flex-grow min-w-[150px]" >
              <img src=" https://img.freepik.com/premium-vector/plane-icon-set-air-travel-vector-symbol-airplane-aeroplane-flat-sign-fly-airline-flight-icon-cargo-jet-pictogram-black-filled-outlined-style_268104-12297.jpg " alt="calendar icon" className="w-10 h-10 mr-2 opacity-100" />
              <input type="text" placeholder="ต้นทาง" className="w-full outline-none" />
            </div>

            {/* ปลายทาง */}
            <div className="flex items-center border rounded-lg px-4 py-3 flex-grow min-w-[150px]">
              <img src=" https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg" alt="calendar icon" className="w-10 h-10 mr-2 opacity-100" />
              <input type="text" placeholder="ปลายทาง " className="w-full outline-none" />
            </div>

            {/* ผู้โดยสาร */}
            <div className="flex items-center border rounded-lg px-4 py-3 min-w-[130px]">
              <img src="https://media.istockphoto.com/id/1221798775/th/เวคเตอร์/คนสีดําเงาไอคอนโลโก้การออกแบบแยก.jpg?s=612x612&w=0&k=20&c=wOiguPBZAADlB75VOLACchmOmpgee3gLk4--EuKacEI=" alt="calendar icon" className="w-10 h-10 mr-2 opacity-100" />
              <input type="text" placeholder="จำนวนคน" className="w-full outline-none" />
            </div>

            {/* ห้อง */}
            <div className="flex items-center border rounded-lg px-4 py-3 min-w-[100px]">
              <img src="https://static.vecteezy.com/system/resources/previews/005/883/500/non_2x/open-door-icon-line-icon-style-simple-design-editable-design-template-vector.jpg" alt="calendar icon" className="w-10 h-10 mr-2 opacity-100" />
              <input type="text" placeholder=" จำนวนห้อง" className="w-full outline-none" />
            </div>

            {/* วันไป */}
            <div className="flex items-center border rounded-lg px-4 py-3 min-w-[180px]">
              <img src="https://img.freepik.com/premium-vector/black-white-image-calendar-with-date-march_1186366-116804.https://img.freepik.com/vetores-premium/icone-de-calendario-simples-em-preto-e-branco_98396-107123.jpg" alt="calendar icon" className="w-7 h-7 mr-2 opacity-100" />
              <div className="flex flex-col w-full gap-1">
                <label className="text-sm text-gray-500 pl-1">วันไป</label>
                <input type="date" className="w-full outline-none text-gray-700 pl-1" />
              </div>
            </div>

            {/* วันกลับ */}
            <div className="flex items-center border rounded-lg px-4 py-3 min-w-[180px]">
              <img src="https://img.freepik.com/premium-vector/black-white-image-calendar-with-date-march_1186366-116804.https://img.freepik.com/vetores-premium/icone-de-calendario-simples-em-preto-e-branco_98396-107123.jpg" alt="calendar icon" className="w-7 h-7 mr-2 opacity-100" />
              <div className="flex flex-col w-full gap-1">
                <label className="text-sm text-gray-500 pl-1">วันกลับ</label>
                <input type="date" className="w-full outline-none text-gray-700 pl-1" />
              </div>
            </div>



            {/* ปุ่มค้นหา */}
            <div className="flex justify-center md:col-span-2 lg:col-span-4 mt-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-8 py-2 font-medium transition-all duration-200 shadow-md text-base">
                ค้นหา
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
