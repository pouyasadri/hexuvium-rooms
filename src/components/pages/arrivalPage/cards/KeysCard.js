export default function KeysCard({keysHandle}) {
    return (
        <div
            onClick={keysHandle}
            className={"rounded max-md:p-2 max-md:mb-2.5 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 flex-col cursor-pointer"}>
            <img width="64" className={"mx-auto my-0"} height="64" src="https://img.icons8.com/dusk/64/user-credentials.png"
                 alt="user-credentials"/>
            <p className={"text-center max-md:mt-1 mt-2.5"}>Keys</p>
        </div>
    )
}
