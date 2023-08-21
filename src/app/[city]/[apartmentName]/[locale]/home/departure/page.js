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
import {client} from "../../../../../../../sanity/lib/client";

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

    const apartmentName = params.apartmentName;
    useEffect(() => {
        const fetchData = async () => {
            const query = groq`
        *[_type == "apartment" && name == $apartmentName][0] {
          departureInfo
        }
      `;

            try {
                const result = await client.fetch(query, {apartmentName: apartmentName});
                const {departureInfo: {startTime}} = result;
                const {departureInfo: {problem}} = result;
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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Invoke the fetchData function
    }, [apartmentName]);
    return (
        <div className={"backdrop-blur-sm"}>
            {!isOpen && <BackButton/>}
            {isOpen && <CardsBackButton setAllToFalse={setAllToFalse}/>}
            <div className="h-screen flex flex-col items-center justify-between backdrop-blur-sm">
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
                    className={"bg-neutral-200 max-md:px-10 px-20 w-screen rounded-t-xl z-10 h-[60%] justify-between"}>
                    <div className={isOpen ? "hidden" : ""}>
                        <DeparturePageDetails details={t('details')}/>
                        <div className={"gap-4 grid grid-cols-2"}>
                            <StartTimeCard startTimeHandle={startTimeHandle} departureTime={t('departureTime')}/>
                            <ProblemCard problemHandle={problemHandle} problem={t('problem')}/>
                        </div>
                    </div>
                    <StartTimePage isStartTime={isStartTime} departureTime={t('departureTime')} text={departureTime}/>
                    <ProblemPage isProblem={isProblem} problem={t('problem')} text={reportProblem}/>
                </motion.div>

            </div>
        </div>
    )
}
