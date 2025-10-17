const RoomHotels = () => {
    return (
        <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 w-full shadow-xl flex items-center justify-between bg-yellow-50 py-4 px-6 z-50">
                {/* โลโก้ */}
                <div className="flex items-center space-x-3">
                    <img
                        src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
                        alt="logo"
                        className="w-40 h-auto object-contain"
                    />
                </div>
                {/* เมนูด้านขวา */}
                <div className="flex items-center space-x-6">
                    <p className="text-black hover:text-yellow-500 transition-all duration-200 cursor-pointer">
                        ช่วยเหลือ
                    </p>
                    <button className="text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium transition-all duration-200">
                        Baiitong
                    </button>
                </div>
            </nav>

            {/* เนื้อหาหลัก */}
            <div className="pt-28 w-full flex flex-col items-center">
                {/* แถบค้นหา */}
                <div className="bg-white w-[1300px] h-[90px] rounded-xl shadow-md flex items-center justify-between px-6">
                    <div className="flex items-center justify-between w-full text-[16px]">
                        {/* ที่พัก */}
                        <div className="flex flex-col text-gray-800 w-[18%]">
                            <p className="text-sm font-medium text-gray-500">ที่พัก</p>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>

                        {/* เช็คอิน */}
                        <div className="flex flex-col text-gray-800">
                            <p className="text-sm text-gray-500">เช็คอิน</p>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>

                        {/* เช็คเอาท์ */}
                        <div className="flex flex-col text-gray-800">
                            <p className="text-sm text-gray-500">เช็คเอาท์</p>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>

                        {/* ผู้เข้าพัก */}
                        <div className="flex flex-col text-gray-800">
                            <p className="text-sm text-gray-500">จำนวนคน</p>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>

                        {/* ห้อง */}
                        <div className="flex flex-col text-gray-800">
                            <p className="text-sm text-gray-500">ห้อง</p>
                        </div>

                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                            ค้นหา
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white w-[1300px] h-[800px] rounded-xl shadow-md m-6 flex items-center justify-between px-6">
                <div className="flex items-center  ">
                    <h3 className="font-medium text-black text-[18px]">
                        VELA Dhi Udon Thani
                    </h3>
                    {/* <p className="font-medium m-3 text-yellow-400 ">
                        ★★★★ 
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default RoomHotels