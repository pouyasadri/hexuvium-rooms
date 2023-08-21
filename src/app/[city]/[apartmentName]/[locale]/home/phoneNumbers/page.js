"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import PhoneNumberHeader from "@/components/pages/phoneNumberPage/PhoneNumberHeader";
import Police from "@/components/pages/phoneNumberPage/Police";
import Firefighter from "@/components/pages/phoneNumberPage/Firefighter";
import Emergencies from "@/components/pages/phoneNumberPage/Emergencies";
import Reception from "@/components/pages/phoneNumberPage/Reception";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {groq} from "next-sanity";
import {client} from "../../../../../../../sanity/lib/client";

export default function PhoneNumberPage() {
    const t = useTranslations('phoneNumberPage');
    const params = useParams()
    const [data, setData] = useState(null);
    const apartmentName = params.apartmentName;
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          receptionPhone
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                const {receptionPhone} = result
                setData(receptionPhone);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]); // A
    return (
        <div className={"backdrop-blur-sm"}>
            <BackButton/>
            <div className="h-screen flex flex-col items-center justify-between">
                <motion.div initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                    <PhoneNumberHeader title={t('title')}/>

                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 h-[60%] "}>
                    <p className={"text-neutral-700 font-semibold my-5 "}>{t('emergencyNumber')}</p>
                    <div
                        className={"rounded-xl bg-white shadow-inner p-4 mb-5 px-20 max-md:px-5 flex justify-between items-center"}>
                        <Police police={t('police')}/>
                        <Firefighter firefighter={t('firefighter')}/>
                        <Emergencies emergency={t('emergency')}/>
                    </div>
                    <Reception reception={t('reception')} tel={data}/>
                </motion.div>

            </div>
        </div>
    )
}
