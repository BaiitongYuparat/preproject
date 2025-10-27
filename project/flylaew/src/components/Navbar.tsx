export default function Navbar() {
  return (
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
        <p className="text-black hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
          ช่วยเหลือ
        </p>

        <button className="flex items-center gap-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400  hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 px-5 py-2.5 rounded-full font-medium transition-all duration-300  shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
          </svg>
          <span>ลงทะเบียน / เข้าสู่ระบบ</span>
        </button>
      </div>

    </nav>
  );
}
