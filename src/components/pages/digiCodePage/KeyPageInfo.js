import {PortableText} from "@portabletext/react";

export default function KeyPageInfo({info, text}) {
    return (
        <>
            <p className={"text-neutral-700 font-semibold mb-5"}>{info}</p>
            <div
                className={"rounded-xl bg-white shadow-inner font-semibold p-4 mb-5"}>
                <PortableText value={text}/>
            </div>
        </>
    )
}
