export default function Digicode() {
    return (<div className="flex flex-col md:flex-row gap-1 ">
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
    )
}
