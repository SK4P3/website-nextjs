import Footer from "@/components/footer"
import LandingContact from "@/components/landing/contact"
import LandingHeader from "@/components/landing/header"
import LandingTimeline from "@/components/landing/timeline"
import Navbar from "@/components/navbar"
export default function Home() {
  return (
    <div className="parent relative">
      <Navbar showDots={true}></Navbar>
      <div className="h-screen bg-neutral-900">
        <a id="home"></a>
        <LandingHeader />
        <a id="about"></a>
        <LandingTimeline />
        <a id="projects"></a>
        <a id="contact"></a>
        <LandingContact />
        <Footer />
      </div>
    </div>
  )
}