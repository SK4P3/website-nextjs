export default function SlideButton(props: any) {
    return (
        <a className="flex flex-col -space-y-16 w-[15rem] h-16 overflow-hidden cursor-pointer" href={props.href}>
            <div className="hovereffect flex w-[30rem]">
                <div className="bg-neutral-900 border-2 border-white w-[30rem] h-15"></div>
                <div className="bg-white w-[30rem] h-16"></div>
            </div>
            <div className="flex items-center justify-center w-[15rem] h-16 select-none pointer-events-none">
                <b className="text-white mix-blend-difference text-lg font-bold">{props.text}</b>
            </div>
        </a>
    )
}