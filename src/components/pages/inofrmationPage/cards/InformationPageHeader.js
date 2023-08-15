export default function InformationPageHeader() {
    return (
        <div className={"mt-20"}>
            <div className={"text-neutral-200 inline-flex px-2 py-4 bg-blue-200 bg-opacity-20 rounded-xl"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16"
                     viewBox="0 0 16 16">
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <h2 className={"text-2xl p-4"}>Practical information</h2>
            </div>

        </div>
    )
}
