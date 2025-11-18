import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TrainsChoosethefareCardProps {
  trainprice: number;
  trainfrom: string;
  trainto: string;
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

const TrainsChoosethefareCard: React.FC<TrainsChoosethefareCardProps> = ({
  trainprice,
  trainfrom,
  trainto,
}) => {
  const navigate = useNavigate();

  const [selectedClass, setSelectedClass] = useState<string>("");
  const basePrice = trainprice;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("");

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  const saveBookings = (newBookings: Booking[]) => {
    setBookings(newBookings);
    localStorage.setItem("bookings", JSON.stringify(newBookings));
  };

  const getPrice = () => {
    switch (selectedClass) {
      case "class1":
        return basePrice + 400;
      case "class2":
        return basePrice + 200;
      case "class3":
        return basePrice;
      default:
        return 0;
    }
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

    const className =
      selectedClass === "class1"
        ? "ชั้นหนึ่ง"
        : selectedClass === "class2"
        ? "ชั้นสอง"
        : "ชั้นสาม";

    const totalPrice = getPrice();

    const confirmBooking = window.confirm(`
ชื่อ: ${firstName}
นามสกุล: ${lastName}
อีเมล: ${email}
เบอร์โทรศัพท์: ${phone}
จาก: ${trainfrom} - ถึง: ${trainto}
ชั้นโดยสาร: ${className}
ราคา: ${totalPrice.toLocaleString()} บาท

ต้องการยืนยันการจองหรือไม่?
    `);

    if (!confirmBooking) return;

    const newBooking: Booking = {
      id: Date.now().toString(),
      createdAt: new Date().toLocaleString(),
      type: "train",
      name: `${firstName} ${lastName}`,
      price: totalPrice,
      details: `${trainfrom} - ${trainto}`,
      contact: `ชั้นโดยสาร${className}`,
      email,
      phone,
    };

    const updated = [...bookings, newBooking];
    saveBookings(updated);

    alert("จองตั๋วรถไฟสำเร็จ! ระบบได้บันทึกข้อมูลของคุณแล้ว\nกรุณาชำระเงินต่อ");

    // ไปหน้า Payment
    navigate(`/payment/${newBooking.id}`);
  };

  const totalPrice = getPrice();

  const trainClasses = [
    {
      id: "class1",
      name: "ชั้นหนึ่ง",
      desc: ["ที่นอนเตียงล่าง", "เครื่องปรับอากาศ", "ม่านส่วนตัว", "ปลั๊กชาร์จส่วนตัว"],
      price: basePrice + 400,
    },
    {
      id: "class2",
      name: "ชั้นสอง",
      desc: ["ที่นั่งเอนได้", "พัดลม", "มีปลั๊กชาร์จ", "ห้องน้ำรวม"],
      price: basePrice + 200,
    },
    {
      id: "class3",
      name: "ชั้นสาม",
      desc: ["ที่นั่งธรรมดา", "ไม่มีแอร์", "ราคาประหยัด", "ห้องน้ำรวม"],
      price: basePrice,
    },
  ];

  return (
    <div className="bg-white w-full max-w-6xl mx-auto mt-6 rounded-2xl border border-yellow-300 shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">
        {trainfrom} - {trainto}
      </h2>
        
      <p className="text-left text-gray-500 text-[13px] mb-2 ">
        ชื่อผู้จองต้องตรงกับเอกสารประจำตัว
      </p>

      {/* ฟอร์มข้อมูลผู้โดยสาร */}
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

      <h2 className="text-xl font-bold mb-4 text-gray-800">เลือกชั้นโดยสาร</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {trainClasses.map((cls) => (
          <div
            key={cls.id}
            onClick={() => setSelectedClass(cls.id)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between
              ${
                selectedClass === cls.id
                  ? "border-yellow-400 bg-amber-50 shadow-md"
                  : "border-gray-200 hover:border-yellow-300"
              }`}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {cls.name}
              </h3>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                {cls.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-800 font-semibold text-lg">
                {cls.price.toLocaleString()} ฿
              </p>
              <p
                className={`mt-1 text-sm ${
                  selectedClass === cls.id ? "text-amber-600 font-medium" : ""
                }`}
              >
                {selectedClass === cls.id ? "เลือกแล้ว" : "คลิกเพื่อเลือก"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ส่วนล่าง */}
      <div className="flex justify-end items-center border-t border-yellow-300 pt-4 mt-4 gap-3">
        <div>
          <p className="text-sm text-gray-600">ไป - กลับ</p>
          <p className="text-2xl font-bold text-blue-700">
            {totalPrice.toLocaleString()}฿
          </p>
        </div>

        <button
          onClick={handleBooking}
          className={`${
            selectedClass
              ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-medium px-6 py-2 rounded-xl shadow transition-all`}
        >
          ดำเนินการต่อ
        </button>
      </div>
    </div>
  );
};

export default TrainsChoosethefareCard;
