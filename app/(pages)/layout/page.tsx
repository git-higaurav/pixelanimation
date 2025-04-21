import Features from "../features/page";
import Header from "../header/page";
import Landing from "../landing/page";

export default function Layout(){
    return(
        <>
            <Header/>
            <Landing/>
            <Features/>
        </>
    )
}