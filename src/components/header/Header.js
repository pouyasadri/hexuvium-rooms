export default function Header({city}) {
    return (
        <div className="text-center">
            <h1 className="text-white font-bold text-2xl">Welcome to {city.toUpperCase()} </h1>
            <p className="text-yellow-400 animate-pulse text-n">The city of lights</p>
        </div>
    )
}
