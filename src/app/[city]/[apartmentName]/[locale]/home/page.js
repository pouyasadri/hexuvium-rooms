"use client"
import WifiCode from "@/components/cards/wifiCode/WifiCode";
import Keys from "@/components/cards/digiCode/Keys";
import Location from "@/components/cards/location/Location";
import PhoneNumbers from "@/components/cards/phoneNumbers/PhoneNumbers";
import Information from "@/components/cards/information/Information";
import ArrivalInformation from "@/components/cards/arrivalInformation/ArrivalInformation";
import DepartureInformation from "@/components/cards/departureInformation/DepartureInformation";
import Header from "@/components/header/Header";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import {groq} from "next-sanity";
import {client} from "../../../../../../sanity/lib/client";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useParams} from "next/navigation";


export default function Home() {

    const params = useParams()
    const apartmentName = params.apartmentName;
    let [cityName1, setCityName1] = useState(null);
    const [citySlug1, setCitySlug1] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          city->
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                console.log("Fetched data:", result); // Log fetched data
                const {city: {cityName}} = result;

                let cityNameData;
                switch (params.locale) {
                    case "fr":
                        cityNameData = cityName.fr;
                        break;
                    case "en":
                        cityNameData = cityName.en;
                        break;
                    case "zh":
                        cityNameData = cityName.zh;
                        break;
                }
                setCityName1(cityNameData);

                const {city: {citySlug}} = result;
                let citySlugData;
                switch (params.locale) {
                    case "fr":
                        citySlugData = citySlug.fr;
                        break;
                    case "en":
                        citySlugData = citySlug.en;
                        break;
                    case "zh":
                        citySlugData = citySlug.zh;
                        break;
                }
                setCitySlug1(citySlugData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]); // Add apartmentName to the dependency array

    const t = useTranslations('index');
    const openHandle = () => {
        setOpen(false);
    }
    return (


        <div className="h-screen grid items-center justify-center place-items-center backdrop-blur-sm">
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={"main"}
                    initial={{x: 300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -300, opacity: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                >
                    {/*<Message isopen={isOpen} openHandle={openHandle}/>*/}
                    <Header city={cityName1} slug={citySlug1}/>
                    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
                        <Link href={"home/wifi-code"}>
                            <WifiCode title={t('wifi')}/>
                        </Link>
                        <Link href={"home/keys"}>
                            <Keys title={t('keys')}/>
                        </Link>
                        <Link href={"home/location"}>
                            <Location title={t('location')}/>
                        </Link>
                        <Link href={"home/arrival"}>
                            <ArrivalInformation title={t('arrival')}/>
                        </Link>
                        <Link href={"home/departure"}>
                            <DepartureInformation title={t('departure')}/>
                        </Link>
                        <Link href={"home/phoneNumbers"}>
                            <PhoneNumbers title={t('phone')}/>
                        </Link>
                        <Link href={"home/information"}>
                            <Information title={t('info')}/>
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>


    )
}
