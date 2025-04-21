import { BookText, CircleCheck } from "lucide-react";

export default function About(){

    return(
        <section className="flex py-12 px-3 flex-col lg:flex-row gap-10 lg:gap-5 lg:py-26 ">
            <div className="flex-1 relative ">
                <img src="/images/videoediting.jpg" alt="videoediting" className="rounded-2xl lg:absolute lg:-left-30 w-full lg:max-h-[450px] lg:max-w-[800px]" />
                <img src="/images/worktogether.jpg" alt="worktogether" className="hidden lg:block lg:absolute max-w-[350px] bottom-20 right-10 rounded-xl xl:top-6/12" />
            </div>
            <div className="flex-1 flex flex-col gap-4 ">
                <div className="flex items-center gap-2">
                    <span><BookText /></span>
                    <p className="font-medium">GET TO KNOW ABOUT US</p>
                </div>
                    <div>
                    <h2 className="text-3xl fnot-bold lg:text-5xl">Dive into our Courses</h2>
                    <h3 className="text-3xl fnot-bold lg:text-5xl">and Ignite Your Learning!</h3>
                    </div>
                <p className="max-w-[600px]">
                At our institute, we specialize in turning passion into profession. Whether you're interested in Graphic Design, Animation, or Video Editing, we offer hands-on, industry-focused courses to help you master the skills you need for a successful creative career. Learn from experienced mentors, work on real-world projects, and bring your imagination to life!
                </p>
                <div className="flex items-start gap-3">
                    <span className="bg-primary p-1 rounded-full "><CircleCheck className="text-white" /></span>
                    <p>Practical courses in design, animation, and video editing</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-primary p-1 rounded-full "><CircleCheck className="text-white"  /></span>
                    <p>Training by industry professionals</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-primary p-1 rounded-full "><CircleCheck className="text-white"  /></span>
                    <p>Hands-on projects and portfolio building</p>
                </div>
                <button className="bg-primary text-white py-2 lg:w-fit px-10 ">About More</button>
            </div>
        </section>
    )
}