export default function Information() {
    return (
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

    )
}
