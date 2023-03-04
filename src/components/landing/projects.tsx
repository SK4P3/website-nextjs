import Image, { StaticImageData } from 'next/image';
import karl from '../../../public/projects/karl.jpg';
import pewny from '../../../public/projects/pewny.jpg';
import rechnung from '../../../public/projects/rechnung.jpg';
import schuster from '../../../public/projects/schuster.jpg';
import sus from '../../../public/projects/sus.jpg';

import React from 'react';

interface ProjectNode {
    prev: ProjectNode | undefined;
    src: StaticImageData;
    href: string;
    next: ProjectNode | undefined;
}

type ProjectProps = {};
type ProjectState = { currentProject: ProjectNode };

export default class LandingProjects extends React.Component<ProjectProps, ProjectState> {

    projectNode1: ProjectNode = { prev: undefined, src: karl, href: "https://www.karlschnabl.at/", next: undefined };
    projectNode2: ProjectNode = { prev: undefined, src: pewny, href: "https://www.claudia-pewny.at/", next: undefined };
    projectNode3: ProjectNode = { prev: undefined, src: schuster, href: "https://www.drschuster.at/", next: undefined };
    projectNode4: ProjectNode = { prev: undefined, src: rechnung, href: "https://www.rechnung-schreiben.com/", next: undefined };
    projectNode5: ProjectNode = { prev: undefined, src: sus, href: "https://www.ss-technologies.at/", next: undefined };
    projects!: ProjectNode[];

    constructProjectList() {
        this.projects = [this.projectNode1, this.projectNode2, this.projectNode3, this.projectNode4, this.projectNode5];

        this.projectNode1.prev = this.projectNode5;
        this.projectNode1.next = this.projectNode2;

        this.projectNode2.prev = this.projectNode1;
        this.projectNode2.next = this.projectNode3;

        this.projectNode3.prev = this.projectNode2;
        this.projectNode3.next = this.projectNode4;

        this.projectNode4.prev = this.projectNode3;
        this.projectNode4.next = this.projectNode5;

        this.projectNode5.prev = this.projectNode4;
        this.projectNode5.next = this.projectNode1;
    }

    constructor(props: any) {
        super(props);
        this.constructProjectList();
        this.state = {
            currentProject: this.projectNode1,
        };

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    moveRight() {
        let gallery = document.getElementById("gallery")!;
        let galleryBg = document.getElementById("galleryBg")!;

        gallery.style.transform = "translateX(-60vw)";
        gallery.style.transition = "all 2s";
        galleryBg.style.transform = "translateX(-100vw)";
        galleryBg.style.transition = "all 2s";

        setTimeout(() => {
            this.setState({ currentProject: this.state.currentProject.next! })
            gallery.style.transform = "translateX(0)";
            gallery.style.transition = "all 0s";
            galleryBg.style.transform = "translateX(0)";
            galleryBg.style.transition = "all 0s";
        }, 2000);
    }

    moveLeft() {
        let gallery = document.getElementById("gallery")!;
        let galleryBg = document.getElementById("galleryBg")!;

        gallery.style.transform = "translateX(60vw)";
        gallery.style.transition = "all 2s";
        galleryBg.style.transform = "translateX(100vw)";
        galleryBg.style.transition = "all 2s";

        setTimeout(() => {
            this.setState({ currentProject: this.state.currentProject.prev! })
            gallery.style.transform = "translateX(0)";
            gallery.style.transition = "all 0s";
            galleryBg.style.transform = "translateX(0)";
            galleryBg.style.transition = "all 0s";
        }, 2000);

    }

    render() {
        return (
            <section className="relative h-screen w-screen bg-neutral-900" >

                <div className="hidden sm:block">
                    <div id="galleryBg" className="absolute top-0 -left-[100vw] flex w-[300vw] h-screen overflow-hidden">
                        <div className="w-screen h-screen">
                            <Image src={this.state.currentProject.prev!.src} alt="" className="w-full h-full blur-sm brightness-50" />
                        </div>
                        <div className="w-screen h-screen">
                            <Image src={this.state.currentProject.src} alt="" className="w-full h-full blur-sm brightness-50" />
                        </div>
                        <div className="w-screen h-screen">
                            <Image src={this.state.currentProject.next!.src} alt="" className="w-full h-full blur-sm brightness-50" />
                        </div>
                    </div>

                    <div className="absolute top-[20vh] w-screen h-[75vh] flex items-center justify-center ">
                        <div id="gallery" className="flex w-[290vw] h-[28vw] gap-[10vw]">

                            <div className="w-[50vw] h-11/12">
                                <Image src={this.state.currentProject.prev!.prev!.src} alt="" className="object-cover w-full h-full brightness-50 hover:brightness-100 transition duration-300 ease-in-out" />
                            </div>

                            <div className="w-[50vw] h-11/12" onClick={this.moveLeft}>
                                <Image src={this.state.currentProject.prev!.src} alt="" className="object-cover w-full h-full brightness-50 hover:brightness-100 transition duration-300 ease-in-out" />
                            </div>

                            <a className="w-[50vw] h-11/12" href={this.state.currentProject.href} target="_blank">
                                <Image src={this.state.currentProject.src} alt="" className="object-cover w-full h-full" />
                            </a>

                            <div className="w-[50vw] h-11/12" onClick={this.moveRight}>
                                <Image src={this.state.currentProject.next!.src} alt="" className="object-cover w-full h-full brightness-50 hover:brightness-100 transition duration-300 ease-in-out" />
                            </div>

                            <div className="w-[50vw] h-11/12">
                                <Image src={this.state.currentProject.next!.next!.src} alt="" className="object-cover w-full h-full brightness-50 hover:brightness-100 transition duration-300 ease-in-out" />
                            </div>
                        </div>
                    </div>
                </div >
                <div className="block sm:hidden">
                    <div className="absolute top-[27vh] w-screen h-[70vh] grid grid-rows-5 gap-4 justify-items-center">
                        {
                            this.projects.map(_ => {
                                return (
                                    <a className="w-[90vw] h-full rounded-md overflow-hidden imagecard" key={_.href}
                                        href={_.href} target="_blank">
                                        <Image src={_.src} alt="Current Project" className="w-full h-full object-cover" />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </section >

        )
    }
}