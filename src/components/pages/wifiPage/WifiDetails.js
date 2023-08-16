export default function WifiDetails({details}) {
    return (
        <div className={"text-center block justify-between max-md:p-2.5 p-5"}>
            <div dangerouslySetInnerHTML={{__html: details}}/>
        </div>
    )
}
