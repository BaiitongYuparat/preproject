const Information = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 w-full shadow-xl flex items-center justify-between bg-yellow-50 py-4 z-50">
                {/* โลโก้ */}
                <div className="flex items-center space-x-3 pl-6">
                    <img
                        src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
                        alt="logo"
                        className="w-40 h-auto object-contain"
                    />

                    <div className="flex items-center space-x-3 pl-6">
                        <p className="text-yellow-400 hover:text-yellow-600 transition">
                            เลือกโรงแรม
                        </p>
                        <p className="text-gray-400 transition">/</p>
                        <p className="text-black hover:text-gray-300 underline transition">
                            กรอกรายละเอียด
                        </p>
                    </div>
                </div>

                {/* เมนูด้านขวา */}
                <div className="flex items-center space-x-6 pr-6">
                    <p className="text-black hover:text-yellow-500 transition">
                        ช่วยเหลือ
                    </p>
                    <button className="text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium transition">
                        Baiitong
                    </button>
                </div>
            </nav>

            {/* เนื้อหา */}
            <div className="flex justify-between w-[1300px] mt-32 mx-auto space-x-6">
                {/* ฝั่งซ้าย - ฟอร์ม */}
                <div className="flex flex-col w-[55%] space-y-6">
                    {/* ข้อมูลผู้เข้าพัก */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-6">
                        <h2 className="text-lg text-left font-medium mb-4 text-gray-800">
                            ข้อมูลผู้เข้าพัก
                        </h2>

                        <p className="text-left text-gray-500 text-[13px] mb-4">
                            ชื่อผู้เข้าพักต้องตรงกับเอกสารประจำตัวที่ใช้เมื่อเช็คอิน
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="ชื่อ"
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                            />
                            <input
                                type="text"
                                placeholder="นามสกุล"
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                    </div>

                    {/* ข้อมูลติดต่อ */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-6">
                        <h2 className="text-lg text-left font-medium mb-4 text-gray-800">
                            ข้อมูลติดต่อ
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="อีเมล"
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                            />
                            <input
                                type="text"
                                placeholder="เบอร์โทรศัพท์"
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                        <p className="text-left text-gray-500 text-[13px] mt-2">
                            เราจะส่งอีเมลยืนยันการจองไปที่อีเมลนี้
                        </p>
                    </div>

                    {/* รหัสโปรโมชั่น */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-6">
                        <h2 className="text-lg text-left font-medium mb-4 text-gray-800">
                            รหัสโปรโมชั่น
                        </h2>
                        <input
                            type="text"
                            placeholder="กรอกรหัสโปรโมชั่น (ถ้ามี)"
                            className="border border-black rounded-md px-3 py-2 w-full focus:outline-none focus:border-yellow-400"
                        />
                    </div>

                    {/* วิธีการชำระเงิน */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-6">
                        <h2 className="text-lg text-left font-semibold mb-4 text-gray-800">
                            คุณต้องการชำระเงินด้วยวิธีใด?
                        </h2>

                        <div className="space-y-3">
                            {/* บัตรเครดิต/เดบิต */}
                            <label className="flex items-center space-x-2 text-gray-700">
                                <input type="radio"
                                    name="payment"
                                    className="accent-yellow-500"
                                    defaultChecked />
                                <span>บัตรเครดิต/เดบิต</span>
                            </label>

                            <div className="grid grid-cols-2 gap-4 pl-6">
                                <input
                                    type="text"
                                    placeholder="หมายเลขบัตร"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                                />
                                <input
                                    type="text"
                                    placeholder="ชื่อบนบัตร"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 pl-6 mt-3">
                                <input
                                    type="text"
                                    placeholder="วันหมดอายุ (MM/YY)"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* วิธีการชำระเงินอื่นๆ */}
                            <div className="mt-4">
                                <label className="flex items-center space-x-2 text-gray-700">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-yellow-500"
                                    />
                                    <span className="font-medium">วิธีการชำระเงินอื่นๆ</span>
                                </label>

                                <div className="flex items-center space-x-3 mt-3 pl-8">
                                    <img
                                        src="https://contents.bu.ac.th/contents/images/mous/a23671bb-79fb-4d40-bc00-fc3060fce6d0.jpg"
                                        alt="promptpay"
                                        className="h-10 w-10 object-contain rounded-lg shadow-sm"
                                    />
                                    <img
                                        src="https://cdn.marketingoops.com/wp-content/uploads/2018/10/Logo-new-K-PLUS.jpg"
                                        alt="kplus"
                                        className="h-10 w-10 object-contain rounded-lg shadow-sm"
                                    />
                                    <img
                                        src="https://cdn.prod.website-files.com/65e210a414fae2cb8054a9b4/6789cc7973863d34426baf54_678316f2a65ae45dd6a22f9f_678303b39e0a1b2f05c23bc4_673ac03613ce1d036f897c16_thaiqr_logosimbolo.png"
                                        alt="thaiqr"
                                        className="h-10 w-10 object-contain rounded-lg shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ฝั่งขวา - สรุป */}
                <div className="flex flex-col w-[60%] space-y-5">
                    <div className="bg-white border border-yellow-200 rounded-xl p-4">
                        <div className="flex space-x-4">
                            <img
                                src="https://ak-d.tripcdn.com/images/0201l12000882c0cv7888_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
                                alt="hotel"
                                className="w-80 h-50 object-cover rounded-lg"
                            />
                            <div className="flex flex-col text-left justify-center">
                                <div className="flex items-center justify-normal">
                                    <h2 className="font-medium text-[20px] text-black ">
                                        โรงแรมเวลาดี อุดรธานี
                                    </h2>
                                </div>
                                <div className="flex items-center justify-normal">
                                    <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg" alt="location" className="w-7 h-7" />
                                    <p className="font-mediu text-[14px] text-gray-500">
                                        ใกล้ UDON Day & Night Bar Complex
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-7 border-t border-gray-200 pt-2 text-sm text-left font-medium text-gray-700">
                            ห้องซูพีเรียร์ 2 เตียง (เตียงเดี่ยว 2 เตียง กว้าง 1.07 ม.)
                        </p>
                        <p className=" text-sm text-left font-medium text-gray-700">
                            (เตียงเดี่ยว 2 เตียง กว้าง 1.07 ม.)
                        </p>
                    </div>

                    {/* วันที่ */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-4">
                        <p className="font-medium text-gray-800">
                            ส. 27 ก.ย. — อ. 28 ก.ย.
                        </p>
                        <p className="text-sm text-gray-600 mt-5">
                            เช็คอิน: 14:00 - 06:00
                            <br />
                            เช็คเอาท์: ก่อน 12:00
                        </p>
                    </div>

                    {/* รายละเอียดราคา */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">รายละเอียดราคา</h4>
                        <div className="space-y-1 text-sm pt-4 text-gray-700">
                            <div className="flex justify-between">
                                <span>1 ห้อง × 1 คืน</span>
                                <span> ฿ 900</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ราคารวมก่อนภาษี</span>
                                <span>฿ 2,490</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ภาษีและค่าธรรมเนียม</span>
                                <span>98.13</span>
                            </div>
                            <div className="border-t border-gray-200 pt-10 flex justify-between text-[18px] font-semibold text-black">
                                <span>ทั้งหมด</span>
                                <span>฿ 998.13</span>
                            </div>
                        </div>
                    </div>

                    {/* จอง */}
                    <div className="w-full mt-6">
                        <button
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white   font-medium py-4  rounded-xl shadow-lg  ">
                            จองตอนนี้
                        </button>
                    </div>


                    {/* นโยบายการยกเลิก */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
                        <p className="font-semibold text-red-600 mb-2">นโยบายการยกเลิก</p>
                        <p>
                            ค่าธรรมเนียมการยกเลิก: 652.55 บาท <br />
                            ได้รับเงินคืนหากคุณยกเลิกก่อนวันที่เช็คอิน
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Information
