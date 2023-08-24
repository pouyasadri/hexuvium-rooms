"use client"
import {motion} from "framer-motion";
import ArrivalPageHeader from "@/components/pages/arrivalPage/ArrivalPageHeader";
import ArrivalPageDetails from "@/components/pages/arrivalPage/arrivalPageDetails";
import {useEffect, useState} from "react";
import ArrivalCard from "@/components/pages/arrivalPage/cards/ArrivalCard";
import InternalCard from "@/components/pages/arrivalPage/cards/internalCard";
import ArrivalPage from "@/components/pages/arrivalPage/pages/ArrivalPage";
import InternalPage from "@/components/pages/arrivalPage/pages/InternalPage";
import BackButton from "@/components/BackButton";
import CardsBackButton from "@/components/CardsBackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {client} from "../../../../../../sanity/lib/client";

export default function ArrivalOriginalPage() {
    const [isArrival, setArrival] = useState(false);
    const [isInternal, setInternal] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const t = useTranslations('arrivalPage');

    const clickHandle = () => {
        setOpen(true);
    }
    const arrivalHandle = () => {
        setArrival(true);
        clickHandle();
    }
    const internalHandle = () => {
        setInternal(true);
        clickHandle();
    }
    const setAllToFalse = () => {
        setArrival(false);
        setInternal(false);
        setOpen(false);
    }
    const params = useParams()
    const [internalRules, setInternalRules] = useState(null);
    const [arrivalTime, setArrivalTime] = useState(null);

    const reservationNumber = params.reservationNumber;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
          arrivalInformation
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {arrivalInformation: {arrivalTime}} = result;
                const {arrivalInformation: {internalRules}} = result;
                if (arrivalTime) {
                    let time;
                    switch (params.locale) {
                        case "fr":
                            time = arrivalTime.fr;
                            break;
                        case "en":
                            time = arrivalTime.en;
                            break;
                        case "zh":
                            time = arrivalTime.zh;
                            break;
                    }
                    setArrivalTime(time);
                }
                if (internalRules) {
                    let rules;
                    switch (params.locale) {
                        case "fr":
                            rules = internalRules.fr;
                            break;
                        case "en":
                            rules = internalRules.en;
                            break;
                        case "zh":
                            rules = internalRules.zh;
                            break;
                    }

                    setInternalRules(rules);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]);
    return (
        <div className={"backdrop-blur-sm"}>
            {!isOpen && <BackButton/>}
            {isOpen && <CardsBackButton setAllToFalse={setAllToFalse}/>}
            <div className="min-h-screen max-h-fit flex flex-col items-center justify-between">
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
                            <ArrivalPageHeader title={t('title')}/>

                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 min-h-[60%] max-h-fit justify-between"}>
                            <div className={isOpen ? "hidden" : ""}>
                                <ArrivalPageDetails details={t('details')}/>
                                <div className={"gap-4 grid grid-cols-2"}>
                                    <ArrivalCard arrivalHandle={arrivalHandle} arrivalTime={t('arrivalTime')}/>
                                    <InternalCard internalHandle={internalHandle} internal={t('internal')}/>
                                </div>
                            </div>
                            <ArrivalPage isArrival={isArrival} arrivalTime={t('arrivalTime')} text={arrivalTime}/>
                            <InternalPage isInternal={isInternal} internal={t('internal')} text={internalRules}/>
                        </motion.div>
                    </>)}
            </div>
        </div>
    )
}
