"use client"
import {motion} from "framer-motion";

export default function Home() {
    return (
        <main className="bg-[url('/paris-bg.jpg')] bg-cover h-[100vh] ">
            <div className="h-screen grid items-center justify-center place-items-center backdrop-blur-sm">
                <div className="text-center">
                    <h1 className="text-white font-bold text-2xl">Welcome to Paris </h1>
                    <p className="text-yellow-400 animate-pulse text-n">The city of lights</p>
                </div>
                <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8">
                    <div className="flex flex-col md:flex-row gap-1 ">
                        <div
                            className="flex flex-col m-auto bg-gray-500 bg-opacity-40 p-4 gap-3 rounded-lg border-1 border-neutral-500">
                            <div>
                                <div
                                    className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                                        <path
                                            d="M10 13a1 1 0 0 1 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                                    </svg>
                                </div>
                                <p className="text-neutral-200 text-center">Digi Code</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 ">
                        <div
                            className="flex flex-col m-auto bg-gray-500 bg-opacity-40 p-4 gap-2 rounded-lg border-1 border-neutral-500">
                            <div>
                                <div
                                    className="text-neutral-300 bg-gradient-to-l from-gray-400 via-gray-500 to-gray-600 rounded-full p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                        <path fill-rule="evenodd"
                                              d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                                    </svg>

                                </div>
                                <p className="text-neutral-200 text-center">Location</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 ">
                        <div
                            className="flex flex-col m-auto bg-gray-500 bg-opacity-40 p-4 gap-2 rounded-lg border-1 border-neutral-500">
                            <div>
                                <div
                                    className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="w-8 h-8" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                                    </svg>

                                </div>
                                <p className="text-neutral-200 text-center">phone</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 ">
                        <div
                            className="flex flex-col m-auto bg-gray-500 bg-opacity-40 p-4 gap-2 rounded-lg border-1 border-neutral-500">
                            <div>
                                <div
                                    className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path
                                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </div>
                                <p className="text-neutral-200 text-center">Info</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 ">
                        <div
                            className="flex flex-col m-auto bg-gray-500 bg-opacity-40 p-4 gap-2 rounded-lg border-1 border-neutral-500">
                            <div>
                                <div
                                    className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                                    </svg>

                                </div>
                                <p className="text-neutral-200 text-center">Arrival</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 ">
                        <div
                            className="flex flex-col m-auto bg-gray-500 bg-opacity-40 p-4 gap-2 rounded-lg border-1 border-neutral-500">
                            <div>
                                <div
                                    className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                                        <path
                                            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.646a.5.5 0 0 1 .708.707l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.707l.647-.647-.647-.646a.5.5 0 0 1 .708-.707Z"/>
                                    </svg>

                                </div>
                                <p className="text-neutral-200 text-center">departure</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
