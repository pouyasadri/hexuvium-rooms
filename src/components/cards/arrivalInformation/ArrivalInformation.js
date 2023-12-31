export default function ArrivalInformation({title}) {
    return (
        <div className="flex h-full flex-col gap-1 cursor-pointer w-fit">
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
                            <path fillRule="evenodd"
                                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                        </svg>

                    </div>
                </div>
                <p className="text-neutral-200 max-md:text-xs text-center">{title}</p>

            </div>
        </div>

    )
}
