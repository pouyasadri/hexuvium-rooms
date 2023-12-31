export default function WifiName({wifiName, name}) {

    return (
        <div className={"mt-3"}>
            <p className={"text-neutral-700 font-semibold max-md:mb-2.5 mb-5"}>{wifiName}</p>
            <div
                className={"rounded-xl bg-white shadow-inner max-md:p-2 p-4 max-md:mb-2.5 mb-5"}>
                <div className={"bg-neutral-200 bg-opacity-50 max-md:my-1 max-md:mx-5 my-2 mx-10 rounded"}>
                    <p className={"text-center max-md:p-2.5 p-5 bg-g font-bold max-md:text-base text-2xl"}>{name}</p>

                </div>
            </div>
        </div>
    )
}
