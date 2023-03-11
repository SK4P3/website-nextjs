import Image from 'next/image';
import proxyman from '../../../public/blog/proxyman.jpg';
export default function BlogCard(props: any) {
    return (
        <a
            href={'blog/' + props.title.toLowerCase().replaceAll(" ", "-")}
            className="w-full bg-neutral-800 rounded-md h-auto text-white p-4 flex items-center gap-4 hover:underline cursor-pointer"
        >
            <div className='w-1/5 rounded-md overflow-hidden'>
                <Image src={props.thumb} className="object-cover" alt='Blog Article Logo' />
            </div>
            <div className='flex flex-col justify-start items-start gap-4 h-full w-4/5'>
                <h2 className="text-xl sm:text-2xl font-bold h-2/5">{props.title}</h2>
                <p className='text-sm font-medium h-3/5 hidden sm:block'>{props.description}</p>
            </div>
        </a>
    )
}