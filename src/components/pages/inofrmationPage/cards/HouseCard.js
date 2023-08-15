import {useState} from "react";

export default function HouseCard({ houseHandle}) {

    return (
        <>
            <div
                onClick={houseHandle}
                className={"rounded bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  p-4 mb-5 px-2 flex-col cursor-pointer"}>
                <img className={"mx-auto my-0"} width="64" height="64"
                     src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-home-appliance-black-friday-cyber-monday-flaticons-flat-flat-icons-2.png"
                     alt="external-home-appliance-black-friday-cyber-monday-flaticons-flat-flat-icons-2"/>
                <p className={"text-center"}>Household <br/> appliances</p>
            </div>

        </>
    )
}
