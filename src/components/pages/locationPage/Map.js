import Hls from "hls.js";
import {useEffect, useRef, useState} from "react";
import {useParams} from "next/navigation";

export default function Map({find,playbackId}) {
    const params = useParams()

    const reservationNumber = params.reservationNumber;


    const videoRef = useRef(null);
    const videoSrc = `https://stream.mux.com/${playbackId}.m3u8`;
    useEffect(() => {
        const video = videoRef.current;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
        }
    }, []);
    return (
        <>
            <p className={"text-neutral-700 font-semibold max-md:mb-2.5 mb-5"}>{find}</p>

            <div
                className={"rounded-xl bg-white shadow-inner max-md:p-2 max-md:mb-2.5 p-4 mb-5"}>
                <div className={"bg-neutral-200 bg-opacity-50 max-md:my-1 max-md:mx-5 my-2 mx-10 rounded h-[100%]"}>
                    <div className="relative w-full h-full">
                        <video className={"mx-auto my-0"} autoPlay controls ref={videoRef}
                               style={{height: 300}}></video>
                    </div>

                </div>
            </div>
        </>
    )
}
