import { useState, useEffect } from 'react';
import {useTranslations} from "next-intl";

export default function Message({ openHandle,header,message }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // Check if the message has been closed before
        const isMessageClosed = localStorage.getItem('messageClosed');
        setIsOpen(!isMessageClosed);
    }, []);

    const handleClose = () => {
        // Mark the message as closed in localStorage
        localStorage.setItem('messageClosed', 'true');
        setIsOpen(false);
    };
    const t = useTranslations('message');

    return (
        <div className={`${isOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div
                    className={`p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 relative`}
                    role="alert"
                >
                    <div className="flex">
                        <div className=" ml-3 text-sm font-normal">
                            <span className="flex gap-3 mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="animate-bounce w-8 h-8" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
</svg>{t('header')}
                            </span>
                            <div className="mb-2 text-base font-normal text-center">
                                {message}
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                handleClose();
                                openHandle();
                            }}
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
