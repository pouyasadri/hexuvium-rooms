import Link from "next/link";

export default function Police({police}) {
    return (

        <div className="flex-col">
            <Link href={"tel:17"}>
                <img className="my-0 mx-auto max-md:w-8 max-md:h-8" width="64" height="64"
                     src="https://img.icons8.com/dusk/64/policeman-male.png"
                     alt="policeman-male"/>
                <p className="bg-neutral-200 max-md:text-sm max-md:p-2 text-2xl p-4 bg-opacity-50 my-2 underline rounded text-center">17</p>
                <p className="text-center underline font-thin max-md:text-xs">{police}</p>
            </Link>
        </div>
    )
}
