import CopyButton from "@/components/pages/wifiPage/CopyButton";

export default function WifiKey() {
    return (
        <>
            <p className={"text-neutral-700 font-semibold mb-5"}>Wifi Key:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <div className={"bg-neutral-200 bg-opacity-50 my-2 mx-10 rounded"}>
                    <p className={"text-center p-5 bg-g font-bold text-2xl"}>Paris</p>

                </div>
                <CopyButton/>
            </div>
        </>
    )
}
