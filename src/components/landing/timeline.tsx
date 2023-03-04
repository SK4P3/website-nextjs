import { useState } from "react";

export default function LandingTimeline() {

    const [age, setAge] = useState('');

    setInterval(() => {
        let ms = +new Date() - +new Date(2002, 9, 23);
        setAge(`${Math.floor(ms / 1000)}`);
    }, 1000);

    return (
        <section className="relative h-screen w-screen bg-neutral-900 z-20">
            <div className="absolute top-48 sm:top-64 left-5 sm:left-[10vw]">
                <div className="relative h-[88vh]">
                    <div className="timelinebar"></div>

                    <div className="timelinedate top-[00%]">2018 - 2019</div>
                    <div className="timelinedot top-[00%]"></div>
                    <div className="timelinetext top-[00%]">
                        <h2 className="absolute text-neutral-900 pointer-events-none -z-10">Alex Schnabl did an exchange year in San Diego, California</h2>
                        Exchange Year in <br /> San Diego, California
                    </div>

                    <div className="timelinedate top-[30%]">2019 - 2021</div>
                    <div className="timelinedot top-[30%]"></div>
                    <div className="timelinetext top-[30%]">
                        <h2 className="absolute text-neutral-900 pointer-events-none -z-10">Alexander Schnabl started univeristy at the age of 16.</h2>
                        Started college at 16 <br /> Graduated high school
                    </div>

                    <div className="timelinedate top-[60%]">2019 - 2023</div>
                    <div className="timelinedot top-[60%]"></div>
                    <div className="timelinetext top-[60%]">
                        <h2 className="absolute text-neutral-900 pointer-events-none -z-10">Alexander Schnabl went to the universities AAU and ETHZ.</h2>
                        Bachelor in CS / Economics <br /> at AAU / ETHZ
                    </div>

                    <div className="timelinedate top-[100%]">2022 - now</div>
                    <div className="timelinedot top-[100%]"></div>
                    <div className="absolute -mt-6 w-[80vw] left-8 h-16 flex flex-col sm:flex-row items-center justify-center font-bold text-2xl text-white text-center top-[100%]">
                        <div className="relative w-screen flex items-center jusitfy-center">
                            <div className="hidden sm:block left-[10vw] absolute w-[60vw] h-[0.1rem] bg-white"></div>
                            <div className="asolute z-10 w-full flex justify-center">
                                <h2 className="absolute text-transparent pointer-events-none -z-10">Alex Schnabls Projects</h2>
                                <h3 className="font-medium text-white text-[3rem] bg-neutral-900 py-2 px-8">My Projects</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block ">
                <div className="absolute top-0 right-0 w-screen h-screen grid grid-cols-3">
                    <div></div>
                    <div className="flex flex-col justify-center w-full col-span-2 font-medium">
                        <div className="agetext">i'm currently</div>
                        <div className="agetext">{age} Seconds</div>
                        <div className="agetext">old</div>
                    </div>
                </div>
            </div>
        </section>
    )
}