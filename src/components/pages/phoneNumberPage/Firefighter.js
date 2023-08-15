import Link from "next/link";

export default function Firefighter() {
    return (

        <div className="flex-col">
            <Link href={"tel:18"}>
                <img className="my-0 mx-auto max-md:w-8 max-md:h-8" width="64" height="64"
                     src="https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/64/external-firefighter-professions-flat-icons-pack-pongsakorn-tan.png"
                     alt="external-firefighter-professions-flat-icons-pack-pongsakorn-tan"/>
                <p className="bg-neutral-200 max-md:text-sm text-2xl max-md:p-2 p-4 bg-opacity-50 my-2 underline rounded text-center">18</p>
                <p className="text-center underline font-thin max-md:text-xs">Firefighter</p>
            </Link>
        </div>

    )
}
