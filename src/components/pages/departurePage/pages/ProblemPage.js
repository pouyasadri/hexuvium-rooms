export default function ProblemPage({isProblem}) {
    return (
        <div className={isProblem === false ? "hidden" : ""}>
            <div className={"flex justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img width="64" height="64" src="https://img.icons8.com/dusk/64/error.png" alt="error"/>
                <p className={"text-center text-neutral-600"}>Problem report</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <p className={"text-center p-5 bg-g font-bold"}>Do not hesitate to contact us if you have any problem.
                    The reception is reachable at: 0505050505.</p>
            </div>
        </div>
    )
}
