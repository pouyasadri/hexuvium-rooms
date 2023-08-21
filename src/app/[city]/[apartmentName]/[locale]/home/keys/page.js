"use client"
import {motion} from "framer-motion";
import DigiCodePageHeader from "@/components/pages/digiCodePage/DigiCodePageHeader";
import DigiCodePageDetails from "@/components/pages/digiCodePage/DigiCodePageDetails";
import KeyPageInfo from "@/components/pages/digiCodePage/KeyPageInfo";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {groq} from "next-sanity";
import {client} from "../../../../../../../sanity/lib/client";
import {PortableText} from "@portabletext/react";

export default function DigiCodePage() {
    const params = useParams()
    const [data, setData] = useState(null);
    const apartmentName = params.apartmentName;
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          keys
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                console.log(result);
                const {keys} = result
                // Log fetched data
                let keyData;
                switch (params.locale) {
                    case "fr":
                        keyData = keys.fr;
                        break;
                    case "en":
                        keyData = keys.en;
                        break;
                    case "zh":
                        keyData = keys.zh;
                        break;
                }
                setData(keyData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]); // Add apartmentName to the dependency array

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
                    <KeyPageInfo info={t('information')} text={data}/>
                </motion.div>

            </div>
        </div>
    )
}
