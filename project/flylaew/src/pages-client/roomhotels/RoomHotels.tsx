import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import RoomHotelsCard from "../../components/components-roomhotel/RoomHotelsCard";

const RoomHotels: React.FC = () => {
    const location = useLocation();
    const selectedHotel = location.state?.name;

    const hotelsData = [
        {
            name: "VELA Dhi Udon Thani",
            thaiName: "โรงแรมเวลาดี อุดรธานี",
            rating: "★★★★★",
            comment: "ดีมาก",
            images: [
                "https://ak-d.tripcdn.com/images/020151200093llyo7A833_W_1280_853_R5.jpg",
                "https://ak-d.tripcdn.com/images/0200f120009dpjhapC05A_W_1280_853_R5.jpg",
                "https://ak-d.tripcdn.com/images/020331200093lsvj0832D_W_1280_853_R5.jpg",
            ],
            location: "471 Adulyadej Road, Mak Khaeng, Udon Thani, 41000 อุดรธานี, ไทย",
            facilities: [
                "ห้องนวด",
                "ที่จอดรถส่วนตัวฟรี",
                "สถานีชาร์จรถยนต์ไฟฟ้า",
                "แผนกต้อนรับ 24 ชั่วโมง",
                "บาร์",
                "ร้านอาหาร",
                "บริการจองแท็กซี่",
            ],
            rooms: [
                {
                    roomName: "ห้องซูพีเรียร์ เตียงเดี่ยว 2 เตียง",
                    bedInfo: "เตียงเดี่ยว 2 เตียง (กว้าง 1.1 ม.)",
                    noExtraBed: true,
                    pricePerPerson: 600,
                    roomImage:
                        "https://ak-d.tripcdn.com/images/0200l1200086p5zx526D3_W_1280_853_R5.jpg",
                },
                {
                    roomName: "ห้องซูพีเรียร์ เตียงคิง",
                    bedInfo: "เตียงคิงไซส์ 1 เตียง (กว้าง 1.82 ม.)",
                    noExtraBed: true,
                    pricePerPerson: 990,
                    roomImage:
                        "https://ak-d.tripcdn.com/images/0201l12000882c0cv7888_W_1280_853_R5.jpg",
                },
            ],
        },
        {
            name: "Centara Hotel Udon Thani",
            thaiName: "เซ็นทารา อุดรธานี",
            rating: "★★★★★",
            comment: "ดีมาก",
            images: [
                "https://f.ptcdn.info/750/006/000/1372590392-IMG8148-o.jpg",
                "https://www.centaradeals.com/resources/images/evouchers/evc861-cud_02-superior-01.jpg",
                "https://q-xx.bstatic.com/xdata/images/hotel/max500/419276071.jpg?k=86431e66ba1de43207a76d166c14734d32825e4ba71ae36b8a3c010d4e685179&o=",
            ],
            location: "277/1 ถ.ประจักษ์ศิลปาคม ต.หมากแข้ง อ.เมือง จ.อุดรธานี, 41000",
            facilities: [
                "สระว่ายน้ำ",
                "ห้องอาหาร",
                "ฟิตเนส",
                "แผนกต้อนรับ 24 ชั่วโมง",
                "บริการรถรับส่งสนามบิน",
                "สปา",
                "ซาวน่า",
                "ห้องนวด",
                "ฟิตเนส",
            ],
            rooms: [
                {
                    roomName: "ห้องซูพีเรียร์ 2 เตียง",
                    bedInfo: "เตียงเดี่ยว 2 เตียง (กว้าง 1.07 ม.)",
                    noExtraBed: true,
                    pricePerPerson: 600,
                    roomImage:
                        "https://pix8.agoda.net/hotelImages/28764306/1016707018/0a4c8d02d00d9db5fe28ab9a8477a1c2.jpeg?ce=0&s=1024x",
                },
                {
                    roomName: "ห้องซูพีเรียร์ 1 เตียงใหญ่",
                    bedInfo: "เตียงคิงไซส์ 1 เตียง (กว้าง 1.81 ม.)",
                    noExtraBed: true,
                    pricePerPerson: 600,
                    roomImage:
                        "https://pix8.agoda.net/hotelImages/28764306/1016707000/64fd29d20bc951e33b18ee4bb5c2ef79.jpeg?ce=0&s=1024x",
                },
            ],
        },
        {
            name: "B2 Udon Thani Premier Hotel",
            thaiName: "โรงแรม บีทู อุดร พรีเมียร์",
            rating: "★★★",
            comment: "ดี",
            images: [
                "https://www.b2hotel.com/wp-content/uploads/2022/09/b2udonhotel-1.jpg",
                "https://www.b2hotel.com/wp-content/uploads/2024/08/udonpremieroverview2-1280x720.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0FtM-MdPbHQHFIixflCf19LgB5GHh8ZaTA&s",
            ],
            location: "284/29 Prajak Sillapakom Road, Udon Thani, 41000 ไทย",
            facilities: [
                "Wi-Fi ฟรี",
                "ที่จอดรถฟรี",
                "แผนกต้อนรับ 24 ชั่วโมง",
                "สถานีชาร์จรถยนต์ไฟฟ้า",
                "ชั้นปลอดบุหรี่"
            ],
            rooms: [
                {
                    roomName: "ห้องดีลักซ์ เตียงใหญ่",
                    bedInfo: "เตียงคิงไซส์ 1 เตียง ",
                    noExtraBed: false,
                    pricePerPerson: 681,
                    roomImage:
                        "https://ak-d.tripcdn.com/images/1mc6j12000f0d83te027F_W_1280_853_R5.jpg",
                },
                {
                    roomName: "เด็นเซียล สวีท ",
                    bedInfo: "เตียงคิงไซส์ 1 เตียง ",
                    noExtraBed: false,
                    pricePerPerson: 1120,
                    roomImage:
                        "https://ak-d.tripcdn.com/images/1mc1w12000f0d7zb68BAA_W_1280_853_R5.jpg",
                },
            ],
        },
    ];

    const filteredHotels = selectedHotel
        ? hotelsData.filter((hotel) => hotel.name === selectedHotel)
        : hotelsData;

    return (
        <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
            {/* Navbar */}
            <Navbar />

            <div className="bg-yellow-50 min-h-screen flex flex-col items-center pt-28 pb-10">

                {filteredHotels.length > 0 ? (
                    filteredHotels.map((hotel, index) => (
                        <RoomHotelsCard key={index} {...hotel} />
                    ))
                ) : (
                    <p className="text-gray-600">ไม่พบข้อมูลห้องพักของโรงแรมนี้</p>
                )}
            </div>
        </div>
    );
};

export default RoomHotels;
