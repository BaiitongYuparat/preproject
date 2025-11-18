import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FlighChoosethefareCardProps {
    flightimgeurl: string;
    flightid: string;
    flightprice: number;
    flightfrom: string;
    flightto: string;
    departuretime: string;
    landingtime: string;
    returndeparture: string;
    returnlanding: string;
    luggage: string;
    flightname: string;
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

const FlighChoosethefareCard: React.FC<FlighChoosethefareCardProps> = ({
    flightimgeurl,
    flightid,
    flightprice,
    flightfrom,
    flightto,
    departuretime,
    landingtime,
    luggage,
    flightname,
}) => {
    const navigate = useNavigate();

    const [selectedClass, setSelectedClass] = useState<"normal" | "baggage" | null>(null);
    const [price, setPrice] = useState<number>(Number(flightprice));

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [bookings, setBookings] = useState<Booking[]>(() => {
        const saved = localStorage.getItem("bookings");
        return saved ? JSON.parse(saved) : [];
    });

    const saveBookings = (newBookings: Booking[]) => {
        setBookings(newBookings);
        localStorage.setItem("bookings", JSON.stringify(newBookings));
    };

    const handleBooking = () => {
        if (!firstName || !lastName || !email || !phone) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่องก่อนจอง");
            return;
        }

        if (!selectedClass) {
            alert("กรุณาเลือกชั้นโดยสารก่อนจอง");
            return;
        }

        const totalPrice = price;

        const confirmBooking = window.confirm(`
ชื่อ: ${firstName} ${lastName}
อีเมล: ${email}
เบอร์โทรศัพท์: ${phone}
จาก: ${flightfrom} - ถึง: ${flightto}
ชั้นโดยสาร: ${selectedClass === "baggage" ? "มีสัมภาระ 20KG" : "ชั้นประหยัด"}
ราคา: ${totalPrice.toLocaleString()} บาท

ต้องการยืนยันการจองหรือไม่?
        `);

        if (!confirmBooking) return;

        const newBooking: Booking = {
            id: Date.now().toString(),
            createdAt: new Date().toLocaleString(),
            type: "flight",
            name: `${firstName} ${lastName}`,
            price: totalPrice,
            details: `${flightfrom} - ${flightto} (${departuretime}-${landingtime})`,
            contact: `${flightname} (${flightid})`,
            email,
            phone,
        };

        const updated = [...bookings, newBooking];
        saveBookings(updated);

        alert("จองตั๋วเครื่องบินสำเร็จ! ระบบได้บันทึกข้อมูลของคุณแล้ว\nกรุณาชำระเงินต่อ");

        // 🔥 ไปหน้า Payment
        navigate(`/payment/${newBooking.id}`);
    };

    const handleSelectClass = (cls: "normal" | "baggage") => {
        setSelectedClass(cls);
        setPrice(cls === "baggage" ? Number(flightprice) + 1000 : Number(flightprice));
    };

    return (
        <div className="bg-white w-full max-w-6xl mx-auto mt-6 rounded-2xl border border-yellow-300 shadow-md flex flex-col hover:shadow-xl transition-all duration-300 p-5">
            <p className="text-left text-gray-500 text-[13px] mb-2 ">
                ชื่อผู้จองต้องตรงกับเอกสารประจำตัว
            </p>

            {/* ฟอร์มผู้โดยสาร */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="ชื่อ"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-gray-300 hover:border-yellow-400 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                />
                <input
                    type="text"
                    placeholder="นามสกุล"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border border-gray-300 hover:border-yellow-400 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="อีเมล"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 hover:border-yellow-400 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                />
                <input
                    type="text"
                    placeholder="เบอร์โทรศัพท์"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 hover:border-yellow-400 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* จาก - ถึง */}
            <div className="font-medium text-left text-[16px] border-t border-yellow-200 sm:text-[22px] text-black">
                {flightfrom} - {flightto}
            </div>

            {/* ขาไป */}
            <div className="flex text-left flex-row md:flex-col justify-between items-start md:items-center mb-4">
                <div className="items-center flex gap-3">
                    <img
                        src={flightimgeurl}
                        alt="flightImage"
                        className="w-[45px] h-[45px] sm:h-[50px] sm:w-[50px] object-cover rounded-full"
                    />
                    <div>
                        <p className="text-[16px] md:text-[20px] font-medium text-black">
                            {departuretime} {flightfrom}
                        </p>
                        <p className="text-[14px] md:text-[18px] text-left font-medium text-gray-600">
                            {flightid}
                        </p>
                        <p className="text-[16px] md:text-[20px] font-medium text-black">
                            {landingtime} {flightto}
                        </p>
                    </div>
                </div>
            </div>

            {/* เลือกชั้นโดยสาร */}
            <div className="grid md:grid-cols-2 border-t border-yellow-200 pt-4 mt-4 gap-3">
                <div
                    onClick={() => handleSelectClass("normal")}
                    className={`p-4 border rounded-xl cursor-pointer transition-all ${selectedClass === "normal"
                            ? "border-yellow-300 bg-amber-50"
                            : "border-gray-200 hover:border-yellow-300"
                        }`}
                >
                    <h3 className="font-semibold text-gray-800 mb-2">ชั้นประหยัด</h3>
                    <p className="text-sm text-gray-700">สัมภาระ: {luggage}</p>
                    <p className="text-sm text-gray-700">สัมภาระใต้ท้องเครื่อง: ไม่มีบริการ</p>
                    <p className="text-sm text-gray-700">ค่าธรรมเนียมเปลี่ยนแปลง: เริ่มต้น 1,275</p>
                    <p className="text-sm text-gray-700">ออกตั๋ว: ภายใน 2 ชั่วโมงหลังชำระเงิน</p>
                </div>

                <div
                    onClick={() => handleSelectClass("baggage")}
                    className={`p-4 border rounded-xl cursor-pointer transition-all ${selectedClass === "baggage"
                            ? "border-yellow-300 bg-amber-50"
                            : "border-gray-200 hover:border-yellow-300"
                        }`}
                >
                    <h3 className="font-semibold text-gray-800 mb-2">
                        ชั้นประหยัด (มีสัมภาระ 20KG)
                    </h3>
                    <p className="text-sm text-gray-700">สัมภาระ: {luggage}</p>
                    <p className="text-sm text-gray-700">สัมภาระใต้ท้องเครื่อง: 20 KG</p>
                    <p className="text-sm text-gray-700">ค่าธรรมเนียมเปลี่ยนแปลง: เริ่มต้น 1,275</p>
                    <p className="text-sm text-gray-700">ออกตั๋ว: ภายใน 2 ชั่วโมงหลังชำระเงิน</p>
                </div>
            </div>

            {/* ราคา + ปุ่ม */}
            <div className="flex justify-end items-center border-t border-yellow-300 pt-4 mt-4 gap-3">
                <div>
                    <p className="text-sm text-gray-600">ไป - กลับ</p>
                    <p className="text-2xl font-bold text-blue-700">
                        {price.toLocaleString()}฿
                    </p>
                </div>

                <button
                    onClick={handleBooking}
                    className={`${selectedClass
                            ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400"
                            : "bg-gray-400 cursor-not-allowed"
                        } text-white font-medium px-6 py-2 rounded-xl shadow transition-all`}
                >
                    ดำเนินการต่อ
                </button>
            </div>

            {/* วิธีชำระเงิน */}
            <div className="mt-4">
                <p className="p-3 border border-yellow-300 text-gray-900 rounded-xl text-sm">
                    วิธีการชำระเงิน: <span className="font-medium">PromptPay</span>
                </p>
            </div>
        </div>
    );
};

export default FlighChoosethefareCard;
