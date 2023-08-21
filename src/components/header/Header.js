export default function Header({city,slug}) {
    return (
        <div className="text-center">
            <h1 className="text-white font-bold text-2xl">Welcome to {city} </h1>
            <p className="text-yellow-400 animate-pulse text-n">{slug}</p>
        </div>
    )
}
