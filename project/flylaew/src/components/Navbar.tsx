import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  const menuItems = [
    { path: "/hotels", label: "โรงแรม" },
    { path: "/flights", label: "เที่ยวบิน" },
    { path: "/trains", label: "รถไฟ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-yellow-50 shadow-xl z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* โลโก้ + เมนูหลัก (Desktop) */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
              alt="logo"
              className="w-36 md:w-44 h-auto object-contain cursor-pointer"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 ml-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-yellow-500 hover:text-amber-600 font-medium transition-colors duration-300 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* เมนูด้านขวา (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <p
            onClick={() => setShowPopup(true)}
            className="text-yellow-500 hover:text-amber-600 transition-colors duration-300 cursor-pointer"
          >
            ช่วยเหลือ
          </p>

          {!username ? (
            <Link to="/login">
              <button className="flex items-center gap-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
                <VscAccount />
                <span>ลงทะเบียน / เข้าสู่ระบบ</span>
              </button>
            </Link>
          ) : (
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-yellow-400/40">
              <VscAccount className="text-yellow-300 text-2xl drop-shadow-[0_0_4px_rgba(255,215,0,0.5)]" />
              <span className="text-yellow-400 font-semibold tracking-wide">{username}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 px-4 py-1.5 rounded-full font-medium shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
              >
                ออกจากระบบ
              </button>
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-yellow-600 w-7 h-7" />
            ) : (
              <FiMenu className="text-yellow-600 w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* เมนู Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-yellow-100 border-t border-yellow-200 shadow-inner flex flex-col space-y-3 py-4 px-6 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-yellow-700 hover:text-amber-600 font-medium transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <hr className="border-yellow-300 my-2" />

          <p
            onClick={() => {
              setShowPopup(true);
              setMenuOpen(false);
            }}
            className="text-yellow-700 hover:text-amber-600 font-medium cursor-pointer"
          >
            ช่วยเหลือ
          </p>

          {!username ? (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full flex justify-center items-center gap-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
                <VscAccount />
                <span>ลงทะเบียน / เข้าสู่ระบบ</span>
              </button>
            </Link>
          ) : (
            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl shadow-md border border-yellow-400/40">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 px-4 py-1.5 rounded-full font-medium shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
              >
                ออกจากระบบ
              </button>
            </div>
          )}
        </div>
      )}

      {/* Popup ช่วยเหลือ */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">ติดต่อเรา</h2>
            <p className="text-gray-600 flex items-center justify-center gap-2 mb-2">
              <LuPhoneCall className="text-yellow-500" />
              <a href="tel:0999999999" className="text-gray-600 hover:text-black hover:underline">
                099-999-9999
              </a>
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <MdOutlineMailOutline className="text-yellow-500" />
              <a href="mailto:flylaew@exmile.com" className="text-gray-600 hover:text-black hover:underline">
                flylaew@exmile.com
              </a>
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
