import React from "react";

interface TrainsCardProps {

    trainprice: number // ราคาต่อคน
    trainduration: string // เวลาในการเดินทาง
    trainfrom: string // จาก
    trainto: string // ถึง
    departuretime: string // เวลาเดินทาง
    landingtime: string // เวลาถึง
}

const TrainsCard: React.FC<TrainsCardProps> = ({
    trainprice,
    trainduration,
    trainfrom,
    trainto,
    departuretime,
    landingtime
}) => {

    return(
        <div>
            
        </div>
    )
}