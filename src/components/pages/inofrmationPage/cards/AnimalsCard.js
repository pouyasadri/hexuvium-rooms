import {useState} from "react";

export default function AnimalsCard({animalsHandle}) {

    return (
        <div
            onClick={animalsHandle}
            className={"rounded bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 flex-col cursor-pointer"}>
            <img className={"mx-auto my-0"} width="64" height="64"
                 src="https://img.icons8.com/dusk/64/pets.png" alt="pets"/>
            <p className={"text-center mt-2.5"}>Animals</p>

        </div>
    )
}
