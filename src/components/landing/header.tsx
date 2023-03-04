import alex from '../../../public/alex.png';
import cookie2 from '../../../public/cookie2.jpg';
import Image from 'next/image';

export default function LandingHeader() {
    return (
        <div>
            <section className="relative h-screen w-screen bg-neutral-900">
                <Image src={alex} className="absolute right-0 h-screen object-cover brightness-50 sm:brightness-100" alt='A images showing alex schnabl' />
                <div className="absolute top-0 left-0 h-screen w-screen flex flex-col justify-center">
                    <div className="flex flex-col gap-6 pl-10 sm:pl-20  text-white">
                        <h1 className="absolute text-neutral-900 text-3xl -z-10 -mb-6 font-semibold uppercase">Hello i am Alex Schnabl. Welcome to my personal website!</h1>
                        <h3 className="text-3xl -mb-6 font-semibold uppercase">Hello i am Alex</h3>
                        <h2 className="text-[3rem] font-bold uppercase">I'm a software developer</h2>
                        <div className="-mt-4 w-full font-medium">
                            <h3 className="">Here you can find my projects and general information about me! I've hidden 3 cookies </h3>
                            <p>on the website, maybe you can find them :)</p>
                        </div>
                        <div className="mt-12 flex flex-col items-center -ml-10 sm:ml-0 sm:flex-row gap-8 uppercase">
                            {/* <app-slide-button text="my work" href="#projects"></app-slide-button> */}
                            {/* <app-slide-button text="get in touch" href="#contact"></app-slide-button> */}
                        </div>
                    </div>
                </div>
                <Image src={cookie2} className="absolute top-0 left-0 h-0 w-0" alt='what could it be? the cookie monster would certainly like it!' />
            </section>
        </div>
    )
}