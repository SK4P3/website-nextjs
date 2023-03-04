import Footer from "@/components/footer"
import React from 'react';

import LandingContact from "@/components/landing/contact"
import LandingHeader from "@/components/landing/header"
import LandingProjects from "@/components/landing/projects"
import LandingTimeline from "@/components/landing/timeline"
import Navbar from "@/components/navbar"

type ProjectProps = {};
type ProjectState = {};

export default class Home extends React.Component<ProjectProps, ProjectState> {

  constructor(props: any) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
  }

  onScroll() {
    let y = document!.getElementById('box')!.scrollTop;
    console.log(y);

    if (y < 800) {
      this.setActivePage(0);
    } else if (800 < y && y < 1600) {
      this.setActivePage(1);
    } else if (1600 < y && y < 2400) {
      this.setActivePage(2);
    } else if (y > 2400) {
      this.setActivePage(3);
    }
  }

  public setActivePage(n: number) {
    let dot1 = document!.getElementById('dot1')
    let dot2 = document!.getElementById('dot2')
    let dot3 = document!.getElementById('dot3')
    let dot4 = document!.getElementById('dot4')
    let dots = [dot1, dot2, dot3, dot4]

    dots.forEach(dot => {
      dot!.className = "dot";
    });

    dots[n]!.className = "dotActive";
  }

  render() {
    return (
      <div id="box" className="parent relative" onScroll={this.onScroll}>
        <Navbar showDots={true}></Navbar>
        <div className="h-screen bg-neutral-900">
          <a id="home"></a>
          <LandingHeader />
          <a id="about"></a>
          <LandingTimeline />
          <a id="projects"></a>
          <LandingProjects />
          <a id="contact"></a>
          <LandingContact />
          <Footer />
        </div>
      </div>
    )
  }
}