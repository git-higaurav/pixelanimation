"use client"
import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Landing() {
    return(
        <main className="w-full" id="home">
            <div className="background relative bg-[url('/images/background.png')] bg-no-repeat bg-cover h-fit relative flex justify-center items-center">
                <div className="wrapper max-w-[1440px] w-full">
                    <div className="w-full flex flex-col md:flex-row px-3 h-auto lg:h-[750px] overflow-hidden">
                        <section className="flex-1 flex">
                            <div className="py-16 w-fit flex flex-col gap-5 lg:gap-7 lg:py-36">
                                <div className="flex items-center">
                                    <div className="w-7 bg-secondary h-0.5"></div>
                                    <div className="w-[10px] h-[10px] bg-secondary rotate-45"></div>
                                    <span className="ml-3">CREATIVE DESIGN INSTITUTE</span>
                                </div>
                                
                                <h1 className="font-bold text-6xl lg:text-7xl text-primary">
                                    Master Creative Design
                                </h1>
                                <h3 className="text-xl lg:text-5xl">
                                    Hands-on Training in Modern Design Tools
                                </h3>
                                
                                <div className="flex flex-col gap-5 lg:gap-10">
                                    <div className="flex flex-col gap-5 lg:text-[18px] lg:flex-row">
                                        <section className="flex gap-3">
                                            <CircleArrowOutUpRight className="text-primary" />
                                            Industry Expert Mentors
                                        </section>
                                        <section className="flex gap-3">
                                            <CircleArrowOutUpRight className="text-primary"/>
                                            Real-world Projects
                                        </section>
                                        <section className="flex gap-3">
                                            <CircleArrowOutUpRight className="text-primary" />
                                            Placement Support
                                        </section>
                                    </div>
                                    
                                    <section className="flex gap-3">
                                        <Link href="#courses">
                                            <button className="bg-primary text-white py-2 px-6 lg:py-4 lg:px-12 cursor-pointer hover:bg-primary/90 transition-colors">
                                                View Courses
                                            </button>
                                        </Link>
                                        <Link href="/coming-soon">
                                            <button className="border-2 border-primary text-primary py-2 px-6 lg:py-4 lg:px-12 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                               Download Certificate
                                            </button>
                                        </Link>
                                    </section>
                                </div>
                            </div>
                        </section>
                        
                        <section className="flex-1 overflow-hidden">
                            <img 
                                src="/images/frontface.png" 
                                alt="Design Studio" 
                                className="w-full h-full object-contain rounded-lg sha-xl md:mt-16"
                            />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}