export default function StartTimePage({isStartTime,departureTime}){
    return(
        <div className={isStartTime === false ? "hidden" : ""}>
            <div className={"justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img className={"my-0 mx-auto"} width="64" height="64" src="https://img.icons8.com/dusk/64/expired.png" alt="expired"/>
                <p className={"text-center text-neutral-600"}>{departureTime}</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <p className={"text-center p-5 bg-g font-bold"}>The check-out time is until 12:00.</p>
            </div>
        </div>
    )
}
