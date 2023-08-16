"use client"
import {motion} from "framer-motion";
import LocationPageHeader from "@/components/pages/locationPage/LocationPageHeader";
import LocationPageDetails from "@/components/pages/locationPage/LocationPageDetails";
import Address from "@/components/pages/locationPage/Address";
import Map from "@/components/pages/locationPage/Map";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";

export default function LocationPage() {
    const t = useTranslations('locationPage');
    return (
        <div className={"backdrop-blur-sm"}>
            <BackButton/>
            <div className="h-screen flex flex-col items-center justify-between ">
                <motion.div initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                    <LocationPageHeader title={t('title')}/>

                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 h-[70%] "}>
                    <LocationPageDetails details={t('details')}/>
                    <Address address={t('address')}/>
                    <Map find={t('find')}/>
                </motion.div>

            </div>
        </div>
    )
}
