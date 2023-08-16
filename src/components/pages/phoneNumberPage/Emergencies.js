import Link from "next/link";

export default function Emergencies({emergency}) {
    return (

        <div className="flex-col">
            <Link href={"tel:112"}>
                <img className="my-0 mx-auto max-md:w-8 max-md:h-8" width="64" height="64"
                     src="https://img.icons8.com/dusk/64/medical-doctor.png"
                     alt="medical-doctor"/>
                <p className="bg-neutral-200 max-md:p-2 max-md:text-sm text-2xl p-4 bg-opacity-50 my-2 underline rounded text-center">112</p>
                <p className="text-center underline font-thin max-md:text-xs">{emergency}</p>
            </Link>
        </div>

    )
}
