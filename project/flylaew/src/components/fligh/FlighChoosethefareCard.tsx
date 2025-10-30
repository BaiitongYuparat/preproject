import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FlighChoosethefareCardProps {
    id: string;
    flightimgeurl: string;
    flightid: string;
    flightprice: string;
    flightfrom: string;
    flightto: string;
    departuretime: string;
    landingtime: string;
    returndeparture: string;
    returnlanding: string;
    luggage: string;
}

const FlighChoosethefareCard: React.FC<FlighChoosethefareCardProps> = ({
    id,
    flightimgeurl,
    flightid,
    flightprice,
    flightfrom,
    flightto,
    departuretime,
    landingtime,
    returndeparture,
    returnlanding,
    luggage
}) => {

    const [selectedClass, setSelectedClass] = useState<"normal" | "baggage" | null>(null);
    const [price, setPrice] = useState<number>(Number(flightprice));

    const handleSelectClass = (cls: "normal" | "baggage") => {
        setSelectedClass(cls);
        if (cls === "baggage") {
            setPrice(Number(flightprice) + 1000);
        } else {
            setPrice(Number(flightprice));
        }
    };

    return (
        <div className="bg-white w-full max-w-6xl mx-auto mt-6 rounded-2xl border border-yellow-300 shadow-md flex flex-col hover:shadow-xl transition-all duration-300 p-5">
            {/* จาก - ถึง */}
            <div className="font-medium text-left text-[16px] sm:text-[22px] text-black">
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

            {/* ขากลับ */}
            <div className="font-medium text-left text-[16px] sm:text-[22px] text-black border-t border-yellow-300 pt-4 mt-4 gap-3">
                {flightto} - {flightfrom}
            </div>

            <div className="flex flex-col text-left md:flex-col justify-between items-start md:items-center">
                <div className="items-center flex gap-3">
                    <img
                        src={flightimgeurl}
                        alt="flightImage"
                        className="w-[45px] h-[45px] sm:h-[50px] sm:w-[50px] object-cover rounded-full"
                    />
                    <div>
                        <p className="text-[16px] md:text-[20px] font-medium text-black">
                            {returndeparture} {flightfrom}
                        </p>
                        <p className="text-[14px] md:text-[18px] text-left font-medium text-gray-600">
                            {flightid}
                        </p>
                        <p className="text-[16px] md:text-[20px] font-medium text-black">
                            {returnlanding} {flightto}
                        </p>
                    </div>
                </div>
            </div>

            {/* เลือกชั้นโดยสาร */}
            <div className="grid md:grid-cols-2 border-t border-yellow-100 pt-4 mt-4 gap-3">
                <div
                    onClick={() => handleSelectClass("normal")}
                    className={`p-4 border rounded-xl cursor-pointer transition-all ${
                        selectedClass === "normal"
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
                    className={`p-4 border rounded-xl cursor-pointer transition-all ${
                        selectedClass === "baggage"
                            ? "border-yellow-300 bg-amber-50"
                            : "border-gray-200 hover:border-yellow-300"
                    }`}
                >
                    <h3 className="font-semibold text-gray-800 mb-2">ชั้นประหยัด (มีสัมภาระ 20KG)</h3>
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
                    <p className="text-2xl font-bold text-blue-700">{price}฿</p>
                </div>

                <Link
                    to={
                        selectedClass
                            ? `/checkout/${id}?class=${selectedClass}&price=${price}`
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
                            ? "bg-amber-500 hover:bg-yellow-300"
                            : "bg-gray-400 cursor-not-allowed"
                    } text-white font-medium px-6 py-2 rounded-xl shadow transition-all`}
                >
                    ดำเนินการต่อ
                </Link>
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
