"use client"
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import InformationPageHeader from "@/components/pages/inofrmationPage/InformationPageHeader";
import InformationPageDetails from "@/components/pages/inofrmationPage/InformationPageDetails";
import AnimalsCard from "@/components/pages/inofrmationPage/cards/AnimalsCard";
import GarbageCard from "@/components/pages/inofrmationPage/cards/GarbageCard";
import ParkingCard from "@/components/pages/inofrmationPage/cards/ParkingCard";
import ServicesCard from "@/components/pages/inofrmationPage/cards/ServicesCard";
import AnimalsPage from "@/components/pages/inofrmationPage/pages/AnimalsPage";
import GarbagePage from "@/components/pages/inofrmationPage/pages/GarbagePage";
import ParkingPage from "@/components/pages/inofrmationPage/pages/ParkingPage";
import ServicePage from "@/components/pages/inofrmationPage/pages/ServicePage";
import BackButton from "@/components/BackButton";
import CardsBackButton from "@/components/CardsBackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {groq} from "next-sanity";
import {client} from "../../../../../../sanity/lib/client";

export default function InformationPage() {
    const [isAnimals, setAnimals] = useState(false);
    const [isGarbage, setGarbage] = useState(false);
    const [isParking, setParking] = useState(false);
    const [isService, setService] = useState(false);

    const [isOpen, setOpen] = useState(false);
    const clickHandle = () => {
        setOpen(true);
    }

    const animalsHandle = () => {
        setAnimals(true);
        clickHandle();
    }
    const garbageHandle = () => {
        setGarbage(true);
        clickHandle();
    }
    const parkingHandle = () => {
        setParking(true);
        clickHandle();
    }
    const servicesHandle = () => {
        setService(true);
        clickHandle();
    }
    const setAllToFalse = () => {
        setAnimals(false);
        setGarbage(false);
        setParking(false);
        setService(false);
        setOpen(false);
    }
    const t = useTranslations('informationPage');
    const params = useParams()
    const [animalsRules, setAnimalsRules] = useState(null);
    const [garbageRules, setGarbageRules] = useState(null);
    const [parkingRules, setParkingRules] = useState(null);
    const [servicesRules, setServicesRules] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const reservationNumber = params.reservationNumber;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
          information
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {information: {animalRules}} = result;
                const {information: {garbage}} = result;
                const {information: {parking}} = result;
                const {information: {service}} = result;
                if (animalRules) {
                    let animals;
                    switch (params.locale) {
                        case "fr":
                            animals = animalRules.fr;
                            break;
                        case "en":
                            animals = animalRules.en;
                            break;
                        case "zh":
                            animals = animalRules.zh;
                            break;
                    }
                    setAnimalsRules(animals);
                }
                if (garbage) {
                    let garbageRule;
                    switch (params.locale) {
                        case "fr":
                            garbageRule = garbage.fr;
                            break;
                        case "en":
                            garbageRule = garbage.en;
                            break;
                        case "zh":
                            garbageRule = garbage.zh;
                            break;
                    }
                    setGarbageRules(garbageRule);
                }
                if (service) {
                    let serviceRule;
                    switch (params.locale) {
                        case "fr":
                            serviceRule = service.fr;
                            break;
                        case "en":
                            serviceRule = service.en;
                            break;
                        case "zh":
                            serviceRule = service.zh;
                            break;
                    }
                    setServicesRules(serviceRule);
                }
                if (parking) {
                    let parkingRule;
                    switch (params.locale) {
                        case "fr":
                            parkingRule = parking.fr;
                            break;
                        case "en":
                            parkingRule = parking.en;
                            break;
                        case "zh":
                            parkingRule = parking.zh;
                            break;
                    }
                    setParkingRules(parkingRule);
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
                            <InformationPageHeader title={t('title')}/>

                        </motion.div>
                        <motion.div

                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 h-[60%] justify-between "}>
                            <div className={isOpen ? "hidden" : ""}>
                                <InformationPageDetails details={t('details')}/>
                                <div className={"max-md:gap-2 gap-4 grid grid-cols-3"}>
                                    <AnimalsCard animalsHandle={animalsHandle} animals={t('animals')}/>
                                    <GarbageCard garbageHandle={garbageHandle} garbage={t('garbage')}/>
                                    <ParkingCard parkingHandle={parkingHandle} parking={t('parking')}/>
                                    <ServicesCard servicesHandle={servicesHandle} services={t('services')}/>
                                </div>
                            </div>
                            <AnimalsPage isAnimals={isAnimals} animals={t('animals')} text={animalsRules}/>
                            <GarbagePage isGarbage={isGarbage} garbage={t('garbage')} text={garbageRules}/>
                            <ParkingPage isParking={isParking} parking={t('parking')} text={parkingRules}/>
                            <ServicePage isService={isService} services={t('services')} text={servicesRules}/>
                        </motion.div>
                    </>)}
            </div>
        </div>
    )
}
