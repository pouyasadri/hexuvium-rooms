export default function PhoneNumbers() {
    return (
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

    )
}
