"use client"
import {motion} from "framer-motion";
import LocationPageHeader from "@/components/pages/locationPage/LocationPageHeader";
import LocationPageDetails from "@/components/pages/locationPage/LocationPageDetails";
import Address from "@/components/pages/locationPage/Address";
import Map from "@/components/pages/locationPage/Map";
import BackButton from "@/components/BackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {groq} from "next-sanity";
import {client} from "../../../../../../../sanity/lib/client";

export default function LocationPage() {
    const params = useParams()
    const [address, setAddress] = useState(null);
    const [link, setLink] = useState(null);

    const apartmentName = params.apartmentName;
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          address
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                const {address} = result
                setLink(address['addressLink']);
                setAddress(address['addressText']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]);
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
                    <Address address={t('address')} text={address} link={link}/>
                    <Map find={t('find')}/>
                </motion.div>

            </div>
        </div>
    )
}
