import Link from "next/link";

export default function Address({address, text, link}) {
    return (
        <>
            <p className={"text-neutral-700 font-semibold max-md:mb-2.5 mb-5"}>{address}</p>
            <div
                className={"rounded-xl bg-white shadow-inner max-md:p-2 p-4 max-md:mb-2.5 mb-5"}>
                <div className={"bg-neutral-200 bg-opacity-50 max-md:my-1 max-md:mx-5 my-2 mx-10 rounded"}>
                    <Link href={link != null ? link : ""}>
                        <p className={"text-center p-5 bg-g font-bold max-md:text-base text-2xl"}>{text}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
