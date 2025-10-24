import HotelCard from "./components/HotelCard";

const Hotel = () => {
  return (
    
      <div className="pt-28 w-full flex  flex-col items-center">
        <HotelCard
          name="VELA Dhi Udon Thani"
          thaiName="โรงแรมเวลาดี อุดรธานี"
          rating="★★★★★"
          score="9.3/10"
          comments="ดีมาก"
          location="ใกล้ UDON Day & Night Bar Complex"
          price={900}
          totaltax={2490}
          imageUrl="https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/trip/020151200093llyo7A833_R_550_412_R5.jpg"
        />
         <HotelCard
          name="VELA Dhi Udon Thani"
          thaiName="โรงแรมเวลาดี อุดรธานี"
          rating="★★★★★"
          score="9.3/10"
          comments="ดีมาก"
          location="ใกล้ UDON Day & Night Bar Complex"
          price={900}
          totaltax={2490}
          imageUrl="https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/trip/020151200093llyo7A833_R_550_412_R5.jpg"
        />

      </div>

    
  );
};

export default Hotel;
