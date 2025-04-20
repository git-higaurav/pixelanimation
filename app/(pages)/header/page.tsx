import { AlignRight, Clock, Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";
export default function Header (){
    return(
        <header className="flex justify-center items-center bg-title text-smoke flex-col">
            <div className="wrapper w-full max-w-[1400px] py-2  px-3">
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
            <div className="flex justify-center items-center w-full bg-smoke text-title py-5 px-3">
                <div className="wrapper w-full max-w-[1400px] flex justify-between items-center">
                    <section className="flex items-center gap-5">
                        <img src="/logo/logo.png" alt="logo" className="max-w-[50px]" />
                        <h1 className="text-title font-bold text-xl">Pixel Animation</h1>
                        <div className="hidden md:flex md:items-center md:gap-5 ">
                        <Link href={"#"}>Home</Link>
                        <Link href={"#"}>Courses</Link>
                        <Link href={"#"}>About Us</Link>
                        <Link href={"#"}>Contact</Link>
                        </div>
                    </section>
                    <section>
                        <button className="bg-primary md:flex text-white py-3 px-8 hidden cursor-pointer ">Apply Now</button>
                        <AlignRight className="md:hidden" size={40}  />
                    </section>
                </div>
            </div>
        </header>
    )
}