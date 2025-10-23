import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

const HotelPage = () => {

  const hotels = [
    {
      name: "VELA Dhi Udon Thani",
      thaiName: "โรงแรมเวลาดี อุดรธานี",
      rating: "★★★★★",
      score: "9.3/10",
      comment: "ดีมาก",
      location: "ใกล้ UDON Day & Night Bar Complex",
      price: "900 ฿",
      total: "ทั้งหมด (รวมภาษีและค่าธรรมเนียม) 2,490 ฿",
      imageUrl:
        "https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/trip/020151200093llyo7A833_R_550_412_R5.jpg",
    },
    {
      name: "Centara Hotel Udon Thani",
      thaiName: "เซ็นทารา อุดรธานี",
      rating: "★★★★★",
      score: "9.1/10",
      comment: "ดีมาก",
      location: "ใกล้ Central Udon Plaza",
      price: "1,000 ฿",
      total: "ทั้งหมด (รวมภาษีและค่าธรรมเนียม) 2,890 ฿",
      imageUrl: "https://f.ptcdn.info/750/006/000/1372590392-IMG8148-o.jpg",
    },
    {
      name: "B2 Udon Thani Premier Hotel",
      thaiName: "โรงแรม บีทู อุดร พรีเมียร์",
      rating: "★★★",
      score: "7.7/10",
      comment: "ดี",
      location: "ใกล้ท่าอากาศยานนานาชาติอุดรธานี",
      price: "770 ฿",
      total: "ทั้งหมด (รวมภาษีและค่าธรรมเนียม) 1,690 ฿",
      imageUrl:
        "https://www.b2hotel.com/wp-content/uploads/2024/08/udonpremieroverview0.jpg",
    },
  ];

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* ส่วนการ์ดโรงแรม */}
      <div className="pt-32 pb-10 flex flex-col items-center space-y-6">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelPage;
