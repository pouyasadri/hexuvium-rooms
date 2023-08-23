import {PortableText} from "@portabletext/react";

export default function GarbagePage({isGarbage,garbage,text}) {
    return (
        <div className={isGarbage === false ? "hidden" : ""}>
            <div className={" justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img className={"mx-auto my-0"} width="64" height="64"
                     src="https://img.icons8.com/dusk/64/recycle-bin.png"
                     alt="recycle-bin"/>
                <p className={"text-center text-neutral-600"}>{garbage}</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <div className={"text-center p-5"}>
                    <PortableText  value={text}/>
                </div>
            </div>
        </div>
    )
}
