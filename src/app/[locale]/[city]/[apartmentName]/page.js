"use client"
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

export default function Home({params}) {
    return (
        <main className="bg-[#a2aaad] bg-cover h-[100vh] ">
            <div className="h-screen grid items-center justify-center place-items-center backdrop-blur-sm">
                <img src={"/logo1.gif"} className={"max-md:h-64 h-80"} alt={"Hexuvium"}/>
                <div>
                    <Link href={"/en/" + params.city + "/" + params.apartmentName + "/home"}>
                        <div className="gap-1 m-5 ">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{y: 200, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: -200, opacity: 0}}
                                    transition={{duration: 0.3}}
                                >
                                    <div
                                        className="rounded-full font-bold text-white bg-black bg-opacity-50  py-2.5 px-12">
                                        <img width="48" height="48" className={"w-14 h-14 mx-auto my-0"}
                                             src="https://img.icons8.com/color/96/great-britain.png"
                                             alt="great-britain"/> <p
                                        className="text-neutral-50 text-center">English</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </Link>
                    <Link href={"/fr/" + params.city + "/" + params.apartmentName + "/home"}>
                        <div className="gap-1 m-5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{y: 200, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: -200, opacity: 0}}
                                    transition={{duration: 0.35}}
                                >
                                    <div
                                        className="rounded-full font-bold text-white bg-black bg-opacity-50 py-2.5 px-12">
                                        <img width="48" height="48" src="https://img.icons8.com/color/96/france.png"
                                             className={"w-14 h-14 mx-auto my-0"} alt="france"/><p
                                        className="text-neutral-50 text-center">French</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link href={"/zh/" + params.city + "/" + params.apartmentName + "/home"}>
                        <div className="gap-1 m-5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{y: 200, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: -200, opacity: 0}}
                                    transition={{duration: 0.4}}
                                >
                                    <div
                                        className="rounded-full font-bold text-white bg-black bg-opacity-50 py-2.5 px-12">
                                        <img width="48" height="48" className={"w-14 h-14 mx-auto my-0"}
                                             src="https://img.icons8.com/color/96/china.png" alt="china"/> <p
                                        className="text-neutral-50 text-center">中国人</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}
