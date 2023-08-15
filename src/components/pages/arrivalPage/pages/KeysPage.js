export default function KeysPage({isKeys}) {
    return (
        <div className={isKeys === false ? "hidden" : ""}>
            <div className={"flex justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img width="64" className={"mx-auto my-0"} height="64"
                     src="https://img.icons8.com/dusk/64/user-credentials.png"
                     alt="user-credentials"/>
                <p className={"text-center text-neutral-600"}>Keys information</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <p className={"text-center p-5 bg-g font-bold"}>2 keys are given to you on arrival.</p>

            </div>
        </div>
    )
}
