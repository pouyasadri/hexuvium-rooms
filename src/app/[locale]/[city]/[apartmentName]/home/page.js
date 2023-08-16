"use client"
import {AnimatePresence, motion} from "framer-motion";
import WifiCode from "@/components/cards/wifiCode/WifiCode";
import Keys from "@/components/cards/digiCode/Keys";
import Location from "@/components/cards/location/Location";
import PhoneNumbers from "@/components/cards/phoneNumbers/PhoneNumbers";
import Information from "@/components/cards/information/Information";
import ArrivalInformation from "@/components/cards/arrivalInformation/ArrivalInformation";
import DepartureInformation from "@/components/cards/departureInformation/DepartureInformation";
import Header from "@/components/header/Header";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import {useEffect, useState} from "react";
import Message from "@/components/message";
import {useSessionStorage} from "@/useSessionStorage";



export default function Home({params}) {
    const t = useTranslations('index');
    const [isOpen, setOpen] = useSessionStorage('isMessageOpen', true);
    useEffect(() => {
        sessionStorage.setItem('terms', JSON.stringify(isOpen));
    }, [isOpen]);
    const openHandle = () => {
        setOpen(false);
    }
    return (
        <div>
            <div className="relative h-screen grid items-center justify-center place-items-center backdrop-blur-sm">
                <Message isopen={isOpen} openHandle={openHandle}/>
                <Header city={params.city}/>
                <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
                    <Link href={"home/wifi-code"}>
                        <AnimatePresence mode="wait" initial={false}>
                            <WifiCode title={t('wifi')}/>
                        </AnimatePresence>
                    </Link>
                    <Link href={"home/keys"}>
                        <Keys title={t('keys')}/>
                    </Link>
                    <Link href={"home/location"}>
                        <Location title={t('location')}/>
                    </Link>
                    <Link href={"home/arrival"}>
                        <ArrivalInformation title={t('arrival')}/>
                    </Link>
                    <Link href={"home/departure"}>
                        <DepartureInformation title={t('departure')}/>
                    </Link>
                    <Link href={"home/phoneNumbers"}>
                        <PhoneNumbers title={t('phone')}/>
                    </Link>
                    <Link href={"home/information"}>
                        <Information title={t('info')}/>
                    </Link>


                </div>
            </div>

        </div>
    )
}
