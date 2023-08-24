export default function DepartureInformation({title}) {
    return (
        <div className="flex  h-full flex-col gap-1 cursor-pointer w-fit">
            <div className="flex flex-col h-full w-30 m-auto bg-gray-500 bg-opacity-40 p-4 gap-2 rounded border-1 border-neutral-500">
                <div className="w-full mx-auto my-0 flex items-center justify-center">
                    <div className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-8 w-8 md:w-12 md:h-12"
                            viewBox="0 0 16 16"
                            initial="hidden"
                            animate="visible"
                        >
                            <path
                                d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                            <path
                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.646a.5.5 0 0 1 .708.707l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.707l.647-.647-.647-.646a.5.5 0 0 1 .708-.707Z"/>
                        </svg>

                    </div>

                </div>
                <p className="text-neutral-200 max-md:text-xs text-center">{title}</p>

            </div>
        </div>

    )
}
