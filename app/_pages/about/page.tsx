import { BookText, CircleCheck } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-white" id="about">
            <div className="wrapper max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Images Section */}
                    <div className="flex-1 relative">
                        <div className="relative">
                            <img 
                                src="/images/videoediting.jpg" 
                                alt="Video Editing Studio" 
                                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                                <img 
                                    src="/images/worktogether.jpg" 
                                    alt="Team Collaboration" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <BookText className="w-5 h-5 text-primary" />
                            </div>
                            <p className="font-medium text-primary">GET TO KNOW ABOUT US</p>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="block">Dive into our Courses</span>
                            <span className="block text-primary">and Ignite Your Learning!</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At our institute, we specialize in turning passion into profession. Whether you're interested in Graphic Design, Animation, or Video Editing, we offer hands-on, industry-focused courses to help you master the skills you need for a successful creative career. Learn from experienced mentors, work on real-world projects, and bring your imagination to life!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CircleCheck className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-lg text-gray-700">Practical courses in design, animation, and video editing</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CircleCheck className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-lg text-gray-700">Industry-expert mentors with years of experience</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CircleCheck className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-lg text-gray-700">Real-world projects and portfolio development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}