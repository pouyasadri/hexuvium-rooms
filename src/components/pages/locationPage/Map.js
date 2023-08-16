export default function Map({find}) {
    return (
        <>
            <p className={"text-neutral-700 font-semibold max-md:mb-2.5 mb-5"}>{find}</p>
            <div
                className={"rounded-xl bg-white shadow-inner max-md:p-2 max-md:mb-2.5 p-4 mb-5"}>
                <div className={"bg-neutral-200 bg-opacity-50 max-md:my-1 max-md:mx-5 my-2 mx-10 rounded h-[100%]"}>
                    <div className="relative w-full h-full">
                        <iframe className={"absolute top-0 left-0 w-full h-full"}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.6551360588533!2d7.7781031999999986!3d48.5781536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8e1ec0edf03%3A0x20536f581f9ccc89!2s7%20Rue%20d&#39;Upsal%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1692034968879!5m2!1sfr!2sfr"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </>
    )
}
