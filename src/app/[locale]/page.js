"use client"
import {useState} from "react";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {client} from "../../../sanity/lib/client";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion";
import Link from "next/link";

export default function ReservationPage({params: {locale}}) {
    const [reservationNumber, setReservationNumber] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const t = useTranslations('reservation');
    const handleReservationSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Fetch apartment data from Sanity using the reservation number
        const apartmentData = await client.fetch(
            `*[_type == "apartment" && reservationNumber == $reservationNumber][0]`,
            {
                reservationNumber: reservationNumber,
            }
        );
        setIsLoading(false);
        if (apartmentData) {
            // Reservation number is correct, navigate to the appropriate URL
            console.log(apartmentData.reservationNumber);
            if (apartmentData.reservationNumber === reservationNumber) {
                toast.success(t('success'), {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                router.replace(`/${locale}/${reservationNumber}/home`);
            }
        } else {
            // Reservation number is incorrect, show a pop-up notification
            toast.error(t('error'), {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };


    return (
        <motion.div
            initial={{x: 200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -200, opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
                <Link href="/">
                    <div className="text-blue-500 hover:text-blue-700 mb-4 underline">
                        {t('backToHome')}
                    </div>
                </Link>
                <div className="w-full max-w-md p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">{t('header')}</h2>
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder={t('placeholder')}
                                value={reservationNumber}
                                onChange={(e) => setReservationNumber(e.target.value)}
                                className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                onClick={handleReservationSubmit}
                                className={`bg-orange-500 text-white rounded-md px-6 py-2 flex items-center justify-center space-x-2 hover:bg-orange-600 transition-colors focus:outline-none focus:ring focus:border-orange-300 ${
                                    isLoading ? "cursor-not-allowed opacity-75" : ""
                                }`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className={"flex text-center mx-auto my-0"}>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                                    </div>
                                ) : t('submit')}
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </motion.div>
    );
}


