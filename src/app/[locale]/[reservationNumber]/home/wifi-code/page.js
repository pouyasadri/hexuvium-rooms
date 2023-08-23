"use client"
import {motion} from "framer-motion";
import WifiPageHeader from "@/components/pages/wifiPage/WifiPageHeader";
import WifiName from "@/components/pages/wifiPage/WifiName";
import WifiKey from "@/components/pages/wifiPage/WifiKey";
import WifiDetails from "@/components/pages/wifiPage/WifiDetails";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {client} from "../../../../../../sanity/lib/client";
import {useParams} from "next/navigation";

export default function WifiPage() {
    const params = useParams()
    const [wifiName, setWifiName] = useState(null);
    const [wifiPassword, setWifiPassword] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const reservationNumber = params.reservationNumber;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
           Wifi
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {Wifi: {wifiName}} = result;
                const {Wifi: {wifiPassword}} = result;
                setWifiName(wifiName);
                setWifiPassword(wifiPassword);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]); // Add apartmentName to the dependency array

    const t = useTranslations('wifiPage');
    return (
        <div
            className="backdrop-blur-sm">
            <BackButton/>

            <div className="h-screen flex flex-col items-center justify-between ">
                {isLoading ? (
                    <div className={"flex text-4xl text-white text-center"}>
                        <svg
                            className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.89 3.182 8.118l2.828-2.827z"
                            ></path>
                        </svg>
                        Loading...
                    </div>) : (
                    <>
                        <motion.div initial={{opacity: 0, scale: 0.5}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}>

                            <WifiPageHeader title={t('title')}/>

                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className={"bg-neutral-200 px-20 w-screen rounded-t-xl z-10 h-[60%] "}>
                            <WifiDetails details={t.raw('details')}/>
                            <WifiName wifiName={t('name')} name={wifiName}/>
                            <WifiKey copy={t('copy')} copied={t('copied')} password={t('key')} text={wifiPassword}/>
                        </motion.div>
                    </>)}

            </div>

        </div>
    )
}
