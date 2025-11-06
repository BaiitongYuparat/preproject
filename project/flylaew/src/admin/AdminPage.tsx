// src/pages-client/admin/AdminPage.tsx
import React, { useEffect, useState } from "react";

type TabType = "hotels" | "flights" | "trains" | "bookings";

interface Hotel {
    id: string;
    imageUrl: string;
    name: string;
    thaiName: string;
    location: string;
    price: number;
    rating: string;
    score: string;
    comments: string;
    totaltax: number;
}

interface Flight {
    id: string;
    flightimgeurl: string;
    flightname: string;
    flightid: string;
    flightprice: number;
    flightduration: string;
    flightfrom: string;
    flightto: string;
    departuretime: string;
    landingtime: string;
}

interface Train {
    id: string;
    trainimageurl: string;
    trainname: string;
    trainid: string;
    trainprice: number;
    trainduration: string;
    trainfrom: string;
    trainto: string;
    departuretime: string;
    landingtime: string;
}

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

const AdminPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState("");

    const [tab, setTab] = useState<TabType>("hotels");

    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [flights, setFlights] = useState<Flight[]>([]);
    const [trains, setTrains] = useState<Train[]>([]);
    const [bookings, setBookings] = useState<Booking[]>([]);

    const [hotelForm, setHotelForm] = useState({
        imageUrl: "",
        name: "",
        thaiName: "",
        location: "",
        price: "",
        rating: "",
        score: "",
        comments: "",
        totaltax: "",
    });

    const [flightForm, setFlightForm] = useState({
        flightimgeurl: "",
        flightname: "",
        flightid: "",
        flightprice: "",
        flightduration: "",
        flightfrom: "",
        flightto: "",
        departuretime: "",
        landingtime: "",
    });

    const [trainForm, setTrainForm] = useState({
        trainimageurl: "",
        trainname: "",
        trainid: "",
        trainprice: "",
        trainduration: "",
        trainfrom: "",
        trainto: "",
        departuretime: "",
        landingtime: "",
    });
    

    useEffect(() => {
        const storedLogin = localStorage.getItem("adminLoggedIn");
        if (storedLogin === "true") {
            setIsLogin(true);
        }
        const hotelsData = localStorage.getItem("extraHotels");
        if (hotelsData) {
            try {
                const parsed: Hotel[] = JSON.parse(hotelsData);
                setHotels(parsed);
            } catch (err) {
                console.log("parse extraHotels error", err);
            }
        }
        const flightsData = localStorage.getItem("extraFlights");
        if (flightsData) {
            try {
                const parsed: Flight[] = JSON.parse(flightsData);
                setFlights(parsed);
            } catch (err) {
                console.log("parse extraFlights error", err);
            }
        }
        const trainsData = localStorage.getItem("extraTrains");
        if (trainsData) {
            try {
                const parsed: Train[] = JSON.parse(trainsData);
                setTrains(parsed);
            } catch (err) {
                console.log("parse extraTrains error", err);
            }
        }
        const bookingData = localStorage.getItem("bookings");
        if (bookingData) {
            try {
                const parsed: Booking[] = JSON.parse(bookingData);
                setBookings(parsed);
            } catch (err) {
                console.log("parse bookings error", err);
            }
        }
    }, []);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "123") {
            setIsLogin(true);
            localStorage.setItem("adminLoggedIn", "true");
        } else {
            alert("รหัสผิด");
        }
    };

    const handleLogout = () => {
        setIsLogin(false);
        localStorage.removeItem("adminLoggedIn");
    };

    const handleHotelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHotelForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFlightInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFlightForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTrainInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTrainForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddHotel = (e: React.FormEvent) => {
        e.preventDefault();

        const newHotel: Hotel = {
            id: Date.now().toString(),
            imageUrl: hotelForm.imageUrl,
            name: hotelForm.name,
            thaiName: hotelForm.thaiName,
            location: hotelForm.location,
            price: Number(hotelForm.price),
            rating: hotelForm.rating,
            score: hotelForm.score,
            comments: hotelForm.comments,
            totaltax: Number(hotelForm.totaltax),
        };

        const newList = [...hotels, newHotel];
        setHotels(newList);
        localStorage.setItem("extraHotels", JSON.stringify(newList));

        setHotelForm({
            imageUrl: "",
            name: "",
            thaiName: "",
            location: "",
            price: "",
            rating: "",
            score: "",
            comments: "",
            totaltax: "",
        });
    };

    const handleAddFlight = (e: React.FormEvent) => {
        e.preventDefault();

        const newFlight: Flight = {
            id: Date.now().toString(),
            flightimgeurl: flightForm.flightimgeurl,
            flightname: flightForm.flightname,
            flightid: flightForm.flightid,
            flightprice: Number(flightForm.flightprice),
            flightduration: flightForm.flightduration,
            flightfrom: flightForm.flightfrom,
            flightto: flightForm.flightto,
            departuretime: flightForm.departuretime,
            landingtime: flightForm.landingtime,
        };

        const newList = [...flights, newFlight];
        setFlights(newList);
        localStorage.setItem("extraFlights", JSON.stringify(newList));

        setFlightForm({
            flightimgeurl: "",
            flightname: "",
            flightid: "",
            flightprice: "",
            flightduration: "",
            flightfrom: "",
            flightto: "",
            departuretime: "",
            landingtime: "",
        });
    };

    const handleAddTrain = (e: React.FormEvent) => {
        e.preventDefault();

        const newTrain: Train = {
            id: Date.now().toString(),
            trainimageurl: trainForm.trainimageurl,
            trainname: trainForm.trainname,
            trainid: trainForm.trainid,
            trainprice: Number(trainForm.trainprice),
            trainduration: trainForm.trainduration,
            trainfrom: trainForm.trainfrom,
            trainto: trainForm.trainto,
            departuretime: trainForm.departuretime,
            landingtime: trainForm.landingtime,
        };

        const newList = [...trains, newTrain];
        setTrains(newList);
        localStorage.setItem("extraTrains", JSON.stringify(newList));

        setTrainForm({
            trainimageurl: "",
            trainname: "",
            trainid: "",
            trainprice: "",
            trainduration: "",
            trainfrom: "",
            trainto: "",
            departuretime: "",
            landingtime: "",
        });
    };

    const handleDeleteHotel = (id: string) => {
        const newList = hotels.filter((h) => h.id !== id);
        setHotels(newList);
        localStorage.setItem("extraHotels", JSON.stringify(newList));
    };

    const handleDeleteFlight = (id: string) => {
        const newList = flights.filter((f) => f.id !== id);
        setFlights(newList);
        localStorage.setItem("extraFlights", JSON.stringify(newList));
    };

    const handleDeleteTrain = (id: string) => {
        const newList = trains.filter((t) => t.id !== id);
        setTrains(newList);
        localStorage.setItem("extraTrains", JSON.stringify(newList));
    };

    const handleClearBookings = () => {
        if (window.confirm("ลบข้อมูลการจองทั้งหมดไหม?")) {
            setBookings([]);
            localStorage.setItem("bookings", JSON.stringify([]));
        }
    };

    if (!isLogin) {
        return (
            <div className="bg-gradient-to-b min-h-screen flex flex-col items-center">
                
                <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-md bg-yellow-50/80 shadow-lg flex items-center justify-between py-4 px-8 z-50 border-b border-yellow-100">
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
                            alt="logo"
                            className="w-40 h-auto object-contain drop-shadow-sm"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-lg font-semibold text-gray-700 tracking-wide">Admin Panel</p>
                    </div>
                </nav>

        
                <div className="mt-40 w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 border border-yellow-100 transition-all hover:shadow-yellow-200/70 hover:-translate-y-1 duration-300">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        เข้าสู่ระบบ <span className="text-yellow-500">Admin</span>
                    </h1>
                    <form onSubmit={handleLoginSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-600">
                                รหัสผ่าน
                            </label>
                            <input
                                type="password"
                                className="w-full border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 rounded-lg px-3 py-2 text-gray-700 transition-all outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="กรอกรหัสผ่านของคุณ"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" w-full py-2 rounded-full   text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400  transition-all duration-300 shadow-md hover:shadow-lg font-medium text-[14px] sm:text-[16px]"
                        >
                            เข้าสู่ระบบ
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-gray-500 text-sm">© 2025 Admin Dashboard – Travel System</p>
            </div>

        );
    }

    return (
        <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
            <nav className="fixed top-0 left-0 right-0 w-full shadow-xl flex items-center justify-between bg-yellow-50 py-4 px-6 z-50">
                <div className="flex items-center space-x-3">
                    <img
                        src="https://res.cloudinary.com/de1g7yto1/image/upload/v1760603561/logo_bpu1i9.png"
                        alt="logo"
                        className="w-40 h-auto object-contain"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <p className="text-black font-semibold">Admin Dashboard</p>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-gray-700 hover:underline"
                    >
                        ออกจากระบบ
                    </button>
                </div>
            </nav>

            <div className="mt-24 w-full max-w-6xl px-4 pb-10">
                <div className="flex gap-2 mb-4">
                    <button
                        className={`px-4 py-2 rounded-full text-sm border ${tab === "hotels"
                                ? "bg-yellow-400 text-white border-yellow-400"
                                : "bg-white text-gray-700 border-gray-200"
                            }`}
                        onClick={() => setTab("hotels")}
                    >
                        โรงแรม
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm border ${tab === "flights"
                                ? "bg-yellow-400 text-white border-yellow-400"
                                : "bg-white text-gray-700 border-gray-200"
                            }`}
                        onClick={() => setTab("flights")}
                    >
                        เที่ยวบิน
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm border ${tab === "trains"
                                ? "bg-yellow-400 text-white border-yellow-400"
                                : "bg-white text-gray-700 border-gray-200"
                            }`}
                        onClick={() => setTab("trains")}
                    >
                        รถไฟ
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm border ${tab === "bookings"
                                ? "bg-yellow-400 text-white border-yellow-400"
                                : "bg-white text-gray-700 border-gray-200"
                            }`}
                        onClick={() => setTab("bookings")}
                    >
                        การจอง
                    </button>
                </div>
                {tab === "hotels" && (
                    <>
                        <form
                            onSubmit={handleAddHotel}
                            className="bg-white rounded-xl shadow-md p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                        >
                            <input
                                className="border rounded-md px-3 py-2"
                                name="name"
                                value={hotelForm.name}
                                onChange={handleHotelInputChange}
                                placeholder="ชื่อโรงแรม (EN)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="thaiName"
                                value={hotelForm.thaiName}
                                onChange={handleHotelInputChange}
                                placeholder="ชื่อโรงแรม (TH)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="location"
                                value={hotelForm.location}
                                onChange={handleHotelInputChange}
                                placeholder="ที่ตั้ง"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="price"
                                type="number"
                                value={hotelForm.price}
                                onChange={handleHotelInputChange}
                                placeholder="ราคา / คืน"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="totaltax"
                                type="number"
                                value={hotelForm.totaltax}
                                onChange={handleHotelInputChange}
                                placeholder="ราคารวมภาษี"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="rating"
                                value={hotelForm.rating}
                                onChange={handleHotelInputChange}
                                placeholder="เรตติ้งดาว เช่น ★★★★☆"
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="score"
                                value={hotelForm.score}
                                onChange={handleHotelInputChange}
                                placeholder="คะแนน เช่น 9.2/10"
                            />
                            <input
                                className="border rounded-md px-3 py-2 md:col-span-2"
                                name="imageUrl"
                                value={hotelForm.imageUrl}
                                onChange={handleHotelInputChange}
                                placeholder="ลิงก์รูปภาพโรงแรม (URL)"
                                required
                            />

                            <button
                                type="submit"
                                className="md:col-span-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400   transition-all duration-300  font-semibold py-2 rounded-full"
                            >
                                เพิ่มโรงแรม
                            </button>
                        </form>

                        <div className="bg-white rounded-xl shadow-md p-4">
                            <h2 className="text-xl font-semibold mb-3">
                                โรงแรมที่เพิ่มจาก Admin ({hotels.length})
                            </h2>
                            {hotels.length === 0 ? (
                                <p className="text-gray-500">ยังไม่มีข้อมูลโรงแรม</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-2 px-2 text-left">รูป</th>
                                                <th className="py-2 px-2 text-left">ชื่อ (TH)</th>
                                                <th className="py-2 px-2 text-left">ชื่อ (EN)</th>
                                                <th className="py-2 px-2 text-left">ที่ตั้ง</th>
                                                <th className="py-2 px-2 text-left">ราคา</th>
                                                <th className="py-2 px-2 text-left">จัดการ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {hotels.map((hotel) => (
                                                <tr key={hotel.id} className="border-b">
                                                    <td className="py-2 px-2">
                                                        <img
                                                            src={hotel.imageUrl}
                                                            alt={hotel.name}
                                                            className="w-16 h-16 object-cover rounded-md"
                                                        />
                                                    </td>
                                                    <td className="py-2 px-2">{hotel.thaiName}</td>
                                                    <td className="py-2 px-2">{hotel.name}</td>
                                                    <td className="py-2 px-2">{hotel.location}</td>
                                                    <td className="py-2 px-2">
                                                        {hotel.price.toLocaleString()} ฿
                                                    </td>
                                                    <td className="py-2 px-2">
                                                        <button
                                                            onClick={() => handleDeleteHotel(hotel.id)}
                                                            className="text-red-500 hover:underline"
                                                        >
                                                            ลบ
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {tab === "flights" && (
                    <>
                        <form
                            onSubmit={handleAddFlight}
                            className="bg-white rounded-xl shadow-md p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                        >
                            <input
                                className="border rounded-md px-3 py-2 md:col-span-2"
                                name="flightimgeurl"
                                value={flightForm.flightimgeurl}
                                onChange={handleFlightInputChange}
                                placeholder="ลิงก์รูปภาพสายการบิน (URL)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="flightname"
                                value={flightForm.flightname}
                                onChange={handleFlightInputChange}
                                placeholder="ชื่อสายการบิน เช่น Nok Air"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="flightid"
                                value={flightForm.flightid}
                                onChange={handleFlightInputChange}
                                placeholder="รหัสไฟลท์ เช่น DD342"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="flightprice"
                                type="number"
                                value={flightForm.flightprice}
                                onChange={handleFlightInputChange}
                                placeholder="ราคา (บาท)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="flightduration"
                                value={flightForm.flightduration}
                                onChange={handleFlightInputChange}
                                placeholder="ระยะเวลาเดินทาง เช่น 1ชั่วโมง 5นาที"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="flightfrom"
                                value={flightForm.flightfrom}
                                onChange={handleFlightInputChange}
                                placeholder="จาก (ต้นทาง)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="flightto"
                                value={flightForm.flightto}
                                onChange={handleFlightInputChange}
                                placeholder="ไป (ปลายทาง)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="departuretime"
                                value={flightForm.departuretime}
                                onChange={handleFlightInputChange}
                                placeholder="เวลาออก เช่น 11:00"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="landingtime"
                                value={flightForm.landingtime}
                                onChange={handleFlightInputChange}
                                placeholder="เวลาถึง เช่น 12:05"
                                required
                            />

                            <button
                                type="submit"
                               className="md:col-span-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400   transition-all duration-300  font-semibold py-2 rounded-full"
                            >
                                เพิ่มเที่ยวบิน
                            </button>
                        </form>

                        <div className="bg-white rounded-xl shadow-md p-4">
                            <h2 className="text-xl font-semibold mb-3">
                                เที่ยวบินที่เพิ่มจาก Admin ({flights.length})
                            </h2>
                            {flights.length === 0 ? (
                                <p className="text-gray-500">ยังไม่มีข้อมูลเที่ยวบิน</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-2 px-2 text-left">รูป</th>
                                                <th className="py-2 px-2 text-left">สายการบิน</th>
                                                <th className="py-2 px-2 text-left">รหัสไฟลท์</th>
                                                <th className="py-2 px-2 text-left">เส้นทาง</th>
                                                <th className="py-2 px-2 text-left">ราคา</th>
                                                <th className="py-2 px-2 text-left">จัดการ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {flights.map((flight) => (
                                                <tr key={flight.id} className="border-b">
                                                    <td className="py-2 px-2">
                                                        <img
                                                            src={flight.flightimgeurl}
                                                            alt={flight.flightname}
                                                            className="w-16 h-16 object-cover rounded-md"
                                                        />
                                                    </td>
                                                    <td className="py-2 px-2">{flight.flightname}</td>
                                                    <td className="py-2 px-2">{flight.flightid}</td>
                                                    <td className="py-2 px-2">
                                                        {flight.flightfrom} → {flight.flightto}
                                                    </td>
                                                    <td className="py-2 px-2">
                                                        {flight.flightprice.toLocaleString()} ฿
                                                    </td>
                                                    <td className="py-2 px-2">
                                                        <button
                                                            onClick={() => handleDeleteFlight(flight.id)}
                                                            className="text-red-500 hover:underline"
                                                        >
                                                            ลบ
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {tab === "trains" && (
                    <>
                        <form
                            onSubmit={handleAddTrain}
                            className="bg-white rounded-xl shadow-md p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                        >
                            <input
                                className="border rounded-md px-3 py-2 md:col-span-2"
                                name="trainimageurl"
                                value={trainForm.trainimageurl}
                                onChange={handleTrainInputChange}
                                placeholder="ลิงก์รูปภาพรถไฟ (URL)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="trainname"
                                value={trainForm.trainname}
                                onChange={handleTrainInputChange}
                                placeholder="ชื่อรถไฟ / ขบวน"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="trainid"
                                value={trainForm.trainid}
                                onChange={handleTrainInputChange}
                                placeholder="รหัสรถไฟ"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="trainprice"
                                type="number"
                                value={trainForm.trainprice}
                                onChange={handleTrainInputChange}
                                placeholder="ราคา (บาท)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="trainduration"
                                value={trainForm.trainduration}
                                onChange={handleTrainInputChange}
                                placeholder="ระยะเวลาเดินทาง"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="trainfrom"
                                value={trainForm.trainfrom}
                                onChange={handleTrainInputChange}
                                placeholder="จาก (ต้นทาง)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="trainto"
                                value={trainForm.trainto}
                                onChange={handleTrainInputChange}
                                placeholder="ไป (ปลายทาง)"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="departuretime"
                                value={trainForm.departuretime}
                                onChange={handleTrainInputChange}
                                placeholder="เวลาออก เช่น 07:30"
                                required
                            />
                            <input
                                className="border rounded-md px-3 py-2"
                                name="landingtime"
                                value={trainForm.landingtime}
                                onChange={handleTrainInputChange}
                                placeholder="เวลาถึง เช่น 12:00"
                                required
                            />

                            <button
                                type="submit"
                                className="md:col-span-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400   transition-all duration-300  font-semibold py-2 rounded-full"
                            >
                                เพิ่มรถไฟ
                            </button>
                        </form>
                        <div className="bg-white rounded-xl shadow-md p-4">
                            <h2 className="text-xl font-semibold mb-3">
                                รถไฟที่เพิ่มจาก Admin ({trains.length})
                            </h2>
                            {trains.length === 0 ? (
                                <p className="text-gray-500">ยังไม่มีข้อมูลรถไฟ</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-2 px-2 text-left">รูป</th>
                                                <th className="py-2 px-2 text-left">ชื่อขบวน</th>
                                                <th className="py-2 px-2 text-left">รหัส</th>
                                                <th className="py-2 px-2 text-left">เส้นทาง</th>
                                                <th className="py-2 px-2 text-left">ราคา</th>
                                                <th className="py-2 px-2 text-left">จัดการ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {trains.map((train) => (
                                                <tr key={train.id} className="border-b">
                                                    <td className="py-2 px-2">
                                                        <img
                                                            src={train.trainimageurl}
                                                            alt={train.trainname}
                                                            className="w-16 h-16 object-cover rounded-md"
                                                        />
                                                    </td>
                                                    <td className="py-2 px-2">{train.trainname}</td>
                                                    <td className="py-2 px-2">{train.trainid}</td>
                                                    <td className="py-2 px-2">
                                                        {train.trainfrom} → {train.trainto}
                                                    </td>
                                                    <td className="py-2 px-2">
                                                        {train.trainprice.toLocaleString()} ฿
                                                    </td>
                                                    <td className="py-2 px-2">
                                                        <button
                                                            onClick={() => handleDeleteTrain(train.id)}
                                                            className="text-red-500 hover:underline"
                                                        >
                                                            ลบ
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {tab === "bookings" && (
                    <div className="bg-white rounded-xl shadow-md p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-xl font-semibold">
                                รายการจองทั้งหมด ({bookings.length})
                            </h2>
                            {bookings.length > 0 && (
                                <button
                                    onClick={handleClearBookings}
                                    className="text-sm text-red-500 hover:underline"
                                >
                                    ลบข้อมูลการจองทั้งหมด
                                </button>
                            )}
                        </div>
                        {bookings.length === 0 ? (
                            <p className="text-gray-500">ยังไม่มีข้อมูลการจอง</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="py-2 px-2 text-left">เวลา</th>
                                            <th className="py-2 px-2 text-left">ประเภท</th>
                                            <th className="py-2 px-2 text-left">ชื่อ</th>
                                            <th className="py-2 px-2 text-left">ราคา</th>
                                            <th className="py-2 px-2 text-left">รายละเอียด</th>
                                            <th className="py-2 px-2 text-left">ตัวเลือก</th>
                                            <th className="py-2 px-2 text-left">อีเมล</th>
                                            <th className="py-2 px-2 text-left">เบอร์โทร</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.map((b) => (
                                            <tr key={b.id} className="border-b">
                                                <td className="py-2 px-2">{b.createdAt}</td>
                                                <td className="py-2 px-2">
                                                    {b.type === "hotel"
                                                        ? "โรงแรม"
                                                        : b.type === "flight"
                                                            ? "เที่ยวบิน"
                                                            : "รถไฟ"}
                                                </td>
                                                <td className="py-2 px-2 text-left ">{b.name}</td>
                                                <td className="py-2 px-2 text-left" >{b.price.toLocaleString()}</td>
                                                 <td className="py-2 px-2 text-left flex-nowrap">{b.details}</td>
                                                 <td className="py-2 px-2 text-left flex-nowrap">{b.contact}</td>
                                                 <td className="py-2 px-2 text-left flex-nowrap">{b.email}</td>
                                                 <td className="py-2 px-2 text-left flex-nowrap">{b.phone}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;
