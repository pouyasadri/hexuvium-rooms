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
import {client} from "../../../../../../sanity/lib/client";

export default function LocationPage() {
    const params = useParams()
    const [address, setAddress] = useState(null);
    const [link, setLink] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const reservationNumber = params.reservationNumber;
    const [playbackId, setPlaybackId] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
           address
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {address} = result
                setLink(address['addressLink']);
                setAddress(address['addressText']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
  address{
    video{
      asset->{
        playbackId
      }
    }
  }
}`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );

                console.log("Fetched data:", result.address.video.asset.playbackId); // Log fetched data
                setPlaybackId(result.address.video.asset.playbackId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]);
    const t = useTranslations('locationPage');
    return (
        <div className={"backdrop-blur-sm"}>
            <BackButton/>
            <div className="min-h-screen max-h-fit flex flex-col items-center justify-between ">
                {isLoading ? (
                    <div className={"flex text-4xl text-white text-center"}>
                        <svg
                            className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.89 3.182 8.118l2.828-2.827z"
                            ></path>
                        </svg>
                        Loading...
                    </div>) : (
                    <>
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
                            className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 min-h-[60%] max-h-fit"}>
                            <LocationPageDetails details={t('details')}/>
                            <Address address={t('address')} text={address} link={link}/>
                            <Map find={t('find')} playbackId={playbackId}/>
                        </motion.div>
                    </>)}
            </div>
        </div>
    )
}
