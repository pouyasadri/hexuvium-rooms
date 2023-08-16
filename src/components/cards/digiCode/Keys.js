export default function Keys({title}) {
    return (
        <div className="flex flex-col md:flex-row gap-1 h-full">
            <div
                className="flex flex-col h-full m-auto bg-gray-500 bg-opacity-40 p-4 gap-3 rounded-lg border-1 border-neutral-500 w-[60%]">
                <div className={"w-[80%] mx-auto my-0"}>
                    <div
                        className="text-neutral-300 bg-gradient-to-l from-gray-500 via-gray-600 to-gray-700 rounded-full p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="h-8 w-8 max-md:w-7 max-md:h-7" viewBox="0 0 16 16">
                            <path
                                d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>

                </div>
                <p className="text-neutral-200 max-md:text-sm text-center">{title}</p>
            </div>
        </div>
    )
}
