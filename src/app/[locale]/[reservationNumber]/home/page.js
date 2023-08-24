"use client"
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
import {client} from "../../../../../sanity/lib/client";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useParams} from "next/navigation";
import Message from "@/components/message";


export default function Home() {
    const [isOpen, setOpen] = useState(true);
    const params = useParams()
    const reservationNumber = params.reservationNumber;
    const [citySlug1, setCitySlug1] = useState(null);
    const [message, setMessage] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
          city->,
          welcomeMessage
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );

                console.log("Fetched data:", result); // Log fetched data
                const {city: {cityName}} = result;
                const {city: {citySlug}} = result;
                const {welcomeMessage} = result;
                let citySlugData;
                let cityNameData;
                let messageData;
                switch (params.locale) {
                    case "fr":
                        cityNameData = cityName.fr;
                        citySlugData = citySlug.fr;
                        messageData = welcomeMessage.fr;
                        break;
                    case "en":
                        cityNameData = cityName.en;
                        citySlugData = citySlug.en;
                        messageData = welcomeMessage.en;

                        break;
                    case "zh":
                        cityNameData = cityName.zh;
                        citySlugData = citySlug.zh;
                        messageData = welcomeMessage.zh;

                        break;
                }
                setCitySlug1(citySlugData);
                setMessage(messageData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]); // Add apartmentName to the dependency array
    const t = useTranslations('index');
    const openHandle = () => {
        setOpen(false);
    }
    return (


        <div className="min-h-screen max-h-fit grid items-center justify-center place-items-center backdrop-blur-sm">
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={"main"}
                    initial={{x: 300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -300, opacity: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                >
                    <Message isopen={isOpen} openHandle={openHandle} message={message}/>
                    <Header slug={citySlug1}/>
                    <div
                        className={params.locale === "zh" ? "grid grid-cols-3 max-md:grid-cols-2 gap-6 mx-auto my-0 mt-5" : "grid grid-cols-3 max-md:grid-cols-2 gap-6 w-[60%] mx-auto my-0 mt-5"}>
                        <Link href={"home/wifi-code"}>
                            <WifiCode title={t('wifi')}/>
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
                </motion.div>
            </AnimatePresence>
        </div>


    )
}
