import { Clock, Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Header (){
    return(
        <header className="flex justify-center items-center bg-title text-smoke">
            <div className="wrapper w-full max-w-[1400px] py-3 lg:py-5 px-3">
                <div className="flex justify-center lg:justify-between">
                    <section className="flex gap-5">
                            <div className="flex items-center gap-5">
                                <Phone />
                                <span>+91 7217 396015</span>
                            </div>
                            <div className="hidden md:flex md:items-center md:gap-5">
                                <Mail />
                                <span>info@thepixelanimation.com</span>
                            </div>
                            <div className="hidden md:flex md:items-center md:gap-5">
                                <Clock />
                                <span>Mon-Sat 8:00 - 6:00 </span>
                            </div>
                    </section>
                    <section className="hidden lg:flex lg:gap-5">
                        <span>Follow Us</span>
                        <Facebook className=" cursor-pointer"/>
                        <Instagram className=" cursor-pointer"/>
                        <Youtube className=" cursor-pointer"/>
                    </section>
                </div>
            </div>
        </header>
    )
}