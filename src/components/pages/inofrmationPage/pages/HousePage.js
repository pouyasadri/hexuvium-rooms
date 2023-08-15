export default function HousePage({isHouse}) {
    return (
        <div className={isHouse === false ? "hidden" : ""}>
            <div className={"flex justify-center items-center gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img width="64" height="64"
                     src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-home-appliance-black-friday-cyber-monday-flaticons-flat-flat-icons-2.png"
                     alt="external-home-appliance-black-friday-cyber-monday-flaticons-flat-flat-icons-2"/>
                <p className={"text-center"}>Household <br/> appliances</p>
            </div>
        </div>
    )
}
