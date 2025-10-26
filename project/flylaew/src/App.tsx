// import HotelCard from "./components/HotelCard";
// import FlightsCard from "./components/FlightsCard";
import "./App.css";
import TrainsCard from "./components/TrainsCard";

const Hotel = () => {
  return (

    <div className="pt-28 w-full flex flex-col items-center">
      <TrainsCard
        trainprice={2002}
        trainduration="1 ชั่วโมง"
        trainfrom="กรุงเทพ"
        trainto="กรุงเทพ"
        departuretime="10:00"
        landingtime="12:00"
      />
      
      
      
      
      
      {/* <FlightsCard

        flightimgeurl="https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,q_85/trip/020151200093llyo7A833_R_550_412_R5.jpg"
        flightname="KLOOK HOTEL"
        flightid="KLOOK HOTEL"
        flightprice={2002}
        flightduration="1 ชั่วโมง"
        flightfrom="กรุงเทพ"
        flightto="กรุงเทพ"
        departuretime="10:00"
        landingtime="12:00"


      /> */}



      {/* <HotelCard
      name= "VELA Dhi Udon Thani"
      thaiName= "โรงแรมเวลาดี อุดรธานี"
      rating= "★★★★★"
      score= "9.3/10"
      comments= "ดีมาก"
      location= "ใกล้ UDON Day & Night Bar Complex"
      price= {2002}
      totaltax= {12222}
      imageUrl=
        "https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/trip/020151200093llyo7A833_R_550_412_R5.jpg"
     /> */}
    </div>

  );
};

export default Hotel;
