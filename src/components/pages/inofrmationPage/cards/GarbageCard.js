import {useState} from "react";

export default function GarbageCard({garbageHandle,garbage}) {

    return (
        <div
            onClick={garbageHandle}
            className={"rounded bg-white max-md:p-2 max-md:mb-2.5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 px-2 flex-col cursor-pointer"}>
            <img className={"mx-auto my-0"} width="64" height="64"
                 src="https://img.icons8.com/dusk/64/recycle-bin.png"
                 alt="recycle-bin"/>
            <p className={"text-center max-md:mt-1 mt-2.5"}>{garbage}</p>
        </div>
    )
}
