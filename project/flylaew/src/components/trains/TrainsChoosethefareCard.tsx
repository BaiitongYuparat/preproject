import React, { useState } from "react";
import { Link } from "react-router-dom";

interface TrainsChoosethefareCardProps {
  id: string;
  trainclassone: string[];
  trainclasstwo: string[];
  trainclassthree: string[];
  trainprice: number;
}

const TrainsChoosethefareCard: React.FC<TrainsChoosethefareCardProps> = ({
  id,
  trainclassone,
  trainclasstwo,
  trainclassthree,
  trainprice,
}) => {
  const [selectedClass, setSelectedClass] = useState<string>("");

  const getPrice = () => {
    switch (selectedClass) {
      case "class1":
        return trainprice + 400;
      case "class2":
        return trainprice + 200;
      case "class3":
        return trainprice;
      default:
        return 0;
    }
  };

  const handleSelectClass = (cls: string) => {
    setSelectedClass(cls);
  };

  return (
    <div className="bg-white w-full max-w-6xl mx-auto mt-6 rounded-2xl border border-yellow-300 shadow-md p-5">
      {/* ชั้นโดยสาร */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* ชั้นสาม */}
        <div
          onClick={() => handleSelectClass("class3")}
          className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedClass === "class3"
              ? "border-yellow-400 bg-amber-50"
              : "border-gray-200 hover:border-yellow-300"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">ชั้นสาม</h3>
            <ul className="text-gray-700 text-sm list-disc list-inside">
              {trainclassthree.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-700 font-medium">{trainprice} ฿</p>
            <button
              onClick={() => handleSelectClass("class3")}
              className="mt-2 w-full border rounded-xl py-2 border-yellow-400 text-yellow-700 hover:bg-amber-100 transition"
            >
              {selectedClass === "class3" ? "เลือกแล้ว" : "จองตั๋ว"}
            </button>
          </div>
        </div>

        {/* ชั้นสอง */}
        <div
          onClick={() => handleSelectClass("class2")}
          className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedClass === "class2"
              ? "border-yellow-400 bg-amber-50"
              : "border-gray-200 hover:border-yellow-300"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">ชั้นสอง</h3>
            <ul className="text-gray-700 text-sm list-disc list-inside">
              {trainclasstwo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-700 font-medium">{trainprice + 200} ฿</p>
            <button
              onClick={() => handleSelectClass("class2")}
              className="mt-2 w-full border rounded-xl py-2 border-yellow-400 text-yellow-700 hover:bg-amber-100 transition"
            >
              {selectedClass === "class2" ? "เลือกแล้ว" : "จองตั๋ว"}
            </button>
          </div>
        </div>

        {/* ชั้นหนึ่ง */}
        <div
          onClick={() => handleSelectClass("class1")}
          className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedClass === "class1"
              ? "border-yellow-400 bg-amber-50"
              : "border-gray-200 hover:border-yellow-300"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">ชั้นหนึ่ง</h3>
            <ul className="text-gray-700 text-sm list-disc list-inside">
              {trainclassone.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-700 font-medium">{trainprice + 400} ฿</p>
            <button
              onClick={() => handleSelectClass("class1")}
              className="mt-2 w-full border rounded-xl py-2 border-yellow-400 text-yellow-700 hover:bg-amber-100 transition"
            >
              {selectedClass === "class1" ? "เลือกแล้ว" : "จองตั๋ว"}
            </button>
          </div>
        </div>
      </div>

      {/* ส่วนล่าง: ราคา + ปุ่มต่อ */}
      <div className="flex justify-end items-center border-t border-yellow-300 pt-4 mt-6 gap-3">
        <div className="text-right">
          <p className="text-sm text-gray-600">ไป - กลับ</p>
          <p className="text-2xl font-bold text-blue-700">
            {getPrice().toFixed(2)} ฿
          </p>
        </div>

        <Link
          to={
            selectedClass
              ? `/checkout/${id}?class=${selectedClass}&price=${getPrice()}`
              : "#"
          }
          onClick={(e) => {
            if (!selectedClass) {
              e.preventDefault();
              alert("กรุณาเลือกชั้นโดยสารก่อนดำเนินการต่อ ✈️");
            }
          }}
          className={`${
            selectedClass
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-medium px-6 py-2 rounded-xl shadow transition-all`}
        >
          ดำเนินการต่อ
        </Link>
      </div>
    </div>
  );
};

export default TrainsChoosethefareCard;
