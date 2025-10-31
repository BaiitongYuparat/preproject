import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 w-full shadow-xl flex items-center justify-between bg-yellow-50 py-4 z-50">
      {/* โลโก้ */}
      <div className="flex items-center space-x-3 pl-6">
        <img
          src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
          alt="logo"
          className="w-40 h-auto object-contain cursor-pointer"
        />
      </div>
      <div className="flex items-center  space-x-8">
        <Link
          to="/"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300"
        >
          หน้าหลัก
        </Link>
        <Link
          to="/hotels"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300"
        >
          โรงแรม
        </Link>
        <Link
          to="/flights"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300"
        >
          เที่ยวบิน
        </Link>
        <Link
          to="/trains"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300"
        >
          รถไฟ
        </Link>
        <Link
          to="/combo"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300"
        >
          รถไฟ+เที่ยวบิน
        </Link>
      </div>

      {/* เมนูด้านขวา */}
      <div className="flex items-center space-x-6 pr-6">
        <p className="text-yellow-500 hover:text-amber-600 transition-colors duration-300 cursor-pointer">
          ช่วยเหลือ
        </p>
        <Link to="/login">
          <button className="flex items-center gap-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
            <VscAccount />
            <span>ลงทะเบียน / เข้าสู่ระบบ</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
