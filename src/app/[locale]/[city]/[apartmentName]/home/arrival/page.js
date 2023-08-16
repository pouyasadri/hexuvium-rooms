"use client"
import {motion} from "framer-motion";
import ArrivalPageHeader from "@/components/pages/arrivalPage/ArrivalPageHeader";
import ArrivalPageDetails from "@/components/pages/arrivalPage/arrivalPageDetails";
import {useState} from "react";
import RecallCard from "@/components/pages/arrivalPage/cards/RecallCard";
import ArrivalCard from "@/components/pages/arrivalPage/cards/ArrivalCard";
import InternalCard from "@/components/pages/arrivalPage/cards/internalCard";
import KeysCard from "@/components/pages/arrivalPage/cards/KeysCard";
import RecallPage from "@/components/pages/arrivalPage/pages/RecallPage";
import ArrivalPage from "@/components/pages/arrivalPage/pages/ArrivalPage";
import InternalPage from "@/components/pages/arrivalPage/pages/InternalPage";
import KeysPage from "@/components/pages/arrivalPage/pages/KeysPage";
import BackButton from "@/components/BackButton";
import CardsBackButton from "@/components/CardsBackButton";
import {useTranslations} from "next-intl";

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
                    <ArrivalPage isArrival={isArrival} arrivalTime={t('arrivalTime')}/>
                    <InternalPage isInternal={isInternal} internal={t('internal')}/>
                </motion.div>

            </div>
        </div>
    )
}
