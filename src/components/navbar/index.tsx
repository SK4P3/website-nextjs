export default function Navbar(props: any) {
    return (
        <div>
            <div
                className="fixed top-0 left-0 flex items-center justify-center sm:justify-between w-screen h-[8vh] px-20 z-50 text-white bg-neutral-900/60">
                <a href="/" className="hidden sm:block font-bold text-3xl">AS</a>
                <div className="flex gap-8 font-semibold">
                    <a href="/#home">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#contact">Contact</a>
                    <a href="/blog">Blog</a>
                </div>
            </div>
            {props.showDots ?
                <div className="hidden sm:block">
                    <div className="fixed right-8 h-screen flex items-center text-[4rem] z-50">
                        <div className="flex flex-col gap-4 justify-center items-center w-4 my-8">
                            <a className="dotActive" href="#home"></a>
                            <a className="dot" href="#about"></a>
                            <a className="dot" href="#projects"></a>
                            <a className="dot" href="#contact"></a>
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    )
}