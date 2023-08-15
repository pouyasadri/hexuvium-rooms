export default function InternalPage({isInternal}) {
    return (
        <div className={isInternal === false ? "hidden" : ""}>
            <div className={"flex justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img width="64" className={"mx-auto my-0"} height="64"
                     src="https://img.icons8.com/dusk/64/bookmark--v1.png"
                     alt="bookmark--v1"/>
                <p className={"text-center text-neutral-600"}>Internal regulations</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <p className={"text-center p-5 bg-g font-bold"}>All our accommodations are non-smoking.
                    <br/> Quiet time after 22h.</p>

            </div>
        </div>
    )
}
