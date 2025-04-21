import { CircleArrowOutUpRight } from "lucide-react";

export default function Landing(){
    return(
        <main className="w-full ">
            
            <div className="background relative  bg-[url('/images/background.png')] bg-no-repeat bg-cover h-fit relative flex justify-center items-center">
            <div className="wrapper max-w-[1440px] w-full">
            {/* background assets */}
            {/* <img src="/images/curly shape.png" alt="shape-1" className="absolute top-0 left-1/3 w-36" />
            <img src="/images/spider.png" alt="spider-shape" className="absolute top-1/12 w-6" />
            <img src="/images/vector.png" alt="vector" className="absolute right-0 top-0 w-26" />
            <img src="/images/dotted-shape.png" alt="dotted-shape" className="absolute top-0 -right-10 w-28" /> */}
                <div className="w-full  flex flex-col md:flex-row px-3 h-auto lg:h-[750px] overflow-hidden">
                    <section className="flex-1  flex">
                        <div className={` py-16 w-fit flex flex-col gap-5 lg:gap-7 lg:py-36`}>
                            {/* arrow sign */}
                            <div className="flex items-center">
                                <div className="w-7 bg-secondary h-0.5"></div>
                                <div className="w-[10px] h-[10px] bg-secondary rotate-45"></div>
                                <span className="ml-3">ONLINE E-LEARNING COURSE</span>
                            </div>
                            
                            <h1 className="font-bold text-6xl lg:text-7xl text-primary">Online Education</h1>
                            <h3 className="text-xl lg:text-5xl">Feels Like Real Classroom</h3>
                            <div className="flex flex-col gap-5 lg:gap-10 ">
                                    <div className="flex flex-col gap-5 lg:text-[18px] lg:flex-row">
                                        <section className="flex gap-3">
                                            <CircleArrowOutUpRight className="text-primary" />
                                            Get Certified
                                        </section>
                                        <section className="flex gap-3" >
                                            <CircleArrowOutUpRight className="text-primary"/>
                                            Gain Job-ready Skills
                                        </section>
                                        <section className="flex gap-3">
                                            <CircleArrowOutUpRight className="text-primary" />
                                            Great Life
                                        </section>
                                    </div>
                                    <section className="flex gap-3 ">
                                    <button className="bg-primary md:flex text-white py-2 px-6 lg:py-4 lg:px-12  cursor-pointer  ">GET STARTED</button>
                                    <button className="bg-primary md:flex text-white py-2 px-6 lg:py-4 lg:px-12 cursor-pointer ">OUR COURSES</button>
                                    </section>
                            </div>
                        </div>
                    </section>
                    <section className="flex-1 overflow-hidden ">
                        <img src="/images/frontface.png" alt="frontface" className="w-full h-full object-contain md:mt-16 "/>
                    </section>
                </div>
            </div>
            </div>
        </main>
    )
}