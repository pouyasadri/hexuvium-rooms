"use client"
import {useState} from "react";
import {motion} from "framer-motion";
import DeparturePageHeader from "@/components/pages/departurePage/DeparturePageHeader";
import DeparturePageDetails from "@/components/pages/departurePage/DeparturePageDetails";
import StartTimeCard from "@/components/pages/departurePage/cards/StartTimeCard";
import ProblemCard from "@/components/pages/departurePage/cards/ProblemCard";
import StartTimePage from "@/components/pages/departurePage/pages/StartTimePage";
import ProblemPage from "@/components/pages/departurePage/pages/ProblemPage";

export default function DeparturePage() {
    const [isStartTime, setStartTime] = useState(false);
    const [isProblem, setProblem] = useState(false);
    const [isOpen, setOpen] = useState(false);

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
    return (
        <div className="h-screen flex flex-col items-center justify-between backdrop-blur-sm">
            <motion.div initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                <DeparturePageHeader/>

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
                    <DeparturePageDetails/>
                    <div className={"gap-4 grid grid-cols-2"}>
                        <StartTimeCard startTimeHandle={startTimeHandle}/>
                        <ProblemCard problemHandle={problemHandle}/>
                    </div>
                </div>
                <StartTimePage isStartTime={isStartTime}/>
                <ProblemPage isProblem={isProblem}/>
            </motion.div>

        </div>
    )
}
