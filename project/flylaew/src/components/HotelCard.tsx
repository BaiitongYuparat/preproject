import { useNavigate } from "react-router-dom";

interface HotelCardProps {
  name: string;
  thaiName: string;
  rating: string;
  score: string;
  comment: string;
  location: string;
  price: string;
  total: string;
  imageUrl: string;
}

export default function HotelCard({
  name,
  thaiName,
  rating,
  score,
  comment,
  location,
  price,
  total,
  imageUrl,
}: HotelCardProps) {
  const navigate = useNavigate();

  const handleViewRooms = () => {
    // ส่งชื่อโรงแรมไป RoomHotels
    navigate("/rooms", { state: { name } });
  };

  return (
    <div className="bg-white w-[1300px] h-[300px] rounded-xl shadow-md flex items-start px-6 py-6 mt-6 hover:shadow-lg transition-all duration-300">
      {/* รูปโรงแรม */}
      <img
        src={imageUrl}
        alt={name}
        className="w-60 h-60 object-cover rounded-xl"
      />

      {/* รายละเอียดโรงแรม */}
      <div className="flex-1 md:ml-6 mt-4 text-left md:mt-0">
        <div className="flex items-center">
          <h3 className="font-medium text-black text-[18px]">{name}</h3>
          <p className="font-medium m-3 text-yellow-400">{rating}</p>
        </div>
        <p className="font-medium text-gray-500">{thaiName}</p>
        <div className="flex items-center">
          <p className="font-medium text-white bg-yellow-400 px-2 rounded">{score}</p>
          <p className="font-medium m-3 text-gray-500">{comment}</p>
        </div>
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-location-icon-for-your-project-png-image_1905058.jpg"
            alt="location"
            className="w-7 h-7"
          />
          <p className="font-medium text-gray-500">{location}</p>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="font-medium text-black text-[23px]">{price}</h3>
          <p className="font-medium text-gray-500">{total}</p>
          <button
            onClick={handleViewRooms}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md mt-2"
          >
            ดูห้องว่าง
          </button>
        </div>
      </div>
    </div>
  );
}
