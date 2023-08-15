export default function RecallCard({recallHandle}) {
    return (
        <div
            onClick={recallHandle}
            className={"rounded bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 flex-col cursor-pointer"}>
            <img width="64" className={"mx-auto my-0"} height="64" src="https://img.icons8.com/dusk/64/alarm.png"
                 alt="alarm"/>
            <p className={"text-center mt-2.5"}>Recall Information</p>

        </div>
    )
}
