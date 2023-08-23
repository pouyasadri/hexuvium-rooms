"use client"
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import DeparturePageHeader from "@/components/pages/departurePage/DeparturePageHeader";
import DeparturePageDetails from "@/components/pages/departurePage/DeparturePageDetails";
import StartTimeCard from "@/components/pages/departurePage/cards/StartTimeCard";
import ProblemCard from "@/components/pages/departurePage/cards/ProblemCard";
import StartTimePage from "@/components/pages/departurePage/pages/StartTimePage";
import ProblemPage from "@/components/pages/departurePage/pages/ProblemPage";
import BackButton from "@/components/BackButton";
import CardsBackButton from "@/components/CardsBackButton";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {groq} from "next-sanity";
import {client} from "../../../../../../sanity/lib/client";

export default function DeparturePage() {
    const [isStartTime, setStartTime] = useState(false);
    const [isProblem, setProblem] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const t = useTranslations('departurePage')
    const clickHandle = () => {
        setOpen(true);
    }
    const startTimeHandle = () => {
        setStartTime(true);
        clickHandle();
    }
    const problemHandle = () => {
        setProblem(true);
        clickHandle();
    }
    const setAllToFalse = () => {
        setStartTime(false);
        setProblem(false);
        setOpen(false);
    }
    const params = useParams()
    const [departureTime, setDepartureTime] = useState(null);
    const [reportProblem, setReportProblem] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const reservationNumber = params.reservationNumber;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(
                    `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
          departureInfo
        }`,
                    {
                        reservationNumber: reservationNumber,
                    }
                );
                const {departureInfo: {startTime}} = result;
                const {departureInfo: {problem}} = result;
                if (startTime) {
                    let time;
                    switch (params.locale) {
                        case "fr":
                            time = startTime.fr;
                            break;
                        case "en":
                            time = startTime.en;
                            break;
                        case "zh":
                            time = startTime.zh;
                            break;
                    }
                    setDepartureTime(time);
                }
                if (problem) {
                    let problem_value;
                    switch (params.locale) {
                        case "fr":
                            problem_value = problem.fr;
                            break;
                        case "en":
                            problem_value = problem.en;
                            break;
                        case "zh":
                            problem_value = problem.zh;
                            break;
                    }
                    setReportProblem(problem_value);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData(); // Invoke the fetchData function
    }, [reservationNumber]);
    return (
        <div className={"backdrop-blur-sm"}>
            {!isOpen && <BackButton/>}
            {isOpen && <CardsBackButton setAllToFalse={setAllToFalse}/>}
            <div className="h-screen flex flex-col items-center justify-between">
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
                            <DeparturePageHeader title={t('title')}/>

                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 min-h-[60%] max-h-fit justify-between"}>
                            <div className={isOpen ? "hidden" : ""}>
                                <DeparturePageDetails details={t('details')}/>
                                <div className={"gap-4 grid grid-cols-2"}>
                                    <StartTimeCard startTimeHandle={startTimeHandle}
                                                   departureTime={t('departureTime')}/>
                                    <ProblemCard problemHandle={problemHandle} problem={t('problem')}/>
                                </div>
                            </div>
                            <StartTimePage isStartTime={isStartTime} departureTime={t('departureTime')}
                                           text={departureTime}/>
                            <ProblemPage isProblem={isProblem} problem={t('problem')} text={reportProblem}/>
                        </motion.div>
                    </>)}
            </div>
        </div>
    )
}
