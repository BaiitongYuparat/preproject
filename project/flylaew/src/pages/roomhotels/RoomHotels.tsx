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

            <div className="bg-white w-[1300px] h-[850px] rounded-xl shadow-md m-6 flex items-start justify-between  px-6 py-6">
                <div className="flex flex-col">

                    {/* ชื่อโรงแรมภาษาอังกฤษและดาว */}
                    <div className="flex items-center  mt-3">
                        <h3 className="font-medium text-black text-[24px] ">
                            VELA Dhi Udon Thani
                        </h3>
                        <p className="font-medium ml-3 text-yellow-400 ">
                            ★★★★★
                        </p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="font-medium text-gray-500 text-[16px]">
                            โรงแรมเวลาดี อุดรธานี
                        </p>
                    </div >
                    <div className="flex items-start justify-normal mt-3  ">
                        {/* รูปใหญ่ทางซ้าย */}
                        <img
                            src="https://ak-d.tripcdn.com/images/020151200093llyo7A833_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
                            alt="ht1"
                            className="w-[800px] h-[517px] rounded-sm object-cover"
                        />

                        {/* กล่องรูปเล็กทางขวา */}
                        <div className="flex flex-col ml-3">
                            <img
                                src="https://ak-d.tripcdn.com/images/0200f120009dpjhapC05A_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
                                alt="ht2"
                                className="w-[500px] h-[250px] mb-4 rounded-sm object-cover"
                            />
                            <img
                                src="https://ak-d.tripcdn.com/images/020331200093lsvj0832D_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
                                alt="ht3"
                                className="w-[500px] h-[250px]  rounded-sm object-cover"
                            />
                        </div>
                    </div>

                    {/** map */}
                    <div className="mt-3 text-left">
                        <div className="flex items-center justify-normal m-3">
                            <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg"
                                alt="location"
                                className="w-7 h-7" />
                            <a
                                href="https://maps.app.goo.gl/nMRYqGBbBFDwhWcUA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium  text-blue-600 hover:underline text-[16px]"
                            >
                                471 Adulyadej Road, Mak Khaeng, Udon Thani, 41000 อุดรธานี, ไทย
                            </a>
                        </div>
                    </div>

                    {/** ข้อความสิ่งอำนวยสะดวกด้านบน */}
                    <div className="mt-3 text-left">
                        <div className="flex items-center justify-normal m-3">
                            <h3 className="font-medium text-black underline text-[18px]">
                                สิ่งอํานวยความสะดวก
                            </h3>
                        </div>
                        <div className="flex items-center justify-normal m-3">
                            <p className="font-medium text-gray-950 text-[16px]">
                                ห้องนวด
                            </p>

                            <p className="font-medium text-gray-950 ml-20 text-[16px]">
                                ที่จอดรถส่วนตัวฟรี
                            </p>

                            <p className="font-medium text-gray-950 ml-20 text-[16px]">
                                สถานีชาร์จรถยนต์ไฟฟ้า
                            </p>


                            <p className="font-medium text-gray-950 ml-20 text-[16px]">
                                แผนกต้อนรับ 24 ชั่วโมง
                            </p>
                        </div>

                        {/** ข้อความสิ่งอำนวยสะดวกด้านล่าง */}
                        <div className="flex items-center justify-normal m-3">

                            <p className="font-medium text-gray-950  text-[16px]">
                                ที่เก็บสัมภาระ
                            </p>

                            <p className="font-medium text-gray-950 ml-20 text-[16px]">
                                บาร์
                            </p>

                            <p className="font-medium text-gray-950 ml-20 text-[16px]">
                                ร้านอาหาร
                            </p>


                            <p className="font-medium text-gray-950 ml-20 text-[16px]">
                                บริการจองแท็กซี่
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-[1000px] h-[380px] rounded-xl shadow-md m-6 flex items-start justify-between px-6 py-6">

                {/* รูปใหญ่ทางซ้าย */}
                <img
                    src="https://ak-d.tripcdn.com/images/0200l1200086p5zx526D3_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
                    alt="room1"
                    className="w-[500px] h-[330px] rounded-sm object-cover"
                />
                <div className="flex m-5  flex-col">
                    {/* กล่องข้อความ */}
                    <div className="flex items-center text-left mt-2 ">
                        <h3 className="font-medium text-black m-1  text-[20px]">
                            ห้องซูพีเรียร์ เตียงเดี่ยว 2 เตียง
                        </h3>
                    </div>
                    <div className="flex items-center  mt-2">
                        <p className="font-medium text-gray-600 m-1 text-[16px] leading-relaxed">
                            เตียงเดี่ยว 2 เตียง (กว้าง 1.1 ม.)
                        </p>
                    </div>

                    <div className="flex items-center  ">
                        <p className="font-medium text-red-400 m-1 underline  text-[14px] leading-relaxed">
                            ห้องพักประเภทนี้ไม่มีบริการเตียงเสริมและเตียงเด็กอ่อน
                        </p>
                    </div>

                    <div className="flex items-center m-5 mt-7 ">
                        <p className="font-medium text-black  text-[20px] bg-white border border-black  px-3 py-2">
                            ผู้ใหญ่ ฿ 600.00 ต่อคน/คืน
                        </p>
                    </div>
                    <div className="flex items-center m-6 text-right justify-end">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white ">
                            จอง
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white w-[1000px] h-[400px] rounded-xl shadow-md m-1 flex items-start justify-between  px-6 py-6">

                {/* รูปใหญ่ทางซ้าย */}
                <img
                    src="https://ak-d.tripcdn.com/images/0201l12000882c0cv7888_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
                    alt="room1"
                    className="w-[500px] h-[330px] rounded-sm object-cover"
                />
                <div className="flex m-5  flex-col">
                    {/* กล่องข้อความ */}
                    <div className="flex items-center text-left mt-2 ">
                        <h3 className="font-medium text-black m-1  text-[20px]">
                            ห้องซูพีเรียร์ เตียงคิง
                        </h3>
                    </div>
                    <div className="flex items-center  mt-2">
                        <p className="font-medium text-gray-600 m-1 text-[16px] leading-relaxed">
                            เตียงคิงไซส์ 1 เตียง(กว้าง 1.82ม.)
                        </p>
                    </div>

                    <div className="flex items-center  ">
                        <p className="font-medium text-red-400 m-1 underline  text-[14px] leading-relaxed">
                            ห้องพักประเภทนี้ไม่มีบริการเตียงเสริมและเตียงเด็กอ่อน
                        </p>
                    </div>

                    <div className="flex items-center m-5 mt-7 ">
                        <p className="font-medium text-black  text-[20px] bg-white border border-black  px-3 py-2">
                            ผู้ใหญ่ ฿ 990.00 ต่อคน/คืน
                        </p>
                    </div>
                    <div className="flex items-center m-6 text-right justify-end">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white ">
                            จอง
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RoomHotels