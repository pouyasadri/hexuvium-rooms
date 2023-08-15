export default function DeparturePageHeader() {
    return (
        <div className={"mt-20"}>
            <div className={"text-neutral-200 inline-flex px-2 py-4 bg-blue-200 bg-opacity-20 rounded-xl"}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16"
                     viewBox="0 0 16 16">
                    <path
                        d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                    <path
                        d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.646a.5.5 0 0 1 .708.707l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.707l.647-.647-.647-.646a.5.5 0 0 1 .708-.707Z"/>
                </svg>
                <h2 className={"text-2xl p-4"}>Departure Information</h2>
            </div>

        </div>
    )
}
