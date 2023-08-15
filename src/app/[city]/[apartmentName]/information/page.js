"use client"
import {motion} from "framer-motion";
import {useState} from "react";
import InformationPageHeader from "@/components/pages/inofrmationPage/InformationPageHeader";
import InformationPageDetails from "@/components/pages/inofrmationPage/InformationPageDetails";
import HouseCard from "@/components/pages/inofrmationPage/cards/HouseCard";
import AnimalsCard from "@/components/pages/inofrmationPage/cards/AnimalsCard";
import {Rule} from "postcss";
import RulesCard from "@/components/pages/inofrmationPage/cards/RulesCard";
import GarbageCard from "@/components/pages/inofrmationPage/cards/GarbageCard";
import ParkingCard from "@/components/pages/inofrmationPage/cards/ParkingCard";
import ServicesCard from "@/components/pages/inofrmationPage/cards/ServicesCard";
import HousePage from "@/components/pages/inofrmationPage/pages/HousePage";
import AnimalsPage from "@/components/pages/inofrmationPage/pages/AnimalsPage";
import RulesPage from "@/components/pages/inofrmationPage/pages/RulesPage";
import GarbagePage from "@/components/pages/inofrmationPage/pages/GarbagePage";
import ParkingPage from "@/components/pages/inofrmationPage/pages/ParkingPage";
import ServicePage from "@/components/pages/inofrmationPage/pages/ServicePage";

export default function InformationPage() {
    const [isHouse, setHouse] = useState(false);
    const [isAnimals, setAnimals] = useState(false);
    const [isRules, setRules] = useState(false);
    const [isGarbage, setGarbage] = useState(false);
    const [isParking, setParking] = useState(false);
    const [isService, setService] = useState(false);

    const [isOpen, setOpen] = useState(false);
    const clickHandle = () => {
        setOpen(true);
    }

    const houseHandle = () => {
        setHouse(true);
        clickHandle();
    }
    const animalsHandle = () => {
        setAnimals(true);
        clickHandle();
    }
    const rulesHandle = () => {
        setRules(true);
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
    return (
        <div className="h-screen flex flex-col items-center justify-between backdrop-blur-sm">
            <motion.div initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                <InformationPageHeader/>

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
                    <InformationPageDetails/>
                    <div className={"max-md:gap-2 gap-4 grid grid-cols-3"}>
                        <HouseCard houseHandle={houseHandle}/>
                        <AnimalsCard animalsHandle={animalsHandle}/>
                        <RulesCard rulesHandle={rulesHandle}/>
                        <GarbageCard garbageHandle={garbageHandle}/>
                        <ParkingCard parkingHandle={parkingHandle}/>
                        <ServicesCard servicesHandle={servicesHandle}/>
                    </div>
                </div>
                <HousePage isHouse={isHouse}/>
                <AnimalsPage isAnimals={isAnimals}/>
                <RulesPage isRules={isRules}/>
                <GarbagePage isGarbage={isGarbage}/>
                <ParkingPage isParking={isParking}/>
                <ServicePage isService={isService}/>
            </motion.div>

        </div>

    )
}
