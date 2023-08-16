export default function KeyPageInfo({info}) {
    return (
        <>
            <p className={"text-neutral-700 font-semibold mb-5"}>{info}</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <div className={"bg-neutral-200 bg-opacity-50 my-2 mx-10 rounded"}>
                    <p className={"text-center p-5 bg-g font-bold text-2xl"}>1234</p>
                </div>
            </div>
        </>
    )
}
