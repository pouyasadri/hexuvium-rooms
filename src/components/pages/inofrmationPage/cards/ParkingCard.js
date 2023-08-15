import {useState} from "react";

export default function ParkingCard({parkingHandle}) {

    return (
        <div
            onClick={parkingHandle}
            className={"rounded bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 px-2 flex-col cursor-pointer"}>
            <img className={"mx-auto my-0"} width="64" height="64"
                 src="https://img.icons8.com/dusk/64/parking.png" alt="parking"/>
            <p className={"text-center mt-2.5"}>Parking</p>

        </div>
    )
}
