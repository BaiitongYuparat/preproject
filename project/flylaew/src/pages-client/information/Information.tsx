import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import InformationCard from "../../components/hotels/InformationCard";

interface Hotels {
    id: string;
    imageUrl: string;
    thaiName: string;
    location: string;
    score: string;
    comments: string;
}

interface RoomHotels {
    id: string;
    imageUrl: string;
    nameroom: string;
    explanation: string;
    price: number;
}

const Information = () => {
    const { id } = useParams<{ id: string }>();
    const [hotel, setHotel] = useState<Hotels | null>(null);
    const [room, setRoom] = useState<RoomHotels | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // ฟังก์ชันตรวจสอบข้อมูล
    const handleBooking = () => {
        if (!firstName || !lastName || !email || !phone) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่องก่อนจอง");
            return;
        }
        setShowPopup(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // ดึงข้อมูลโรงแรม
                const hotelRes = await axios.get<Hotels[]>("/HotelsData.json");
                const foundHotel = hotelRes.data.find((h) => h.id === id);
                setHotel(foundHotel || null);

                // ดึงข้อมูลห้อง
                const roomRes = await axios.get<RoomHotels[]>("/RoomHotelsData.json");
                const foundRoom = roomRes.data.find((r) => r.id === id);
                setRoom(foundRoom || null);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!hotel || !room) {
        return (
            <p className="text-center text-gray-500 mt-20">
                กำลังโหลดข้อมูลห้องพัก...
            </p>
        );
    }

    return (
        <div>
            {/* Navbar */}
            <Navbar />

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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                            />
                            <input
                                type="text"
                                placeholder="นามสกุล"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                            />
                            <input
                                type="text"
                                placeholder="เบอร์โทรศัพท์"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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
                                <input
                                    type="radio"
                                    name="payment"
                                    className="accent-yellow-500"
                                    defaultChecked
                                />
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
                                        src="https://www.dpa.or.th/storage/uploads/bank/dpa_bank_kbank@2x.png"
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

                {/* ข้อมูลโรงแรมที่เลือก */}
                <div className="w-[50%]">
                    <InformationCard
                        id={hotel.id}
                        imageUrl={room.imageUrl || hotel.imageUrl}
                        thaiName={hotel.thaiName}
                        location={hotel.location}
                        price={room.price}
                        nameroom={room.nameroom}
                        score={hotel.score}
                        comments={hotel.comments}
                        explanation={room.explanation}
                    />

                    {/* ปุ่มจอง */}
                    <div className="w-full mt-6">
                        <button
                            onClick={handleBooking}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-4 rounded-xl shadow-lg"
                        >
                            จองตอนนี้
                        </button>
                    </div>

                    {/* ป๊อบอัพ QR Code */}
                    {showPopup && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                            <div className="bg-white p-6 rounded-xl relative">
                                <img src="https://res.cloudinary.com/dimvnxngp/image/upload/v1762008630/3c5nAS_qrcode_1_oprgqq.png"
                                    alt="QR Code"
                                    className="w-80 h-80" />
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="mt-4  text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400  px-4 py-2 rounded-full  transition "
                                >
                                    ปิด
                                </button>

                            </div>
                        </div>
                    )}



                    {/* นโยบายการยกเลิก */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed mt-4">
                        <p className="font-semibold text-red-600 mb-2">นโยบายการยกเลิก</p>
                        <p>
                            ค่าธรรมเนียมการยกเลิก: 652.55 บาท <br />
                            ได้รับเงินคืนหากคุณยกเลิกก่อนวันที่เช็คอิน
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Information;