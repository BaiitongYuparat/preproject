import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import InformationCard from "../../components/hotels/InformationCardHotels";

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

interface Booking {
    id: string;
    createdAt: string;
    type: "hotel" | "flight" | "train";
    name: string;
    price: number;
    details: string;
    contact: string;
    email: string;
    phone: string;
}

const Information = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [hotel, setHotel] = useState<Hotels | null>(null);
    const [room, setRoom] = useState<RoomHotels | null>(null);

    const [bookings, setBookings] = useState<Booking[]>(() => {
        const saved = localStorage.getItem("bookings");
        return saved ? JSON.parse(saved) : [];
    });

    const saveBookings = (newBookings: Booking[]) => {
        setBookings(newBookings);
        localStorage.setItem("bookings", JSON.stringify(newBookings));
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // ฟังก์ชันตรวจสอบข้อมูล + บันทึก Booking แล้วไปหน้า Payment
    const handleBooking = () => {
        // เช็คว่ากรอกข้อมูลครบ
        if (!firstName || !lastName || !email || !phone) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่องก่อนจอง");
            return;
        }

        // เช็คว่าโหลดข้อมูลโรงแรม/ห้องเรียบร้อย
        if (!hotel || !room) {
            alert("ไม่พบข้อมูลห้องพัก กรุณาลองใหม่อีกครั้ง");
            return;
        }

        const confirmBooking = window.confirm(`
ชื่อ: ${firstName}
นามสกุล: ${lastName}
อีเมล: ${email}
เบอร์โทรศัพท์: ${phone}
ที่พัก: ${hotel.thaiName}
ห้อง: ${room.nameroom}

ต้องการยืนยันการจองหรือไม่?
        `);

        if (!confirmBooking) return;

        const newBooking: Booking = {
            id: Date.now().toString(),
            createdAt: new Date().toLocaleString(),
            type: "hotel",
            name: `${firstName} ${lastName}`,
            price: room.price,
            details: hotel.thaiName,
            contact: room.nameroom,
            email: email,
            phone: phone,
        };

        const updated = [...bookings, newBooking];
        saveBookings(updated);

        alert("จองห้องพักสำเร็จ! ระบบได้บันทึกข้อมูลของคุณแล้ว\nกรุณาชำระเงินต่อ");

        // ไปหน้า Payment
        navigate(`/payment/${newBooking.id}`);
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
            <Navbar />

            {/* เนื้อหา */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-20 flex flex-col lg:flex-row gap-6 ">
                {/* ฟอร์ม */}
                <div className="flex-1 space-y-4">
                    {/* ข้อมูลผู้เข้าพัก */}
                    <div className="bg-white border border-yellow-200 rounded-xl p-6">
                        <h2 className="text-lg text-left font-medium mb-4 text-gray-800">
                            ข้อมูลผู้เข้าพัก
                        </h2>
                        <p className="text-left text-gray-500 text-[13px] mb-4">
                            ชื่อผู้เข้าพักต้องตรงกับเอกสารประจำตัวที่ใช้เมื่อเช็คอิน
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                {/* ข้อมูลโรงแรมที่เลือก */}
                <div className="flex-1">
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
                    <button
                        onClick={handleBooking}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-4 rounded-xl shadow-lg mt-4"
                    >
                        จองตอนนี้
                    </button>

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
        </div>
    );
};

export default Information;
