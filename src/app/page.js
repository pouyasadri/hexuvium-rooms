"use client"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const welcomeTexts = [
    "Welcome",
    "Bienvenue",
    "欢迎",
];

export default function Home() {
    const [welcomeIndex, setWelcomeIndex] = useState(0);

    const shuffleWelcomeText = () => {
        setWelcomeIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length);
    };

    useEffect(() => {
        const intervalID = setInterval(shuffleWelcomeText, 1500);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <main className="bg-[#a2aaad] bg-cover min-h-screen flex flex-col justify-center items-center">
            <img src={"/logo1.gif"} className="max-h-[80vh] md:max-h-[64vh]" alt={"Hexuvium"} />
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={welcomeIndex}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-white mt-4"
                >
                    {welcomeTexts[welcomeIndex]}
                </motion.div>
            </AnimatePresence>
            <div className="flex flex-col items-center mt-6 space-y-4">
                <LinkGradient href="/en/" iconSrc="https://img.icons8.com/color/96/great-britain.png" text="English" />
                <LinkGradient href="/fr/" iconSrc="https://img.icons8.com/color/96/france.png" text="French" />
                <LinkGradient href="/zh/" iconSrc="https://img.icons8.com/color/96/china.png" text="中国人" />
            </div>
        </main>
    );
}

function LinkGradient({ href, iconSrc, text }) {
    return (
        <Link href={href}>
            <div className="bg-gradient-to-r from-[#a2aaad] via-[#8f979a] to-[#757f82] rounded-full text-white border border-[#b0b8bb] hover:border-[#a2aaad] flex items-center justify-center gap-2 px-8 py-2.5">
                <img width="48" height="48" src={iconSrc} alt={text} />
                <p className="text-neutral-50 text-center">{text}</p>
            </div>
        </Link>
    );
}
