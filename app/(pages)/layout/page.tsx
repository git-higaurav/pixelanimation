import About from "../about/page";
import Courses from "../courses/page";
import Features from "../features/page";
import Header from "../header/page";
import Landing from "../landing/page";

export default function Layout(){
    return(
        <>
            <Header/>
            <Landing/>
            <Features/>
            <About/>
            <Courses/>
        </>
    )
}