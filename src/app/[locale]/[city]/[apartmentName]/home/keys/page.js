"use client"
import {motion} from "framer-motion";
import DigiCodePageHeader from "@/components/pages/digiCodePage/DigiCodePageHeader";
import DigiCodePageDetails from "@/components/pages/digiCodePage/DigiCodePageDetails";
import KeyPageInfo from "@/components/pages/digiCodePage/KeyPageInfo";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";

export default function DigiCodePage() {
    const t = useTranslations('keysPage');
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
                    <KeyPageInfo info={t('information')}/>
                </motion.div>

            </div>
        </div>
    )
}
