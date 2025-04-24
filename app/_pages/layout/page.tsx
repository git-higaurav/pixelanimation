import About from "../about/page";
import Contact from "../contact/page";
import Courses from "../courses/page";
import Features from "../features/page";
import FloatingButtons from "../floating-buttons/page";
import Footer from "../footer/page";
import Header from "../header/page";
import Landing from "../landing/page";
import Mentors from "../mentors/page";
import Newsletter from "../newsletter/page";
import SuccessStories from "../success-stories/page";

export default function Layout(){
    return(
        <>
            <Header/>
            <Landing/>
            <Features/>
            <About/>
            <Courses/>
            <Mentors/>
            <SuccessStories/>
            <Newsletter/>
            <Contact/>
            <FloatingButtons/>
            <Footer/>
        </>
    )
}