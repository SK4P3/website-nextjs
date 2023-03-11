import BlogCard from "@/components/blog-card";
import Navbar from "@/components/navbar";
import Head from "next/head";
// todo get blogs from bucket/persistent storage
import proxyman from '../../../public/blog/proxyman.jpg';
export default function Blog() {
    const articles = [
        {
            thumb: proxyman,
            title: "Using Proxyman to reverse engineer the Instagram private API",
            description: "The Instagram API traffic is encrypted using SSL/HTTPS. In this post I explain how to build a modified Instagram APK and use Proxyman and a custom certificate to intercetp the traffic sent by the app."
        }
        // ,{
        //     thumb: proxyman,
        //     title: "Creating image captions with the blip-image-captioning-large model and Docker",
        //     description: "The Instagram API traffic is encrypted using SSL/HTTPS. In this post I explain how to build a modified Instagram APK and use Proxyman and a custom certificate to intercetp the traffic sent by the app."
        // }
    ]
    return (
        <div>
            <Head>
                <title>Alex Schnabl | Blog </title>
                <meta name="description" content="My blog section where I post work related stuff once in a while. Be sure to check it out" />
                <meta name="keywords" content="alex schnabl blog, blog, alexander schnabl, software developer, alex schnabl software, alex schnabl blog" />
            </Head>
            <Navbar showDots={false}></Navbar>
            <div className="h-screen bg-neutral-900 pt-[8vh]">
                <div className="relative w-screen flex items-center jusitfy-center">
                    <div className="left-[10vw] absolute w-[80vw] h-[0.1rem] bg-white"></div>
                    <div className="asolute z-10 w-full flex justify-center">
                        <h1 className="font-medium text-white text-[4rem] bg-neutral-900 py-2 px-8">Blog</h1>
                    </div>
                </div>
                <div className="w-screen h-maxflex jusitfy-center px-[10vw] pt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
                        {
                            articles.map((article: any) =>
                                <BlogCard
                                    key={article.title}
                                    thumb={article.thumb}
                                    title={article.title}
                                    description={article.description}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}