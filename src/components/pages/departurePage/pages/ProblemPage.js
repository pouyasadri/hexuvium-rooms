import {PortableText} from "@portabletext/react";

export default function ProblemPage({isProblem, problem,text}) {
    return (
        <div className={isProblem === false ? "hidden" : ""}>
            <div className={"justify-center items-center p-3 gap-5 mt-4 bg-blue-300 bg-opacity-40 rounded"}>
                <img width="64" className={"my-0 mx-auto"} height="64" src="https://img.icons8.com/dusk/64/error.png"
                     alt="error"/>
                <p className={"text-center text-neutral-600"}>{problem}</p>
            </div>
            <p className={"my-5 text-xl font-light"}>Information:</p>
            <div
                className={"rounded-xl bg-white shadow-inner p-4 mb-5"}>
                <div className={"text-center p-5"}>
                    <PortableText  value={text}/>
                </div>
            </div>
        </div>
    )
}
