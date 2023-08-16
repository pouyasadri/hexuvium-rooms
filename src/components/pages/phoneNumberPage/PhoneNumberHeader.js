export default function PhoneNumberHeader({title}) {
    return (
        <div className={"mt-20"}>
            <div className={"text-neutral-200 inline-flex px-2 py-4 bg-blue-200 bg-opacity-20 rounded-xl"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     className="w-16 h-16" viewBox="0 0 16 16">
                    <path
                        d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                </svg>
                <h2 className={"text-2xl p-4"}>{title}</h2>
            </div>

        </div>
    )
}
