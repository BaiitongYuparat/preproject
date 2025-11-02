import React, { useState } from "react";

interface TrainsChoosethefareCardProps {
  trainprice: number; 
}

const TrainsChoosethefareCard: React.FC<TrainsChoosethefareCardProps> = ({
  trainprice,
}) => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const basePrice = trainprice;

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

  const totalPrice = getPrice();

  // ข้อมูลชั้นโดยสาร
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
      <h2 className="text-xl font-bold mb-4 text-gray-800">เลือกชั้นโดยสาร</h2>

      {/* ส่วนแสดงชั้นต่าง ๆ */}
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
          onClick={(e) => {
            e.preventDefault();
            if (!selectedClass) {
              alert("กรุณาเลือกชั้นโดยสารก่อนดำเนินการต่อ");
            } else {
              setShowPopup(true);
            }
          }}
          className={`${
            selectedClass
              ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-medium px-6 py-2 rounded-xl shadow transition-all`}
        >
          ดำเนินการต่อ
        </button>
      </div>

      {/* ป๊อบอัพ QR Code */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl relative text-center">
            <img
              src="https://res.cloudinary.com/dimvnxngp/image/upload/v1762008630/3c5nAS_qrcode_1_oprgqq.png"
              alt="QR Code"
              className="w-80 h-80 mx-auto"
            />
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 py-2 rounded-full transition"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainsChoosethefareCard;
