"use client"
import {motion} from "framer-motion";
import LocationPageHeader from "@/components/pages/locationPage/LocationPageHeader";
import LocationPageDetails from "@/components/pages/locationPage/LocationPageDetails";
import Address from "@/components/pages/locationPage/Address";
import Map from "@/components/pages/locationPage/Map";

export default function LocationPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-between backdrop-blur-sm">
            <motion.div initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                <LocationPageHeader/>

            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className={"bg-neutral-200 px-20 w-screen rounded-t-xl z-10 h-[70%] "}>
                <LocationPageDetails/>
                <Address/>
                <Map/>
            </motion.div>

        </div>
    )
}
