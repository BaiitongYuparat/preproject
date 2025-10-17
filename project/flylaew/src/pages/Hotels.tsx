


const Hotel = () => {
    

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

                {/* การ์ดโรงแรม */}
                <div className="bg-white w-[1300px] h-[300px] rounded-xl shadow-md flex items-start px-6 py-6 mt-10 hover:shadow-lg transition-all duration-300">
                    {/* รูปภาพโรงแรม 1 */}
                    <img
                        src="https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/trip/020151200093llyo7A833_R_550_412_R5.jpg"
                        alt="hotel1"
                        className="w-60 h-60 object-cover rounded-xl"
                    />
                    {/* รายละเอียดโรงแรม */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                        <div className="flex items-center justify-normal">
                            <h3 className="font-medium text-black text-[18px]">
                                VELA Dhi Udon Thani
                            </h3>
                            <p className="font-medium m-3 text-yellow-400 ">
                                ★★★★★
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <p className="font-medium  text-gray-500 ">
                                โรงแรมเวลาดี อุดรธานี
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <p className="font-medium text-white bg-yellow-400 ">
                                9.3/10
                            </p>
                            <p className="font-mediu m-3 text-gray-500">
                                ดีมาก
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg" alt="location" className="w-7 h-7" />
                            <p className="font-mediu text-gray-500">
                                ใกล้ UDON Day & Night Bar Complex
                            </p>
                        </div>
                        <div className="flex items-center justify-end">
                            <h3 className="font-medium  text-black text-[23px] ">
                                900 ฿
                            </h3>
                        </div>
                        <div className="flex items-center justify-end">
                            <p className="font-medium  text-gray-500 ">
                                ทังหมด (รวมภาษีและค่าธรรมเนียม)  2,490 ฿
                            </p>
                        </div>
                        <div className="flex items-center m-2 justify-end">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white ">
                                ดูห้องว่าง
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white w-[1300px] h-[300px] rounded-xl shadow-md flex items-start px-6 py-6 mt-6 hover:shadow-lg transition-all duration-300">
                    {/* รูปภาพโรงแรม 2 */}
                    <img
                        src="https://f.ptcdn.info/750/006/000/1372590392-IMG8148-o.jpg"
                        alt="hotel2"
                        className="w-60 h-60 object-cover rounded-xl "
                    />
                    {/* รายละเอียดโรงแรม */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                        <div className="flex items-center justify-normal">
                            <h3 className="font-medium text-black text-[18px]">
                                centara hotel
                            </h3>
                            <p className="font-medium m-3 text-yellow-400 ">
                                ★★★★★
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <p className="font-medium  text-gray-500 ">
                                เซ็นทารา อุดรธานี
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <p className="font-medium text-white bg-yellow-400 ">
                                9.3/10
                            </p>
                            <p className="font-mediu m-3 text-gray-500">
                                ดีมาก
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg" alt="location" className="w-7 h-7" />
                            <p className="font-mediu text-gray-500">
                                ใกล้ Centara Udon (&lt;100 เมตร)
                            </p>
                        </div>
                        <div className="flex items-center justify-end">
                            <h3 className="font-medium  text-black text-[23px] ">
                                1000 ฿
                            </h3>
                        </div>
                        <div className="flex items-center justify-end">
                            <p className="font-medium  text-gray-500 ">
                                ทังหมด (รวมภาษีและค่าธรรมเนียม)  2,890 ฿
                            </p>
                        </div>
                        <div className="flex items-center m-2 justify-end">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white ">
                                ดูห้องว่าง
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white w-[1300px] h-[300px] rounded-xl shadow-md flex items-start px-6 py-6 mt-6 hover:shadow-lg transition-all duration-300">
                    {/* รูปภาพโรงแรม 3 */}
                    <img
                        src="https://www.b2hotel.com/wp-content/uploads/2024/08/udonpremieroverview0.jpg"
                        alt="hotel3"
                        className="w-60 h-60 object-cover rounded-xl "
                    />
                    {/* รายละเอียดโรงแรม */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                        <div className="flex items-center justify-normal">
                            <h3 className="font-medium text-black text-[18px]">
                                B2 Udon Thani Boutique and Budget Hotel
                            </h3>
                            <p className="font-medium m-3 text-yellow-400 ">
                                ★★★
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <p className="font-medium  text-gray-500 ">
                                โรงแรม บีทู อุดร พรีเมียร์
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <p className="font-medium text-white bg-yellow-400 ">
                                7.7/10
                            </p>
                            <p className="font-mediu m-3 text-gray-500">
                                ดี
                            </p>
                        </div>
                        <div className="flex items-center justify-normal">
                            <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg" alt="location" className="w-7 h-7" />
                            <p className="font-mediu text-gray-500">
                                ใกล้ท่าอากาศยานนานาชาติอุดรธานี
                            </p>
                        </div>
                        <div className="flex items-center justify-end">
                            <h3 className="font-medium  text-black text-[23px] ">
                                770 ฿
                            </h3>
                        </div>
                        <div className="flex items-center justify-end">
                            <p className="font-medium  text-gray-500 ">
                                ทังหมด (รวมภาษีและค่าธรรมเนียม)  1,690 ฿
                            </p>
                        </div>
                        <div className="flex items-center m-2 justify-end">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white ">
                                ดูห้องว่าง
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;