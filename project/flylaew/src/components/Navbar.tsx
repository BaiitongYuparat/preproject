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
        <p className="text-black hover:text-yellow-500 transition">ช่วยเหลือ</p>
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium transition">
          ลงทะเบียน / เข้าสู่ระบบ
        </button>
      </div>
    </nav>
  );
}
