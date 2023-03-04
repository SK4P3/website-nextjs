function Imprint() {
    return (
        <div className="h-screen w-screen bg-neutral-900 relative flex flex-col items-center justify-center">
            <a className="absolute top-8 left-8 font-medium text-white text-lg" href="/">back</a>
            <div className="bg-white/90 text-neutral-900 text-lg font-medium p-4">
                Alexander Schnabl<br />
                Latschach 29<br />
                9064 Magdalensberg<br />
                Mail: <a href="mailto:alexander.schnabl@ss-technologies.at"
                    className="hover:underline">alexander.schnabl@ss-technologies.at</a> <br />
            </div>
            <span className="text-neutral-900 select-none pointer-events-none">cookie 3: ctrl + u ? hehe</span>
        </div>
    )
}

export default Imprint