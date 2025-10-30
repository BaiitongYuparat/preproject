import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelCard, { Hotel } from "./HotelCard";

type Props = {
  filename: string; // เช่น "Hotelsdata.json"
};

const HotelList: React.FC<Props> = ({ filename }) => {
  const [fileJson, setFileJson] = useState<string>(filename);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // เปลี่ยนไฟล์เมื่อ props เปลี่ยน
  useEffect(() => {
    setFileJson(filename);
  }, [filename]);

  // โหลดข้อมูลเมื่อ fileJson เปลี่ยน
  useEffect(() => {
    let cancelled = false;

    const fetchHotels = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`/data/client/${fileJson}`, {
          headers: { "Cache-Control": "no-cache" },
        });
        if (!cancelled) setHotels(res.data as Hotel[]);
      } catch (err: any) {
        if (!cancelled) setError(err?.message || "โหลดข้อมูลล้มเหลว");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchHotels();
    return () => {
      cancelled = true;
    };
  }, [fileJson]);

  if (loading) {
    return <div className="py-10 text-center text-gray-600">กำลังโหลดโรงแรม…</div>;
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-600">
        เกิดข้อผิดพลาด: {error}
      </div>
    );
  }

  if (!hotels?.length) {
    return <div className="py-10 text-center text-gray-600">ไม่พบข้อมูลโรงแรม</div>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hotels.map((h) => (
        <HotelCard key={h.menuName} hotel={h} />
      ))}
    </div>
  );
};

export default HotelList;
