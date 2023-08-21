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
import {groq} from "next-sanity";
import {client} from "../../../../../../../sanity/lib/client";

export default function ArrivalOriginalPage() {
    const [isArrival, setArrival] = useState(false);
    const [isInternal, setInternal] = useState(false);
    const [isOpen, setOpen] = useState(false);
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

    const apartmentName = params.apartmentName;
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          arrivalInformation
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                const {arrivalInformation: {arrivalTime}} = result;
                const {arrivalInformation: {internalRules}} = result;
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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]);
    return (
        <div className={"backdrop-blur-sm"}>
            {!isOpen && <BackButton/>}
            {isOpen && <CardsBackButton setAllToFalse={setAllToFalse}/>}
            <div className="h-screen flex flex-col items-center justify-between backdrop-blur-sm">
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
                    className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 h-[60%] justify-between"}>
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

            </div>
        </div>
    )
}
