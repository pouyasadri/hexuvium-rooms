export default function Location() {
    return (
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

    )
}
