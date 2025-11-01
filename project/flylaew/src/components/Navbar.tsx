import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Navbar() {
  const [showpopup, setShowpopup] = useState(false);

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

      {/* เมนูหลัก */}
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300 hover:underline"
        >
          หน้าหลัก
        </Link>
        <Link
          to="/hotels"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300 hover:underline"
        >
          โรงแรม
        </Link>
        <Link
          to="/flights"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300 hover:underline"
        >
          เที่ยวบิน
        </Link>
        <Link
          to="/trains"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300 hover:underline"
        >
          รถไฟ
        </Link>
        <Link
          to="/combo"
          className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300 hover:underline"
        >
          รถไฟ+เที่ยวบิน
        </Link>
      </div>

      {/* เมนูด้านขวา */}
      <div className="flex items-center space-x-6 pr-6">
        <div className="relative">
          <p
            onClick={() => setShowpopup(true)}
            className="text-yellow-500 hover:text-amber-600 transition-colors duration-300 cursor-pointer"
          >
            ช่วยเหลือ
          </p>
          
          {showpopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center relative">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  ติดต่อเรา
                </h2>

                <p className="text-gray-600 flex items-center justify-center gap-2 mb-2">
                  <LuPhoneCall className="text-yellow-500" />
                  <a
                    href="tel:0999999999"
                    className="text-gray-600 hover:text-black hover:underline"
                  >
                    099-999-9999
                  </a>
                </p>

                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <MdOutlineMailOutline className="text-yellow-500" />
                  <a
                    href="mailto:flylaew@exmile.com"
                    className="text-gray-600 hover:text-black hover:underline"
                  >
                    flylaew@exmile.com
                  </a>
                </p>

                <button
                  onClick={() => setShowpopup(false)}
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
                >
                  ปิด
                </button>
              </div>
            </div>
          )}
        </div>

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
