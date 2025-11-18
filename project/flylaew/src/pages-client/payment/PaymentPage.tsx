
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

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

const PaymentPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const navigate = useNavigate();
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("bookings");
    if (saved) {
      const all: Booking[] = JSON.parse(saved);
      const found = all.find((b) => b.id === bookingId);
      if (found) {
        setBooking(found);
      }
    }
  }, [bookingId]);

  const handlePay = () => {
    alert("ชำระเงินสำเร็จ ขอบคุณที่ใช้บริการ");
    navigate("/");
  };

  if (!booking) {
    return (
      <div className="bg-yellow-50 min-h-screen">
        <Navbar />
        <div className="mt-24 text-center text-red-500">ไม่พบข้อมูลการจอง</div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-24 bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          ชำระเงินการจอง
        </h1>

        <div className="space-y-2 text-gray-700 mb-6">
          <p><span className="font-semibold">ชื่อผู้จอง:</span> {booking.name}</p>
          <p><span className="font-semibold">อีเมล:</span> {booking.email}</p>
          <p><span className="font-semibold">เบอร์โทร:</span> {booking.phone}</p>
          <p><span className="font-semibold">ประเภท:</span> {booking.type}</p>
          <p><span className="font-semibold">รายละเอียด:</span> {booking.details}</p>
          <p><span className="font-semibold">ห้อง / เที่ยว:</span> {booking.contact}</p>
          <p className="text-xl font-bold mt-2">
            ยอดที่ต้องชำระ: {booking.price.toLocaleString()} บาท
          </p>
        </div>

        {/* ส่วนจำลองช่องทางการชำระเงิน */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="font-semibold mb-2">ช่องทางการชำระเงิน (ตัวอย่าง)</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>โอนผ่าน Mobile Banking</li>
            <li>ชำระด้วยบัตรเครดิต / เดบิต</li>
            <li>พร้อมเพย์</li>
          </ul>
        </div>

        <button
          onClick={handlePay}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-full transition-all duration-300"
        >
          ชำระเงิน
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
