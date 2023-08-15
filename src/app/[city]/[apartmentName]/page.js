"use client"
import {AnimatePresence, motion} from "framer-motion";
import WifiCode from "@/components/cards/wifiCode/WifiCode";
import Digicode from "@/components/cards/digiCode/Digicode";
import Location from "@/components/cards/location/Location";
import PhoneNumbers from "@/components/cards/phoneNumbers/PhoneNumbers";
import Information from "@/components/cards/information/Information";
import ArrivalInformation from "@/components/cards/arrivalInformation/ArrivalInformation";
import DepartureInformation from "@/components/cards/departureInformation/DepartureInformation";
import Header from "@/components/header/Header";
import Link from "next/link";

export default function Home({params}) {
    return (
        <div>
            <div className="h-screen grid items-center justify-center place-items-center backdrop-blur-sm">
                <Header city={params.city}/>
                <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8">
                    <Link href={params.apartmentName + "/wifi-code"}>
                        <AnimatePresence mode="wait" initial={false}>
                            <WifiCode/>
                        </AnimatePresence>
                    </Link>
                    <Link href={params.apartmentName + "/digi-code"}>
                        <Digicode/>
                    </Link>
                    <Link href={params.apartmentName + "/location"}>
                        <Location/>
                    </Link>
                    <Link href={params.apartmentName + "/phoneNumbers"}>
                        <PhoneNumbers/>
                    </Link>
                    <Link href={params.apartmentName + "/information"}>
                        <Information/>
                    </Link>
                    <Link href={params.apartmentName + "/arrival"}>
                        <ArrivalInformation/>
                    </Link>
                    <Link href={params.apartmentName + "/departure"}>
                        <DepartureInformation/>
                    </Link>
                </div>
            </div>

        </div>
    )
}
