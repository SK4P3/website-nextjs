import Navbar from "@/components/navbar";

export default function Blog() {
    return (
        <div>
            <Navbar showDots={false}></Navbar>
            <div className="h-screen bg-neutral-900 pt-[8vh]">
                <div className="relative w-screen flex items-center jusitfy-center">
                    <div className="left-[10vw] absolute w-[80vw] h-[0.1rem] bg-white"></div>
                    <div className="asolute z-10 w-full flex justify-center">
                        <h1 className="font-medium text-white text-[4rem] bg-neutral-900 py-2 px-8">Blog</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}