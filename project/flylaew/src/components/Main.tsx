import React from "react";

interface MainProps {
  imageUrl: string;
  name: string;
}

const Main: React.FC<MainProps> = ({ imageUrl, }) => {
  return (
    <nav className="bg-yellow-50 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* โลโก้ */}
          <div className="flex items-center space-x-3">
            <img
              src={imageUrl}
              alt="FlyLaew Logo"
              className="h-20 object-contain"
            />
          
          </div>

          {/* ช่วยเหลือ + เข้าสู่ระบบ/สมัคร */}
          <div className="flex items-center space-x-4">
            <p className="text-black hover:text-yellow-600">
              ช่วยเหลือ
            </p>
            <button className="bg-yellow-300 hover:bg-yellow-00 text-white font-medium px-4 py-2 rounded-lg">
              ลงทะเบียน / เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Main;
