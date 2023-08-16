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


export default function Home({params: {city, apartmentName}}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          ...,
          city->
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: "as"});
                console.log("Fetched data:", result); // Log fetched data
                setData(result);
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
        <div>

            <div className="h-screen grid items-center justify-center place-items-center backdrop-blur-sm">
                {/*<Message isopen={isOpen} openHandle={openHandle}/>*/}
                <Header city={city}/>
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
            </div>

        </div>
    )
}
