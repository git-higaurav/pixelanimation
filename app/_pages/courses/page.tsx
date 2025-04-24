import { ArrowRight, Brush, Film, Video } from "lucide-react";
import Link from "next/link";

export default function Courses() {
    const courses = [
        {
            icon: <Brush className="w-12 h-12 text-primary" />,
            title: "Graphic Design",
            description: "Master the art of visual communication with industry-standard tools like Adobe Photoshop, Illustrator, and InDesign.",
            duration: "4 Months",
            projects: "10+ Projects",
            skills: ["Logo Design", "Brand Identity", "Print Design", "Digital Art"],
            link: "/courses/graphic-design",
            image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&auto=format&fit=crop&q=60"
        },
        {
            icon: <Film className="w-12 h-12 text-primary" />,
            title: "Motion Graphics & 2D Animation",
            description: "Create stunning motion graphics and animations using Adobe After Effects, Cinema 4D, and other professional tools.",
            duration: "6 + 6 Months",
            projects: "12+ Projects",
            skills: ["2D Animation", "Motion Graphics","Animaiton", "Visual Effects"],
            link: "/courses/motion-design",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60"
        },
        {
            icon: <Video className="w-12 h-12 text-primary" />,
            title: "Video Editing",
            description: "Learn professional video editing techniques using Adobe Premiere Pro, DaVinci Resolve, and other industry tools.",
            duration: "3 Months",
            projects: "8+ Projects",
            skills: ["Video Editing", "Color Grading", "Sound Design", "Post Production"],
            link: "/courses/video-editing",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=60"
        },
  
    ];

    return (
        <section className=" relative" id="courses">
            <div 
                className="bg-[url('/images/course-bg.png')] bg-cover bg-center bg-no-repeat py-20 ">
            <div className="wrapper max-w-[1400px] mx-auto px-3 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our specialized courses designed to make you industry-ready
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group h-full flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={course.image} 
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    {course.icon}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-6 flex-1">{course.description}</p>
                                
                                <div className="flex gap-4 mb-6">
                                    <div className="bg-gray-50 px-4 py-2 rounded-full">
                                        <span className="text-sm font-medium">{course.duration}</span>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-2 rounded-full">
                                        <span className="text-sm font-medium">{course.projects}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2">Skills You'll Learn:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {course.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a 
                                    href={`https://wa.me/918077331575?text=Hi%20Pixel%20Animation%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.%20Please%20provide%20more%20information.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto "
                                >
                                    <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                        Learn More
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}