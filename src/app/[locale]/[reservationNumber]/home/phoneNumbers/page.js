"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import PhoneNumberHeader from "@/components/pages/phoneNumberPage/PhoneNumberHeader";
import Police from "@/components/pages/phoneNumberPage/Police";
import Firefighter from "@/components/pages/phoneNumberPage/Firefighter";
import Emergencies from "@/components/pages/phoneNumberPage/Emergencies";
import Reception from "@/components/pages/phoneNumberPage/Reception";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {groq} from "next-sanity";
import {client} from "../../../../../../sanity/lib/client";

export default function PhoneNumberPage() {
    const t = useTranslations('phoneNumberPage');
    const params = useParams()
    const [data, setData] = useState(null);
    const reservationNumber = params.reservationNumber;
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
          receptionPhone
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {receptionPhone} = result
                setData(receptionPhone);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]); // A
    return (
        <div className={"backdrop-blur-sm"}>
            <BackButton/>
            <div className="h-screen flex flex-col items-center justify-between">
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
                            <PhoneNumberHeader title={t('title')}/>

                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 h-[60%] "}>
                            <p className={"text-neutral-700 font-semibold my-5 "}>{t('emergencyNumber')}</p>
                            <div
                                className={"rounded-xl bg-white shadow-inner p-4 mb-5 px-20 max-md:px-5 flex justify-between items-center"}>
                                <Police police={t('police')}/>
                                <Firefighter firefighter={t('firefighter')}/>
                                <Emergencies emergency={t('emergency')}/>
                            </div>
                            <Reception reception={t('reception')} tel={data}/>
                        </motion.div>
                    </>)}
            </div>
        </div>
    )
}
