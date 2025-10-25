import HaedRoomCard from "./components/componentshotel/HeadRoomCard";
import "./App.css";

const Hotel = () => {
  return (
    
      <div className="pt-28 w-full flex flex-col items-center">
      <HaedRoomCard
        imageUrl="https://ak-d.tripcdn.com/images/0581c12000inr0wu7252A_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
        room1="https://ak-d.tripcdn.com/images/0222z12000dju7m4oFF46_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
        room2="https://ak-d.tripcdn.com/images/0220712000di75j7a55AF_W_1280_853_R5.jpg?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
        hotelname="เซ็นทารา อุดรธานี"
        rating="★★★★★"
        score="9.3/10"
        comments="ดีมาก"
        location="277/1 ถ.ประจักษ์ศิลปาคม อ.เมือง, ตำบลหมากแข้ง, จังหวัดอุดรธานี, 41000"
        facilities={[
          "ห้องงมวดที่ทันสมัย",
          "ที่จอดรถส่วนตัวฟรี",
          "สถานีชาร์จรถยนต์ไฟฟ้า",
          "แผนกต้อนรับ 24 ชั่วโมง",
          "บาร์",
          "ร้านอาหาร",
          "บริการจองแท็กซี่",
        ]}
      />
      </div>
    
  );
};

export default Hotel;
