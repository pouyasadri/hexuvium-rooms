"use client"
import {motion} from "framer-motion";
import DigiCodePageHeader from "@/components/pages/digiCodePage/DigiCodePageHeader";
import DigiCodePageDetails from "@/components/pages/digiCodePage/DigiCodePageDetails";
import KeyPageInfo from "@/components/pages/digiCodePage/KeyPageInfo";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {client} from "../../../../../../sanity/lib/client";

export default function DigiCodePage() {
    const params = useParams()
    const [data, setData] = useState(null);
    const reservationNumber = params.reservationNumber;
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
           keys
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {keys} = result
                // Log fetched data
                let keyData;
                switch (params.locale) {
                    case "fr":
                        keyData = keys.fr;
                        break;
                    case "en":
                        keyData = keys.en;
                        break;
                    case "zh":
                        keyData = keys.zh;
                        break;
                }
                setData(keyData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]); // Add apartmentName to the dependency array

    const t = useTranslations('keysPage');
    return (
        <div className={"backdrop-blur-sm"}>
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
                            <DigiCodePageHeader title={t('title')}/>

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
                            <DigiCodePageDetails details={t('details')}/>
                            <KeyPageInfo info={t('information')} text={data}/>
                        </motion.div>
                    </>)}
            </div>

        </div>
    )
}
