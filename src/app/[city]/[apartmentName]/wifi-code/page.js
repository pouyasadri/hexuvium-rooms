"use client"
import {motion} from "framer-motion";
import CopyButton from "@/components/pages/wifiPage/CopyButton";
import WifiPageHeader from "@/components/pages/wifiPage/WifiPageHeader";
import WifiName from "@/components/pages/wifiPage/WifiName";
import WifiKey from "@/components/pages/wifiPage/WifiKey";
import WifiDetails from "@/components/pages/wifiPage/WifiDetails";

export default function Home({params}) {

    return (
        <>

            <div className="h-screen flex flex-col items-center justify-between backdrop-blur-sm">
                <motion.div initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                    <WifiPageHeader/>

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
                    <WifiDetails/>
                    <WifiName/>
                    <WifiKey/>
                </motion.div>

            </div>

        </>
    )
}
