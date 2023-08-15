export default function ArrivalPage({isArrival}) {
    return (
        <div className={isArrival === false ? "hidden" : ""}>
            <div className={"flex justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img width="64" className={"mx-auto my-0"} height="64"
                     src="https://img.icons8.com/dusk/64/realtime-protection.png"
                     alt="realtime-protection"/>
                <p className={"text-center text-neutral-600"}>Arrival time</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <p className={"text-center p-5 bg-g font-bold"}>The check-in time is from 2pm.</p>
            </div>
        </div>
    )
}
