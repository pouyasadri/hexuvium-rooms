"use client"
import {motion} from "framer-motion";
import WifiPageHeader from "@/components/pages/wifiPage/WifiPageHeader";
import WifiName from "@/components/pages/wifiPage/WifiName";
import WifiKey from "@/components/pages/wifiPage/WifiKey";
import WifiDetails from "@/components/pages/wifiPage/WifiDetails";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {groq} from "next-sanity";
import {client} from "../../../../../../../sanity/lib/client";
import {useParams} from "next/navigation";

export default function WifiPage() {
    const params = useParams()
    const [wifiName, setWifiName] = useState(null);
    const [wifiPassword, setWifiPassword] = useState(null);

    const apartmentName = params.apartmentName;
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          Wifi
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                const {Wifi: {wifiName}} = result;
                const {Wifi: {wifiPassword}} = result;
                setWifiName(wifiName);
                setWifiPassword(wifiPassword);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]); // Add apartmentName to the dependency array

    const t = useTranslations('wifiPage');
    return (
        <div
            className="backdrop-blur-sm">
            <BackButton/>
            <div className="h-screen flex flex-col items-center justify-between ">
                <motion.div initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>

                    <WifiPageHeader title={t('title')}/>

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
                    <WifiDetails details={t.raw('details')}/>
                    <WifiName wifiName={t('name')} name={wifiName}/>
                    <WifiKey copy={t('copy')} copied={t('copied')} password={t('key')} text={wifiPassword}/>
                </motion.div>

            </div>

        </div>
    )
}
